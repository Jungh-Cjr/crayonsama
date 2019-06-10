var docsList = [{
		tit: "页面添加锚点后如何点击不改变URL？",
		content: "直接奔主题，前端简单地锚点实现方法大家都会，无非就是在把 a 标签的 href 写成想要跳到的元素的id ，比如点击 <a href=\"#box\"></a> 页面就会自动滚动到 <div id=\"box\"></div> 元素的位置。 那么这样使用会产生一个现象，那就是 url 会被改变，浏览器默认的...",
		time: "2018-11-27",
		author: "crayonsama",
		key:"2018112701",
		img:"http://www.crayonsama.cn/crayonimage/docs/1.jpg"
	},
	{
		tit: "IOS和小米手机拍照上传后,在WEB端显示旋转",
		content: "( ′◔ ‸◔`)现在的公司啊都流行混合开发，我们公司也不例外，非要把交互非常多的社区模块用内嵌web页展示，好吧好吧，毕竟有的应用也是这么做的，那既然是社区就肯定少不了用户上传图片的操作，在开发阶段没有发现任何问题，也是很奇怪，等到了测试阶段，发现部分机型和IOS机型拍照之后，web页获取路径之后...",
		time: "2018-09-07",
		author: "crayonsama",
		key:"2018090701",
		img:"http://www.crayonsama.cn/crayonimage/docs/2.jpg"
	},
	{
		tit: "HTML页面原生VIDEO标签隐藏下载按钮",
		content: "在写web项目的时候，遇到简介页面有一个单独的简介视频，只有这一个短短的视频所以没有使用任何video组件，所以运用原生video标签就想解决问题。 虽然简介视频是非付费的，但也不希望会有下载按钮或者可以视频另存为，所以找到一个可以看上去没有下载功能的方法，做一下笔记。 想要隐藏以上下载按钮，三个样...",
		time: "2018-05-04",
		author: "crayonsama",
		key:"2018050401",
		img:"http://www.crayonsama.cn/crayonimage/docs/3.jpg"
	},
	{
		tit:"CSS解决多行溢出显示省略号",
		content:"多行溢出 仅作为记录方便查找...",
		time: "2018-03-20",
		author: "crayonsama",
		key:"2018032001",
		img:"http://www.crayonsama.cn/crayonimage/docs/4.jpg"
	},
	{
		tit:"移动端轮播图VUE-AWESOME-SWIPER",
		content:"日常写设计文档，日常写Demo，写轮播图的时候觉得bootstrap不适合移动端，或者说不是轻量级的，于是换成Swiper，但是写的时候才发现怎么把这东西嵌到Vue里面啊？ Σ( ° △ °|||)︴！？ 果然基于Vue的插件还是很多的，于是就搜到了vue-awesome-swiper，是基于Vue...",
		time: "2018-03-14",
		author: "crayonsama",
		key:"2018031401",
		img:"http://www.crayonsama.cn/crayonimage/docs/5.jpg"
	},
	{
		tit:"日常踩坑 — 相邻元素之间的MARGIN合并问题",
		content:"踩坑：使用v-for渲染的组件，当然图中的id已经换成class，还是没有解决这个问题，于是各种查找资料，我就不信简单的CSS问题这么难解决！ v-for渲染组件级传值： 果然 ，是个坑，相邻元素之间的外边距是会合并的，只需要让每一个元素变为行内元素，如果行内元素影响其他样式的话就只需要让每一个元素...",
		time: "2018-03-08",
		author: "crayonsama",
		key:"2018030801",
		img:"http://www.crayonsama.cn/crayonimage/docs/6.jpg"
	},
	{
		tit:"(A ==1 && A== 2 && A==3) 有可能是 TRUE 吗？",
		content:"工作之余逛知乎的时候看到一个有意思的讨论，(a ==1 && a== 2 && a==3) 有可能是 true 吗？啊？一个变量同时满足三个条件？扯呢？ 当然是我太天真了，既然有讨论，就一定会有答案，结果答案还不止一个，真的是学习了，也有原文讨论过这个问题，觉得很有意思就拿来记录一下分享一下。 这是...",
		time: "2018-01-26",
		author: "crayonsama",
		key:"2018012601",
		img:"http://www.crayonsama.cn/crayonimage/docs/7.jpg"
	}
]












module.exports = {
	docsList
}