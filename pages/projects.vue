<template>
    <div class="crayon-projects">
        <div class="cp-wrapper">

            <object data="http://yohoozheng.github.io/Subentry/RetroSnaker.html" type="text/html" width="100%" height="100%"></object>



<!--            <ul class="cp-list">-->
<!--                <li class="cp-title">最热项目</li>-->
<!--                <li>-->
<!--                    <div class="cp-point"></div>-->
<!--                    <a @click="toProject(0)">-->
<!--                        <div style="width:250px;height:50px;text-align: center;line-height: 50px;color: #000000;">-->
<!--                            PC贪吃蛇-->
<!--                        </div>-->
<!--                        <span class="hover">-->
<!--							<i class="icon-column-enter"></i>-->
<!--						</span>-->
<!--                        <i class="mLiens">-->
<!--                            <i class="line line1"></i>-->
<!--                            <i class="line line2"></i>-->
<!--                            <i class="line line3"></i>-->
<!--                            <i class="line line4"></i>-->
<!--                        </i>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="cp-point"></div>-->
<!--                    <a @click="toProject(1)">-->
<!--                        <div style="width:250px;height:50px;text-align: center;line-height: 50px;color: #000000;">-->
<!--                            PC校长吃热狗-->
<!--                        </div>-->
<!--                        <span class="hover">-->
<!--							<i class="icon-column-enter"></i>-->
<!--						</span>-->
<!--                        <i class="mLiens">-->
<!--                            <i class="line line1"></i>-->
<!--                            <i class="line line2"></i>-->
<!--                            <i class="line line3"></i>-->
<!--                            <i class="line line4"></i>-->
<!--                        </i>-->
<!--                    </a>-->
<!--                </li>-->
<!--            </ul>-->
<!--            <ul class="cp-more">-->
<!--                <li class="cp-title">更多项目</li>-->
<!--                <li>-->
<!--                    <a href="https://github.com/yohoozheng" target="_blank">-->
<!--                        <div style="width:300px;height:50px;text-align: center;line-height: 50px;color: #000000;">GitHub-->
<!--                            =>-->
<!--                            github.com/yohoozheng-->
<!--                        </div>-->
<!--                        <span class="hover">-->
<!--							<i class="icon-column-enter"></i>-->
<!--						</span>-->
<!--                        <i class="mLiens">-->
<!--                            <i class="line line1"></i>-->
<!--                            <i class="line line2"></i>-->
<!--                            <i class="line line3"></i>-->
<!--                            <i class="line line4"></i>-->
<!--                        </i>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="http://jsrun.net/user/jsnoob" target="_blank">-->
<!--                        <div style="width:300px;height:50px;text-align: center;line-height: 50px;color: #000000;">JsRun-->
<!--                            =>-->
<!--                            jsrun.net/user/jsnoob-->
<!--                        </div>-->
<!--                        <span class="hover">-->
<!--							<i class="icon-column-enter"></i>-->
<!--						</span>-->
<!--                        <i class="mLiens">-->
<!--                            <i class="line line1"></i>-->
<!--                            <i class="line line2"></i>-->
<!--                            <i class="line line3"></i>-->
<!--                            <i class="line line4"></i>-->
<!--                        </i>-->
<!--                    </a>-->
<!--                </li>-->
<!--            </ul>-->
        </div>
    </div>
</template>

<script>
    import IsBuilding from "../components/common/Buiding.vue"

    export default {
        data() {
            return {};
        },
        components: {
            IsBuilding
        },
        methods: {
            toProject(index) {
                this.$router.push({
                    path: "/propage",
                    query: {
                        key: index
                    }
                });
            }
        },
        activated() {
            this.$store.dispatch("modules/setModule", "projects");
            let top = 0;
            let timer = setInterval(function () {
                top += 4;
                document.documentElement.scrollTop = top;
                document.body.scrollTop = top;
                if (top >= 60) {
                    clearInterval(timer);
                }
            }, 10)
        }
    }
</script>

