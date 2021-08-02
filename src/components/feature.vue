<template>
  <!-- Feature Section start -->
  <section id="feature" class="feature">
    
    <div class="container">
      <div class="row">
        <div class="file-upload">
          <img
            width="450px"
            src="../assets/images/OPWGEXP.png"
            class="img-fluid"
            alt=""
          />
        </div>
        
        <div class="col-md-7 offset-sm-4">
          <div class="row">
            <div class="col-sm-12 mrgn-md-top offset-sm-1">
              <h2 class="title f-color font" style="font-weight: bold;">Secure, private and available.</h2>
              
              
              <p class="title" style="font-weight:bold;">
                Every file is split into pieces, encrypted, and stored on nodes, nodes that belong to people just like you, which means no more data breaches from central servers. Decentralization also protects your data from any malicious attacks while providing you with anonymity & multi-regional file availability.
              </p>
            </div>
            
            
            
            
          
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
  max-width: 35em;
  position: absolute;
  left: 50px;
}
@media only screen and (max-width: 920px) {
  .file-upload {
    display: none;
  }
}
</style>
