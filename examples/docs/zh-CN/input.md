# Input 输入框

```html

<template>
  <ed-input placeholder="基础输入框" v-model="input1" @input="handleChange"></ed-input>
  <ed-input placeholder="密码输入框" v-model="input2" type="password" @input="handleChange"></ed-input>
  <ed-input placeholder="禁用输入框" disabled type="password" @input="handleChange"></ed-input>
  <ed-input placeholder="带清除功能" v-model="input3" clearable @input="handleChange"></ed-input>
  <ed-input placeholder="带显示密码功能" v-model="input4" show-password @input="handleChange"></ed-input>
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

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| type | 输入框类型 text/password | string | text |
| @input | 绑定事件 | - | - |
| disabled | 禁用 | Boolean | false |
| v-model | 绑定值 | string / number | - |