<template>
	<div v-if="blog!=null" class="flex flex-col font-opensans">
		<div>
			<div>
				<span class="font-bold text-xl md:text-3xl">{{ blog.title }}</span>
			</div>
			<div class="mt-2 text-xs md:text-sm">
				<span>{{ dayjs(blog.date).format('MMMM D, YYYY') }}</span>
				<span class=""> | Author: Hafiz</span>
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

onMounted(() => {
	fetchContent()
})

</script>

<style scoped>

</style>