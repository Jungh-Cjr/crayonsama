<template>
	<div class="crayon-musicplayer">
		<!-- 歌词 -->
		<div class="crayon-music-lyrics">
			<div class="crayon-music-img">
				<div class="crayon-music-img-bg">
					<img src="../../assets/img/music/music_cd.png" ref="rotate">
				</div>
			</div>
			<div class="crayon-music-lrc">
				<img src="../../assets/img/music/shadowtop.png" class="crayon-music-lrcBox-shadow shadowtop">
				<img src="../../assets/img/music/shadowtbot.png" class="crayon-music-lrcBox-shadow shadowbot">
				<div class="crayon-music-lrcBox" ref="lrcbox">
					<p v-for="(line,index) in currentLyric.lines" :key="index" :class="currentLineNum === index ? 'crayon-current' : ''"
					 v-if="music[playIndex].lrc">{{line.txt}}</p>
					<p v-else="">暂无歌词</p>
				</div>
			</div>
		</div>
		<div class="crayon-music-name">{{music[playIndex].name + " - " + music[playIndex].singer}}</div>


		<!-- 时间 -->
		<div class="crayon-music-time">
			<span>{{currentTime}}</span>
			<span>{{duration}}</span>
		</div>
		<!-- 进度 -->
		<div class="crayon-music-player" @mouseup="letitgo($event)" @mousemove="changeNone($event)" @mouseleave="leave($event)">
			<div class="crayon-music-progress" ref="progressall">
				<div class="crayon-music-played" ref="played"></div>
				<div class="crayon-music-loaded" ref="loaded"></div>
			</div>
			<img src="../../assets/img/music/point.png" class="crayon-music-point" ref="point" @mousedown="getX($event)">
		</div>




		<!-- 控制 -->
		<div class="crayon-music-control">
			<!-- 循环模式 -->
			<div class="crayon-music-control-btn" style="width: 50px;height: 50px;" @click="changeSort()">
				<img src="../../assets/img/music/xh.png" v-if="sortType === 0">
				<img src="../../assets/img/music/only.png" v-else-if="sortType === 1">
			</div>
			<!-- 上一首 -->
			<div class="crayon-music-control-btn" @click="pre()">
				<img src="../../assets/img/music/left.png">
			</div>
			<!-- 播放/暂停 -->
			<div class="crayon-music-control-btn" style="width: 72px;height: 72px;margin-top: 10px;">
				<img src="../../assets/img/music/pu.png" @click="playMusic()" v-if="!play">
				<img src="../../assets/img/music/play.png" @click="pauseMusic()" v-else="">
				<audio :src="music[playIndex].src" ref="audio"></audio>
			</div>
			<!-- 下一首 -->
			<div class="crayon-music-control-btn" @click="next()">
				<img src="../../assets/img/music/right.png">
			</div>
			<!-- 倍速 -->
			<div class="crayon-music-control-btn" @click="changeSpeed" v-if="this.speed === 1 || this.speed === 2">{{this.speed}}.0x</div>
			<div class="crayon-music-control-btn" @click="changeSpeed" v-else="">{{this.speed}}x</div>
			<!-- 音量 -->
			<div class="crayon-music-control-volume">
				<div class="crayon-music-control-volumeBox" @mouseup="letVolitgo($event)" @mousemove="changeVolNone($event)" @mouseleave="leaveVol($event)" :class="showVol ? 'volumeBox-show' : ''">
					<img src="../../assets/img/music/yinliang.png" @click="showVol = !showVol">
					<img src="../../assets/img/music/novioce.png" style="width: 20px;height: 20px;" @click="volumeSet(-2)" v-if="noVolume">
					<img src="../../assets/img/music/vioce.png" style="width: 20px;height: 20px;" @click="volumeSet(-1)" v-else="">
					<div class="crayon-volume-wrapper">
						<div class="crayon-volume-allvolume" ref="vall"></div>
						<div class="crayon-volume-point" ref="vpoint" @mousedown="getVolX($event)"></div>
						<div class="crayon-volume-currentvolume" ref="vcurr"></div>
					</div>
				</div>
			</div>
			
			<!-- 列表 -->
			<div class="crayon-music-control-btn crayon-music-list" style="width: 50px;height: 50px;" @click="showList = !showList">
				<img src="../../assets/img/music/list.png">
			</div>
		</div>


		<!-- 歌曲列表 -->
		<div class="crayon-music-listBox" :class="showList ? 'crayon-music-listBox-show' : ''">
			<div class="crayon-music-musicList">
				<div v-for="(item,index) in music" class="crayon-music-musicList-name" :key="index">
					<div v-if="index === playIndex" class="crayon-music-playline"></div>
					<div class="crayon-music-playname" :class="index === playIndex ? 'crayon-music-musicList-playing' : ''" @click="clickMusic(index)">
						<div class="crayon-musicname">{{item.name}}</div>
						<div class="crayon-musicsinger">{{item.singer}}</div>
					</div>
					<div v-if="index === playIndex && play" style="font-size: 12px;color: #222831;" class="crayon-music-playtext">正在播放</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	import axios from "axios"
	import Lyric from 'lyric-parser'
	export default {
		props: ['music', 'control'],
		data() {
			return {
				play: false,
				playIndex: 0,
				rotate: 0,
				roTime: function() {},
				duration: "00:00",
				currentTime: "00:00",
				playProgress: function() {},
				playLrc: function() {},
				loading: function() {},
				speed: 1,
				showList: false,
				sortType: 0,
				distanceX: "",
				distanceVolX: "",
				currentLyric: "",
				currentLineNum: 0,
				volume:1,
				noVolume:false,
				showVol:false
			};
		},
		methods: {
			// 音乐加载
			loadMusic() {
				clearInterval(this.loading);
				let _this = this
				let wi = 0;
				this.loading = setInterval(function() {
					console.log(_this.$refs.audio.buffered.length)
					wi++;
					console.log(_this.$refs.audio.buffered)
					if(wi >=95&&_this.$refs.audio.buffered.length < 1){
						_this.$refs.loaded.style.width = "95%";
					}else{
						_this.$refs.loaded.style.width = wi + "%";
					}
					if (_this.$refs.audio.buffered.length >= 1) {
						_this.$refs.loaded.style.width = "100%";
						clearInterval(_this.loading)
					}
				}, 200)
			},
			// 播放音乐
			playMusic() {
				this.loadMusic();
				this.$refs.audio.playbackRate = this.speed;
				this.$refs.audio.play();
				this.play = true;
				this.imgRotate(1);
				this.duration = this.musicTime(this.$refs.audio.duration);
				this.progressMove(1);
				this.lrcMove(1);
				console.log("音量",this.$refs.audio.volume)
			},
			// 暂停音乐
			pauseMusic() {
				this.$refs.audio.pause();
				this.currentLyric.stop();
				this.currentLyric.seek(0);
				this.play = false;
				this.imgRotate(0);
				this.progressMove(0);
				this.lrcMove(0)
			},
			// 点击音乐切换
			clickMusic(index) {
				this.$refs.point.style.left = "0";
				this.$refs.played.style.width = "0";
				this.playIndex = index;
				let _this = this;
				if (this.play) {
					this.pauseMusic();
					this.duration = "00:00";
					this.currentTime = "00:00";
					this.$refs.audio.src = this.music[this.playIndex].src;
					setTimeout(function() {
						_this.playMusic()
					}, 500)
				} else {
					this.duration = "00:00";
					this.currentTime = "00:00";
					this.$refs.audio.src = this.music[this.playIndex].src;
					setTimeout(function() {
						_this.playMusic()
					}, 500)
				}
				this.getLyric();
			},
			// 进度条移动
			progressMove(state) {
				let _this = this;
				if (state) {
					let wi = this.$refs.progressall.offsetWidth;
					this.playProgress = setInterval(function() {
						let x = _this.$refs.audio.currentTime * wi / _this.$refs.audio.duration;
						_this.$refs.point.style.left = x + 8 + "px";
						_this.$refs.played.style.width = x + "px";
						_this.currentTime = _this.musicTime(_this.$refs.audio.currentTime);
						if (_this.sortType === 0) {
							if (_this.$refs.audio.ended) {
								clearInterval(_this.playProgress);
								_this.next();
							}
						} else {
							if (_this.$refs.audio.ended) {
								_this.playMusic();
							}
						}
					}, 50)

				} else {
					clearInterval(this.playProgress);
				}
			},
			// 歌词移动
			lrcMove(state) {
				let _this = this;
				if (state === 1) {
					//歌词移动
					if (this.music[_this.playIndex].lrc) {
						this.playLrc = setInterval(function() {
							if (_this.music[_this.playIndex].lrc) {
								if (_this.currentLyric.state === 0) {
									_this.currentLyric.play();
								}
								_this.currentLyric.seek(_this.$refs.audio.currentTime * 1000);
							}
							_this.$refs.lrcbox.style.top = _this.currentLyric.curNum * -30 + "px";
							if (_this.currentLyric.curNum + 1 === _this.currentLyric.lines.length) {
								setTimeout(function() {
									clearInterval(_this.playLrc);
								}, 10)
							}
						}, 50)
					}
				} else {
					clearInterval(this.playLrc);
					this.currentLyric.stop();
					this.currentLineNum = this.currentLyric.lines.length;
				}
			},
			// 切换顺序
			changeSort() {
				if (this.sortType === 0) {
					this.sortType = 1
				} else {
					this.sortType = 0
				}
			},
			// 倍速
			changeSpeed() {
				this.speed += 0.5;
				if (this.speed > 2) {
					this.speed = 0.5
				}
				this.$refs.audio.playbackRate = this.speed;
			},
			// 下一曲
			next() {
				let _this = this
				this.$refs.point.style.left = "0";
				this.$refs.played.style.width = "0";
				if (this.sortType === 0) {
					if (this.play) {
						if (this.playIndex + 1 === this.music.length) {
							this.playIndex = 0;
						} else {
							this.playIndex++;
						}
						this.pauseMusic();
						this.duration = "00:00";
						this.currentTime = "00:00";
						this.$refs.audio.src = this.music[this.playIndex].src;
						console.log(this.$refs.audio.src)
						setTimeout(function() {
							_this.playMusic()
						}, 500)
					} else {
						if (this.playIndex + 1 === this.music.length) {
							this.playIndex = 0;
						} else {
							this.playIndex++;
						}
						this.duration = "00:00";
						this.currentTime = "00:00";
						this.$refs.audio.src = this.music[this.playIndex].src;
					}
				} else if (this.sortType === 1) {
					if (this.play) {
						this.pauseMusic();
						this.$refs.audio.currentTime = 0;
						setTimeout(function() {
							_this.playMusic()
						}, 500)
					} else {
						this.$refs.audio.currentTime = 0;
					}

				}
				this.getLyric();
			},
			// 上一曲
			pre() {
				this.$refs.point.style.left = "0";
				this.$refs.played.style.width = "0";
				let _this = this
				if (this.sortType === 0) {
					if (this.play) {
						if (this.playIndex === 0) {
							this.playIndex = this.music.length - 1
						} else {
							this.playIndex--;
						}
						this.pauseMusic();
						this.duration = "00:00";
						this.currentTime = "00:00";
						this.$refs.audio.src = this.music[this.playIndex].src;
						setTimeout(function() {
							_this.playMusic()
						}, 500)
					} else {
						if (this.playIndex === 0) {
							this.playIndex = this.music.length - 1
						} else {
							this.playIndex--;
						}
						this.duration = "00:00";
						this.currentTime = "00:00";
						this.$refs.audio.src = this.music[this.playIndex].src;
					}
				} else if (this.sortType === 1) {
					this.pauseMusic();
					this.$refs.audio.currentTime = 0;
					setTimeout(function() {
						_this.playMusic()
					}, 500)
				}
				this.getLyric();
			},
			// 时间格式化处理
			musicTime(times) {
				var result = '00:00';
				var hour, minute, second
				if (times > 0) {
					hour = Math.floor(times / 3600);
					if (hour < 10) {
						hour = "0" + hour;
					}
					minute = Math.floor((times - 3600 * hour) / 60);
					if (minute < 10) {
						minute = "0" + minute;
					}

					second = Math.floor((times - 3600 * hour - 60 * minute) % 60);
					if (second < 10) {
						second = "0" + second;
					}
					result = minute + ':' + second;
				}
				return result;
			},
			// 图片旋转
			imgRotate(state) {
				if (state) {
					let _this = this;
					this.roTime = setInterval(function() {
						_this.rotate++;
						_this.$refs.rotate.style.transform = "rotateZ(" + _this.rotate + "deg)";
					}, 20)
				} else {
					clearInterval(this.roTime)
					// this.roTime = null
				}
			},
			//	鼠标拖动
			getX(e) {
				this.changeNone = this.changeX;
				this.distanceX = e.clientX - this.$refs.point.offsetLeft;
			},
			changeNone() {

			},
			changeX(e) {
				e.preventDefault();
				e.stopPropagation();
				this.$refs.point.style.left = e.clientX - this.distanceX + "px";
				this.$refs.played.style.width = e.clientX - this.distanceX + "px";
				this.leave = this.reallyLeave;
			},
			letitgo(e) {
				let _this = this;
				this.leave = function() {};
				this.pauseMusic();
				this.changeNone = function() {};
				let wi = this.$refs.progressall.offsetWidth;
				let c = this.$refs.audio.duration * (e.clientX - this.distanceX) / wi
				this.$refs.audio.currentTime = c;
				setTimeout(function() {
					_this.playMusic()
				}, 500)
			},
			leave() {

			},
			reallyLeave(e) {
				this.letitgo(e);
				this.changeNone = function() {};
			},
			// 歌词成功回调
			handleLyric({
				lineNum,
				txt
			}) {
				if (this.$refs.audio.currentTime === 0 || !this.play || this.duration === this.currentTime) return
				this.currentLineNum = lineNum
			},
			// 获取歌词
			getLyric() {
				axios.get(this.music[this.playIndex].lrc, {
					headers: {
						'Content-Type': "text/html;charset=gb2312",
					},
					responseType: 'arraybuffer'
				}).then(res => {
					let blob = new Blob([res.data]);
					let reader = new FileReader();
					reader.readAsText(blob, 'gb2312');
					reader.onload = () => {
						this.currentLyric = new Lyric(reader.result, this.handleLyric);
					}
				}).catch(err => {
					console.log(err);
				})
			},
			// 设置音量
			volumeSet(vol){
				if(vol === -1){
					console.log(-1)
					this.$refs.audio.muted = true;
					this.noVolume = true;
				}else if(vol === -2){
					console.log(-2)
					this.$refs.audio.muted = false;
					this.noVolume = false;
				}else{
					console.log(vol)
					this.$refs.audio.volume = vol;
				}
			},
			getVolX(e){
				this.changeVolNone = this.changeVolX;
				this.distanceVolX = e.clientX - this.$refs.vpoint.offsetLeft;
			},
			changeVolNone() {

			},
			letVolitgo(e) {
				this.leaveVol = function() {};
				this.changeVolNone = function() {};
			},
			changeVolX(e) {
				e.preventDefault();
				e.stopPropagation();
				this.$refs.vpoint.style.left = e.clientX - this.distanceVolX + "px";
				this.$refs.vcurr.style.width = e.clientX - this.distanceVolX + 4 + "px";
				if(e.clientX - this.distanceVolX <= -4){
					this.$refs.vpoint.style.left = "-4px";
					this.$refs.vcurr.style.width = "0px";
					this.volumeSet(-1);
				}else{
					this.volumeSet(-2);
				}
				if(e.clientX - this.distanceVolX >= 92){
					this.$refs.vpoint.style.left = "92px";
					this.$refs.vcurr.style.width = "100px";
				}
				
				let vol = this.$refs.vcurr.offsetWidth / this.$refs.vall.offsetWidth;
				this.volumeSet(vol);
				this.leaveVol = this.reallyVolLeave;
			},
			leaveVol() {
			
			},
			reallyVolLeave(e) {
				this.letVolitgo(e);
				this.changeVolNone = function() {};
			},
		},
		mounted() {
			window.addEventListener('mousemove', function(event) {
				event.preventDefault();
			})
		},
		activated() {
			this.getLyric();
			this.volumeSet(this.volume);
		}
	}
