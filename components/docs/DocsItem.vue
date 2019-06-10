<template>
    <div class="di-wrapper" @mouseenter="showContent" @mouseleave="hideContent" @click="toDoc(item.key)">
        <img :src="item.img" class="di-img">

        <div class="di-content" :class="show ? 'di-show' : ''">
            <div>摘要：{{item.content}}</div>
        </div>
        <div class="di-bottom">
            <div class="di-tit">{{item.tit}}</div>
            <div class="di-time">posted @ {{item.time}} {{item.author}}</div>
        </div>


    </div>
</template>

<script>
    export default {
        props: ['item', 'index'],
        data() {
            return {
                show: false
            };
        },
        methods: {
            toDoc(docKey) {
                this.$router.push({
                    path: "/doc",
                    query: {
                        key: docKey
                    }
                });
            },
            showContent() {
                this.show = true;
            },
            hideContent(){
                this.show = false;
            }
        },
    }
</script>

<style lang="less" scoped>
    .di-wrapper {
        width: 350px;
        height: 272px;
        margin-top: 50px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(28, 31, 33, .4);
        cursor: pointer;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .di-img {
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            width: 100%;
            height: 197px;
        }
        .di-bottom{
            width: 100%;
            position: absolute;
            bottom: 0;
            z-index: 8;
            background-color: #ffffff;
        }
        .di-tit {
            margin: 12px 0;
            font-size: 14px;
            font-weight: bold;
            color: #000000;
            cursor: pointer;
            text-align: left;
            padding-left: 24px;
            transition: all .1s;
        }


        .di-content {
            position: absolute;
            top: 197px;
            width: 100%;
            height: 197px;
            padding: 0 24px;
            background-color: rgba(255,255,255,1);
            font-size: 14px;
            word-wrap: break-word;
            word-break: break-all;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            z-index: 7;
            div{

            }
        }

        .di-show {
            top: 0;
        }

        .di-time {
            font-size: 12px;
            text-align: left;
            padding-left: 24px;
            margin-bottom: 12px;
        }
    }
</style>
