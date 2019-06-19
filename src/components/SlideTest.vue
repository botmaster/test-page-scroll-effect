<template>
    <div class="slide-test">
        <p>Je surkiff les mixins !!!</p>
        <div style="flex: 0 0 auto; min-width: 0;">
            <h2>Je suis le slide {{ index }}</h2>
            <h4>Je suis actif ? : {{ isActive }}</h4>
            <a href="http://www.lahautesociete.com">coucou</a>
        </div>
    </div>
</template>

<script>
/**
 * Created by PhpStorm.
 * User: pascal
 * Date: 2019-06-18
 * Time: 16:32
 */

import { slideAnim } from "../mixins/slideAnim";
import { TweenMax } from "gsap/TweenMaxBase";
import { Sine } from "gsap/EasePack";
import { CSSPlugin } from "gsap/CSSPlugin";
const plugins = [Sine, CSSPlugin]; //eslint-disable-line

export default {
    name: "SlideTest",
    mixins: [slideAnim],
    methods: {
        showMe(value, direction) {
            console.log(value, direction);
            if (value) {
                //this.$el.style.display = "flex";
                this.$el.style.visibility = "visible";
                TweenMax.to(this.$el, 0.6, {
                    startAt: {
                        scale: direction === "down" ? 0 : 0
                    },
                    scale: 1,
                    ease: Sine.easeOut,
                    onComplete: () => {
                        //this.$el.style.zIndex = 100;
                        this.$el.style.position = "relative";
                    }
                });
            } else {
                //this.$el.style.zIndex = this.index;
                this.$el.style.position = "absolute";
                TweenMax.to(this.$el, 0.6, {
                    startAt: {
                        scale: direction === "down" ? 1 : 1
                    },
                    scale: direction === "down" ? 0 : 0,
                    ease: Sine.easeIn,
                    onComplete: () => {
                        //this.$el.style.display = "none";
                        this.$el.style.visibility = "hidden";
                        this.$parent.isAnimating = false;
                    }
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.slide-test {
    z-index: 0;
    //overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 20px solid #1d1d1d;
    background-color: #42b983;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //display: none;
    visibility: hidden;
    user-select: none;

    img {
        width: 100%;
        height: auto;
    }
}
</style>
