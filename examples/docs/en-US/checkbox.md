# CheckBox
<br>
<br>
```html

<template>
    <ed-checkbox label="smoking" v-model="defau" @change="handleChange">Default usage</ed-checkbox>
    <ed-checkbox label="drinking" v-model="defau" disabled>Default Disabled State</ed-checkbox>
    <ed-checkbox label="perm" v-model="basic" type="basic" @change="handleChange">Basic usage</ed-checkbox>
    <ed-checkbox label="singing" v-model="basic" type="basic" disabled>Basic Disabled State</ed-checkbox>
    <ed-checkbox label="dancing" v-model="primary" type="primary">Primary usage</ed-checkbox>
    <ed-checkbox label="disco" v-model="primary" type="primary" disabled>Primary Disabled State</ed-checkbox>
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