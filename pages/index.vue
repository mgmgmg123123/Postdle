<template>
  <section class="main">
    <div class="main__inner">
      <Tittle />
      <History />
      <Footer />
    </div>
  </section>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import { Store } from "vuex";
import { mapState } from "vuex";
const axios = require("axios");
const todofukenList = require("static/todofuken.json").todofukenList;
const cityIndex = Math.floor(Math.random() * 47);
const getCityListUrl = "http://geoapi.heartrails.com/api/json?method=getTowns";
export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch(context: Context): Promise<void> {
    const { app, store } = context;
    await axios
      .get(getCityListUrl, {
        params: {
          prefecture: todofukenList[cityIndex],
        },
      })
      .then((res: any) => {
        let postalIndex: number = 0;
        if (res.data.response.location.length > 1) {
          const min = 0;
          const max = res.data.response.location.length - 1;
          postalIndex = Math.floor(Math.random() * (max + 1 - min)) + min;
        }
        console.log(res.data.response.location[postalIndex]);
        store.commit("answerSettings", res.data.response.location[postalIndex]);
      });
  },
  methods: {},
};
</script>
<style>
HTML {
  font-family: "M PLUS Rounded 1c";
  color: #776056;
  touch-action: manipulation;
}
</style>
