<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<div class="layout">
	<aside>
		<h3>Posts</h3>
		<nav>
			<ul>
				{#each data.posts as { slug, title }}
					<li><a href="/posts/{slug}">{title}</a></li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main>
		<slot />
	</main>
</div>

<style>
	.layout {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px minmax(auto, 60ch);
		margin-top: 2rem;
	}
</style>
