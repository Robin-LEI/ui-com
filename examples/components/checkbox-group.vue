<template>
  <div class="ed-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EdCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
