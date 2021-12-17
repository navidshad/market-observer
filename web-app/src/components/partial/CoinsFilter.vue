<template>
  <div v-for="(filter, i) in tempFilters" :key="i" class="my-4">
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
      <!-- operator1 -->
      <select name="operator1" class="w-32" v-model="filter.operator1.sym">
        <option
          v-for="(equalator, i2) in comparisonOperators"
          :key="i2"
          :value="equalator.sym"
          :selected="filter.operator1.sym == equalator.sym"
        >
          {{ equalator.label }}
        </option>
      </select>
      <input
        type="number"
        class="border-solid border-2 border-gray-100"
        v-model="filter.operator1.value"
      />
    </div>

    <!-- operator2 -->
    <div class="flex">
      <select name="operator2" class="w-32" v-model="filter.operator2.sym">
        <option
          v-for="(equalator, i2) in comparisonOperators"
          :key="i2"
          :value="equalator.sym"
          :selected="filter.operator2.sym == equalator.sym"
        >
          {{ equalator.label }}
        </option>
      </select>
      <input
        type="number"
        class="border-solid border-2 border-gray-100"
        v-model="filter.operator2.value"
      />
    </div>

    <!-- <hr class="mt-2"/> -->
  </div>
  <base-button @click="addFilter">Add new filter</base-button>
</template>

<script>
export default {
  props: {
    filters: {},
  },
  data() {
    return {
      tempFilters: [],
    };
  },

  watch: {
    filters: {
      immediate: true,
      deep: true,
      handler(newVal) {
        if (newVal && newVal.length) {
          this.tempFilters = newVal;
        }
      },
    },

    tempFilters: {
      deep: true,
      handler() {
        this.$emit("update:filters", this.tempFilters);
      },
    },
  },

  methods: {
    addFilter() {
      this.tempFilters.push({
        property: this.properties[0],
        operator1: { sym: "$gt", value: 1 },
        operator2: { sym: "$lt", value: 0 },
      });
    },

    removeFilter(index) {
      this.tempFilters.splice(index, 1);
    },
  },

  computed: {
    comparisonOperators() {
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