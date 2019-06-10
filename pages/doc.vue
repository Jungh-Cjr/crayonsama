<template>
	<div class="doc-detail" id="header">
		<div class="dd-warpper">
			<div class="dd-back" @click="back">返回上一页</div>
			<div class="dd-title">{{docs.title}}</div>
			<div class="dd-info">posted @ {{docs.time}} {{docs.author}}</div>
			<div class="dd-content" v-html="docs.content"></div>
			<div class="dd-top">
				<div @click="loca('#header')">返回顶部</div>
				<!-- <div>Docs首页</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import docsBox from "../assets/js/docs.js";
	export default {
		data() {
			return {
				docKey: "",
				docs: []
			};
		},
		methods: {
			back() {
				this.$router.back();
			},
			loca(str) {
				document.querySelector(str).scrollIntoView(true);
			}
		},
		activated() {
			this.$store.dispatch("modules/setModule", "");
			this.docKey = this.$route.query.key;
			this.docs = docsBox.docsBox[this.docKey];
			console.log(this.docs)
		}
	}
</script>

<style lang="less" scoped>
	.doc-detail {
		width: 100%;
		min-height: 859px;
		background-color: #ffffff;
		padding: 30px;

		.dd-warpper {
			width: 1180px;
			margin: 0 auto;

			.dd-back {
				margin: 20px 0 40px 0;
				animation: an 2s infinite;
				cursor: pointer;

			}

			@keyframes an {
				0 {
					text-shadow: 0;
				}

				50% {
					text-shadow: 0 0 20px #DAF6FF;
				}

				100% {
					text-shadow: 0;
				}
			}

			.dd-title {
				font-size: 50px;
				margin: 20px 0;
			}

			.dd-info {
				width: 100%;
				text-align: right;
				padding: 20px 0;
				margin-bottom: 50px;
				border-bottom: 1px dashed #DAF6FF;
			}

			.dd-top {
				padding: 100px 0 50px 0;
				display: flex;
				justify-content: center;
				div{
					margin: 0 20px;
					cursor: pointer;
				}
			}
		}
	}
</style>
