<template>
  <div class="buttons">
    <!-- 次の場合にボタンを非表示(false)にする。
    1.10回回答済みで不正解のとき
    2.クリアしたとき
     -->
    <ul
      class="number__list"
      v-if="
        !(
          (this.$store.state.overCount && this.$store.state.countY == 10) ||
          this.$store.state.clear
        )
      "
    >
      <li
        class="number__item"
        v-for="z in 10"
        :key="z"
        v-bind:id="'button' + (z - 1)"
        @click="insert(z - 1)"
      >
        <button>{{ z - 1 }}</button>
      </li>
    </ul>
    <div
      class="operation-buttons"
      v-if="
        !(
          (this.$store.state.overCount && this.$store.state.countY == 10) ||
          this.$store.state.clear
        )
      "
    >
      <button class="operation-buttons__delate" @click="deleteNumber">
        １文字削除</button
      ><button
        class="operation-buttons__answer"
        @click="answer($store.state.countY)"
      >
        回答する
      </button>
    </div>
    <div class="operation-buttons__restart">
      <button
        class="operation-buttons__restart"
        @click="reset($store.state.countY)"
      >
        別の問題を解く
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    deleteNumber() {
      this.$store.dispatch("deleteNumber");
      this.$gtag("event", "click", {
        event_category: "playing",
        event_label: "delete-button",
        value: "",
      });
    },
    answer(countY) {
      this.$store.dispatch("answer");
      this.$gtag("event", "click", {
        event_category: "playing",
        event_label: "answer-button",
        value: countY,
      });
    },
    insert(number) {
      this.$store.dispatch("insert", number);
      this.$gtag("event", "click", {
        event_category: "playing",
        event_label: "insert-button",
        value: number,
      });
    },
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
button {
  &:hover {
    opacity: 0.7;
  }
  &:hover {
    opacity: 0.7;
  }
}
.operation-buttons {
  margin: auto;
  margin-bottom: 10px;

  button {
    color: white;
    border: 1px solid white;
    background-color: #a4c1a6;
    border-radius: 20px;
    padding: 10px;
    height: 60px;
    width: 50%;
    text-align: center;
    font-size: 16px;
  }
}
.operation-buttons__restart {
  button {
    color: #a4c1a6;
    border: 2px solid #a4c1a6;
    /* background-color: #a4c1a6; */
    border-radius: 20px;
    padding: 10px;
    height: 40px;
    width: 100%;
    text-align: center;
    text-align: center;
  }
}
.number {
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    width: 20%;
  }
  &__item button {
    color: white;
    font-size: 24px;
    width: 100%;
    border: 1px solid white;
    background-color: #dbb2a4;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
    height: 60px;
  }
}

@media screen and (min-width: 700px) {
  .number__item {
    button {
      font-size: 20px;
    }
  }
  .operation-buttons {
    &__restart button {
      font-size: 16px;
      height: 56px;
    }
    button {
      font-size: 16px;
    }
  }
}
</style>
