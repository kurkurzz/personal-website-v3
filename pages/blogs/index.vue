<template>
	<div class="flex flex-col font-inconsolata">
		<p class="text-lg">
			Welcome to my blog main page. I choose to post my blogs here instead of on other 
			platform like Medium because I want to keep everything free and accessible to everyone. 
			Let's hope it got blessed by the search engine algorithm, and most importantly helping fellow developers.
		</p>
		<div class="mt-8">
			<div v-for="blog in blogs" :key="blog.title">
				<span class="text-lg ">👉 
					<NuxtLink :to="blog._path" >{{ blog.title }}</NuxtLink>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import dayjs from 'dayjs'

definePageMeta({
	layout: 'blog'
})

const route  = useRoute()
const blogs = ref([])

const fetchContent = async () => {
	blogs.value = await queryContent('blogs').find()
}
await fetchContent()

</script>

<style scoped>
a {
	@apply underline text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300
}
</style>