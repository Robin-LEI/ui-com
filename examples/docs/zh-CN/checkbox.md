# 复选框CheckBox
<br>
<br>
```html

<template>
    <ed-checkbox label="抽烟" v-model="active" @change="handleChange">基础复选框</ed-checkbox>
    <ed-checkbox label="喝酒" v-model="active" disabled>基础复选框禁用</ed-checkbox>
    <ed-checkbox label="抽烟" v-model="active" type="primary">主要复选框</ed-checkbox>
    <ed-checkbox label="抽烟" v-model="active" type="primary" disabled>主要复选框禁用</ed-checkbox>
</template>
<script>
    export default {
        data() {
            return {
                active: false
            }
        },
        methods: {
            handleChange(val) {}
        }
    }
</script>
<!-- live-0-0.vue -->
```