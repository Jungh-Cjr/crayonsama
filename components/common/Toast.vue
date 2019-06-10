<template>
	<div class="crayon-toast" :class="text !== '' ? 'crayon-toast-show' : 'crayon-toast-hide'">
		温馨提示：{{text}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: ""
			};
		},
		methods: {
			toast(data) {
				let _this = this;
				this.text = data;
				setTimeout(function() {
					_this.text = "";
				}, 3000)
			}
		},
		activated() {

		}
	}
</script>

<style scoped lang="less">
	.crayon-toast {
		position: fixed;
		font-size: 20px;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		padding: 20px 30px;
		border-radius: 15px;
		background-color: rgba(255, 255, 255, .7);
		color: #000;
		z-index: 9999;
		box-shadow: 0 4px 8px 0 rgba(28, 31, 33, .4);
	}

	.crayon-toast-show {
		display: flex;
		animation: toast 3s;
		opacity: 0;
	}

	@keyframes toast {
		0 {
			opacity: 0;
		}

		20% {
			opacity: 1;
		}

		40% {
			opacity: 1;
		}

		60% {
			opacity: 1;
		}

		80% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	.crayon-toast-hide {
		display: none;
	}
</style>
