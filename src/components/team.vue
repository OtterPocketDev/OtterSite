<template>
  <div id="app">
    <section id="team" class="team">
      <div class="team-decor">
        <div class="team-circle1"><img :src='"../assets/images/team1.png"' alt=""></div>
        <div class="team-circle2"><img :src='"../assets/images/team3.png"' alt=""></div>
        <div class="team-circle3"><img :src='"../assets/images/team.png"' alt=""></div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h2 class="title">Our Otter <span>Team</span></h2>
          </div>
          <div class="col-sm-12">
            <div>
              <carousel :className='"team-carousel"' :loop=true
                        :margin=30
                        :items=3
                        :nav=false
                        :dots=true
                        :dotsEach=true
                        :autoplay=false
                        :responsive="{0:{items:1,margin:5},600:{items:1,margin:5},768:{items:2},992:{items:3},1000:{items:3}}"
              >
                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/James.jpg"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>James Bass</h3>
                          <h6>designer</h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                            <li><a href="https://www.linkedin.com/in/james-morgan1111/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/Profile1.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Gavin Pierce</h3>
                          <h6>devloper</h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                            <li><a href="https://www.linkedin.com/in/gavin-pierce-65136b216/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/haypic.png"' alt="">
                        </div>
                        <div class="team-text">
                          <h3>Hayling Pierce</h3>
                          <h6>Designer</h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="team-item">
                    <div class="team-block">
                      <div class="team-box">
                        <div class="team-avtar">
                          <img :src='"../assets/images/avtar/dan-jovis-clear.png"' style="object-fit: contain; background-color: #f3f4f8;" alt="">
                        </div>
                        <div class="team-text">
                          <h3>Karemjit Jovis</h3>
                          <h6>Business Analyst </h6>
                        </div>
                        <div class="overlay">
                          <ul class="team-social">
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'Team'
}
</script>
