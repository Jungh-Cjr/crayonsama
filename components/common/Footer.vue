<template>
	<div class="crayon-footer">
		<div>Designed & Powerd by zhengronghao</div>
		<div>Copyright© 2018 CrayonSama</div>
		<div><a href="http://www.miitbeian.gov.cn/">鲁ICP备18056062号</a></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.crayon-footer{
	position: absolute;
	bottom: 0;
	height: 50px;
	padding: 10px 0;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	div{
		font-size: 12px;
		padding: 0 10px;
		border-right: 1px solid #50616D;
		color: #50616D;
	}
	div:last-child{
		border: 0;
	}
	a{
		font-style: 12px;
	}
}
</style>
