<template>
    <div class="cmc-wrapper" ref="wrapper">
        <div class="ca-back" @click="goBack()">
            <img src="../assets/img/back.png">
        </div>
        <div class="cmc-content">
            <crayon-music :music="musicList"></crayon-music>
            <!-- 组件信息 -->
            <div class="cmc-info" :class="show ? 'cmc-info-show' : ''">
                <div class="cmc-info-btn" @click="show = !show">组件信息</div>
                <div><span>组件名称：</span>crayon-music</div>
                <div><span>当前版本号：</span>2.0.6</div>
                <div><span>兼容：</span>Chrome以及支持audio标签的现代浏览器</div>
                <div><span>详细信息：</span></div>
                <div class="cmc-scroll">
                    <div class="cmc-version">
                        <p>v 2.0.6</p>
                        <div>1.新增音量调节功能、静音功能；</div>
                        <div>2.优化歌词面板，修复因为单句歌词过长导致的歌词滚动移位；</div>
                        <div>3.优化部分图标；</div>
                    </div>
                    <div class="cmc-ver-line"></div>
                    <div class="cmc-version">
                        <p>v 2.0.4</p>
                        <div>1.优化切换音乐时加载音频状态样式，比之前更流畅；</div>
                        <div>2.优化歌词面板正在播放状态歌词的位置；</div>
                    </div>
                    <div class="cmc-ver-line"></div>
                    <div class="cmc-version">
                        <p>v 2.0.3</p>
                        <div>1.新增歌词面板；</div>
                        <div>2.新增进度条加载样式条；</div>
                        <div>3.更换音频地址：不再使用各大运营商提供的音频地址，从而解决因音频路径过期而导致音频无法播放；</div>
                        <div>4.优化歌曲列表展示歌曲格式；</div>
                        <div>注：测试使用的mp3及lrc均为作者付费在QQ音乐下载获得。</div>
                    </div>
                    <div class="cmc-ver-line"></div>
                    <div class="cmc-version">
                        <p>v 2.0.2</p>
                        <div>1.新增倍速调节功能，可使用0.5、1.0、1.5、2.0倍速播放音乐；</div>
                        <div>2.新增歌曲列表展示功能，包括点击播放，滚动条样式修复；</div>
                        <div>3.修复单曲循环时点击上一首、下一首时造成的音乐停止播放；</div>
                        <div>4.优化拖拽进度交互，修复鼠标未抬起移出面板再移入后进度点仍跟随鼠标等问题；</div>
                    </div>
                    <div class="cmc-ver-line"></div>
                    <div class="cmc-version">
                        <p>v 2.0.0</p>
                        <div>1.使用新版UI界面，代码重构；</div>
                        <div>2.新增进度条鼠标拖拽调节功能，以及点击进度条跳进度功能；</div>
                        <div>3.暂时关闭随机播放功能（暂无UI图标）；</div>
                    </div>
                    <div class="cmc-ver-line"></div>
                    <div class="cmc-version">
                        <p>v 1.0.0</p>
                        <div>音乐播放器基础构建，暂有功能：</div>
                        <div>1.正常播放/暂停，上一首/下一首；</div>
                        <div>2.列表循环/单曲循环/随机播放功能；</div>
                        <div>3.音乐列表（无UI，无法点击）</div>
                    </div>
                </div>


                <div class="cmc-attention">注：本组件仅用于个人学习和联系使用，如需了解或提出宝贵意见请<span @click="toLink"
                                                                               style="color: #4C84FF;cursor: pointer;">联系我</span>，谢谢您的支持！
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CrayonMusic from '../components/test/crayonMusic.vue'

    export default {
        data() {
            return {
                show: false,
                musicList: [{
                    src: "http://www.crayonsama.cn/crayonmusic/music/qvnianxiatian.mp3",
                    name: "去年夏天",
                    singer: "王大毛",
                    lrc: "http://www.crayonsama.cn/crayonmusic/lrc/qvnianxiatian.lrc"
                }, {
                    src: "http://www.crayonsama.cn/crayonmusic/music/liangcheng.mp3",
                    name: "凉城",
                    singer: "任然",
                    lrc: "http://www.crayonsama.cn/crayonmusic/lrc/liangcheng.lrc"
                },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/qingxianshuonihao.mp3",
                        name: "请先说你好",
                        singer: "贺一航",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/qingxianshuonihao.lrc"
                    },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/daan.mp3",
                        name: "答案",
                        singer: "杨坤/郭采洁",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/daan.lrc"
                    },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/quanqiubianleng.mp3",
                        name: "全球变冷",
                        singer: "许嵩",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/quanqiubianleng.lrc"
                    },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/hongzhaoyuan.mp3",
                        name: "红昭愿",
                        singer: "音阙诗听",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/hongzhaoyuan.lrc"
                    },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/shamoluotuo.mp3",
                        name: "沙漠骆驼",
                        singer: "展展与罗罗",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/shamoluotuo.lrc"
                    },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/woleyi.mp3",
                        name: "我乐意",
                        singer: "许嵩",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/woleyi.lrc"
                    },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/rise.mp3",
                        name: "RISE",
                        singer: "The Glitch Mob/Mako/The Word Alive",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/rise.lrc"
                    },
                    {
                        src: "http://www.crayonsama.cn/crayonmusic/music/pleasedontgo.mp3",
                        name: "Please Don't Go",
                        singer: "Joel Adams",
                        lrc: "http://www.crayonsama.cn/crayonmusic/lrc/pleasedontgo.lrc"
                    }
                ]
            };
        },
        methods: {
            toLink() {
                this.$router.push("/about");
            },
            goBack() {
                this.$router.back();
            }
        },
        components: {
            CrayonMusic
        },
        mounted() {
            let _this = this;
        },
        activated() {
            this.$store.dispatch("modules/setModule", "");
            // let cH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            // this.$refs.wrapper.style.height = cH - 110 + "px";
        }
    }
