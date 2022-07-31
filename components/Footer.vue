<template>
  <footer>
    <router-link
      to="/sitePolicy"
      v-if="this.$route.name !== 'sitePolicy'"
      class="link"
      >サイトポリシー</router-link
    >
    <router-link to="/" v-if="this.$route.name !== 'index'" class="link"
      >トップページ</router-link
    >
  </footer>
</template>
<script></script>
<style lang="scss" scoped>
footer {
  color: #776056;
  height: 56px;
  text-align: center;
  font-size: 16px;
  line-height: 56px;
  width: 100%;
  text-decoration: underline;
  .link {
    text-align: center;
    font-size: 12px;
    text-decoration: underline;
  }
}
</style>
