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
      <ClearMessage v-if="$store.state.clear" />
      <Buttons />
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
<style lang="scss" scoped>
.answer {
  display: flex;
  margin-bottom: 24px;
  position: relative;
  &__wrapper {
    padding: 24px 8px;
    position: relative;
    max-width: 382px;
    margin: auto;
  }
  &__number {
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
  &__number:nth-child(3) {
    margin-right: 24px;
  }
  &__number:nth-child(3)::after {
    content: "-";
    position: absolute;
    top: -10px;
    left: 115px;
    font-size: 42px;
    color: #c27e6f;
  }
  &__distance {
    font-size: 16px;
    width: 36px;
    line-height: 2;
    text-align: center;
    line-height: 44px;
    letter-spacing: -0.5px;
  }
  &__distance-nothingNo {
    font-size: 12px;
    width: 36px;
    line-height: 1.2;
    text-align: center;
  }
}
.number {
  &__list {
    list-style: none;
    display: flex;
  }
  &-correct {
    background-color: #e8dd75;
  }
  &-place-correct {
    background-color: #a4c1a6;
  }
  &-nothing {
    background-color: #aba393;
  }
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
  .history__inner {
    padding: 24px 8px;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  /* 郵便番号欄 */
  .answer {
    &__wrapper {
      max-width: 600px;
      padding: 24px 0px 24px 28px;
    }
    &__number {
      height: 75px;
      width: 60px;
      font-size: 24px;
      line-height: 70px;
      border: 2px #c27e6f solid;
    }
    &__distance {
      font-size: 24px;
      width: 60px;
      line-height: 75px;
    }
    &__distance-nothingNo {
      padding-top: 10px;
      font-size: 16px;
      width: 60px;
      line-height: 1;
    }
    &__number:nth-child(3)::after {
      top: 0px;
      left: 198px;
    }
  }
}
</style>
