<template>
  <div class="ed-input" :class="{
		'is-disabled': disabled,
		'ed-input--suffix': showSuffix
	}">
    <input 
			:type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
			:placeholder="placeholder"
			:disabled="disabled"
			:name="name"
			:value="value"
			class="ed-input__inner"
			@input="handleInput"
		>
		<span class="ed-input__suffix" v-if="showSuffix">
		<i class="ed-input__icon ed-icon-circle-close" v-if="clearable && value" @click="() => this.$emit('input', '')"></i>
		<i 
			class="ed-input__icon ed-icon-view" 
			v-if="showPassword && value" 
			@click="switchType"
			:class="{
				'ed-icon-view-active': passwordVisiable
			}"
		></i>
	</span>
  </div>
</template>

<script>
export default {
	name: 'EdInput',
	props: {
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: ''
		},
		value: {
			type: [String, Number],
			default: ''
		},
		clearable: {
			type: Boolean,
			default: false
		},
		showPassword: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			passwordVisiable: false
		}
	},
	computed: {
		showSuffix() {
			return this.clearable || this.showPassword
		}
	},
	methods: {
		handleInput(e) {
			this.$emit('input', e.target.value)
		},
		switchType() {
			this.passwordVisiable = !this.passwordVisiable
		}
	}
}
</script>
<style lang="scss">
	.ed-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ed-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}
.ed-input.is-disabled .ed-input__inner {
	background-color: #f5f7fa;
	border-color: #e4e7ed;
	color: #c0c4cc;
	cursor: not-allowed;
}
.ed-input--suffix {
  .ed-input__inner {
    padding-right: 30px;
  }
  .ed-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
		}
		.ed-icon-view-active {
			color: #606266;
		}
  }
}
</style>