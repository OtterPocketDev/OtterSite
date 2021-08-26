<template>
  <div id="app">


    <router-view name="navbar"></router-view>
    <router-view />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    // MATOMO Analytics just to keep track of number of site visitors
    var _paq = (window._paq = window._paq || []);
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function() {
      var u = "https://otterpocket.matomo.cloud/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", "1"]);
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.type = "text/javascript";
      g.async = true;
      g.src = "//cdn.matomo.cloud/otterpocket.matomo.cloud/matomo.js";
      s.parentNode.insertBefore(g, s);
    })();

    this.$Progress.finish();
    this.loader();
  },
  created() {

  },
  methods: {

  }
};
</script>
