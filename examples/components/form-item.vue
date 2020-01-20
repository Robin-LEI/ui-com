<template>
  <div class="ed-form-item">
    <label class="ed-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="ed-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'EdFormItem',
		props: {
			label: {
				type: String,
				default: ''
			}
		},
		inject: {
			Form: {
				default: ''
			}
		},
		computed: {
			labelStyle() {
				return {
					width: this.Form && this.Form.labelWidth
				}
			}
		}
	}
</script>

<style lang="scss">
.ed-form-item {
  margin-bottom: 25px;
  .ed-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .ed-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
