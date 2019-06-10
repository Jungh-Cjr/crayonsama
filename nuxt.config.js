module.exports = {
	head: {
		title: 'CrayonSama',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'crayonsama'
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/logo.ico'
		}]
	},
	render: {
		resourceHints: false
	},
	loading: false,
	css: [{
		src: 'iview/dist/styles/iview.css',
	}],
	plugins: [{
		src: '~/plugins/default.js',
		ssr: false
	}],
	mode:'spa'
}
