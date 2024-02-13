<template>
	<div class="rounded-sm border-zinc-200 dark:border-zinc-700">
		<span class="">{{ project.name }}</span>
		<p class="mt-2 text-sm ">{{ project.description }}</p>
	</div>
</template>

<script setup>
const props = defineProps(['project'])
</script>

<style lang="scss" scoped>

</style>