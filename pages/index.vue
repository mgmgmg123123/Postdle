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
const getCityListUrl = "http://geoapi.heartrails.com/api/json?method=getTowns";
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
  async fetch(context) {
    const { store } = context;
    await axios
      .get(getCityListUrl, {
        params: {
          prefecture: todofukenList[cityIndex],
        },
      })
      .then((res) => {
        let postalIndex = 0;
        if (res.data.response.location.length > 1) {
          const min = 0;
          const max = res.data.response.location.length - 1;
          postalIndex = Math.floor(Math.random() * (max + 1 - min)) + min;
        }
        store.commit("answerSettings", res.data.response.location[postalIndex]);
      });
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
