<template>
  <i :class="`ed-icon-${name}`" @click="handleClick"></i>
</template>

<script>
export default {
  name: 'EdIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit("click")
    }
  }
}
</script>