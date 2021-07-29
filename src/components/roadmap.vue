<template>
  <div>
  <!--Map Section start-->
    <section id="roadmap" class="feature">
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
    
            <img
                margin-left="50px"
                width="568px"
                src="../assets/images/Comp_3.gif"
                class="img-fluid"
                alt="otterpocket"
              />
              
              
          

      <div class="offset-lg-0 col-lg-7">
      
          <div class="row">
            <div class="col-sm-10 mrgn-md-top">
            <h2 class="title f-color font" style="font-weight: bold;">The OTTER token.</h2>
            <p class="caption-about" style="font-weight: bold;">
                The Otter Network uses $OTTER, a MATIC utility token, as a payment method across our ecosystem. The token enables users to pay for uploads within our dApp while also empowering the ability to trade on exchanges. The scalability of the polygon network helps us keep fees super low.
              </p>
             
          </div>
          
<div class="col-sm-12">
            
              <button
                    type="button"
                    class="btn btn-custom theme-color theme-color"
                  >
                    <a
                      href="https://quickswap.exchange/#/swap?outputCurrency=0xe718eda678aff3f8d1592e784652bcbeeb49e352"
                      style="color:white;"
                      >Buy Token
                    </a>
                  </button>

                  <button
                    type="button"
                    class="btn btn-custom theme-color theme-color"
                  >
                    <a
                      href="https://quickswap.exchange/#/swap?outputCurrency=0xe718eda678aff3f8d1592e784652bcbeeb49e352"
                      style="color:white;"
                      >Trading Chart
                    </a>
                  </button>
            
            
          


          </div>
        </div>
      </div>
</section>
  </div>
</template>
<!--Map Section end-->
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Chart",
  components: {
    VueApexCharts
  },
  data() {
    return {
      series: [60, 15, 5, 13, 7],
      chartOptions: {
        chart: {
          type: "donut"
        },
        labels: [
          "DEX Liquitidy",
          "CEX Liquitidy",
          "Community Rewards",
          "Dev Wallet",
          "Marketing Wallet"
        ]
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
};
</script>
<style>
.pie-chart {
  background: #4698fd93 !important;
}
</style>