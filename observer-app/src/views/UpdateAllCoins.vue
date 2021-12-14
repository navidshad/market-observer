<template>
  <div
    class="flex justify-center items-center"
    :style="{ width: '100vw', height: '100vh' }"
  >
    <div class="w-64">
      <h3>Before start trading you have to update all coins data.</h3>
      <br>
      <b-button>Update</b-button>
      <b-button variant="danger">Button</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class UpdateAllCoins extends Vue {}
</script>
