<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EdRadioGroup',
  props: {
    value: null
  },
  provide() {
    return {
      radioGroup: this
    }
  }
}
</script>

<style scoped>

</style>