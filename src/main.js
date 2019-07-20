import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2TouchEvents from "vue2-touch-events";
import VueCarousel from "vue-carousel";

//window.$ = window.jQuery = require("jquery");

Vue.use(Vue2TouchEvents);
Vue.use(VueCarousel);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
