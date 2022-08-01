<template>
  <section class="main">
    <div class="main__inner">
      <Tittle />
      <History />
      <Footer />
    </div>
  </section>
</template>

<script>
const axios = require("axios");
const todofukenList = require("static/todofuken.json").todofukenList;
const cityIndex = Math.floor(Math.random() * 47);
const getCityListUrl = "https://geoapi.heartrails.com/api/json?method=getTowns";
export default {
  name: "Index",
  metaInfo: {
    title: "Index",
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.$store.dispatch("answerSettings");
  },
};
</script>
<style>
HTML {
  font-family: "M PLUS Rounded 1c";
  color: #776056;
  touch-action: manipulation;
}
</style>
