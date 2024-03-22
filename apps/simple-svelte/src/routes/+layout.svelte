<script>
  import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
  const form = useForm();
  let user = { loggedIn: false };

  	function toggle() {
		user.loggedIn = !user.loggedIn;
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
  <h1>Login</h1>

  <input type="email" name="email" use:validators={[required, email]} />
  <HintGroup for="email">
    <Hint on="required">This is a mandatory field</Hint>
    <Hint on="email" hideWhenRequired>Email is not valid</Hint>
  </HintGroup>

  <input type="password" name="password" use:validators={[required]} />
  <Hint for="password" on="required">This is a mandatory field</Hint>

  <button disabled={!$form.valid} on:click={toggle}>Login</button>
</form>

<style>
	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
</style>

{/if}


