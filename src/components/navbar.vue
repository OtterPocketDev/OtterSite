<template>
  <b-navbar
    type="light"
    class="navbar-light theme-nav fixed-top"
    toggleable="lg"
    fixed="top"
    v-b-scrollspy:nav-scroller
  >
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="navbar-brand" href="#home"
        >
        <img src="../assets/images/icon/logo.svg" width="150" style="margin-left:29px;" alt="">
      </b-navbar-brand>
      <b-collapse class="default-nav" is-nav id="nav_collapse">
        <b-navbar-nav class="navbar-nav ml-auto damenu" id="mymenu" >
          
    <div class="mymenu">
          <b-nav-item href="https://otterpocket.medium.com">
            <img
              width="50em"
              src="../assets/images/icon/OPMEDIUM.svg"
              alt="logo"
            />
          </b-nav-item>

          <b-nav-item href="https://www.instagram.com/otterpocketofficial/"
            ><img
              width="50em"
              src="../assets/images/icon/OPINSTAGRAM.svg"
              alt="logo"
          /></b-nav-item>
          <b-nav-item href="https://twitter.com/Otter_pocket"
            ><img
              width="50em"
              src="../assets/images/icon/OPTWITTER.svg"
              alt="logo"
          /></b-nav-item>
          <b-nav-item href="https://t.me/otterpocketstorage"
            ><img
              width="50em"
              src="../assets/images/icon/OPTELEGRAM.svg"
              alt="logo"
          /></b-nav-item>
     </div>    
            <button
                    type="button"
                    class="btn btn-custom theme-color theme-color"
                  ><a
                      href="https://app.otterpocket.io" 
                      style="color:white;"
                      >Otter dApp
                    </a>
                  </button>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
.mymenu {
  display: flex;
  flex-direction: row;
}
</style>