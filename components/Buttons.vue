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
        削除</button
      ><button class="operation-buttons__answer" @click="answer">回答</button
      ><button class="operation-buttons__answer" @click="reset">
        初めから
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
<style>
button:hover {
  opacity: 0.7;
}
button:active {
  opacity: 0.7;
}
.operation-buttons {
  margin: auto;
}
.operation-buttons button {
  color: white;
  border: 1px solid white;
  background-color: #a4c1a6;
  border-radius: 20px;
  padding: 10px;
  height: 60px;
  width: 33%;
  text-align: center;
}
.number__list {
  display: flex;
  flex-wrap: wrap;
}
.number__item {
  width: 20%;
}
.number__item button {
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
</style>
