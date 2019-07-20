<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "app",
    mounted() {}
};
</script>

<style lang="scss">
/**
 * Set up a decent box model on the root element
 */

html {
    box-sizing: border-box;
}

/**
     * Make all elements from the DOM inherit from the parent box-sizing
     * Since `*` has a specificity of 0, it does not override the `html` value
     * making all elements inheriting from the root box-sizing value
     * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
     */

*,
*::before,
*::after {
    box-sizing: inherit;
}

html,
body {
    overflow: hidden;
    height: 100%;
}
body {
    position: relative;
}

body {
    padding: 0;
    margin: 0;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;

    display: flex;
    flex-direction: column;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.hidden {
    position: absolute !important;
    overflow: hidden !important;
    width: 0 !important;
    height: 0 !important;
    pointer-events: none !important;
}
</style>
