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

# 主要单选框
```html

<template>
  <ed-radio label="1" v-model="gender" type="primary">单选按钮1</ed-radio>
  <ed-radio label="2" v-model="gender" type="primary">单选按钮2</ed-radio>
  <ed-radio label="3" v-model="gender3" type="primary" disabled>单选按钮3</ed-radio>
</template>
<script>
  export default {
    data() {
      return {
        gender: '2',
        gender3: '3'
      }
    },
    methods: {
      handleGender(val) {
        console.log(val)
      }
    }
  }
</script>
<!-- live-0-1.vue -->
```