<style lang="less" scoped>
    .crayon-projects {
        height: 100%;
        min-height: 859px;
        min-width: 1180px;
        position: relative;
        background-color: #ffffff;
    }
    object{
        height:100%;
    }

    .cp-wrapper {
        height: 100%;
        width: 1180px;
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        .cp-list,
        .cp-more {
            padding: 30px 0;
            position: absolute;

            li {
                margin: 10px 0;
                font-size: 15px;
                position: relative;
            }

            li a {
                position: relative;
                margin: 0 0 15px;
                display: block;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }

            li img {
                display: block;
            }

            li .hover {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
                overflow: hidden;
                animation: scaleIn .1s ease-out;
                -webkit-animation: scaleIn .1s ease-out;
                display: none;
            }

            li .mLiens {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 100%;
                z-index: 4;
            }

            li .hover em {
                color: #000000;
                font-size: 14px;
                margin: -10px 0 0;
                text-align: center;
                display: block;
                position: absolute;
                top: 50%;
                left: 0;
                width: 100%;
                height: 20px;
                line-height: 20px;
                padding: 0 10px;
                box-sizing: border-box;
            }

            li a .line {
                transition: all .2s linear;
                position: absolute;
                background: #000000;
            }

            li a .line1 {
                top: 0;
                left: 0;
                width: 0;
                height: 2px;
            }

            li a .line2 {
                top: 0;
                right: 0;
                width: 2px;
                height: 0;
            }

            li a .line3 {
                bottom: 0;
                right: 0;
                width: 0;
                height: 2px;
            }

            li a .line4 {
                bottom: 0;
                left: 0;
                width: 2px;
                height: 0;
            }

            li a:hover .line1 {
                width: 100%;
            }

            li a:hover .line2 {
                height: 100%;
            }

            li a:hover .line3 {
                width: 100%;
            }

            li a:hover .line4 {
                height: 100%;
            }

            li a:hover .hover {
                display: block;
            }

            .cp-title {
                font-size: 30px;
                font-weight: bold;
            }

            .cp-point {
                position: absolute;
                left: -20px;
                top: 50%;
                margin-top: -5px;
                width: 10px;
                height: 10px;
                background-color: #000000;
                border-radius: 50%;
            }
        }

        .cp-list {
            top: 0;
            left: 0;
        }

        .cp-more {
            bottom: 0;
            right: -30px;
        }
    }

    #wrapper {
        width: 100%;
        height: 100vh;
    }

    #svg_container {
        width: calc(100vh - 40px);
        height: calc(100vh - 40px);
        margin: 0 auto;
        padding: 20px 0;
    }

    @font-face {
        font-family: sofia3;
        src: url(https://assets.pixlee.com/pixlee_fonts/sofia_regular.otf);
    }

    .sofia3 {
        font-family: sofia3, sans-serif;
    }


    #Layer_2.active {
        animation-duration: 50s;
        -webkit-animation-duration: 50s;
        -moz-animation-duration: 50s;
        animation-name: spin_backward;
        -webkit-animation-name: spin_backward;
        -moz-animation-name: spin_backward;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        transform-origin: center center;
        -webkit-transform-origin: center center;
        -moz-transform-origin: center center;
    }

    #Layer_3.active {
        animation-duration: 40s;
        -webkit-animation-duration: 40s;
        -moz-animation-duration: 40s;
        animation-name: spin_forward;
        -webkit-animation-name: spin_forward;
        -moz-animation-name: spin_forward;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        transform-origin: center center;
        -webkit-transform-origin: center center;
        -moz-transform-origin: center center;
    }

    #Layer_4.active {
        animation-duration: 20s;
        -webkit-animation-duration: 20s;
        -moz-animation-duration: 20s;
        animation-name: spin_backward;
        -webkit-animation-name: spin_backward;
        -moz-animation-name: spin_backward;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        transform-origin: center center;
        -webkit-transform-origin: center center;
        -moz-transform-origin: center center;
    }

    @keyframes spin_forward {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spin_forward {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-moz-keyframes spin_forward {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes spin_backward {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

    @-webkit-keyframes spin_backward {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

    @-moz-keyframes spin_backward {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

</style>
