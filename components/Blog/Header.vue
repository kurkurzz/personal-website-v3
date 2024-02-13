<template>
	<div class="w-full">
		<span class>{{ blog.title }}</span>
		<div class="mt-2">
			{{ blog.date }}
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['blog'])
</script>

<style lang="scss" scoped>

</style>