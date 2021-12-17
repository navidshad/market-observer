<template>
  <div class="flex">
    <!-- SIDEBAR -->
    <div class="sidebar w-96 px-4 py-4 flex flex-col justify-between">
      <div>
        <div>
          <b-button variant="light" to="/">Back</b-button>
        </div>

        <div>
          <CoinsFilterComponent v-model:filters="filters" />
        </div>
      </div>

      <base-button block="true" :loading="pending" @click="search">
        Search
      </base-button>
    </div>

    <!-- PAGE CONTENT -->
    <div
      class="page-content w-full flex flex-wrap gap-x-4 gap-y-2 p-4 bg-gray-100"
    >
      <template v-for="(coin, i) in coins" :key="i">
        <CoinCardComponent :coin="coin" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CoinsFilterComponent from "@/components/partial/CoinsFilter.vue";
import CoinCardComponent from "@/components/partial/CoinCard.vue";
import socketio from "@/plugins/socketio";
import { MarketCoin } from "@backend/market/types";

@Options({
  components: {
    CoinsFilterComponent,
    CoinCardComponent,
  },
})
export default class CoinGroupPage extends Vue {
  coins: Array<MarketCoin> = [];

  pending = false;
  filters = [
    {
      property: "price_change_24h",
      operator1: { sym: "$gt", value: 1 },
      operator2: { sym: "$lt", value: 5 },
    },
  ];

  mounted() {
    socketio.io.on("market-getbyfilter", this.onRecievedCoins);
    this.search();
  }

  unmounted() {
    socketio.io.removeListener("market-getbyfilter", this.onRecievedCoins);
  }

  search() {
    this.pending = true;
    let query: any = {};

    this.filters.forEach((filter) => {
      query[filter.property] = {};
      if (filter.operator1.value)
        query[filter.property][filter.operator1.sym] = filter.operator1.value;
      if (filter.operator2.value)
        query[filter.property][filter.operator2.sym] = filter.operator2.value;
    });

    socketio.io.emit("market-getbyfilter", query);
  }

  onRecievedCoins(coins: Array<MarketCoin> = []) {
    this.coins = coins;
    this.pending = false;
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  height: 100vh;
  overflow-y: scroll;
}
</style>