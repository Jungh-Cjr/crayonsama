<template>
	<div class="crayon-m">
		<div class="cm-wrapper">
			<div class="cm-tit" style="margin-top: 5rem;">移动端暂未开发</div>
			<div class="cm-tit">敬请期待</div>
			<svg viewBox="0 0 300 600">
				<!-- Symbol -->
				<symbol id="s-text">
					<text text-anchor="middle" x="50%" y="30%" dy=".35em" style="font-size: 10rem;"> 404 </text>
				</symbol>

				<!-- Duplicate symbols -->
				<use xlink:href="#s-text" class="text"></use>
				<use xlink:href="#s-text" class="text"></use>
				<use xlink:href="#s-text" class="text"></use>
				<use xlink:href="#s-text" class="text"></use>
				<use xlink:href="#s-text" class="text"></use>

			</svg>
			<div class="cm-bottom">
				<div class="cm-by">Designed & Powerd by zhengronghao</div>
				<div class="cm-by">Copyright© 2018 CrayonSama</div>
				<div class="cm-by"><a href="http://www.miitbeian.gov.cn/">鲁ICP备18056062号</a></div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		layout: 'phone',
		data() {
			return {

			};
		},
		methods: {

		},
	}
</script>

<style scoped lang="less">
	.crayon-m {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #272b31;

		.cm-wrapper {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.cm-tit {
				font-size: 2rem;
			}
		}

		.text {
			fill: none;
			stroke-width: 4;
			stroke-linejoin: round;
			stroke-dasharray: 70 330;
			stroke-dashoffset: 0;
			-webkit-animation: stroke 6s infinite linear;
			animation: stroke 6s infinite linear;
		}

		.text:nth-child(5n + 1) {
			stroke: #F2385A;
			-webkit-animation-delay: -1.2s;
			animation-delay: -1.2s;
		}

		.text:nth-child(5n + 2) {
			stroke: #F5A503;
			-webkit-animation-delay: -2.4s;
			animation-delay: -2.4s;
		}

		.text:nth-child(5n + 3) {
			stroke: #E9F1DF;
			-webkit-animation-delay: -3.6s;
			animation-delay: -3.6s;
		}

		.text:nth-child(5n + 4) {
			stroke: #56D9CD;
			-webkit-animation-delay: -4.8s;
			animation-delay: -4.8s;
		}

		.text:nth-child(5n + 5) {
			stroke: #3AA1BF;
			-webkit-animation-delay: -6s;
			animation-delay: -6s;
		}

		@-webkit-keyframes stroke {
			100% {
				stroke-dashoffset: -400;
			}
		}

		@keyframes stroke {
			100% {
				stroke-dashoffset: -400;
			}
		}

		svg {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		.cm-bottom {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			bottom: 10%;
		}

		.cm-by {

			font-size: .5rem;

			a {
				font-size: .6rem;
			}
		}
	}
</style>
