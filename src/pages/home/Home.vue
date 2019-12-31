<template>
  <div class="home">
    <Statistics></Statistics>
    <Coverage></Coverage>
  </div>
</template>

<script>
import Statistics from "./components/Statistics.vue";
import Coverage from "./components/Coverage.vue";
export default {
  name: "home",
  components: {
    Statistics,
    Coverage
  }
};
</script>
