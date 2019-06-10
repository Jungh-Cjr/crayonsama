<template>
	<div class="crayon-propage">
		<div class="cpp-wrapper">
			<div class="cpp-title">
				<span style="cursor: pointer;" @click="toHome">返回首页</span>
				<span>项目名称：{{proBox.name}}</span>
			</div>
			<div class="cpp-html">
				<div class="cpp-toast">html</div>
				<div class="cpp-scroll" v-html="proBox.html">
					
				</div>
			</div>
			<div class="cpp-css">
				<div class="cpp-toast">css</div>
				<div class="cpp-scroll" v-html="proBox.css">
					
				</div>
			</div>
			<div class="cpp-js">
				<div class="cpp-toast">javascript</div>
				<div class="cpp-scroll" v-html="proBox.js">
					
				</div>

			</div>
			<div class="cpp-view">
				<div class="cpp-toast">效果</div>
				<object :data="proBox.href" type="text/html" width="100%" height="100%"></object>
			</div>
			<div class="cpp-more">
				项目地址：<a :href="proBox.link" target="_blank">{{proBox.link}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	import pros from "../assets/js/pros.js";
	export default {
		data() {
			return {
				proBox:{},
				ind:""
			};
		},
		methods: {
			toHome() {
				this.$router.back()
			}
		},
		activated(){
			this.$store.dispatch("modules/setModule", "");
			this.ind = this.$route.query.key;
			this.proBox = pros.pros[this.ind];
			console.log(this.proBox)
		}
	}
</script>

<style scoped lang="less">
	.crayon-propage {
		height: 100%;
		width: 100%;
		position: relative;
		background-color: #272b31;

		.cpp-wrapper {
			width: 1180px;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: flex-start;
			min-height: 859px;
			padding-bottom: 30px;

			>div {
				width: 50%;
				border: 1px solid #DAF6FF;
				padding: 20px;
			}

			div::-webkit-scrollbar {
				display: none;
			}

			.cpp-title {
				min-height: 50px;
				line-height: 50px;
				width: 100%;
				padding: 10px 0;
				border: 0;

				span {
					margin-right: 30px;
				}
			}

			.cpp-html,
			.cpp-css {
				height: 300px;
				position: relative;
			}

			.cpp-js,
			.cpp-view {
				height: 509px;
				position: relative;
			}

			.cpp-view {
				padding: 0;
			}

			.cpp-scroll {
				height: 100%;
				overflow: scroll;
			}

			.cpp-toast {
				position: absolute;
				right: 10px;
				top: 10px;
				width: 100px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border: #DAF6FF solid 1px;
				border-radius: 15px;
				background-color: #585f6b;
			}

			.cpp-more{
				padding-top: 50px;
				padding-left: 0;
				width: 100%;
				border: 0;
			}
		}
	}
</style>
