<template>
  <!-- ツイートボタン -->
  <div class="twitter-share-button__wrapper">
    <a
      v-bind:href="$store.state.tweetText"
      target="_blank"
      class="twitter-share-button"
      ><img src="~/static/Twitter.svg" />ツイートする</a
    >
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss" scoped>
.twitter {
  &-share-button {
    display: block;
    width: 100%;
    font-size: 16px;
  }
  &-share-button img {
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }
  &-share-button__wrapper {
    width: 200px;
    height: 60px;
    padding: 20px;
    border-radius: 30px;
    margin: auto;
    background-color: #2196f3;
    color: white;
  }
}
@media screen and (min-width: 700px) {
}
</style>
