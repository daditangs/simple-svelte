<script>
	import Form from '$lib/components/form.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Edit Seafarer: {data.seafarer.employeeID}</h1>

<Form data={data.seafarer} />
