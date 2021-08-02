<template>
  <!-- Feature Section start -->
  <section id="feature" class="feature">
    
    <div class="featured">
        <div class="file-upload">
          <img
            width="450px"
            src="../assets/images/OPWGEXP.png"
            class="img-fluid"
            alt=""
          />
        </div>
        
        <div class="text">
            <div class="col-sm-12 mrgn-md-top offset-sm-1">
              <h2 class="title f-color font" style="font-weight: bold;">Secure, private and available.</h2>            
              <p class="title" style="font-weight:bold;">
                Every file is split into pieces, encrypted, and stored on nodes, nodes that belong to people just like you, which means no more data breaches from central servers. Decentralization also protects your data from any malicious attacks while providing you with anonymity & multi-regional file availability.
              </p>
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
  max-width: 35em;
}
.featured {
  display: flex;
}
.text {
  width: 50%;
}
@media only screen and (max-width: 1100px) {
  .featured {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .text {
    margin-top: 3em;
  width: 100%;
}
}
</style>
