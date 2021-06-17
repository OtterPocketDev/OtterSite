<template>
  <div id="app">
    <section id="team" class="team">
      <div class="team-decor">
        <div class="team-circle1">
          <img :src="'../assets/images/team1.png'" alt="" />
        </div>
        <div class="team-circle2">
          <img :src="'../assets/images/team3.png'" alt="" />
        </div>
        <div class="team-circle3">
          <img :src="'../assets/images/team.png'" alt="" />
        </div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h2 class="title">Otter <span>RoadMap</span></h2>
          </div>
          <div class="col-sm-12">
            <div class="timeline">
              <p>
                Initial Development Phase. App creation and website design.
              </p>
              <p>
                Presale of $Otter goes live on DxSale. Initial marketing
                efforts.
              </p>
              <p>
                App Goes Live! And IDO of $Otter on Quickswap. Listing on CMC
                and CoinGecko. Applying for CEX.
              </p>
              <p>
                Further marketing from presale proceeds. Continued App
                Development. (Sorting, folders, features etc...)
              </p>
              <p>
                Otter Pocket v2 App. Public file sharing platform (View
                files/videos others have posted and tip content creators).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Team"
};
</script>
<style scoped>
.time-line {
  margin: 0 2em;
}
p {
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  color: black;
}
p:before {
  content: counter(section);
  position: absolute;
  border-radius: 50%;
  padding: 30px 30px 40px 30px;
  height: 20px;
  background-color: #46cdfd;
  text-align: center;
  line-height: 1em;
  color: white;
  font-size: 1em;
}
p:nth-child(odd) {
  border-right: 3px solid;
  text-align: right;
  padding-left: 0;
}
p:nth-child(odd):before {
  left: 100%;
  margin-left: -20px;
}
p:nth-child(even) {
  border-left: 3px solid;
  padding-right: 0;
}
p:nth-child(even):before {
  right: 100%;
  margin-right: -20px;
}
p:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
p:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
