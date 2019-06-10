<template>
	<div class="crayon-building">
		<div class="crayon-building-mod">{{mod}} 模块正在赶来的路上 ε=ε=ε=(~￣▽￣)~</div>
		<div class="flex crayon-building-one">
			<img src="../../assets/img/building.png" class="crayon-building-img">
			<img src="../../assets/img/buildingtext.png">
		</div>
		<div class="flex crayon-building-two">
			<img src="../../assets/img/comingsoon.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		props: ['mod'],
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="less">
	.crayon-building {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.crayon-building-mod {
			color: #daf6ff;
			font-size: 20px;
		}

		.crayon-building-one {
			width: 100%;
			justify-content: center;
		}

		.crayon-building-two {
			width: 100%;
			justify-content: center;
			padding-left: 50%;
		}

		.crayon-building-img {
			margin-right: 50px;
		}
	}
</style>
