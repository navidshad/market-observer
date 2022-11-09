<template>
  <div class="bg-white p-4 rounded-lg w-80 hover:bg-blue-100 text-gray-700">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img :src="coin.image" width="32" class="mr-2" />
        <h3>{{ coin.name }}</h3>
      </div>
      <h3 class="text-gray-600">{{ coin.symbol }}</h3>
    </div>

    <section class="w-full my-4 text-sm text-blue-800">
      <div class="flex justify-between">
        <span>price change 24h</span>
        <span
          :class="[
            'font-bold',
            { 'text-red-600': coin['price_change_24h'] < 0 },
            { 'text-green-600': coin['price_change_24h'] > 0 },
          ]"
          >{{ coin["price_change_24h"] }}%</span
        >
      </div>

      <div class="flex justify-between">
        <span>price range 24</span>
        <span class="text-yellow-600 font-bold"
          >{{ coin["low_24h"] }} - {{ coin["high_24h"] }}</span
        >
      </div>

      <div class="flex justify-between" v-for="(field, fi) in fields" :key="fi">
        <span>{{ normalizeTitle(field) }}</span>
        <span>{{ coin[field] }}</span>
      </div>
    </section>

    <h1 class="text-2xl my-8">{{ coin.current_price }} USD</h1>

    <div :id="chartid"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    coin: {},
  },

  data() {
    return {
      chartid: "chart-" + this.coin.symbol,
      chartInstance: null,
    };
  },

  computed: {
    fields() {
      return [
        // "high_24h",
        // "low_24h",
        // "price_change_24h",
        "price_change_percentage_24h",
        // "symbol",
        // "name",
        // "current_price",
        "market_cap",
        "market_cap_rank",
        // "fully_diluted_valuation",
        // "total_volume",
        // "market_cap_change_24h",
        // "market_cap_change_percentage_24h",
        // "circulating_supply",
        // "total_supply",
        // "max_supply",
        "ath",
        // "ath_change_percentage",
        // "ath_date",
        // "atl",
        // "atl_change_percentage",
        // "atl_date",
      ];
    },
  },

  mounted() {
    this.loadChart();
  },

  methods: {
    normalizeTitle(str) {
      return str.replaceAll("_", " ");
    },
    loadChart() {
      this.chartInstance = new TradingView.widget({
        width: 300,
        height: 250,
        symbol: `${this.coin.symbol}USDT`,
        interval: "3",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "3",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: true,
        allow_symbol_change: true,
        save_image: false,
        container_id: this.chartid,
      });
    },
  },
};
</script>

<style>
</style>