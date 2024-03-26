<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { useForm } from 'svelte-use-form';
	const form = useForm();
	let user = { loggedIn: false };

	// Common
	const client_id = '6ies508cg5gv8opi71n24fktd3';
	const redirect_uri = 'http://localhost:4173';
	let code_verifier = '';
	let code_challenge = '';

	// Auth
	const authUrl = 'https://yuen-match-sso.auth.eu-west-2.amazoncognito.com/oauth2/authorize';
	const code_challenge_method = 'S256';
	const scope = 'openid';
	const response_mode = 'form_post';
	const state = 'jm4dn9mja8c';
	const nonce = '5wy9c6a6ybe';

	// Token
	const tokenUrl = 'https://yuen-match-sso.auth.eu-west-2.amazoncognito.com/oauth2/token';
	const grant_type = 'authorization_code';
	let accessToken = '';

	onMount(async () => {
		console.log('Initialize application...');

		console.log('Generating code verifier...');
		code_verifier = generateCodeVerifier();
		console.log('Code verifier:', code_verifier);

		console.log('Encrypting code challenge using SHA-256..');
    const hashed = await sha256(code_verifier);
    code_challenge = base64urlEncode(hashed);
		console.log('Code challenge:', code_challenge);

		const authCode = $page.url.searchParams.get('code');
		const token = $page.url.searchParams.get('token');
		if (!!token) {
			console.log('Received authorization token:', token);
		} else if (!!authCode) {
			console.log('Received authorization code:', authCode);

			console.log('Requesting token using the authorization code...');

			try {
				const details = {
					client_id: client_id,
					grant_type: grant_type,
					redirect_uri: redirect_uri,
					code_verifier: code_verifier,
					code: authCode
				};

				var formBody = [];
				for (var property in details) {
					var encodedKey = encodeURIComponent(property);
					var encodedValue = encodeURIComponent(details[property]);
					formBody.push(encodedKey + '=' + encodedValue);
				}
				formBody = formBody.join('&');

				const response = await fetch(tokenUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: formBody
				});

				const data = await response.json();
				console.log('Received access token:', data.access_token);
				if (!!data.access_token) {
					accessToken = data.access_token;
				}
			} catch (error) {
				console.error('There was a problem with the token request:', error);
			}
		} else {
			console.log('Missing authorization code');
		}
	});

function base64urlEncode(buffer) {
  const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    let _str = '';
    for (let i = 0; i < len; i++) {
      _str += String.fromCharCode(bytes[i]);
    }
    return btoa(_str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
  

  function decimalToHex(decimal) {
    return `0${decimal.toString(16)}`.slice(-2);
  }

  function generateCodeVerifier() {
    const array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, decimalToHex).join('');
  }

  async function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  }




  async function login() {
		try {
			const href = `${authUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&code_challenge=${code_challenge}&code_challenge_method=${code_challenge_method}&scope=${scope}&response_mode=${response_mode}&state=${state}&nonce=${nonce}`;
			console.log('Auth URL: ', href);
			window.location.href = href;
		} catch (error) {
			console.error('There was a problem with the auth code request:', error);
		}
	}

	async function reset() {
		window.location.href = 'http://localhost:4173';
	}
</script>

{#if user.loggedIn}
	<nav>
		<a href="/">Home</a>
	</nav>

	<slot />
{/if}

{#if !user.loggedIn}
	<form use:form>
		<h1>Login Page</h1>

		{#if accessToken?.length < 1}
			<p>User is not authorized</p>
		{:else}
			<p>User has been authorized</p>
		{/if}

		<!-- <input type="email" name="email" use:validators={[required, email]} />
		<HintGroup for="email">
			<Hint on="required">This is a mandatory field</Hint>
			<Hint on="email" hideWhenRequired>Email is not valid</Hint>
		</HintGroup>

		<input type="password" name="password" use:validators={[required]} />
		<Hint for="password" on="required">This is a mandatory field</Hint> -->

		{#if accessToken?.length < 1}
			<button disabled={!$form.valid} on:click={login}>Authorize</button>
		{:else}
			<button on:click={reset}>Reset</button>
		{/if}
	</form>

	<style>
		:global(.touched:invalid) {
			border-color: red;
			outline-color: red;
		}
	</style>
{/if}
