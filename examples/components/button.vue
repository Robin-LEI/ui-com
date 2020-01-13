<template>
  <button class="ed-button" :class="[`ed-button--${type}`, {
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'EdButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    round: { // 圆角
      type: Boolean,
      default: false
    },
    circle: { // 圆形
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
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
// 圆角
.ed-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.ed-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 字体图标按钮,紧跟着后面的span
.ed-button [class*='ed-icon-']+span {
  margin-left: 5px;
}
// 按钮的禁用
// 默认按钮禁用
.ed-button.is-disabled, .ed-button.is-disabled:focus, .ed-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
// 主要按钮禁用
.ed-button--primary.is-disabled, .ed-button--primary.is-disabled:active, .ed-button--primary.is-disabled:focus, .ed-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
</style>
