import { TweenMax } from "gsap/TweenMaxBase";
import { Sine } from "gsap/EasePack";
import { CSSPlugin } from "gsap/CSSPlugin";
const plugins = [Sine, CSSPlugin]; //eslint-disable-line

export const slideAnim = {
    props: {
        index: {
            type: Number,
            default: -1
        },
        values: {
            type: Object,
            default: function() {
                return {
                    backgroundColor: "blue"
                };
            }
        }
    },
    methods: {
        showMe(value, direction) {
            console.log(value, direction);
            if (value) {
                //this.$el.style.display = "flex";
                //this.$el.style.visibility = "visible";
                this.$el.classList.remove("hidden");
                TweenMax.to(this.$refs.wrapper, 0.6, {
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
                TweenMax.to(this.$refs.wrapper, 0.6, {
                    startAt: {
                        y: direction === "down" ? "0%" : "0%"
                    },
                    y: direction === "down" ? "-40%" : "100%",
                    ease: Sine.easeIn,
                    onComplete: () => {
                        //this.$el.style.display = "none";
                        //this.$el.style.visibility = "hidden";
                        this.$el.classList.add("hidden");
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
        /*if (this.$parent.current === this.index) {
            this.showMe(true, this.$parent.direction);
        } else {
            this.showMe(false, this.$parent.direction);
        }*/
    }
};
