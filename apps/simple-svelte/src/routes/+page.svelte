<script>
  import List from '$lib/components/list.svelte';
  export let data;
  console.log('data: ', data );
</script>

<h1>Welcome to Simple Svelte</h1>

<List data={data.data}/>