/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [

	],
	theme: {
		fontFamily: {
			'sourcecodepro': ['Source Code Pro'],
			'poppins': ['Poppins'],
			'staatliches': ['Staatliches'],
			'inconsolata': ['Inconsolata'],
			'opensans': ['Open Sans']
		},
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}