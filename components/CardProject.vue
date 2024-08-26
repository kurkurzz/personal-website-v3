<template>
	<div class="rounded-sm border-zinc-200 dark:border-zinc-700">
		<span class="">{{ project.name }}</span>
		<p class="mt-2 text-sm ">{{ project.description }}</p>
		<div v-if="project.tags != null" class="flex flex-wrap mt-2">
			<div v-for="tag in project.tags" class="w-fit px-2 py-0 border rounded-lg mr-2 mb-2">
				<span class="text-xs">{{ tag }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['project'])
</script>

<style lang="scss" scoped></style>