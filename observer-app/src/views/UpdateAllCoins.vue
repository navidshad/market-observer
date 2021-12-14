<template>
  <div
    class="flex justify-center items-center"
    :style="{ width: '100vw', height: '100vh' }"
  >
    <div>
      <h1 class="text-2xl">Markt Observer</h1>
      <h3>Before start trading you have to update all coins data.</h3>

      <hr class="my-4" />
      <div class="flex items-center">
        <BaseButton variant="success">Update</BaseButton>
        <p class="mx-4">{{}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class UpdateAllCoins extends Vue {}
</script>
