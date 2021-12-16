<template>
  <b-button v-bind="$props">
    <template v-if="!loading">
      <slot>{{ label }}</slot>
    </template>

    <b-spinner v-else small>Plz waite...</b-spinner>
  </b-button>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";

class Props {
  loading = prop<boolean>({ default: false });
}

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue.with(Props) {}
</script>
