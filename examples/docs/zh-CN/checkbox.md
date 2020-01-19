# 复选框CheckBox
<br>
<br>
```html

<template>
    <ed-checkbox label="抽烟" v-model="defau" @change="handleChange">默认复选框</ed-checkbox>
    <ed-checkbox label="喝酒" v-model="defau" disabled>默认复选框禁用</ed-checkbox>
    <ed-checkbox label="烫头" v-model="basic" type="basic" @change="handleChange">基础复选框</ed-checkbox>
    <ed-checkbox label="唱歌" v-model="basic" type="basic" disabled>基础复选框禁用</ed-checkbox>
    <ed-checkbox label="跳舞" v-model="primary" type="primary">主要复选框</ed-checkbox>
    <ed-checkbox label="蹦迪" v-model="primary" type="primary" disabled>主要复选框禁用</ed-checkbox>
</template>
<script>
    export default {
        data() {
            return {
                defau: false,
                basic: false,
                primary: false
            }
        },
        methods: {
            handleChange(val) {}
        }
    }
</script>
<!-- live-0-0.vue -->
```