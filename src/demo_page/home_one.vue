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
          <div class="">
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
          <div class="right">
            <div class="launch-date">
              Launching July 23 20:00 UTC
            </div>
          </div>
      </div>
    </section>
    <!--Home Section End -->
    <div class="coming-soon">
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
          <div class="video-container">
            <!-- <div class="fadeInLeft-land-caption text-center">
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
            </div> -->
            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/cDGtnT0Mpmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        
      </div>
    </div>
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
.container {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
.container {
  flex-direction: column;
}
}
.launch-date {
  width: max-content;
  height: 1em;
  z-index: 100;
  font-weight: bold;
  font-size: 1.5em;
  background: white;
  padding: 0.5em 0.5em 2em 0.5em;
  border-radius: 1em;
  font-style: italic;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.subtitle {
  text-align: center;
  line-height: 1em;
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  width: 75vw;
  height: 100%;
}
.video-container {
  position: relative;
  width: 100%;
  padding-top: 40%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
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
