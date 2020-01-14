# 单选框Radio

```html

<template>
  <ed-radio label="1" v-model="gender" @change="handleGender">男</ed-radio>
  <ed-radio label="0" v-model="gender" @change="handleGender">女</ed-radio>
  <ed-radio label="2" v-model="gender" disabled>不愿透露</ed-radio>
</template>
<script>
  export default {
    data() {
      return {
        gender: '1'
      }
    },
    methods: {
      handleGender(val) {
        console.log(val)
      }
    }
  }
</script>
<!-- live-0-0.vue -->
```