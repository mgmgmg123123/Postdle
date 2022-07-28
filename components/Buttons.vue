<template>
  <div class="buttons">
    <ul class="number__list" v-if="!$store.state.clear">
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
    <div class="operation-buttons">
      <button class="operation-buttons__delate" @click="deleteNumber">
        １文字削除</button
      ><button class="operation-buttons__answer" @click="answer">
        回答する
      </button>
    </div>
    <div class="operation-buttons__restart">
      <button class="operation-buttons__restart" @click="reset">
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
    },
    answer() {
      this.$store.dispatch("answer");
    },
    insert(number) {
      this.$store.dispatch("insert", number);
    },
    reset() {
      this.$store.dispatch("reset");
      this.$store.dispatch("answerSettings");
    },
    answerSettings() {
      this.$store.dispatch("answerSettings");
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
