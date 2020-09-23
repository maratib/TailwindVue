<template>
  <h1 class="text-black-500 text-6xl">T-Alert</h1>
  <h3 class="text-green-600 text-6xl">{{ msg }}</h3>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "t-alert",
  props: {
    msg: String,
  },
})
export default class Test extends Vue {
  msg!: string;
}
</script>