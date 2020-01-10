# 按钮

普通按钮

```html

<template>
  <div>
    <ed-button>默认按钮</ed-button>
    <ed-button type="login">登录按钮</ed-button>
    <ed-button type="primary">主要按钮</ed-button>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang='scss'>
.ed-button {
  margin-bottom: 10px;
}
</style>
<!-- live-0-0.vue -->
```

### Attributes

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| text | 按钮文字 | string | submit |
| type | 按钮类型(可选 dangder/warning) | string | primary |
| htmlType | 表单提交按钮 | string | submit |

### Methods

| 方法名 | 说明 | 参数 | 
| ---- | ---- | ---- | 
| click | 点击事件 | event对象 |