</script>

<style lang="less" scoped>
    .cmc-wrapper {
        overflow-y: scroll;
        height: 100%;
        min-height: 650px;
        min-width: 1180px;
        flex: 1;
        position: relative;
        overflow: hidden;
    }

    .ca-back {
        position: absolute;
        top: 50px;
        left: 50px;
        cursor: pointer;
        z-index: 9;

        img {
            width: 50px;
            transition: all 0.3s;
        }
    }

    .ca-back:hover img {
        transform: translateX(-10px);
    }

    .cmc-content {
        height: 100%;
        width: 100%;
        margin: 0 auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cmc-info {
        border-right: 1px solid #222831;
        z-index: 9;
        position: fixed;
        width: 455px;
        left: -455px;
        top: 0px;
        bottom: 0;
        background-color: #edeff0;
        transition: all .4s;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;

        .cmc-info-btn {
            width: 30px;
            padding: 5px;
            position: absolute;
            right: -30px;
            background-color: #edeff0;
            border: 1px solid #222831;
            border-left: none;
            top: 50%;
            font-weight: bold;
            font-size: 12px;
            text-align: center;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
            transform: translateY(-50%);
            cursor: pointer;
        }

        span {
            color: #222831;
            font-weight: bold;
        }

        p {
            color: #4c84ff;
        }

        div {
            width: 100%;
            color: #222831;
            margin: 5px 0;
            text-align: left;
        }
    }

    .cmc-scroll {
        overflow-y: scroll;
        margin-bottom: 30px !important;
        padding-right: 10px;
    }

    .cmc-scroll::-webkit-scrollbar {
        width: 5px;
    }

    .cmc-scroll::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px #edeff0;
        border-radius: 50px;
        overflow: hidden;
        background: #222831;
    }

    .cmc-scroll::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px #edeff0;
        border-radius: 10px;
        background: #edeff0;
    }

    .cmc-info-show {
        left: 0;
    }

    .cmc-version {
        div {
            font-size: 12px;
        }
    }

    .cmc-ver-line {
        width: 200px;
        height: 1px;
        background-color: #222831;
        margin: 20px 0 !important;
    }

    .cmc-attention {
        height: 50px;
        position: absolute;
        bottom: 0;
        padding: 0 50px;
        left: 0;
        right: 0;
    }
</style>
