<template>
  <div class="history">
    <div class="history__inner">
      <HowToPlay />
      <!-- <h2>テスト用：{{ $store.state }}</h2> -->
      <!--<h2>テスト用：{{ $store.state.usersAnswer }}</h2>
      <h2>テスト用：{{ $store.state.answerHistory }}</h2> -->

      <!-- <h2>テスト用：{{ $store.state.answer }},{{ $store.state }}</h2>
      <p>ansewrLocation:{{ $store.state.ansewrLocation }}</p> -->
      <div class="answer__wrapper">
        <ul
          class="answer"
          v-for="y in $store.state.countY"
          :key="y"
          v-bind:id="'history' + y"
        >
          <li
            class="answer__number"
            v-for="x in 7"
            :key="x"
            v-bind:id="'historyItem' + y + '-' + x"
          >
            {{ $store.state.userAnswerHistory[y - 1][x - 1] }}
          </li>
          <li
            class="answer__distance-nothingNo"
            v-if="
              $store.state.userAnswerDistanceHistory[y - 1] ==
              '該当郵便番号なし'
            "
          >
            {{ $store.state.userAnswerDistanceHistory[y - 1] }}
          </li>
          <li class="answer__distance" v-else>
            {{ $store.state.userAnswerDistanceHistory[y - 1] }}
          </li>
        </ul>
      </div>
      <div v-if="$store.state.clear" class="clear-message">
        <p>{{ $store.state.countY }}回で正解！</p>
        <p>
          正解は{{ $store.state.ansewrLocation.prefecture
          }}{{ $store.state.ansewrLocation.city
          }}{{ $store.state.ansewrLocation.town }}の&#12306;{{
            $store.state.ansewrLocation.postal | postalFormat
          }}でした！
        </p>
        <!-- ツイートボタン -->
        <div class="twitter-share-button__wrapper">
          <a
            v-bind:href="$store.state.tweetText"
            target="_blank"
            class="twitter-share-button"
            ><img src="~/static/Twitter.svg" />ツイートする</a
          >
        </div>
      </div>
      <Buttons />
      <div>
        <span class="source"
          >出典:「位置参照情報」(国土交通省)の加工情報・「HeartRails Geo
          API」(HeartRails Inc.)</span
        >
      </div>
    </div>
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
<style>
.link {
  text-align: center;
  font-size: 12px;
  text-decoration: underline;
}
.source {
  font-size: 12px;
  text-align: center;
}
.answer-tmp {
  display: flex;
  margin-bottom: 36px;
  position: relative;
}
.answer-tmp__number {
  height: 48px;
  width: 36px;
  list-style: none;
  margin-right: 8px;
}
.answer__wrapper {
  padding: 24px 8px;
  position: relative;
}
.answer {
  display: flex;
  margin-bottom: 24px;
  position: relative;
}
.answer__number {
  height: 48px;
  width: 36px;
  border: 2px #c27e6f solid;
  border-radius: 2px;
  list-style: none;
  margin-right: 8px;
  font-size: 28px;
  line-height: normal;
  text-align: center;
}
.answer__number:nth-child(3) {
  margin-right: 24px;
}
.answer__number:nth-child(3)::after {
  content: "-";
  position: absolute;
  top: -10px;
  left: 125px;
  font-size: 42px;
  color: #c27e6f;
}
.number__list {
  list-style: none;
  display: flex;
}
.answer__distance {
  font-size: 16px;
  width: 36px;
  line-height: 2;
  text-align: center;
  line-height: 44px;
  letter-spacing: -0.5px;
}
.answer__distance-nothingNo {
  font-size: 12px;
  width: 36px;
  line-height: 1.2;
  text-align: center;
}
.number-correct {
  background-color: #e8dd75;
}
.number-place-correct {
  background-color: #a4c1a6;
}
.number-nothing {
  background-color: #aba393;
}
.history__inner {
  margin: 0 16px;
  padding-top: 36px;
  padding-bottom: 36px;
}
.clear-message {
  text-align: center;
  font-size: 20px;
  margin-bottom: 24px;
}
.twitter-share-button {
  display: block;
  width: 100%;
}
.twitter-share-button img {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
.twitter-share-button__wrapper {
  width: 180px;
  height: 60px;
  padding: 20px;
  border-radius: 30px;
  margin: auto;
  background-color: #2196f3;
  color: white;
}
@media screen and (min-width: 700px) {
  .history__inner {
    padding: 24px 8px;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
}
</style>
