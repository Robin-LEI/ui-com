<template>
  <div id="app">
    <div class="main-cnt">
      <!-- <router-view></router-view> -->
      <ed-button @click="handleClick">默认按钮</ed-button>
      <ed-button type="login">登录按钮</ed-button>
      <ed-button type="primary">主要按钮</ed-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleClick() {
      console.log(1)
    }
  }
}
</script>

<style lang='scss'>
*{
  margin:0;
  padding:0;
}
#app {
  .main-cnt {
    padding: 60px;
    ul li {
      list-style: none;
    }
    .ed-button {
      margin-right: 20px;
    }
  }
}
</style>
