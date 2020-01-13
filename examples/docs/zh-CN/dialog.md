# 对话框

```html
<template>
  <ed-button type="primary" @click="handleClick">按钮</ed-button>
  <ed-dialog width="50%" top="150px" :visible.sync="visible">
    <template v-slot:title>
      <h1>我是标题</h1>
    </template>
    <span>我是内容</span>
    <template v-slot:footer>
      <ed-button type="primary">确定</ed-button>
      <ed-button @click="visible = false">取消</ed-button>
    </template>
  </ed-dialog>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleClick() {
        this.visible = true
      }
    }
  }
</script>
<!-- live-0-0.vue -->
```