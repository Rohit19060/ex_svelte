<script lang="ts">
	// import type { Post } from '@prisma/client';
	// async function getPosts() {
	// 	const res = await fetch('/api/posts');
	// 	const posts = await res.json();
	// 	return posts as Post[];
	// }
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ posts } = data);
</script>

<h1>Posts</h1>
<p>
	You can <a href="/posts/create">+create</a> or edit your posts here;
</p>

<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title, id, content }}
	<div>
		<h2><span>{id}: </span><a href="/posts/{slug}">{title}</a></h2>
		<p>{content}</p>
	</div>
{/each}

<!-- {#await getPosts()}
	<p>Loading...</p>
{:then posts}
	<p>Showing {posts.length} posts.</p>
	{#each posts as post}
		<div>
			<h2><span>{post.id}: </span><a href="/posts/{post.slug}">{post.title}</a></h2>
			<p>{post.content}</p>
		</div>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await} -->
