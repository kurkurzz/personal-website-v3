<template>
	<div class="h-fit min-h-screen  bg-zinc-50 dark:bg-zinc-900 dark:text-white text-zinc-900 py-6 md:py-12">
		<div class="px-2 md:px-6 mb-6 md:mb-12 container max-w-6xl mx-auto flex items-center">
			<div  class="flex items-center cursor-pointer font-inconsolata">
				<div @click="navigateTo('/blogs')" class="mr-2 dark:bg-zinc-100 bg-zinc-900 w-fit pl-3 pr-2 py-1 text-base rounded-md text-white dark:text-zinc-900">
					<span>Blogs</span>
				</div>
				<span @click="navigateTo('/')" class="font-bold text-lg underline">byhafiz</span>
			</div>
			<ToggleDarkMode class="ml-auto"/>
			
		</div>
		<div class="px-2 md:px-6  container max-w-4xl mx-auto ">
			<slot/>
		</div>

	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>