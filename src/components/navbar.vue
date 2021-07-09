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
        <img src="../assets/images/icon/Title.png" width="200" alt="">
                <img src="../assets/images/icon/Otter.png" width="30" style="margin-left: 1em;" alt="">

        </b-navbar-brand>
      <b-collapse class="default-nav" is-nav id="nav_collapse">
        <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#about">about</b-nav-item>
                    <b-nav-item href="#team">Team</b-nav-item>

          <b-nav-item href="#roadmap">Roadmap</b-nav-item>
          <b-nav-item href="#tokenomics">Tokenomics</b-nav-item>
          <b-nav-item href="https://bafybeifxz3hiqpfh7qwpwg4xyww5axkjcozmm4736clden57m5px3z2hdu.ipfs.infura-ipfs.io/">White Paper</b-nav-item>

          <b-nav-item href="https://twitter.com/Otter_pocket">
            <img
              width="20em"
              src="../assets/images/icon/twitter.png"
              alt="logo"
            />
          </b-nav-item>

          <b-nav-item href="https://otterpocket.medium.com"
            ><img
              width="20em"
              src="../assets/images/icon/medium.png"
              alt="logo"
          /></b-nav-item>
          <b-nav-item href="https://t.me/otterpocketstorage"
            ><img
              width="20em"
              src="../assets/images/icon/telegram.png"
              alt="logo"
          /></b-nav-item>
          
          <b-nav-item href="https://app.otterpocket.io">
            <button
              type="button"
              class="btn btn-custom theme-color theme-color"
              style="margin-left: 0.5em;"
            >
              Pocket
            </button></b-nav-item
          >
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
