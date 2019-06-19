import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2TouchEvents from "vue2-touch-events";

//window.$ = window.jQuery = require("jquery");

import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss";

Vue.use(Vue2TouchEvents);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
