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
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="video-container">
<iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube.com/embed/cDGtnT0Mpmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </div>
        </div>
        
      </div>
    </div>
    <div class="container">
          <div class="coming-soon" style="margin-top:50px;">
            
              <div>
            
              
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

    <!--Map Section Start-->
    <!--Map Section Ends-->
    <!-- Footer Section start -->
    <Footer />
    <!-- Footer Section End -->

    <js />
  </div>
</template>
<script>
import About from '../components/about.vue';
import Price from '../components/price.vue';
import Roadmap from '../components/roadmap.vue';
import Footer from '../components/footer.vue';

export default {
  name: "Home_one",
  components: {
    About,
    Price,
    Roadmap,
    Footer,
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
  height: 80%;
}
.video-container {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
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
