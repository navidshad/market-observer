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
        <BaseButton variant="success" :loading="pending" @click="update"
          >Update</BaseButton
        >
        <p class="mx-4">{{ serverMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { GetAllCoinResponse } from "@backend/market/types";
import socket from "@/plugins/socketio";

@Options({})
export default class UpdateAllCoins extends Vue {
  serverMessage = "";
  pending = false;

  mounted() {
    socket.io.on("market-getAllCoins", this.onGetMarketCollectorSignal);
  }

  onGetMarketCollectorSignal({ status, progressMessage }: GetAllCoinResponse) {
    this.serverMessage = progressMessage;

    if (status == "pending") {
      this.pending = true;
    } else this.pending = false;
  }

  update() {
    socket.io.emit("market-getAllCoins");
  }
}
</script>
