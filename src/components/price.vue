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
              Total Supply: 1,000,000
            </h3>
            <h3>
              1 $Otter Burnt Per Upload
            </h3>
            <h3>
              Exchange Liquitidy locked until 2022. Dev Wallet Locked for 6
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
            style="margin-top: 20px;"
          >
            Read More
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
