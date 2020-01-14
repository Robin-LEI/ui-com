# Radio

```html

<template>
  <ed-radio label="1" v-model="gender" @change="handleGender">Male</ed-radio>
  <ed-radio label="0" v-model="gender" @change="handleGender">Female</ed-radio>
  <ed-radio label="2" v-model="gender" disabled>Undetermined</ed-radio>
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