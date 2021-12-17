<template>
  <b-button v-bind="$props" :class="[{'btn-block':block}]">
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
  block = prop<boolean>({default:false})
}

@Options({})
export default class HelloWorld extends Vue.with(Props) {}
</script>
