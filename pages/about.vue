<template>
    <div class="crayon-about">
        <!-- <is-building :mod = "'about'"></is-building> -->

        <div class="ca-wapper">
            <div class="ca-back" @click="goBack()">
                <img src="../assets/img/back.png">
            </div>
            <div class="ca-left">
                <ul>
                    <li :class="index === 0 ? 'selected' : ''" @click="index = 0">关于网站</li>
                    <li :class="index === 1 ? 'selected' : ''" @click="index = 1">鸣谢</li>
                    <li :class="index === 2 ? 'selected' : ''" @click="index = 2">联系我</li>
                    <li class="ca-line"
                        :class="index === 0 ? 'line-top0' : index === 1 ? 'line-top1' : 'line-top2'"></li>
                </ul>
            </div>
            <div class="ca-right">
                <div class="ca-right-box" :class="index === 0 ? 'top0' : index === 1 ? 'top1' : 'top2'">
                    <div class="ca-card ca-card1">
                        <p style="font-size: 30px;margin-bottom: 30px;">CrayonSama</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;CrayonSama个人网站仅供个人学习和知识的分享，并且致力于个人独立完成整站的架构和编写，当然这其中也包含了很多朋友的帮助，包括知识的分享以及技能的传授，他们都是在建设网站中不可或缺的一份力量。</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;因为个人网站为独立开发，所以开发周期飘忽不定，并伴随着大量的兼容问题，可能导致部分游客页面出错，在这里向您表示歉意，我会尽快对这些问题进行修复和处理，如果对本站有任何意见或建议，请您联系我，我会在第一时间进行反馈，谢谢。</p>
                        <p style="font-size: 30px;margin-bottom: 30px;margin-top: 50px;">关于设计</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;本站设计或部分图片为本人自己制作，其他图片均来自百度搜索，相关引用会在鸣谢中标明，其他原创图片或项目转载请注明出处以及本站链接，谢谢配合，版权需要大家共同维护。</p>
                    </div>
                    <div class="ca-card ca-card2">
                        <p style="font-size: 30px;margin-bottom: 30px;">感谢</p>
                        <p>感谢<a href="http://jsrun.net/user/lohiecan" target="_blank">JSRUN在线编辑器网站</a>站长lohiecan提供以下代码支持：移动端404动画；
                        </p>
                        <p>感谢@gaoyang、@廖廖廖懒懒懒、@Jy.Kiko喵提供技术与创意帮助；</p>
                        <p>感谢<a href="https://account.aliyun.com/" target="_blank">阿里云</a>提供技术支持。</p>
                    </div>
                    <div class="ca-card ca-card3">
                        <p>邮箱：icefish_studio@163.com</p>
                        <p>知乎：Crayono丷9尾鱼</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import IsBuilding from "../components/common/Buiding.vue"

    export default {
        data() {
            return {
                index: 0
            };
        },
        methods: {
            goBack() {
                this.$router.back();
            }
        },
        components: {
            IsBuilding
        },
        activated() {
            this.$store.dispatch("modules/setModule", "about");
        }
    }
</script>

<style lang="less" scoped>
    .crayon-about {
        height: 100%;
        width: 100%;
        min-height: 768px;
        min-width: 1180px;
        position: relative;
        background-color: #ffffff;
        display: flex;
        align-items: center;
    }

    .ca-wapper {
        width: 1180px;
        height: 768px;
        margin: 0 auto;
        position: relative;
        display: flex;

        .ca-back {
            position: absolute;
            top: 50px;
            left: 0;
            cursor: pointer;

            img{
                width: 50px;
                transition: all 0.3s;
            }
        }
        .ca-back:hover img{
            transform: translateX(-10px);
        }

        .ca-left {
            width: 200px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            ul {
                width: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                li {
                    width: 100%;
                    text-align: left;
                    padding-left: 25px;
                    font-size: 17px;
                    color: #000000;
                    margin: 10px 0;
                    cursor: pointer;
                    height: 40px;
                    line-height: 40px;
                }

                li:hover {
                    color: #000000;
                }

                .selected {
                    font-size: 20px;
                }

                .selected:hover {
                    color: #000000;
                }

                .ca-line {
                    position: absolute;
                    width: 5px;
                    height: 40px;
                    margin: 0;
                    padding: 0;
                    left: 0;
                    transition: all .3s;
                    background-color: #000000;
                    top: 10px;
                }

                .line-top0 {
                    top: 10px;
                }

                .line-top1 {
                    top: 70px;
                }

                .line-top2 {
                    top: 130px;
                }
            }
        }

        .ca-right {
            flex: 1;
            overflow: hidden;
            position: relative;

            .ca-right-box {
                height: 2577px;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                transition: all .3s;

                .ca-card {
                    height: 768px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 30px;
                }

                .ca-card1 {
                    padding: 100px;
                }

                .ca-card2 {
                    align-items: flex-start;
                    padding: 100px;

                    p {
                        margin: 10px 0;
                    }

                    a {
                        color: #000000;
                    }
                }

                .ca-card3 {
                    p {
                        font-size: 12px;
                        margin: 10px 0;
                    }
                }
            }

            .top0 {
                top: 0;
            }

            .top1 {
                top: -768px;
            }

            .top2 {
                top: -1536px;
            }
        }
    }

    p {
        font-size: 14px;
        margin: 10px 0;
    }
</style>
