<script lang="ts">
	import { goto } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data: {
		id: number;
		fullName: string;
		vesselName: string;
		nationality: string;
		dateOfBirth: string;
		primaryEmail: string;
		primaryMobile: string;
		primaryStatus: string;
		statusDescription: string;
		source: string;
		employeeID: string;
	};

	function handleSubmit() {
		// Handle form submission here
		console.log('Form submitted');
		console.log('data:', data);
	}

	function goBack() {
		history.back();
	}
</script>

<form on:submit={handleSubmit}>
	<div class="container">
		<div>
			<label for="fullName">Full Name:</label>
			<input type="text" id="fullName" bind:value={data.fullName} />
		</div>
		<div>
			<label for="primaryEmail">Primary Email:</label>
			<input type="email" id="primaryEmail" bind:value={data.primaryEmail} />
		</div>
		<div>
			<label for="primaryMobile">Primary Mobile:</label>
			<input type="tel" id="primaryMobile" bind:value={data.primaryMobile} />
		</div>
		<div>
			<label for="dateOfBirth">Date Of Birth:</label>
			<input type="tel" id="dateOfBirth" bind:value={data.dateOfBirth} />
		</div>
		<div>
			<label for="vesselName">Vessel Name:</label>
			<input type="tel" id="vesselName" bind:value={data.vesselName} />
		</div>
		<div>
			<label for="source">Source:</label>
			<input type="tel" id="source" bind:value={data.source} />
		</div>
		<div>
			<label for="primaryStatus">Primary Status:</label>
			<input type="tel" id="primaryStatus" bind:value={data.primaryStatus} />
		</div>
		<div>
			<label for="statusDescription">Status Description:</label>
			<input type="tel" id="statusDescription" bind:value={data.statusDescription} />
		</div>
	</div>
	<div class="button-container">
		<button on:click={goBack}>Back</button>
		<button type="submit">Submit</button>
	</div>

</form>

<style>
	.container {
		width: 100%;
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(4, 1fr);
	}

	label {
		font-size: 16px;
		color: #555;
	}

	input {
		width: 100%;
		padding: 10px;
		margin-bottom: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
	}

	button {
		padding: 12px 20px;
		background-color: #3498db;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 18px;
	}

	button:hover {
		background-color: #267bb7;
	}

	.button-container {
		display: flex;
		justify-content: space-between;
		grid-gap: 10px;
	}
</style>
