<template>
    <div class="slide-component hidden">
        <div
            ref="wrapper"
            :style="'backgroundColor:' + values.backgroundColor"
            class="wrapper"
            style=""
        >
            <div style="flex: 0 0 auto; min-width: 0;">
                <h2>Je suis le slide {{ index }}</h2>
                <h4>Je suis actif ? : {{ isActive }}</h4>
                <a href="http://www.lahautesociete.com">coucou</a>
                <div style="width: 60vw">
                    <carousel>
                        <slide>
                            Slide 1 Content
                        </slide>
                        <slide>
                            Slide 2 Content
                        </slide>
                        <slide>
                            Slide 3 Content
                        </slide>
                        <slide>
                            Slide 4 Content
                        </slide>
                        <slide>
                            Slide 5 Content
                        </slide>
                        <slide>
                            Slide 6 Content
                        </slide>
                        <slide>
                            Slide 7 Content
                        </slide>
                    </carousel>
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
    mounted() {}
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

    user-select: none;

    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 1px solid black;
        background-color: Black;
    }

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
