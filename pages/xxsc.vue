<template>
	<div class="xxsc-index">
		<div class="xi-tit">
			<img src="../assets/img/xxsc/1545281994_831767.png" class="xi-tit-user">
			<img src="../assets/img/xxsc/1545282095_865558.png" class="xi-tit-text">
		</div>
		<div class="xi-center">

		</div>
		<div class="xi-content">
			<p>《题黄鹤楼》</p>
			<p>唐·李白</p>
			<p>一拳捶碎黄鹤楼，一脚踢翻鹦鹉洲。</p>
			<p>眼前有景道不得，崔颢题诗在上头。</p>
		</div>
		<div class="xi-bottom">
			<img src="../assets/img/xxsc/left.png" class="xi-left">
			<div>点击查看更多</div>
			<img src="../assets/img/xxsc/right.png" class="xi-right">
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'phone',
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="less">
	.xxsc-index {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #d4f4ff;
		div {
			color: #333333;
		}

		.xi-tit {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 5rem;

			.xi-tit-user {
				margin-right: 3rem;
				width: 20rem;
			}

			.xi-tit-text {
				margin: 2rem 0 0 10rem;
				width: 10rem;
			}
		}

		.xi-center {
			width: 80%;
			border-bottom: 0.2rem solid #333333;
		}

		.xi-content {
			width: 100%;
			padding: 3rem 0;
			display: flex;
			flex-direction: column;
			align-items: center;

			p {
				font-size: 1.2rem;
				line-height: 3rem;
			}
		}

		.xi-bottom {
			position: fixed;
			bottom: 3rem;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			align-items: center;

			div {
				width: 6rem;
				text-align: center;
				margin: 0 2rem;
			}

			img {
				width: 6px;
				height: 13px;
			}

			.xi-left {
				animation: leftmove 2s infinite;
			}

			@keyframes leftmove {
				0 {
					transform: translateX(0);
				}
				50% {
					transform: translateX(10px);
				}
				100% {
					transform: translateX(0);
				}
			}

			.xi-right {
				animation: rightmove 2s infinite;
			}
			@keyframes rightmove {
				0 {
					transform: translateX(0);
				}
				50% {
					transform: translateX(-10px);
				}
				100% {
					transform: translateX(0);
				}
			}
		}
	}
</style>
