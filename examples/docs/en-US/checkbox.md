# CheckBox
<br>
<br>
```html

<template>
    <ed-checkbox label="抽烟" v-model="active" @change="handleChange">Basic usage</ed-checkbox>
    <ed-checkbox label="喝酒" v-model="active" disabled>Basic Disabled State</ed-checkbox>
    <ed-checkbox label="抽烟" v-model="active" type="primary">Primary usage</ed-checkbox>
    <ed-checkbox label="抽烟" v-model="active" type="primary" disabled>Primary Disabled State</ed-checkbox>
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