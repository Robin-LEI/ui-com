<template>
  <button class="ed-button" :class="[`ed-button--${type}`]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'EdButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss">
// 默认按钮
.ed-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    outline: none;
  }
}
// 主要按钮
.ed-button--primary {
  color: #fff;
  background-color: #2777FF;
  border-color: #2777FF;
  font-size: 16px;
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
    outline: none;
  }
}
// 登陆按钮
.ed-button--login {
  width:360px;
  height:50px;
  border: none;
  background:rgba(39,119,255,1);
  box-shadow:0px 5px 10px -3px rgba(12,47,105,1);
  border-radius:10px;
  font-size:20px;
  font-weight:bold;
  color:rgba(225,249,254,1);
  line-height:25px;
  &:hover, &:active, &:focus {
    background:rgba(39,119,255,1);
    box-shadow:0px 5px 10px -3px rgba(12,47,105,1);
    color:rgba(225,249,254,1);
    outline: none;
  }
}
</style>
