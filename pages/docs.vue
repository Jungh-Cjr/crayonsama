<template>
	<div class="crayon-docs">
		<div class="cd-wapper">
			<div class="cd-back" @click="goBack()">
				<img src="../assets/img/back.png">
			</div>
			<div class="cd-content">
				<div class="cd-wapper-left">
					<docs-item :item="item" v-for="(item,index) in newDocs" :key="index" :index="index" v-if="index < 6"></docs-item>
					<div class="cd-wapper-left-more">
						<div>—— </div>
						<div class="cd-wapper-left-click" @click="toDocpage">点击查看更多<br />Click Me</div>
						<div> ——</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DocsItem from "../components/docs/DocsItem.vue";
	import linkList from "../assets/js/link.js";
	import docsList from "../assets/js/docsList.js";
	export default {
		data() {
			return {
				newDocs: [],
				frLink: [],
			};
		},
		components: {
			DocsItem
		},
		methods: {
			toDocpage(){
				window.open('http://www.cnblogs.com/zheng577564429/', "_blank");
				// this.$router.push({
				// 	path:"/docpage",
				// 	query:{
				// 		page:1
				// 	}
				// })
			},
			goBack() {
				this.$router.back();
			}
		},
		created() {

		},
		activated() {
			this.$store.dispatch("modules/setModule", "docs");
			this.newDocs = docsList.docsList;
			this.frLink = linkList.linkList;
			console.log(this.frLink, 123)
		}
	}
</script>

<style lang="less" scoped>
	.crayon-docs {
		background-color: #ffffff;

		.cd-wapper {
			width: 1180px;
			min-height: 859px;
			margin: 0 auto;
			position: relative;
			.cd-back {
				position: absolute;
				top: 50px;
				left: 0;
				cursor: pointer;

				img{
					width: 50px;
					transition: all 0.3s;
				}
			}
			.cd-back:hover img{
				transform: translateX(-10px);
			}
			.cd-content {
				display: flex;
				justify-content: space-between;
				padding-top: 100px;

				.cd-wapper-left {
					width: 100%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;


					.cd-wapper-left-more {
						height: 50px;
						margin: 50px 0 0 0;
						width: 100%;
						text-align: center;
						overflow: hidden;
						display: flex;
						justify-content: center;

						div {
							margin: 0 5px;
							line-height: 50px;
						}

						.cd-wapper-left-click {
							height: 100px;
							cursor: pointer;
							transition: all .2s;
						}

						.cd-wapper-left-click:hover {
							transform: translateY(-50px);
						}
					}
				}

			}
		}
	}
</style>
