<template>
  <div class="ed-form">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: 'EdForm',
		props: {
			model: {
				type: Object,
				required: true
			},
			labelWidth: {
				type: String,
				default: '180px'
			}
		},
		provide() {
			return {
				Form: this
			}
		}
	}
</script>