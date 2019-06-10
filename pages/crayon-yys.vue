<template>
	<div class="crayon-yys">
		<div>1</div>
		<div>1</div>
		<div>1</div>
	</div>
</template>

<script>
	export default {
		layout: 'phone',
		data() {
			return {
				Shikigami:{
					"酒吞童子":{
						ts:{},
						yh:{
							"7":{num:1,physical:6},
							"10":{num:1,physical:6}
						},
						sl:{
							"10":{num:2,physical:6}
						},
						ql:{},
						mw:{},
						tz:{}
					},
					"灯笼鬼":{
						ts:{
							"1":{num:4,physical:6},
							"2":{num:4,physical:6},
							"3":{num:4,physical:6},
							"5":{num:1,physical:6},
							"6":{num:1,physical:3},
							"7":{num:1,physical:3},
							"9":{num:4,physical:6},
							"13":{num:1,physical:6},
							"17":{num:1,physical:6}
						},
						sl:{
							"9":{num:1,physical:6},
							"13":{num:1,physical:6},
							"17":{num:1,physical:6}
						},
						tz:{num:14,physical:0},
						mw:{}
					}
				}
			};
		}
	}
</script>

<style lang="less" scoped>
	.crayon-yys {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.crayon-yys div {
		color: #222831;
	}
</style>
