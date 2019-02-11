<template>
    <div id="app">
        <!-- <a
            href="#"
            style="position:fixed;z-index:1000;right:10px;top:10px;font-size:12px;text-decoration:none;"
            @click.prevent="audioPlayState=!audioPlayState;audioPlay(audioPlayState)"
        >音乐开关</a>-->
        <transition name="slide-fade">
            <router-view v-if="!$route.meta.keepAlive"/>
        </transition>
        <transition name="slide-fade">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
/* eslint-disable */
import Audio from "@/utils/audio";
import domFn from "@/utils/dom";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            audioPlayState: false
        };
    },
    mounted() {
        // setTimeout(() => {
        //     Audio.loopPlay("/music/weiweiyixiao.mp3", "weiweiyixiao");
        // })
        this.$store.dispatch("user/udtInfo");
        //	更新窗口大小
        domFn.addListen(window, "resize", () => {
            this.updateWindowSize();
        });
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .then((reg) => {
                    console.log("service worker registed!");
                })
                // .reject(err => {
                //     console.log("Opooos, something wrong happend!");
                // });
        }
    },
    methods: {
        ...mapActions([
            "global/actionSetWindowWidth",
            "global/actionSetWindowHeight"
        ]),
        audioPlay(state) {
            Audio.switchPlay("weiweiyixiao", state);
        },
        updateWindowSize() {
            this["global/actionSetWindowWidth"](window.innerWidth);
            this["global/actionSetWindowHeight"](window.innerHeight);
        }
    }
};
</script>


<style lang="postcss">

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0; */
    * {
        backface-visibility: hidden;
    }
}
.slide-fade {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.slide-fade-enter-active {
    transition: all 1.2s ease;
}
.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    left: 0;
    right: 0;
    transform: translateX(50px);
    opacity: 0;
}
</style>
