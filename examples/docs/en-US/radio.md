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

# Primary Radio
```html

<template>
  <ed-radio label="1" v-model="gender" type="primary">radio1</ed-radio>
  <ed-radio label="2" v-model="gender" type="primary">radio2</ed-radio>
  <ed-radio label="3" v-model="gender3" type="primary" disabled>radio3</ed-radio>
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
