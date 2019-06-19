<template>
    <div v-touch:swipe="swipeHandler" class="scroll-page-component">
        <slot></slot>
        <nav class="slidenav">
            <button
                @click.prevent="prev"
                class="slidenav__item slidenav__item--prev"
            >
                Previous
            </button>
            <button
                @click.prevent="next"
                class="slidenav__item slidenav__item--next"
            >
                Next
            </button>
        </nav>
    </div>
</template>

<script>
/**
 * Created by PhpStorm.
 * User: pascal
 * Date: 2019-06-11
 * Time: 09:34
 */

import Hammer from "hammerjs";

export default {
    name: "ScrollPageComponent",
    data() {
        return {
            current: 0,
            slides: [],
            isAnimating: false,
            direction: "down"
        };
    },
    computed: {
        slidesTotal() {
            return this.slides.length;
        }
    },
    methods: {
        prev() {
            this.navigate("up");
        },
        next() {
            this.navigate("down");
        },
        navigate(direction) {
            console.log(direction);
            if (this.isAnimating) return;
            this.isAnimating = true;
            this.direction = direction;
            let nextSlidePos;
            if (direction !== "down") {
                if (this.current > 0) {
                    nextSlidePos = this.current - 1;
                } else {
                    nextSlidePos = 0;
                    this.isAnimating = false;
                }
            } else {
                if (this.current < this.slidesTotal - 1) {
                    nextSlidePos = this.current + 1;
                } else {
                    nextSlidePos = this.slidesTotal - 1;
                    this.isAnimating = false;
                }
            }

            console.log(nextSlidePos);
            //this.$refs.slide[nextSlidePos].showMe("coucou");
            //this.isAnimating = false;
            this.current = nextSlidePos;
        },
        swipeHandler(direction) {
            console.log(direction);
            switch (direction) {
                case "top":
                    this.navigate("down");
                    break;
                case "bottom":
                    this.navigate("up");
                    break;
                default:
                    break;
            }
        }
    },
    mounted() {
        console.log(this.$slots.default.length);
        this.slides = this.$slots.default;

        /*let mc = new Hammer(this.$el, {
            cssProps: {
                userSelect: false
            }
        });

        // let the pan gesture support all directions.
        // this will block the vertical scrolling on a touch-device while on the element
        mc.get("pan").set({
            direction: Hammer.DIRECTION_ALL
        });

        // listen to events...
        mc.on("panleft panright panup pandown tap press", ev => {
            console.log("event type: ", ev.type);
            switch (ev.type) {
                case "panup":
                    this.navigate("down");
                    break;
                case "pandown":
                    this.navigate("up");
                    break;
                default:
                    break;
            }
        });*/
    }
};
</script>

<style lang="scss" scoped>
.scroll-page-component {
    cursor: grab;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    //pointer-events: none;
    overflow: hidden;
}

.slidenav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: lowercase;
}

.slidenav__item {
    pointer-events: auto;
    border: 0;
    background: none;
    padding: 1rem;
    margin: 0.85rem;
    text-transform: inherit;
    position: relative;
    line-height: 1;
    color: var(--color-nav);
}

.slidenav__item::before,
.slidenav__item::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 1px;
    background: currentColor;
    top: 50%;
}

.slidenav__item::before {
    right: 100%;
}

.slidenav__item::after {
    left: 100%;
}

.slidenav__item:hover {
    color: var(--color-link-hover);
}

.slidenav__item--prev {
    transform: rotate(-90deg) translateY(-50%);
}

.slidenav__item--next {
    transform: rotate(90deg) translateY(-25%);
}

.slidenav__preview {
    pointer-events: auto;
    color: var(--color-nav);
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    border: 0;
    background: none;
    padding: 1rem;
    transition: 0.3s transform;
}

.slidenav__preview:hover {
    color: var(--color-link-hover);
}

.slidenav__preview .icon {
    pointer-events: none;
}

.slidenav__preview--open {
    transform: translateX(-50%) rotate(180deg);
}

@media screen and (min-width: 53em) {
    .scroll-page-component {
        padding: 0;
        margin: 0;
    }
}
</style>
