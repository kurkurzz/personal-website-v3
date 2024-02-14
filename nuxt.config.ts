// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@vueuse/nuxt',
		'@nuxt/content',
		'@nuxtjs/sitemap',
		'nuxt-og-image'
	],
	app: {
		head: {
			title: 'So Nerd.',
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Poppins'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Inconsolata'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Open+Sans'
				},
			],
		}
	},
	sitemap: {
		strictNuxtContentPaths: true,
	},
	site: {
		url: 'https://byhafiz.com',
		identity: {
			type: 'Person',
		},
		twitter: '@apezzz_z',
	},
})
