<script>
  import List from '$lib/components/list.svelte';
  import { seafarerList } from '$stores/stores.js';
  let data;
  seafarerList.subscribe(_data => data = _data);
</script>

<h1>Seafarers</h1>

<List data={data} />
