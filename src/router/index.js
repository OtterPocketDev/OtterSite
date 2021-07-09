import Vue from "vue";
import Router from "vue-router";
import Homeone from "@/demo_page/home_one";

import Navbar from "@/components/navbar";
import About from "@/components/about";
import Feature from "@/components/feature";
import Roadmap from "@/components/roadmap";
import Team from "@/components/team";
import Price from "@/components/price";
import Tile from "@/components/tile";
import Footer from "@/components/footer";
import js from "@/components/js";
import color from "@/components/color";

Vue.use(Router);
Vue.component("Navbar", Navbar);
Vue.component("About", About);
Vue.component("Team", Team);
Vue.component("Feature", Feature);
Vue.component("Roadmap", Roadmap);
Vue.component("Price", Price);
Vue.component("Footer", Footer);
Vue.component("js", js);
Vue.component("Tile", Tile);
Vue.component("color", color);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Homeone,
        navbar: Navbar
      }
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
