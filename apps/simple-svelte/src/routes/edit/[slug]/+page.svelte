<script>
  export let name = '';
  export let email = '';
  export let phone = '';

  function handleSubmit() {
    // Handle form submission here
    console.log('Form submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
  }
</script>

<h1> Edit Data </h1>
<form on:submit={handleSubmit}>
  <label for="name">Name:</label>
  <input type="text" id="name" bind:value={name} />

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />

  <label for="phone">Phone:</label>
  <input type="tel" id="phone" bind:value={phone} />

  <button type="submit">Submit</button>
</form>
