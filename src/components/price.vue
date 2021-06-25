<template>
  <div>
    <!-- Price Section start-->
    <section id="tokenomics" class="price">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="title">$Otter <span>Tokenomics</span></h2>
          </div>
          <div class="col-sm-12">
            <h3>
              Contract Address:
              <a
                href="https://polygonscan.com/"
                >Coming Soon!</a
              >
            </h3>

            <h3>
              Total Supply: 1,000,000
            </h3>
            <h3>
              $OTTER Burned on every upload
            </h3>
            <h3>
              Exchange Liquitidy locked. 
              Dev Wallet Locked for 6
              months.
            </h3>
            <VueApexCharts
              width="380"
              type="donut"
              :options="chartOptions"
              :series="series"
            ></VueApexCharts>
          </div>

          <!-- <button
            type="button"
            class="btn btn-custom theme-color theme-color"
            style="margin-left: 5em; margin-top: 5em;"
          >
            <a
              style="color: white;"
              href="https://polygonscan.com/token/tokenholderchart/0xB3b74aF14b8CF2d5a7da045575fb6Db161Cdb871"
            >
              View Wallets
            </a>
          </button>
          <button
            type="button"
            class="btn btn-custom theme-color theme-color"
            style="margin-left: 5em; margin-top: 5em;"
          >
            <a
              style="color: white;"
              href="https://bafybeie6ruyr3ic7ardnfqxuq5tljet554y57i4jwrkxgy7yyklqofognm.ipfs.dweb.link/"
            >
              View Token Contract Source Code
            </a>
          </button> -->
          <button
            type="button"
            class="btn btn-custom theme-color theme-color"
            style="margin-left: 5em; margin-top: 5em;"
          >
            <a
              style="color: white;"
              href="https://bafybeidelwr4chdla3owxz3lo6zhi5ba5iuu2wpn6zlt4az3h73utw2yti.ipfs.infura-ipfs.io/"
            >
              View WhitePaper
            </a>
          </button>
        </div>
      </div>
    </section>
    <!-- Price Section End -->
  </div>
</template>
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
