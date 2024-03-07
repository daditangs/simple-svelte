<script>
  import { onMount } from 'svelte';

  let data = [
    {
      name: 'Betsy',
      email: 'betsy@email.com',
      phone: '12345678',
      id: '1',
    }
  ];

  onMount(async () => {
    // Fetch data from the service
    const response = await fetch('https://api.example.com/data');
    data = await response.json();
  });
</script>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
</style>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {#each data as item}
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td href="/1">Edit</td>
      </tr>
    {/each}
  </tbody>
</table>
