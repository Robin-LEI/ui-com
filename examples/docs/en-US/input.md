# Input

```html

<template>
  <ed-input placeholder="Basic usage" v-model="input1" @input="handleChange"></ed-input>
  <ed-input placeholder="Password" v-model="input2" type="password" @input="handleChange"></ed-input>
  <ed-input placeholder="Disabled" disabled type="password" @input="handleChange"></ed-input>
  <ed-input placeholder="Clearable" v-model="input3" clearable @input="handleChange"></ed-input>
  <ed-input placeholder="Show Password" v-model="input4" show-password @input="handleChange"></ed-input>
</template>
<script>
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      }
    },
    methods: {
      handleChange(e){
        console.log(e.target.value)
      }
    }
  }
</script>
<!-- live-0-1.vue -->
```

### Attributes

| Attribute | Description | Type | Default |
| ---- | ---- | ---- | ------ |
| type | type of input | text/password | text |
| @input | binding event | - | - |
| disabled | disabled | Boolean | false |
| v-model | binding value | string / number | - |