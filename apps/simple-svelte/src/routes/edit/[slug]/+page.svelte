<script>
	import Form from '$lib/components/form.svelte';
  import { seafarerList } from '$stores/stores.js';

	/** @type {import('./$types').PageData} */
	export let data;
  let seafarer;
	seafarerList.subscribe(_s => seafarer = _s.filter((item) => item.id.toString() === data.slug)[0])

</script>

<h1>Edit Seafarer: {seafarer.employeeID}</h1>

<Form formData={seafarer} />
