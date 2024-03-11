<script lang="ts">
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
	}[] = [];
</script>

<table>
	<thead>
		<tr>
			<th>Full name</th>
			<th>Vessel name</th>
			<th>Nationality</th>
			<th>Date Of Birth</th>
			<th>Primary Email</th>
			<th>Primary Mobile</th>
			<th>Primary Status</th>
			<th>Status Description</th>
			<th>Source</th>
			<th>Employee ID</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data as item}
			<tr>
				<td>{item.fullName}</td>
				<td>{item.vesselName}</td>
				<td>{item.nationality}</td>
				<td>{item.dateOfBirth}</td>
				<td>{item.primaryEmail}</td>
				<td>{item.primaryMobile}</td>
				<td>{item.primaryStatus}</td>
				<td>{item.statusDescription}</td>
				<td>{item.source}</td>
				<td>{item.employeeID}</td>
				<td><a href={'edit/' + item.id}>Edit</a></td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		margin: 20px auto;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		overflow: hidden;
	}

	th,
	td {
		padding: 15px;
		text-align: left;
	}

	th {
		background-color: #3498db;
		color: #fff;
		font-weight: bold;
	}

	td {
		border-bottom: 1px solid #f2f2f2;
	}

	tr:hover {
		background-color: #f5f5f5;
	}
</style>
