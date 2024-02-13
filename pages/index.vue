<template>
	<div class="w-screen h-fit min-h-screen  bg-zinc-50 dark:bg-zinc-900 dark:text-white text-zinc-900 font-inconsolata">
		<div class="max-w-3xl w-full px-4 py-8 h-full mx-auto flex flex-col">
			<div class="flex flex-col">
				<div class="flex justify-between items-center">
					<span class="text-4xl font-bold tracking-wide">Muhammad Nurhafiz</span>
					<div @click="toggleDark()" class="w-fit p-2 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-800 hover:bg-zinc-100 rounded-md cursor-pointer">
						<svg v-if="isDark" class="w-6 h-6 fill-yellow-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
						</svg>
						<svg v-else class="w-6 h-6 stroke-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
						</svg>
					</div>
				</div>
				<p class="mt-4 ">
					Co-founder and CTO of <NuxtLink to="https://enygma.ai" target="_blank" class="underline">Enygma</NuxtLink>. AI engineer, cloud architect, and fullstack developer.
					Executed and lead AI projects worth million dollars for fortune 500 clients around the world.
				</p>
				<div class="flex items-center mt-4 ">
					<svg  class="w-5 h-5 stroke-zinc-700 dark:stroke-zinc-300 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
					</svg>
					<span class="text-zinc-700 dark:text-zinc-300">Based in Kuala Lumpur</span>
				</div>
				<div class="mt-4 text-zinc-700 dark:text-zinc-300">
					<div>
						<span>Mail: <NuxtLink to="mailto:hafiz@enygma.ai" target="_blank" >hafiz@enygma.ai</NuxtLink></span>
					</div>
					<div>
						<span>Github: <NuxtLink to="https://github.com/kurkurzz" target="_blank" >https://github.com/kurkurzz</NuxtLink></span>
					</div>
					<div>
						<span>Linkedin: <NuxtLink to="https://www.linkedin.com/in/hafiz-enygma/" target="_blank" >https://www.linkedin.com/in/hafiz-enygma/</NuxtLink></span>
					</div>
				</div>
			</div>
			<div class="mt-8">
				<span class="text-2xl font-bold tracking-wide">Projects</span>
				<div class="grid grid-cols-2 mt-4 gap-4">
					<CardProject v-for="project in projectList" :key="project.name" :project="project"></CardProject>
				</div>
			</div>
			<div class="mt-8 flex flex-col">
				<span class="text-2xl font-bold tracking-wide">Education</span>
				<div class="mt-4 ">
					<div class="flex flex-col">
						<div class="flex justify-between">
							<span class="">University of Malaya</span>
							<span class="">2019 - 2023</span>
						</div>
						<p class="text-sm mt-2">Bachelor in Computer Science (Artificial Intelligence)</p>
						<p class="text-sm">3.95 CGPA</p>
					</div>
					<div class="flex flex-col mt-4">
						<div class="flex justify-between">
							<span class="">University of Malaya</span>
							<span class="">2018 - 2019</span>
						</div>
						<p class="text-sm mt-2">Centre for Foundation Studies in Science</p>
						<p class="text-sm">4.00 CGPA</p>
					</div>
					<div class="flex flex-col mt-4">
						<div class="flex justify-between">
							<span class="">SAM Bestari, Subang Jaya</span>
							<span class="">2013 - 2017</span>
						</div>
						<p class="text-sm mt-2">Physical Science</p>
						<p class="text-sm">SPM: 7A+ 4A</p>
						<p class="text-sm">SMA: Mumtaz</p>
						<p class="text-sm">PT3: 11A</p>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script setup>
const isDark = useDark()

const toggleDark = () => {
	isDark.value = !isDark.value
}

const projectList = [
	{name: 'Asrow AI', description: 'AI-powered right-of-way surveillance platform. Increase operation efficiency, enhance reporting, reduce 3 weeks works to few hours.'},
	{name: 'Rigg AI', description: 'AI-powered offshore rig, vessels inspection platform. Schedule maintenance and prevent breakdown with cost saving up to million dollars.'},
	{name: 'Razi AI', description: 'Assist medical personnel on identifying known disease based on xrays and doctor records.'},
	{name: 'Sphera AI', description: 'Using computer vision to assist football referee in realtime on-field decision making. Generate highlights based on key moments identified by the AI.'},

]
</script>

<style scoped>
p {
	@apply text-zinc-700 dark:text-zinc-300 font-inconsolata
}

a {
	@apply underline text-zinc-700 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200
}
</style>