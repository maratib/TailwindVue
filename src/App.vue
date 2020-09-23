<template>
  <div>
    <h1 class="text-red-500">Hello Vue3 components</h1>
    <test msg="Msg from app" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Test from "@/components/Test.vue"; // @ is an alias to /src

@Options({
  components: {
    Test,
  },
})
export default class App extends Vue {}
</script>




