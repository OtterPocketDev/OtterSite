<template>
  <div id="main_div">
    <!-- Home Section start-->
    <section id="home" class="home">
      <div class="home-decor">
        <div class="home-circle1">
          <img src="../assets/images/main-banner3.png" alt="" />
        </div>
        <div class="home-circle2">
          <img src="../assets/images/main-banner12.png" alt="" />
        </div>
        <div class="home-circle3">
          <img src="../assets/images/main-banner1.png" alt="" />
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="home-contain">
              <div>
                <h1>
                  <span class="f-bold font color">OTTER</span>
                  <span class="f-bold f-color font">Pocket</span>
                </h1>
                <h4>Decentralized File Storage</h4>
                <h5>On the Polygon Network</h5>
                <div class="top-margin">
                  <button
                    type="button"
                    class="btn btn-custom theme-color theme-color"
                  >
                    <a
                      href="https://app.otterpocket.io"
                      style="color:white;"
                      >OtterPocket
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 offset-md-1">
            <div class="home-right">
              <!-- Tile js start -->
              <Tile :image="'launch.png'" />

              <!-- Tile js end -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Home Section End -->
    <section class="authentication-form coming-soon">
      <div class="innerpage-decor">
        <div class="innerpage-circle1">
          <img :src="'../assets/images/Testimonial2.png'" alt="" />
        </div>
        <div class="innerpage-circle2">
          <img :src="'../assets/images/Testimonial1.png'" alt="" />
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-6 offset-xl-3">
            <div class="fadeInLeft-land-caption text-center">
              <h1 class="color">LATEST OTTER NEWS</h1> 
              <div class="">
                <div style="margin: 4em 0; font-size: 1.2em; font-weight: bold; ">
                 <img src="../assets/images/icon/OPIC5.png" width="30" alt=""> Succesful Airdrop June 25th
                </div>
                <div style="margin: 4em 0; font-size: 1.2em; font-weight: bold; ">
                 <img src="../assets/images/icon/OPIC5.png" width="30" alt=""> Presale Completed July 6th
                </div>
                <div style="margin: 4em 0; font-size: 1.2em; font-weight: bold; ">
                  Otter IDO coming soon...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Start  -->
    <About />
    <!-- About End -->

    <!-- Feature Section start -->
    <Feature />
    <!-- Feature Section End -->
    <!-- team Section End -->
    <!-- testimonial Section End -->
    <Team />
    <!-- Contact Section start -->
      <Roadmap />
    <!-- Contact Section End -->

    <!--Subscribe section start-->
    <Price />
    <!--Subscribe section Ends-->

    <!--Map Section Start-->
    <!--Map Section Ends-->
    <!-- Footer Section start -->
    <Footer />
    <!-- Footer Section End -->

    <js />
  </div>
</template>
<script>
import Vue from "vue";
import VueCountdown from "@xkeshi/vue-countdown";
Vue.component(VueCountdown.name, VueCountdown);
export default {
  name: "Home_one",

  CbeforeCreate: function() {
    document.body.className = "";
  },
  mounted() {
    const date = new Date(Date.UTC(2021, 5, 18, 16, 0, 0));
    let countdown = setInterval(() => {
      let now = new Date().getTime();
      var distance = date - now;

      this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.countdown.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  },
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  }
};
</script>

<style lang="css">
.font {
  font-family: pacifico, cursive;
}
.color {
  color: #46cdfd;
}
.caption-img {
  width: 100%;
  border-radius: 3em;
}
</style>
