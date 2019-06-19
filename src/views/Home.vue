<template>
    <div class="home">
        <scroll-page-component>
            <slide-component
                :index="0"
                :key="1"
                :values="{ backgroundColor: '#bdc667' }"
            ></slide-component>
            <slide-component
                :index="1"
                :key="2"
                :values="{ backgroundColor: '#8bab81' }"
            ></slide-component>
            <slide-component
                :index="2"
                :key="3"
                :values="{ backgroundColor: '#47a89f' }"
            ></slide-component>
            <slide-component
                :index="3"
                :key="4"
                :values="{ backgroundColor: '#c583b2' }"
            ></slide-component>
            <slide-test :index="4"></slide-test>
        </scroll-page-component>
    </div>
</template>

<script>
// @ is an alias to /src

//import TweenMax from "gsap/TweenMax";

import SlideComponent from "../components/SlideComponent";
import ScrollPageComponent from "../components/ScrollPageComponent";
import SlideTest from "../components/SlideTest";

export default {
    name: "home",
    components: { SlideTest, ScrollPageComponent, SlideComponent }
};
</script>

<style lang="scss" scoped>
.home {
    flex: 1 1 0%;
}
</style>
