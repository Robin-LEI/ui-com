<template>
  <div id="app">
    <div class="main-cnt">
      <router-view></router-view>
      <!-- <ed-button @click="handleClick">默认按钮</ed-button>
      <ed-button type="login">登录按钮</ed-button>
      <ed-button type="primary" disabled>主要按钮</ed-button>
      <ed-button icon="ed-icon-check" round>圆角按钮</ed-button>
      <ed-button circle>圆</ed-button>
      <ed-button @click="handleClick" disabled>禁用按钮</ed-button>
      <ed-button icon="ed-icon-delete" circle></ed-button> -->
      <!-- <ed-dialog title="大家好"></ed-dialog> -->
      <!-- <ed-button type="primary" @click="handleClick">按钮</ed-button>
      <ed-dialog width="50%" top="150px" :visible.sync="visible">
        <template v-slot:title>
          <h1>hello robin</h1>
        </template>
        <span>我是内容</span>
        <template v-slot:footer>
          <ed-button type="primary">确定</ed-button>
          <ed-button>取消</ed-button>
        </template>
      </ed-dialog> -->
      <!-- <ed-input placeholder="用户名" v-model="username" clearable></ed-input>
      <ed-input type="password" placeholder="密码" v-model="password" show-password></ed-input>
      <ed-input type="password" disabled placeholder="密码"></ed-input> -->
      <!-- <ed-switch v-model="active" active-color='red' inactive-color='blue'></ed-switch> -->
      <!-- <ed-icon name="check"></ed-icon> -->
      <!-- <ed-radio label="1" v-model="gender" @change="handleGender">男</ed-radio>
      <ed-radio label="0" v-model="gender">女</ed-radio>
      <ed-radio label="2" v-model="gender" disabled></ed-radio>
      <ed-radio label="3" v-model="gender" type="primary"></ed-radio>
      <ed-radio label="3" v-model="gender" type="primary" disabled></ed-radio> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      visible: false,
      username: '',
      password: '',
      active: false,
      gender: '1'
    }
  },
  methods: {
    handleClick() {
      this.visible = true
    },
    dd() {
      console.log(this.username)
    },
    handleGender(val) {
      console.log('val', val)
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
