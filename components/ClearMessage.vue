<template>
  <div class="clear-message">
    <p>{{ $store.state.countY }}回で正解！</p>
    <p>
      正解は{{ $store.state.ansewrLocation.prefecture
      }}{{ $store.state.ansewrLocation.city
      }}{{ $store.state.ansewrLocation.town }}の&#12306;{{
        $store.state.ansewrLocation.postal | postalFormat
      }}でした！
    </p>
    <!-- ツイートボタン -->
    <TweetButton />
  </div>
</template>
<script lang="ts">
export default {
  filters: {
    postalFormat(parm: any) {
      const response = parm.slice(0, 3) + "-" + parm.slice(3);
      console.log("response", response);
      return response;
    },
  },
};
</script>
<style lang="scss" scoped>
.clear-message {
  text-align: center;
  font-size: 20px;
  margin-bottom: 24px;
}
@media screen and (min-width: 700px) {
}
</style>
