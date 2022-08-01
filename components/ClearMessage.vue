<template>
  <div class="clear-message">
    <p>{{ $store.state.countY }}回でクリア！</p>
    <p class="clear-message__location">
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
  mounted() {
    this.$gtag("event", "mounted", {
      event_category: "clear",
      event_label: "clear-message",
      value: this.$store.state.countY,
    });
  },
};
</script>
<style lang="scss" scoped>
.clear-message {
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
