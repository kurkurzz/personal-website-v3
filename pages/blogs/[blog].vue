<template>
	<div v-if="blog!=null" class="flex flex-col font-opensans">
		<div>
			<div>
				<span class="font-bold text-xl md:text-3xl font-inconsolata">{{ blog.title }}</span>
			</div>
			<div class="mt-2 text-xs md:text-sm">
				<span>{{ dayjs(blog.date).format('MMMM D, YYYY') }}</span>
				<span class=""> | Author: Hafiz, CTO at <NuxtLink to="https://enygma.ai" target="_blank" class="underline">Enygma</NuxtLink></span>
			</div>
		</div>
		
		<div
		class="max-w-none prose prose-sm md:prose-lg prose-zinc dark:prose-invert"
		>
		<ContentRenderer :value="blog">
			<template #empty>
			<p>No content found.</p>
			</template>
		</ContentRenderer>
		</div>
	</div>
</template>

<script setup>
import dayjs from 'dayjs'

definePageMeta({
	layout: 'blog'
})

const route  = useRoute()
const blog = ref()

const fetchContent = async () => {
	blog.value = await queryContent(route.path).findOne()
}
await fetchContent()

useHead({
	title: blog.value.title,
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
			content: blog.value.description
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
			content: blog.value.title,
		},
		{
			property: 'og:description',
			content: blog.value.description,
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
			content: blog.value.title,
		},
		{
			name: 'twitter:description',
			content: blog.value.description,
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
	titleTemplate: 'Hafiz\'s Blog - %s',
})

defineOgImageScreenshot({
	colorScheme: 'dark'
})
</script>

<style scoped>
a {
	@apply underline text-zinc-700 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200
}
</style>