<template>
  <!-- Feature Section start -->
  <section id="feature" class="feature">
    <div class="feature-decor">
      <div class="feature-circle1">
        <img :src="'../assets/images/feature2.png'" alt="" />
      </div>
    </div>
    <div class="about-decor">
      <div class="about-circle1" style="z-index: 1;">
        <img src="../assets/images/team1.png" alt="team1" />
      </div>
      <div
        class="about-circle2"
        style="z-index: 0; position: absolute; left: 10em;"
      >
        <img src="../assets/images/main-banner1.png" alt="banner1" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="file-upload">
          <img
            src="../assets/images/OPWG2V4.png"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="offset-lg-4 col-lg-8">
          <div class="row">
            <div class="col-sm-12 mrgn-md-top">
              <h2 class="title">Why use<span> Otter Pocket?</span></h2>
              <p class="title" style="font-weight:bold;">
                Server's crash or data can be lost or sold, or even stolen! Nobody wants that, so we've developed an app that uses 
                IPFS technology; instead of storing data on central servers, like corporations do, we store the data on nodes that belong to people just like you!
                No monthly fees, no account needed and no file limits!
              </p>
            </div>
            <div class="col-12 col-md-6">
              <ul class="feature-style">
                <li>
                  <div class="feature-icon">
                    <img src="../assets/images/icon/1.png" alt="icon" />
                  </div>
                  <div class="feature-subtitle">
                    <h3>Decentralized</h3>
                  </div>
                  <div>
                    <p>
                      All the metadata is stored in the blockchain. Meaning it
                      is permenant and anonymous, only accesible from your
                      wallet.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="feature-icon">
                    <img src="../assets/images/icon/3.png" alt="icon" />
                  </div>
                  <div class="feature-subtitle">
                    <h3>Otter Token</h3>
                  </div>
                  <div>
                    <p>
                      The Otter Pocket utility token is burnt after every file
                      upload. Increasing it's value.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6 sm-m-top">
              <ul class="feature-style">
                <li>
                  <div class="feature-icon">
                    <img src="../assets/images/icon/5.png" alt="icon" />
                  </div>
                  <div class="feature-subtitle">
                    <h3>Polygon Network</h3>
                  </div>
                  <div>
                    <p>
                      Harnessing the incredibly low transaction fees of the
                      Polygon network.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="feature-icon">
                    <img src="../assets/images/icon/4.png" alt="icon" />
                  </div>
                  <div class="feature-subtitle">
                    <h3>100% Secure</h3>
                  </div>
                  <div >
                    <p>
                      Using the p2p file storage of IPFS your data is
                      uncensorable, and permanent.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <h2 style="padding: 1em;">Learn More about the power of IPFS</h2>
            <button
              type="button"
              class="btn btn-custom theme-color theme-color"
              style="margin-left: 2em; cursor: pointer; z-index: 100; position: relative;"
            >
              <a href="https://ipfs.io/#how" style="color:white;">
                IPFS
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Feature Section End -->
</template>
<script>
export default {
  name: "feature"
};
</script>
<style scoped>
.file-upload {
  max-width: 30em;
  position: absolute;
  left: 50px;
}
@media only screen and (max-width: 920px) {
  .file-upload {
    display: none;
  }
}
</style>