</script>
<style scoped="scoped">
	.crayon-musicplayer div {
		color: #222831;
	}

	.crayon-musicplayer {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #7c7c7c;
		position: relative;
		overflow: hidden;
	}





	.crayon-music-lyrics {
		width: 100%;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.crayon-music-lyrics .crayon-music-img {
		width: 50%;
		height: 450px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.crayon-music-lyrics .crayon-music-img .crayon-music-img-bg {
		width: 300px;
		height: 300px;
		border-radius: 50%;
	}

	.crayon-music-lyrics .crayon-music-img .crayon-music-img-bg img {
		width: 100%;
		height: 100%;
	}

	.crayon-music-lrc {
		width: 50%;
		height: 350px;
		overflow: hidden;
		position: relative;
		margin: 50px 0;
	}

	.crayon-music-lrcBox {
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translate(-50%, 175px);
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all .3s;
	}

	.crayon-music-lrc p {
		min-height: 30px;
		width: 570px;
		text-align: center;
		color: #222831;
		font-size: 15px;
		font-weight: bold;
	}

	.crayon-music-lrc .crayon-current {
		color: #edeff0;
		font-size: 18px;
	}

	.crayon-music-lrcBox-shadow {
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 2;
	}

	.shadowtop {
		top: 0;
	}

	.shadowbot {
		bottom: 0;
	}





	.crayon-music-name {
		height: 30px;
		line-height: 30px;
		width: 100%;
		text-align: center;
		color: #222831;
		font-size: 20px;
		font-weight: bold;
	}

	.crayon-music-time {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 30px;
		color: #222831;
		font-weight: bold;
	}

	.crayon-music-player {
		height: 44px;
		width: 100%;
		padding: 0 30px;
		position: relative;
		display: flex;
		align-items: center;
	}

	.crayon-music-player .crayon-music-progress {
		height: 5px;
		width: 100%;
		background-color: #edeff0;
		position: relative;
	}

	.crayon-music-player .crayon-music-progress .crayon-music-loaded {
		position: absolute;
		height: 5px;
		width: 0;
		top: 0;
		left: 0;
		z-index: 1;
		background-color: #a2a4a5;
	}

	.crayon-music-player .crayon-music-progress .crayon-music-played {
		position: absolute;
		height: 5px;
		width: 0;
		top: 0;
		left: 0;
		z-index: 2;
		background-color: #222831;
	}

	.crayon-music-player .crayon-music-point {
		width: 44px;
		height: 44px;
		position: absolute;
		left: 8px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 3;
	}








	.crayon-music-control {
		width: 100%;
		height: 85px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.crayon-music-control .crayon-music-control-btn {
		width: 44px;
		height: 44px;
		margin: 0 20px;
		cursor: pointer;
		color: #222831;
		line-height: 44px;
		font-weight: bold;
		font-size: 20px;
	}

	.crayon-music-control .crayon-music-control-btn img {
		width: 100%;
		height: 100%;
	}
	.crayon-music-control-volume{
		width: 200px;
		overflow: hidden;
		position: absolute;
		right: 120px;
		top: 50%;
		transform: translateY(-50%);
		height: 30px;
	}
	.crayon-music-control-volumeBox{
		position: absolute;
		left: 170px;
		display: flex;
		align-items: center;
		transition: all .1s;
	}
	.volumeBox-show{
		left: 0;
	}
	.crayon-music-control-volumeBox img{
		cursor: pointer;
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	.crayon-volume-wrapper{
		margin-left: 10px;
		width: 100px;
		height: 30px;
		position: relative;
	}
	.crayon-volume-point{
		height: 16px;
		width: 16px;
		border-radius: 50%;
		position: absolute;
		left: 92px;
		top: 50%;
		transform: translateY(-50%);
		background-color: #222831;
		cursor: pointer;
		z-index: 3;
	}
	.crayon-volume-allvolume{
		width: 100%;
		height: 2px;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		background-color: white;
		z-index: 1;
	}
	.crayon-volume-currentvolume{
		width: 100%;
		height: 2px;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		background-color: #222831;
		z-index: 2;
	}
	
	
	
	
	.crayon-music-list {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
	}





	.crayon-music-listBox {
		width: 400px;
		background-color: #edeff0;
		position: absolute;
		top: 0;
		bottom: 115px;
		right: -400px;
		overflow: hidden;
		transition: all .5s;
		z-index: 4;
	}

	.crayon-music-listBox-show {
		right: 0;
	}

	.crayon-music-musicList {
		padding: 30px 0;
		width: 400px;
		height: 100%;
		overflow-y: scroll;
	}

	.crayon-music-musicList::-webkit-scrollbar {
		width: 5px;
	}

	.crayon-music-musicList::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: #7c7c7c;
	}

	.crayon-music-musicList::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background: #edeff0;
	}

	.crayon-music-musicList-name {
		height: 55px;
		font-weight: bold;
		cursor: pointer;
		display: flex;
		position: relative;
		border-top: 1px solid #cccccc;
		overflow: hidden;
	}

	.crayon-music-musicList-name:last-child {
		border-bottom: 1px solid #cccccc;
	}

	.crayon-music-playline {
		width: 5px;
		background-color: #222831;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
	}

	.crayon-music-playname {
		color: #7c7c7c;
		flex: 1;
		font-size: 12px;
		padding: 0 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.crayon-music-playname div {}

	.crayon-music-playname .crayon-musicname {
		font-size: 18px;
	}

	.crayon-music-playname .crayon-musicsinger {
		font-size: 12px;
		color: #7c7c7c;
	}


	.crayon-music-playname:hover {
		color: #222831;
	}

	.crayon-music-playtext {
		width: 48px;
		height: 55px;
		line-height: 55px;
		margin-right: 10px;
	}

	.crayon-music-musicList-playing {
		color: #222831;
	}
</style>
