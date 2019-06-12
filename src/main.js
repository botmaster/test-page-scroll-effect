import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

window.$ = window.jQuery = require("jquery");

import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
