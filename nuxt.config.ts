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
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{
					name: 'description',
					content: 'All about the developer-side of Hafiz'
				},

				// Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
				{ 
					property: 'og:site_name', content: 'Hafiz\'s' 
				},
				{ 
					hid: 'og:type', property: 'og:type', content: 'website' 
				},
				{
					property: 'og:url',
					content: `https://byhafiz.com`,
				},
				{
					property: 'og:title',
					content: 'So Nerd.',
				},
				{
					property: 'og:description',
					content: 'All about the developer-side of Hafiz',
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
					content: `https://byhafiz.com`,
				},
				{
					name: 'twitter:title',
					content: 'So Nerd.',
				},
				{
					name: 'twitter:description',
					content: 'All about the developer-side of Hafiz',
				},
				// {
				// 	name: 'twitter:image',
				// 	content: data.value.ogImage || data.value.image,
				// },
				
			],
			link: [
				{
					rel: 'canonical',
					href:  `https://byhafiz.com`
				},
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
	// nitro: {
	// 	prerender: {
	// 		crawlLinks: true,
	// 		routes: ['/sitemap.xml'],
	// 		failOnError: false, 
	// 	}
	// },
	ogImage: {
		componentOptions: {
			global: true,
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
