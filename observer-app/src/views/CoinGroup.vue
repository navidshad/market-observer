<template>
  <div class="row flex-xl-nowrap2">
    <div class="sidebar w-96 px-4 py-4">
      <div>
        <b-button variant="light" to="/">Back</b-button>
      </div>

      <div>
        <CoinsFilterComponent />
      </div>
    </div>
    <div class="bd-content col-md-9 col-xl-8 col-12 pb-md-3 pl-md-5">
      <span>dfsfsdf</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CoinsFilterComponent from "@/components/partial/CoinsFilter.vue";

@Options({
  components: {
    CoinsFilterComponent,
  },
})
export default class CoinGroupPage extends Vue {}
</script>

<style>
</style>