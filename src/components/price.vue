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
                href="https://polygonscan.com/token/0xE718EDA678AFF3F8d1592e784652BcbEeb49e352"
                >0xE718EDA678AFF3F8d1592e784652BcbEeb49e352</a
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

          <button
            type="button"
            class="btn btn-custom theme-color theme-color"
            style="margin-left: 5em; margin-top: 5em;"
          >
            <a
              style="color: white;"
              href="https://polygonscan.com/token/tokenholderchart/0xE718EDA678AFF3F8d1592e784652BcbEeb49e352"
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
              href="https://polygonscan.com/address/0x501C5074bEd28987d50ce493018d7ccdE6B7C2d9"
            >
              View Token Contract Source Code
            </a>
          </button>
          <button
            type="button"
            class="btn btn-custom theme-color theme-color"
            style="margin-left: 5em; margin-top: 5em;"
          >
            <a
              style="color: white;"
              href="https://bafybeifxz3hiqpfh7qwpwg4xyww5axkjcozmm4736clden57m5px3z2hdu.ipfs.infura-ipfs.io/"
            >
              View WhitePaper
            </a>
          </button>
                    <button
            type="button"
            class="btn btn-custom theme-color theme-color"
            style="margin-left: 5em; margin-top: 5em;"
          >
            <a
              style="color: white;"
              href="https://gateway.pinata.cloud/ipfs/QmcCRRX8sXww9TZTyQKQyZ7vRDBBegT6oN9r688wYLqJ9i"
            >
              Audit
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
