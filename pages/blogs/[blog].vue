<template>
	<div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
		<div v-if="blog!=null" class="col-span-12 lg:col-span-9">
			<BlogHeader :blog="blog"/>
			<div
			class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
			prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
			>
			<ContentRenderer v-if="articles" :value="articles">
				<template #empty>
				<p>No content found.</p>
				</template>
			</ContentRenderer>
			</div>
		</div>
		<!-- <BlogToc /> -->
	</div>
</template>

<script setup>
const route  = useRoute()
const blog = ref()

const fetchContent = async () => {
	blog.value = await queryContent(route.path).findOne()
	console.log(blog.value)
}

onMounted(() => {
	fetchContent()
})

</script>

<style scoped>

</style>