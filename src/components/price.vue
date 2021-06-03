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
            <pie-chart :plot="plot"></pie-chart>
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
import PieChart from "@tygr/vue-pie-chart";

export default {
  name: "Price",
  components: {
    PieChart
  },
  data: () => ({
    plot: [
      {
        value: 15,
        color: "#46cdfd",
        label: "Dev Wallet",
        id: 1
      },
      {
        value: 5,
        color: "#46cdfd",
        label: "Marketing Wallet",
        id: 1
      },
      {
        value: 10,
        color: "green",
        label: "Community rewards",
        id: 2
      },
      {
        value: 60,
        color: "#fd46eb",
        label: "DEX Exchange Liquitidy",
        id: 3
      },
      {
        value: 10,
        color: "#fd46eb",
        label: "CEX Exchange Liquitidy",
        id: 4
      }
    ]
  })
};
</script>
<style>
.pie-chart {
  background: #4698fd93 !important;
}
</style>
