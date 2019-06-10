<template>
    <div class="crayon-index">
        <!-- <is-building :mod="'首页'"></is-building> -->
        <toast-msg ref="toast"></toast-msg>
        <div class="ci-music">
            <img src="../assets/img/music.png">
            <div>BGM: Echoes Of The Rainbow</div>
            <img src="../assets/img/play.png" v-if="!play" class="ci-music-btn" @click="playMusic(1)">
            <img src="../assets/img/pause.png" v-if="play" class="ci-music-btn" @click="playMusic(0)">
            <audio src="http://www.crayonsama.cn/crayonmusic/music/background.mp3" autoplay loop ref="indexaudio"></audio>
        </div>
        <div class="ci-wrapper">

            <div class="ci-left">
                <img src="../assets/img/home.png">
                <div class="ci-update">Last Posted @ 2019-05-23</div>
                <div class="ci-list">
                    <div class="ci-btn" @click="ChangeLink('docs')">
                        <div>Articles&nbsp;&nbsp;文章</div>
                        <div class="ci-hover"></div>
                    </div>
                    <div class="ci-jg">/</div>
                    <div class="ci-btn" @click="ChangeLink('projects')">
                        <div>Music&nbsp;&nbsp;音乐</div>
                        <div class="ci-hover"></div>
                    </div>
                    <div class="ci-jg">/</div>
                    <div class="ci-btn" @click="ChangeLink('diary')">
                        <div>Diary&nbsp;&nbsp;日记</div>
                        <div class="ci-hover"></div>
                    </div>
                </div>
                <div class="ci-list2">
                    <div class="ci-jg">/</div>
                    <div class="ci-btn" @click="ChangeLink('about')">
                        <div>About&nbsp;&nbsp;关于</div>
                        <div class="ci-hover"></div>
                    </div>
                </div>

            </div>
            <div class="ci-right">

            </div>
        </div>
    </div>
</template>

<script>
    import IsBuilding from "../components/common/Buiding.vue"
    import ToastMsg from "../components/common/Toast.vue"
    export default {
        data() {
            return {
                play: true
            };
        },
        components: {
            IsBuilding,
            ToastMsg
        },
        methods: {
            ChangeLink(mod) {
                if (mod === "home") {
                    this.$router.push("/");
                } else if (mod === "docs") {
                    this.$router.push("/docs");
                } else if (mod === "projects") {
                    // window.open('https://github.com/yohoozheng', "_blank");
                    this.$router.push("/crayon-music")
                } else if (mod === "diary") {
                    this.$refs.toast.toast("日记模块正在开发")
                    this.$router.push("/diary");
                } else if (mod === "about") {
                    this.$router.push("/about");
                }
            },
            playMusic(status){
                if(status){
                    this.play = true;
                    this.$refs.indexaudio.play();
                }else{
                    this.play = false;
                    this.$refs.indexaudio.pause();
                }
            },
            toMusic() {
                this.$router.push("/crayon-music")
            }
        },
        created() {

        },
        mounted() {
            var hm = document.createElement("script");
            hm.type = 'text/javascript';
            hm.src = "https://hm.baidu.com/hm.js?619a7adef6dfb09b29f6818cfce4e8e6";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        },
        activated() {
            this.$refs.indexaudio.play();
            this.$store.dispatch("modules/setModule", "home");
        }
    }
</script>

<style lang="less" scoped>
    .crayon-index {
        height: 100%;
        width: 100%;
        min-height: 859px;
        min-width: 1180px;
        position: relative;
        background-color: #f4f4f4;
        overflow: hidden;

        .ci-wrapper {
            width: 1180px;
            z-index: 9;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;

            .ci-left {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    width: 70%;
                }

                .ci-list,.ci-list2 {
                    width: 406px;
                    margin-top: 48px;
                    display: flex;
                    justify-content: flex-end;

                    .ci-jg {
                        margin: 0 12px;
                    }

                    .ci-btn {
                        color: #000000;
                        cursor: pointer;
                    }

                    .ci-hover {
                        width: 0;
                        margin-top: 4px;
                        height: 1px;
                        background-color: #000000;
                        transition: all 0.2s;
                        border-radius: 15px;
                    }

                    .ci-btn:hover .ci-hover {
                        width: 100%;
                    }
                }
                .ci-list2{
                    margin-top: 12px;
                    margin-right: 12px;
                }

                .ci-update {
                    width: 406px;
                    font-size: 12px;
                    color: #000;
                    text-align: right;
                }
            }

            .ci-right {
                height: 364.62px;
                width: 50%;
                border-radius: 5px;
                overflow: hidden;
                background-image: url("../assets/img/h-card.jpg");
                background-size: contain;
            }
        }

        .ci-music {
            position: fixed;
            bottom: 24px;
            left: 24px;
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: bold;

            img {
                width: 20px;
                margin-right: 12px;
            }
            .ci-music-btn{
                cursor: pointer;
                width: 10px;
                margin-left: 12px;
            }
        }

    }
</style>
