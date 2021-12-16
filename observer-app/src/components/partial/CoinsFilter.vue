<template>
  <div v-for="(filter, i) in filters" :key="i" class="my-4">
    <!-- PROPERTIES -->
    <div class="flex justify-between my-2">
      <select name="filter" v-model="filter['property']">
        <option
          v-for="(pro, i2) in properties"
          :key="i2"
          :value="pro"
          :selected="filter['property'] == pro"
        >
          {{ pro }}
        </option>
      </select>

      <b-button variant="danger" size="sm" @click="removeFilter(i)">X</b-button>
    </div>

    <!-- EVALEUATOR -->
    <div class="flex my-2">
      <!-- FROM -->
      <select name="from" class="w-32" v-model="filter.from.sym">
        <option
          v-for="(equalator, i2) in equalators"
          :key="i2"
          :value="equalator.sym"
          :selected="filter.from.sym == equalator.sym"
        >
          {{ equalator.label }}
        </option>
      </select>
      <input
        type="number"
        class="border-solid border-2 border-gray-100"
        v-model="filter.from.value"
      />
    </div>

    <!-- TO -->
    <div class="flex">
      <select name="to" class="w-32" v-model="filter.to.sym">
        <option
          v-for="(equalator, i2) in equalators"
          :key="i2"
          :value="equalator.sym"
          :selected="filter.to.sym == equalator.sym"
        >
          {{ equalator.label }}
        </option>
      </select>
      <input
        type="number"
        class="border-solid border-2 border-gray-100"
        v-model="filter.to.value"
      />
    </div>

    <!-- <hr class="mt-2"/> -->
  </div>
  <base-button @click="addFilter">Add new filter</base-button>
</template>

<script>
export default {
  data() {
    return {
      filters: [],
    };
  },

  methods: {
    addFilter() {
      this.filters.push({
        property: "",
        from: { sym: "$gt", value: 0 },
        to: { sym: "$lt", value: 0 },
      });
    },

    removeFilter(index) {
      this.filters.splice(index, 1);
    },
  },

  computed: {
    equalators() {
      return [
        { label: "Greater than", sym: "$gt" },
        { label: "Equal or greater than", sym: "$gte" },
        { label: "Less than", sym: "$lt" },
        { label: "Equal or Less than", sym: "$lte" },
      ];
    },
    properties() {
      return [
        "current_price",
        "market_cap",
        "market_cap_rank",
        "fully_diluted_valuation",
        "total_volume",
        "high_24h",
        "low_24h",
        "price_change_24h",
        "price_change_percentage_24h",
        "market_cap_change_24h",
        "market_cap_change_percentage_24h",
        "circulating_supply",
        "total_supply",
        "max_supply",
        "ath",
        "ath_change_percentage",
        "atl",
        "atl_change_percentage",
      ];
    },
  },
};
</script>

<style>
</style>