<template>
  <div class="fail-message">
    <p class="fail-message__location">
      正解は{{ $store.state.ansewrLocation.prefecture
      }}{{ $store.state.ansewrLocation.city
      }}{{ $store.state.ansewrLocation.town }}の&#12306;{{
        $store.state.ansewrLocation.postal | postalFormat
      }}でした。
    </p>
    <!-- ツイートボタン -->
    <TweetButton />
  </div>
</template>
<script>
export default {
  filters: {
    postalFormat(parm) {
      const response = parm.slice(0, 3) + "-" + parm.slice(3);
      return response;
    },
  },
  methods: {
    reset(countY) {
      this.$store.dispatch("reset");
      this.$store.dispatch("answerSettings");
      this.$gtag("event", "click", {
        event_category: "playing",
        event_label: "reset-button",
        value: countY,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.fail-message {
  text-align: center;
  font-size: 20px;
  margin-bottom: 24px;
  &__location {
    margin-bottom: 16px;
  }
}
@media screen and (min-width: 700px) {
}
</style>
