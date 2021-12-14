<template>
  <button class="bg-">
    <template v-if="!loading">
      <slot>{{ label }}</slot>
    </template>

    <span v-else>Plz waite...</span>
  </button>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";

type Color =
  | "primary"
  | "secondary"
  | "sucess"
  | "danger"
  | "warning"
  | "info"
  | "";

class Props {
  label = prop<string>({ default: "" });
  loading = prop<boolean>({ default: false });
  size = prop<"sm" | "md">({ default: "md" });
  type = prop<Color>({});
}

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue.with(Props) {}
</script>
