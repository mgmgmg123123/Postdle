<template>
  <div class="how-to-play">
    <h3 class="how-to-play__tittle">遊び方</h3>
    <p>
      このゲームは<a
        href="https://www.nytimes.com/games/wordle/index.html"
        class="wordle"
        >Wordle</a
      >にインスパイアされ作成しています。
    </p>
    <p>
      正解の郵便番号を当てます。答えの中にその数字が含まれていれば黄色、加えて場所も正しければ緑色になります。郵便番号の右側にはヒントとして距離が表示されます。
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wordle {
  text-decoration: underline;
}
.how-to-play {
  font-size: 14px;
  padding: 8px;
}
.how-to-play h3 {
  font-size: 16px;
  text-align: center;
}
.how-to-play__tittle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.how-to-play__tittle:before,
.how-to-play__tittle:after {
  border-top: 1px solid;
  content: "";
  width: 3em;
}
.how-to-play__tittle:before {
  margin-right: 1em;
}
.how-to-play__tittle:after {
  margin-left: 1em;
}
@media screen and (min-width: 700px) {
  .how-to-play {
    font-size: 16px;
    padding: 8px;
  }
  .how-to-play h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }
}
</style>
