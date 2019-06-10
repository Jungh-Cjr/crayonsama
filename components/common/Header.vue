<template>
	<div class="crayon-header" id="header">
		<div class="content-width crayon-header-warpper">
			<div class="crayon-header-left">
				<ul class="crayon-header-list">
					<li :class="mod === 'home' ? 'crayon-seleted' : ''" @click="ChangeLink('home')">
						主页
					</li>
					<li :class="mod === 'docs' ? 'crayon-seleted' : ''" @click="ChangeLink('docs')">
						文章
					</li>
					<li style="width: 150px;" :class="mod === 'projects' ? 'crayon-seleted' : ''" @click="ChangeLink('projects')">
						项目
					</li>
					<li :class="mod === 'zone' ? 'crayon-seleted' : ''" @click="ChangeLink('zone')">
						空间
					</li>
					<li style="width: 120px;" :class="mod === 'about' ? 'crayon-seleted' : ''" @click="ChangeLink('about')">
						关于
					</li>
				</ul>
			</div>
			<div class="crayon-header-right">Last Posted @ 2019-01-15</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				mod: "home"
			};
		},
		methods: {
			ChangeLink(mod) {
				if (mod === "home") {
					this.$router.push("/");
				} else if (mod === "docs") {
					this.$router.push("/docs");
				}else if(mod === "projects"){
					this.$router.push("/projects");
				}else if(mod === "zone"){
					this.$router.push("/zone");
				}else if(mod === "about"){
					this.$router.push("/about");
				}
			}
		},
		computed: {
			setModule() {
				return this.$store.state.modules.module;
			}
		},
		watch: {
			setModule(newValue, oldValue) {
				this.mod = newValue;
			}
		},
	}
</script>

<style lang="less" scoped>
	.crayon-header {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		height: 60px;
		z-index: 9;
		background-color:#f4f4f4;

		.crayon-header-warpper {
			display: flex;
			justify-content: space-between;

			.crayon-header-left {
				display: flex;
				align-items: center;
			}

			.crayon-header-logo {
				width: 100px;
				height: 32px;
				margin-right: 20px;
			}

			.crayon-header-list {
				height: 100%;
				display: flex;

				li {
					width: 100px;
					font-size: 20px;
					text-align: center;
					line-height: 60px;
					padding: 0 20px;
					cursor: pointer;
					font-weight: bold;
					color: #50616D;
					display: flex;
					align-items: center;
				}
			}

			.crayon-header-right {
				height: 60px;
				line-height: 60px;
				color: #50616D;
				cursor: default;
			}
		}
	}
</style>
