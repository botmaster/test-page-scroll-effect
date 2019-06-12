<template>
    <div class="home">
        <scroll-page-component>
            <slide-component :index="0" :key="1"></slide-component>
            <slide-component :index="1" :key="2"></slide-component>
            <slide-component :index="2" :key="3"></slide-component>
            <slide-component :index="3" :key="4"></slide-component>
        </scroll-page-component>
    </div>
</template>

<script>
// @ is an alias to /src

//import TweenMax from "gsap/TweenMax";

import SlideComponent from "../components/SlideComponent";
import ScrollPageComponent from "../components/ScrollPageComponent";

export default {
    name: "home",
    components: { ScrollPageComponent, SlideComponent }
};
</script>

<style lang="scss" scoped>
.home {
    flex: 1 1 0%;
}
</style>
