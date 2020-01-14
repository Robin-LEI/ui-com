# Dialog

```html
<template>
  <ed-button type="primary" @click="handleClick">button</ed-button>
  <ed-dialog width="50%" top="150px" :visible.sync="visible">
    <template v-slot:title>
      <h1>Title</h1>
    </template>
    <span>Content</span>
    <template v-slot:footer>
      <ed-button type="primary">Confirm</ed-button>
      <ed-button @click="visible = false">Cancel</ed-button>
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