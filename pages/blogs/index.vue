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

useHead({
	title: "Hafiz's Blog",
	htmlAttrs: {
		lang: 'en'
	},
	link: [
		{
			rel: 'icon',
			// type: 'image/png',
			href: '/favicon.ico'
			}
	],
	meta: [
		{
			name: 'description',
			content: 'Some of the thing that Hafiz took a week to implement with countless unknown errors and sneaky bugs'
		},

		// Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
		{ 
			property: 'og:site_name', content: 'Hafiz\'s Blog' 
		},
		{ 
			hid: 'og:type', property: 'og:type', content: 'website' 
		},
		{
			property: 'og:url',
			content: `https://byhafiz.com/${route.path}`,
		},
		{
			property: 'og:title',
			content: "Hafiz's Blog",
		},
		{
			property: 'og:description',
			content: 'Some of the thing that Hafiz took a week to implement with countless unknown errors and sneaky bugs',
		},
		// {
		// 	property: 'og:image',
		// 	content: data.value.ogImage || data.value.image,
		// },
		 // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
		{ name: 'twitter:site', content: '@apezzz_z' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{
			name: 'twitter:url',
			content: `https://byhafiz.com/${route.path}`,
		},
		{
			name: 'twitter:title',
			content: "Hafiz's Blog",
		},
		{
			name: 'twitter:description',
			content: 'Some of the thing that Hafiz took a week to implement with countless unknown errors and sneaky bugs'
		},
		// {
		// 	name: 'twitter:image',
		// 	content: data.value.ogImage || data.value.image,
		// },
		
	],
	link: [
		{
			rel: 'canonical',
			href:  `https://byhafiz.com/${route.path}`
		}
	],
})

defineOgImageScreenshot({
	colorScheme: 'dark'
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