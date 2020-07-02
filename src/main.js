import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import AOS from "aos";
import "aos/dist/aos.css";

Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount("#app");
