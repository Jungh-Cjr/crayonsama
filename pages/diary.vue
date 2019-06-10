<template>
    <div class="crayon-diary">
        <div class="cd-music">
            <img src="../assets/img/music.png">
            <div>BGM: Echoes Of The Rainbow</div>
            <img src="../assets/img/play.png" v-if="!play" class="cd-music-btn" @click="playMusic(1)">
            <img src="../assets/img/pause.png" v-if="play" class="cd-music-btn" @click="playMusic(0)">
            <audio src="http://www.crayonsama.cn/crayonmusic/music/background.mp3" autoplay loop ref="indexaudio"></audio>
        </div>
        <div class="cd-wrapper">

        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                play: true
            };
        },
        components: {
        },
        methods: {

            playMusic(status){
                if(status){
                    this.play = true;
                    this.$refs.indexaudio.play();
                }else{
                    this.play = false;
                    this.$refs.indexaudio.pause();
                }
            },

        },
        created() {

        },
        mounted() {

        },
        activated() {

        }
    }
</script>

<style lang="less" scoped>
    .crayon-diary{
        height: 100%;
        width: 100%;
        min-height: 859px;
        min-width: 1180px;
        position: relative;
        .cd-wrapper{
            width: 1180px;
            margin: 0 auto;
        }
    }


    .cd-music {
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
        .cd-music-btn{
            cursor: pointer;
            width: 10px;
            margin-left: 12px;
        }
    }
</style>
