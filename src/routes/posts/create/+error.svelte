<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.error?.message}</h1>

<p>Something went wrong</p>

<pre>
    {JSON.stringify($page, null, 2)}
</pre>
