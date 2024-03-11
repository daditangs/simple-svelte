<script>
  import List from '$lib/components/list.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Seafarers</h1>

<List data={data.seafarers} />
