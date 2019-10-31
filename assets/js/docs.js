var docsBox = {
	"2018112701": {
		title: "页面添加锚点后如何点击不改变URL？",
		time: "2018-11-27",
		author: "crayonsama",
		content: "<div style='line-height:40px;font-size:15px;'>直接奔主题，前端简单地锚点实现方法大家都会，无非就是在把 a 标签的 href 写成想要跳到的元素的id ，比如点击 	&lt;a href='#box'>	&lt;/a> 页面就会自动滚动到 	&lt;div id='box'>	&lt;/div> 元素的位置。<br/>那么这样使用会产生一个现象，那就是 url 会被改变，浏览器默认的行为会将 id 放在 url 后面。比如：http://www.xxx.com#box<br/>有的时候可能不会产生任何问题，直接跳转过去立马完成产品的需求，但是当存在多个锚点的时候，我们会突然发现用户点击浏览器后退按钮并不会跳转太之前的页面，而是放回上一个带有锚点的链接比如：<br/>http://www.xxx.com#box2 点击后退时 变成了 http://www.xxx.com#box1 其实还在原来的页面只是改变了 hash 值 ？？？？那用户体验是极差的，甚至不注意观察的用户会以为浏览器出了问题，后退按钮不管用了？？？？<br/>现在就记录一下解决的方法。<br/>把a标签替换掉，或者不加href，我们把要点击的按钮绑定一个点击事件，那么这个点击事件需要做什么的？看下面的代码！<br/><div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='color: #008000;margin:10px 0;'>//给想要点击的元素绑定事件并传入要跳到元素的id</p><p style='color: #008000;margin:10px 0;'>//因为项目使用Vue就直接写@click</p><p style='color: #008000;margin:10px 0;'>//使用document.querySelector实现锚点的效果</p><p style='margin:10px 0;color:#333333;'>changeHash(idName) {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;document.querySelector(idName).scrollIntoView(true);</p><p style='margin:10px 0;color:#333333;'>}</p></div>案例：<a href='http://www.kaochong.com/course/detail-2264.html' target='_blank'>http://www.kaochong.com/course/detail-2264.html</a><br/>以上就是实现点击锚点后不改变url的方法。</div>"
	},
	"2018090701":{
		title:"IOS和小米手机拍照上传后,在WEB端显示旋转",
		time:"2018-09-07",
		author:"crayonsama",
		content:"<div style='line-height:40px;font-size:15px;'>( ′◔ ‸◔`)现在的公司啊都流行混合开发，我们公司也不例外，非要把交互非常多的社区模块用内嵌web页展示，好吧好吧，毕竟有的应用也是这么做的，那既然是社区就肯定少不了用户上传图片的操作，在开发阶段没有发现任何问题，也是很奇怪，等到了测试阶段，发现部分机型和IOS机型拍照之后，web页获取路径之后展示的图片和图片文件全不是正确的方向，旋转了90°、180°的都有，于是去网上查找原因，结果就是……<br/>大于2M的图片！并且是竖拍的图片！在生成照片的时候图片的Orientation属性会被重写！！！！所以部分机型和IOS 都会出现旋转的问题！<br/>可恶！<br/>当然方法也百度到了，只不过大部分都是只放了代码，并没有讲解，其实理解了也非常简单。<br/>一、安装插件 ︶︿︶<br/>解决这个问题首先是要借助插件的，因为我们前端旋转了图片只是在页面上看上去旋转了，并没有解决根本问题，于是就要用到 exif.js这个工具。<br/><a href='https://www.npmjs.com/package/exif-js' target='_blank'>https://www.npmjs.com/package/exif-js</a><br/>一个强大的读取图片数据的工具，安装也很简单文档里也有，就不多说了，因为我使用的是Vue，所以之间npm安装后在需要使用的页面引入：<br/><div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'>import exif from 'exif-js';</div>到这里就算完成了插件的全部安装；<br/>二、开工！(＾－＾)V<br/>首先在选择框的change事件中我们直接调用exif的方法；<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>let Orientation = 0;</p><p style='margin:10px 0;color:#333333;'>exif.getData(e.target.files[0], function() {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp&nbsp;&nbsp;exif.getAllTags(this);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp&nbsp;&nbsp;Orientation = exif.getTag(this, 'Orientation');</p><p style='margin:10px 0;color:#333333;'>});</p><p style='color: #008000;margin:10px 0;'>//e.target.files[0]为获取的第一个图片文件，如果是多个图片文件可进行遍历</p></div>这时候我们就已经获取到图片的Orientation属性了，这个属性就是图片的方向属性，不同的值代表不同的方向：<br/>图片正常：1<br/>图片朝右：6<br/>图片朝左：8<br/>图片倒置：3<br/>后来经过测试Orientation还会有一个值，就是0，当Orientation等于0的时候图片是正常的，但0代表的意思，还没有找到。<br/>那么现在就可以对图片进行处理了let canvas = document.createElement('canvas');<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>let ctx = canvas.getContext('2d');</p><p style='margin:10px 0;color:#333333;'>let width = img.width;</p><p style='margin:10px 0;color:#333333;'>let height = img.height;</p><p style='margin:10px 0;color:#333333;'>switch(orientation) {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;case 0:</p><p style='color: #008000;margin:10px 0;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//不作任何处理直接画图</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.width = width;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.height = height;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.drawImage(img, 0, 0)</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; break;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;case 1:</p><p style='color: #008000;margin:10px 0;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//不做任何处理直接画图</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.width = width;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.height = height;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.drawImage(img, 0, 0)</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;case 6:</p><p style='color: #008000;margin:10px 0;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//图片顺时针旋转90°</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.height = width;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.width = height;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.rotate(Math.PI / 2);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.translate(0, -height);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.drawImage(img, 0, 0)</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;case 3:</p><p style='color: #008000;margin:10px 0;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//图片旋转180°</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.height = height;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.width = width;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.rotate(Math.PI);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.translate(-width, -height);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.drawImage(img, 0, 0)</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;case 8:</p><p style='color: #008000;margin:10px 0;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//图片逆时针旋转90°</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.height = width;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.width = height;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.rotate(-Math.PI / 2);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.translate(-height, 0);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.drawImage(img, 0, 0)</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;case undefined:</p><p style='color: #008000;margin:10px 0;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//不作任何处理直接画图</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canvas.width = width;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; canvas.height = height;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ctx.drawImage(img, 0, 0)</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</p><p style='margin:10px 0;color:#333333;'>}</p><p style='margin:10px 0;color:#333333;'>let ndata=canvas.toDataURL('image/jpeg', 1);</p></div>这里图片的处理就是把图片原原本本的在canvas上画一遍，然后把它转成正确的方向就可以了，那么缩略图就可以直接展示ndata就可以了。<br/>但是这里还只是一张图片，我们不可能给后台传图片base64码过去，必须是图片文件才可以，那么这里就要用到base64的转码。<br/>首先是base64转码函数的封装：<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='color: #008000;margin:10px 0;'>// base64转成bolb对象</p><p style='margin:10px 0;color:#333333;'>dataURItoBlob(base64Data) {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;let byteString;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;if(base64Data.split(',')[0].indexOf('base64') >= 0)</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;byteString = atob(base64Data.split(',')[1]);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;else byteString = unescape(base64Data.split(',')[1]);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;let mimeString = base64Data</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.split(',')[0]</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.split(':')[1]</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.split(';')[0];</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;let ia = new Uint8Array(byteString.length);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;for(let i = 0; i < byteString.length; i++) {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ia[i] = byteString.charCodeAt(i);</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;}</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;return new Blob([ia], {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: mimeString</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;});</p><p style='margin:10px 0;color:#333333;'>}</p></div>然后将上面我们转换好的ndata通过base64转换成图片文件就可以了。<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='color: #008000;margin:10px 0;'>//调用转换函数将base64码转换成图片文件</p><p style='margin:10px 0;color:#333333;'>let blob = this.dataURItoBlob(ndata);</p><p style='color: #008000;margin:10px 0;'>//将新文件名与原图片文件保持一致</p><p style='margin:10px 0;color:#333333;'>blob.name = e.target.files[0].name;</p><p style='color: #008000;margin:10px 0;'>//将新文件放到我们需要传给后台的文件数组里</p><p style='margin:10px 0;color:#333333;'>this.files.push(blob);</p></div>三、结束o(ﾟДﾟ)っ<br/>以上就是对图片旋转做的处理，很简单，我们就可以理解为图片的重绘。当然上面的方法只是单个图片的转换，如果用户同时上传了多个图片，那么就在对应的地方添加遍历循环就可以了。<br/>如果有不足的地方希望大家补充，有不对的地方也请大家批评指正。<br/>如果还不太明白也可以通过我的联系方式进行讨论。</div>"
	},
	"2018050401":{
		title:"HTML页面原生VIDEO标签隐藏下载按钮",
		time:"2018-05-04",
		author:"crayonsama",
		content:"<div style='line-height:40px;font-size:15px;'>在写web项目的时候，遇到简介页面有一个单独的简介视频，只有这一个短短的视频所以没有使用任何video组件，所以运用原生video标签就想解决问题。虽然简介视频是非付费的，但也不希望会有下载按钮或者可以视频另存为，所以找到一个可以看上去没有下载功能的方法，做一下笔记。<br/><img src='https://images2018.cnblogs.com/blog/1096618/201805/1096618-20180504115319686-356117977.png'><br/>想要隐藏以上下载按钮，三个样式就可以了，不废话直接贴代码：<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>video::-internal-media-controls-download-button {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;display:none;</p><p style='margin:10px 0;color:#333333;'>}</p><p style='margin:10px 0;color:#333333;'>video::-webkit-media-controls-enclosure {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;overflow:hidden;</p><p style='margin:10px 0;color:#333333;'>}</p><p style='margin:10px 0;color:#333333;'>video::-webkit-media-controls-panel {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;width: calc(100% + 50px); </p><p style='margin:10px 0;color:#333333;'>}</p></div>说白了就是把下载按钮移动到视窗外面，但是这些CSS找了好久啊！！<br/><img src='https://images2018.cnblogs.com/blog/1096618/201805/1096618-20180504115818579-1922063362.png'><br/>这种方法并不能真正阻止视频的下载，“有心”的用户还是可以在缓存文件里找到加载过的视频文件的，所以就像标题写的一样，只是隐藏。<br/>真正的阻止视频的下载还是需要通过服务器端对视频地址进行加密验证。<br/>嗯，以上。</div>"
	},
	"2018032001":{
		title:"CSS解决多行溢出显示省略号",
		time:"2018-03-20",
		author:"crayonsama",
		content:"<div style='line-height:40px;font-size:15px;'>多行溢出<br/>仅作为记录方便查找<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>display: -webkit-box;</p><p style='margin:10px 0;color:#333333;'>-webkit-box-orient: vertical;</p><p style='margin:10px 0;color:#333333;'>-webkit-line-clamp: number;</p><p style='color: #008000;margin:10px 0;'>/*n行溢出显示省略号则number设置为n*/</p><p style='margin:10px 0;color:#333333;'>overflow: hidden;</p></div></div>"
	},
	"2018031401":{
		title:"移动端轮播图VUE-AWESOME-SWIPER",
		time:"2018-03-14",
		author:"crayonsama",
		content:"<div style='line-height:40px;font-size:15px;'>日常写设计文档，日常写Demo，写轮播图的时候觉得bootstrap不适合移动端，或者说不是轻量级的，于是换成Swiper，但是写的时候才发现怎么把这东西嵌到Vue里面啊？<br/>Σ( ° △ °|||)︴！？<br/>果然基于Vue的插件还是很多的，于是就搜到了vue-awesome-swiper，是基于Vue和Swiper开发的轮播图插件，但是看API写出来的怎么总是报警告啊……还是自己研究研究吧……<br/>本文只适用于Vue脚手架中的使用，CDN引入和使用参考文章最后API链接。<br/>安装<br/>npm<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>npm install vue-awesome-swiper --save</p></div>引入<br/>全局引入<br/>在入口文件main.js中进行引入<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>import VueAwesomeSwiper from 'vue-awesome-swiper'</p><p style='color: #008000;margin:10px 0;'>// require styles</p><p style='margin:10px 0;color:#333333;'>import 'swiper/dist/css/swiper.css'</p><p style='margin:10px 0;color:#333333;'>Vue.use(VueAwesomeSwiper, /* { default global options } */)</p></div>局部引入<br/>在需要用到轮播图的vue页面中引入<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>import 'swiper/dist/css/swiper.css'</p><p style='margin:10px 0;color:#333333;'>import { swiper, swiperSlide } from 'vue-awesome-swiper'</p></div>并在components中添加swiper<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>components:{</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;swiper,</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;swiperSlide</p><p style='margin:10px 0;color:#333333;'>}</p></div>使用<br/>html结构<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>&lt;swiper :options='swiperOption'></p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;swiper-slide v-for='slide in swiperSlides' :key='slide.id'>I'm Slide {{ slide }}&lt;/swiper-slide></p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='swiper-pagination' slot='pagination'>&lt;/div></p><p style='margin:10px 0;color:#333333;'>&lt;/swiper></p></div>data：<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>export default {</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;data () {</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swiperOption: {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoplay:true,//自动切换</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pagination:{</p>  <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el: '.swiper-pagination'//分页器</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</p>  <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swiperSlides: [1, 2, 3]</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p> <p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;}</p><p style='margin:10px 0;color:#333333;'>}</p></div>以上能实现基本的轮播图效果，其他效果参考Swiper官方API并在swiperOption中进行参数属性的设置即可。<br/>Swiper4 API:&nbsp;&nbsp;<a href='http://www.swiper.com.cn/api/index.html' target='_blank'>http://www.swiper.com.cn/api/index.html</a><br/>vue-awesome-swiper API:&nbsp;&nbsp;<a href='https://www.npmjs.com/package/vue-awesome-swiper' target='_blank'>https://www.npmjs.com/package/vue-awesome-swiper</a></div>"
	},
	"2018030801":{
		title:"日常踩坑 — 相邻元素之间的MARGIN合并问题。",
		time:"2018-03-08",
		author:"crayonsama",
		content:"<div style='line-height:40px;font-size:15px;'>踩坑：使用v-for渲染的组件，当然图中的id已经换成class，还是没有解决这个问题，于是各种查找资料，我就不信简单的CSS问题这么难解决！<br/><img src='https://images2018.cnblogs.com/blog/1096618/201803/1096618-20180308131913229-1792830134.png'><br/>v-for渲染组件级传值：<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>&lt;div class='faqList'><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;card v-for='item in faq'<p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;:key=item.title<p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;:faqTitle=item.title<p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;:userName=item.userName<p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;:userLevel=item.userLevel<p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;:solve=item.solve<p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;>&lt;/card><p style='margin:10px 0;color:#333333;'>&lt;/div></div>果然 ，是个坑，相邻元素之间的外边距是会合并的，只需要让每一个元素变为行内元素，如果行内元素影响其他样式的话就只需要让每一个元素浮动就可以解决这个问题了。<br/>下面就是解决问题找到的原文，记录一下踩坑，以免以后忘掉。<br/>原文:&nbsp;&nbsp;<a href='http://blog.csdn.net/github_37037281/article/details/55505825' target='_blank'>http://blog.csdn.net/github_37037281/article/details/55505825</a></div>"
	},
	"2018012601":{
		title:"(A ==1 && A== 2 && A==3) 有可能是 TRUE 吗？",
		time:"2018-01-26",
		author:"crayonsama",
		content:"<div style='line-height:40px;font-size:15px;'>工作之余逛知乎的时候看到一个有意思的讨论，(a ==1 && a== 2 && a==3) 有可能是 true 吗？啊？一个变量同时满足三个条件？扯呢？<br/>当然是我太天真了，既然有讨论，就一定会有答案，结果答案还不止一个，真的是学习了，也有原文讨论过这个问题，觉得很有意思就拿来记录一下分享一下。<br/>这是一道某科技公司问到的面试题。<br/>方法一：<br/>利用松散相等运算符 == 的工作原理，你可以简单地创建一个带有自定义toString( 或者 valueOf)函数的对象，在每一次使用它时候改变它所的返回值，使其满足所有三个条件。<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>const a = {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;i: 1,</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;toString: function () {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a.i++;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;}</p><p style='margin:10px 0;color:#333333;'>}</p><p style='margin:10px 0;color:#333333;'>if(a == 1 && a == 2 && a == 3) {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Hello World!');</p><p style='margin:10px 0;color:#333333;'>}</p><p style='color: #008000;margin:10px 0;'>// Hello World!</p></div>之所以会得到如此结果，是由于表达式中使用了松散相等的运算符 ==。使用松散相等时，如果其中一个操作数与另一个类型不同，则 JS 引擎将尝试将一个操作转换为另一个类型。在左边对象、右边的数字的情况下，它会尝试将对象转换为一个数，首先通过调用 valueOf 如果是可调用的。否则，它会调用toString方法。我使用toString仅仅是因为它是我的第一反应，valueOf 会更合理。如果我不从toString返回一个字符串（而是返回数字），JS 引擎会尝试将字符串转换为一个数字，虽然有一个稍长的路径，但它仍然会给我们同样的结果。<br/><br/>方法二：<br/>我不可否认——其他答案无疑是正确的，但你真的不能过错下面的代码：<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>var aﾠ = 1;</p><p style='margin:10px 0;color:#333333;'>var a = 2;</p><p style='margin:10px 0;color:#333333;'>var ﾠa = 3;</p><p style='margin:10px 0;color:#333333;'>if(aﾠ==1 && a== 2 &&ﾠa==3) {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Why hello there!')</p><p style='margin:10px 0;color:#333333;'>}</p></div>请注意if 语句中的奇怪间距。它是半宽度韩文“ﾠ”。这是一个 Unicode 空格字符，但是 ECMAScript 不将其解释为一个空格 —— 这意味着它是一个有效的标识符。因此有三个完全不同的变量，一个是a后加半宽度韩文，一个是a， 一个是a前加半宽度韩文。。。<br/><br/>方法三：<div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'><p style='margin:10px 0;color:#333333;'>var val = 0;</p><p style='margin:10px 0;color:#333333;'>Object.defineProperty(window, 'a', {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;get: function() {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ++val;</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;}</p><p style='margin:10px 0;color:#333333;'>});</p><p style='margin:10px 0;color:#333333;'>if (a == 1 && a == 2 && a == 3) {</p><p style='margin:10px 0;color:#333333;'>&nbsp;&nbsp;&nbsp;&nbsp;console.log('yay');</p><p style='margin:10px 0;color:#333333;'>}</p></div>使用一个get，让 a 的返回值为三个不同的值。然而这并不意味着我们应该在真正的代码中使用。<br/>总结<br/>1. 利用松散相等运算符 == 的原理，自定义 toString 和 valueOf 返回对应值<br/>2. 利用半宽度韩文等特殊字符，玩“障眼法”，本质上其实并没有做到题设<br/>3. 劫持 JS 对象的 getter，不过这种方式对于严格相等 === 同样有效<br/>原文链接：<a href='http://elevenbeans.github.io/2018/01/23/nothing-is-impossible-for-javascript/' target='_blank'>http://elevenbeans.github.io/2018/01/23/nothing-is-impossible-for-javascript/</a></div>"
	}
	
}

//代码模块  <div style='width: 100%;background-color: #CCCCCC;border-radius: 5px;padding: 20px;margin:10px 0;'></div>
//注释行    <p style='color: #008000;margin:10px 0;'></p>
//普通行			<p style='margin:10px 0;color:#333333;'></p>
//空格      &nbsp;&nbsp;&nbsp;&nbsp;
//<         &lt;


        



 




module.exports = {
	docsBox
}