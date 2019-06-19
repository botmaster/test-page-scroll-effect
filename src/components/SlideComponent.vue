<template>
    <div
        class="slide-component"
        :style="'backgroundColor:' + values.backgroundColor"
    >
        <div style="flex: 0 0 auto; min-width: 0;">
            <h2>Je suis le slide {{ index }}</h2>
            <h4>Je suis actif ? : {{ isActive }}</h4>
            <a href="http://www.lahautesociete.com">coucou</a>
            <div style="width: 60vw">
                <div
                    :id="'slider' + index"
                    data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
                    style="overflow: visible;"
                >
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                    <div><h3>7</h3></div>
                    <div><h3>8</h3></div>
                    <div><h3>9</h3></div>
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

import Slick from "slick-carousel"; //eslint-disable-line

import { slideAnim } from "../mixins/slideAnim";

export default {
    name: "SlideComponent",
    mixins: [slideAnim],
    components: {},
    props: {
        values: {
            type: Object,
            default: function() {
                return {
                    backgroundColor: "blue"
                };
            }
        }
    },
    methods: {},
    watch: {},
    computed: {},
    mounted() {
        $("#slider" + this.index).slick();
    }
};
</script>

<style lang="scss">
.slide-component {
    z-index: 0;
    //overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: Black;

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
