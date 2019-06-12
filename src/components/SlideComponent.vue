<template>
    <div class="slide-component">
        <div style="flex: 0 0 auto; overflow: hidden; min-width: 0;">
            <h2>Je suis le slide {{ index }}</h2>
            <h4>Je suis actif ? : {{ isActive }}</h4>
            <a href="http://www.lahautesociete.com">coucou</a>
            <div style="width: 100vw">
                <div
                    :id="'slider' + index"
                    data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
                    style="overflow: hidden;"
                >
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                    <div><h3>7</h3></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Created by PhpStorm.
 * User: pascal
 * Date: 2019-06-10
 * Time: 16:47
 */

import { TweenMax, Sine } from "gsap/all";
const plugins = [Sine]; //eslint-disable-line

import Slick from "slick-carousel"; //eslint-disable-line

export default {
    name: "SlideComponent",
    components: {},
    props: {
        index: {
            type: Number,
            default: -1
        }
    },
    methods: {
        showMe(value, direction) {
            console.log(value, direction);
            if (value) {
                //this.$el.style.display = "flex";
                this.$el.style.visibility = "visible";
                TweenMax.to(this.$el, 0.6, {
                    startAt: {
                        y: direction === "down" ? "100%" : "-40%"
                    },
                    y: "0%",
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
                        y: direction === "down" ? "0%" : "0%"
                    },
                    y: direction === "down" ? "-40%" : "100%",
                    ease: Sine.easeIn,
                    onComplete: () => {
                        //this.$el.style.display = "none";
                        this.$el.style.visibility = "hidden";
                        this.$parent.isAnimating = false;
                    }
                });
            }
        }
    },
    watch: {
        isActive(newValue, oldValue) {
            if (newValue !== oldValue) {
                console.log(newValue, oldValue);
                if (newValue === true) {
                    this.showMe(true, this.$parent.direction);
                } else {
                    this.showMe(false, this.$parent.direction);
                }
            }
        }
    },
    computed: {
        isActive() {
            return this.$parent.current === this.index;
        }
    },
    mounted() {
        if (this.$parent.current === this.index) {
            this.showMe(true, this.$parent.direction);
        } else {
            this.showMe(false, this.$parent.direction);
        }

        $("#slider" + this.index).slick();

        /*        $(".slider").slick({
            // normal options...
            infinite: false,

            // the magic
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 300,
                    settings: "unslick" // destroys slick
                }
            ]
        })*/
    }
};
</script>

<style lang="scss">
.slide-component {
    z-index: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #cccccc;
    background-color: white;

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

@media screen and (min-width: 53em) {
    /*.scroll-page-component {
        padding: 0;
        margin: 0;
    }
    .slide {
        height: 100vh;
    }*/
}
</style>
