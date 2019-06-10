<template>
	<div class="crayon-zone">
		<is-building :mod = "'zone'"></is-building>
	</div>
</template>

<script>
	import IsBuilding from "../components/common/Buiding.vue"
	export default {
		data() {
			return {

			};
		},
		components:{
			IsBuilding
		},
		activated() {
			this.$store.dispatch("modules/setModule","zone");
		}
	}
</script>

<style lang="less" scoped>
	.crayon-zone {
		min-height: 859px;
		min-width: 1180px;
		position: relative;
		background-color: #272b31;
	}
</style>
