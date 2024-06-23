<script>
    let count = $state(0);
    let derived = $derived(count * 2);
</script>

<h1>Runes</h1>
<h3>{count}</h3>
<button onclick={() => count += 1}>Dereived {derived}</button>
 
<a href="/">Home</a>