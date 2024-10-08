<template>
	<div
		class="relative h-fit min-h-screen  bg-zinc-50 dark:bg-zinc-900 dark:text-white text-zinc-900 font-inconsolata">
		<div class="max-w-3xl w-full px-4 py-8 h-full mx-auto flex flex-col">
			<div class="flex flex-col">
				<div class="flex justify-between items-center">
					<span class="text-4xl font-bold tracking-wide">Muhammad Nurhafiz</span>
					<ToggleDarkMode class="ml-4" />
					<span class="ml-auto">Go to <NuxtLink to="/blogs" class="underline">Blogs</NuxtLink></span>

				</div>
				<p class="mt-4 ">
					Co-founder of <NuxtLink to="https://enygma.ai" target="_blank" class="underline">
						Enygma</NuxtLink>. AI engineer, cloud architect, and fullstack developer.
					Executed and lead AI projects for Petronas, Sunway, and drone companies throughout Malaysia.
					Always open to new opportunities.
				</p>
				<div class="flex items-center mt-4 ">
					<svg class="w-5 h-5 stroke-zinc-700 dark:stroke-zinc-300 mr-2" xmlns="http://www.w3.org/2000/svg"
						fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
					</svg>
					<span class="text-zinc-700 dark:text-zinc-300">Based in Kuala Lumpur</span>
				</div>
				<div class="mt-4 text-zinc-700 dark:text-zinc-300">
					<div>
						<span>Mail: <NuxtLink to="mailto:hafiz@enygma.ai" target="_blank">hafiz@enygma.ai</NuxtLink> /
							<NuxtLink to="mailto:nurhafiz2000@gmail.com" target="_blank">nurhafiz2000@gmail.com
							</NuxtLink>
						</span>
					</div>
					<div>
						<span>Github: <NuxtLink to="https://github.com/kurkurzz" target="_blank">
								https://github.com/kurkurzz</NuxtLink></span>
					</div>
					<!-- <div>
						<span>Linkedin: <NuxtLink to="https://www.linkedin.com/in/hafiz-enygma/" target="_blank" >https://www.linkedin.com/in/hafiz-enygma/</NuxtLink></span>
					</div> -->
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
							<!-- <span class="">2019 - 2023</span> -->
						</div>
						<p class="text-sm mt-2">Bachelor in Computer Science (Artificial Intelligence)</p>
						<p class="text-sm">3.95 CGPA</p>
					</div>
					<div class="flex flex-col mt-4">
						<div class="flex justify-between">
							<span class="">University of Malaya</span>
							<!-- <span class="">2018 - 2019</span> -->
						</div>
						<p class="text-sm mt-2">Centre for Foundation Studies in Science</p>
						<p class="text-sm">4.00 CGPA</p>
					</div>
					<div class="flex flex-col mt-4">
						<div class="flex justify-between">
							<span class="">SAM Bestari, Subang Jaya</span>
							<!-- <span class="">2013 - 2017</span> -->
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
const projectList = [
	{
		name: 'Sentry',
		description: 'AI-powered vertical structure inspection including offshore rig, telco tower and transmission tower. Include geographical, terrain analysis and mapping. Feature includes out-of-the-box photogrammetry, converting drone/360 images into 3D modelling, pointcloud, orthomosaic, DTM, DSM and many more. End-to-end defect detection model development integrated into the system.',
		tags: ['Pytorch', 'AWS', 'Three.js', 'Photogrammetry', 'Konva.js', 'Chart.js', 'MapBox', 'Django', 'Nuxt/Vue']
	},
	{
		name: 'Asrow AI',
		description: 'AI-powered right-of-way inspection platform. Increase operation efficiency, enhance reporting, reduce 3 weeks of works to few hours. Helps Petronas focusing more on the next-actions instead of the inspection tedious processes.',
		tags: ['Tensorflow', 'Pytorch', 'AWS', 'OCR', 'Django', 'Nuxt/Vue']
	},
	{
		name: 'Cerebro',
		description: 'GPT brain for private and large documents, for building company internal knowledege and private assistance. Experimented with few RAG approaches to achieve the best for the usecase.',
		tags: ['GPT', 'Vector DB', 'AWS', 'Django', 'Nuxt/Vue']
	},
	{
		name: 'Enclave',
		description: 'E-invoicing software full-integrated with government myinvois platform, acting as the middlement between client s ERP/accounting system and myinvois. Ensuring reliability, consistency and provide fallback mechanism at each point of flow.',
		tags: ['Celery', 'AWS', 'Digital Signing', 'Form Validation', 'Django', 'Nuxt/Vue']
	},

	{
		name: 'Qmed Asia AI Xray and Putralytica',
		description: 'Develop disease detection for Qmed Asia, top technology provider for medical and Putralytica, UPM supported medical tech company. Model able to detect various known disease related to chess xray, integrated into reporting system allowing locum radiologist to provide report on requested xray.',
		tags: ['Pytorch', 'Tensorflow', 'AWS', 'Django', 'Nuxt/Vue']
	},
]

defineOgImageScreenshot({
	colorScheme: 'dark'
})
</script>

<style scoped>
p {
	@apply text-zinc-700 dark:text-zinc-300 font-inconsolata
}

a {
	@apply underline text-zinc-700 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200
}
</style>
