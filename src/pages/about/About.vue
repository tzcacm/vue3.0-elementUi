<template>
  <div class="about">
    <div v-for="item in personInfo" v-bind:key="item.name">{{item.name}}</div>
    <button @click="delData()">删除我</button>
  </div>
</template>

<script>
export default {
  name: "about",
  mounted() {
    console.log(location.hash);
  },
  computed: {
    personInfo() {
      return this.$store.state.HomeModule.person;
    }
  },
  methods: {
    delData() {
      this.$store.dispatch("delLastData");
    }
  }
};
</script>
