<template>
  <!-- Feature Section start -->
  <section id="feature" class="feature">
    <div class="feature-decor">
      <div class="feature-circle1">
        <img :src="'../assets/images/feature2.png'" alt="" />
      </div>
    </div>
    <div class="about-decor">
      <div class="about-circle1" style="z-index: 100;">
        <img src="../assets/images/team1.png" alt="team1" />
      </div>
      <div
        class="about-circle2"
        style="z-index: 100; position: absolute; left: 10em;"
      >
        <img src="../assets/images/main-banner1.png" alt="banner1" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="file-upload">
          <img
            src="../assets/images/files_upload.png"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="offset-lg-4 col-lg-8">
          <div class="row">
            <div class="col-sm-12 mrgn-md-top">
              <h2 class="title">Why use<span> Otter Pocket?</span></h2>
              <p class="title">
                All file storage applications are on centralized servers. What
                would happen if their servers go down? If a government agency
                wanted to censor your media? And all charge an expensive monthly
                price or have a file size restriction. That's where
                <span> Otter Pocket</span> comes in.
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
                      wallet
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
                      The Otter Pocket Utility token is burnt after every file
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
                    <h3>Polygon Netowrk</h3>
                  </div>
                  <div>
                    <p>
                      Harnessing the incredibly low transaction fees of the
                      Polygon Netowrk
                    </p>
                  </div>
                </li>
                <li>
                  <div class="feature-icon">
                    <img src="../assets/images/icon/4.png" alt="icon" />
                  </div>
                  <div class="feature-subtitle">
                    <h3>100% secure</h3>
                  </div>
                  <div>
                    <p>
                      Using the p2p file storage of IPFS your data is
                      uncensorable, and permanent.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <h2>Check out your new Pocket</h2>
            <button
              type="button"
              class="btn btn-custom theme-color theme-color"
              style="margin-left: 2em;"
            >
              <a href="#" style="color:white;"> Pocket </a>
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
