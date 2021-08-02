<template>
  <div id="main_div">
    <!-- Home Section start-->
    <section id="home" class="home">
      <div class="home-decor">
        <div class="home-circle1">
          
        </div>
      </div>
      <div class="container">
          <div class="">
            <div class="home-contain">
              <div>
                <h1 class="title f-color font">
                  <span class="f-bold f-color font">Welcome to decentralized data storage.</span>
                </h1>
                <p class="title" style="font-weight:bold;">With the power of the Polygon Network & IPFS technology you can now host any file on the blockchain!</p>
                <div class="top-margin">
                  <button
                    type="button"
                    class="btn btn-custom theme-color theme-color"
                  >
                    <a
                      href="https://app.otterpocket.io"
                      style="color:white;"
                      >Launch dApp
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
<div class="col-md-11 d-medium-none">
          <div class="">
            <div class="about-phone">
            <img
                src="../assets/images/OPWGHOMEV2.png"
                class="img-fluid"
                alt="otterpocket"
              />
          </div>
          </div>
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
            <iframe class="responsive-iframe" src="https://gateway.pinata.cloud/ipfs/QmZU18jKwTsZunm2cVFEAAn7EP77wn9gi8pFRqFtq63ndU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        
      </div>
    </div>
    <div class="container">
          <div class="coming-soon" style="margin-top:50px;">
            
              <div>
            
              <p class="title" style="font-weight:bold;">*Hosted on IPFS.</p>
              
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

    <!-- Contact Section start -->
    <Price />
    <!-- Contact Section End -->

    <!--Subscribe section start-->
    <Roadmap />
    <!--Subscribe section Ends-->

  
    <Team />

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
  margin-top: 40px;
  width: 78vw;
  height: 100%;
}
.video-container {
  position: relative;
  width: 100%;
  padding-top: 40%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
.font {
  font-family: Poppins,sans-serif, cursive;
}
.color {
  color: #46cdfd;
}
.caption-img {
  width: 100%;
  border-radius: 3em;
}
</style>
