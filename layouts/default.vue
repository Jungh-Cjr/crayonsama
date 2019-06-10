<template>
	<div style="height: 100%;width: 100%;position: relative;">
<!--		<crayon-header />-->
		<nuxt keep-alive/>
<!--		<crayon-footer />-->
	</div>
</template>

<script>
	import CrayonFooter from '../components/common/Footer.vue';
	import CrayonHeader from '../components/common/Header.vue';
	export default {
		data() {
			return {}
		},
		methods: {},
		created() {
			console.log(window.location.pathname !== '/riddle')
			
			if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) && window.location.pathname !== '/riddle') {
				console.log("is web")
				this.$router.push('/m');
			}
		},
		components: {
			CrayonFooter,
			CrayonHeader
		},
	}
</script>

<style>

</style>
