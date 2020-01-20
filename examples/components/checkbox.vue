<template>
  <label class="ed-checkbox" :class="[`ed-checkbox--${type}`, {'is-checked': isChecked, 'is-disabled': disabled}]">
    <span class="ed-checkbox__input" :class="{'is-disabled': disabled}">
      <span class="ed-checkbox__inner">
        <img v-if="type && isChecked" :src="require('@assets/images/dagou.png')" alt="">
      </span>
      <input 
        type="checkbox" 
        class="ed-checkbox__original" 
        :name="name"
        v-model="model"
        :disabled="disabled"
        @change="handleChange"
        :value="label"
      >
    </span>
    <span class="ed-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'EdCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [Number, String, Boolean],
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    isChecked() {
      // 如果被group包裹，判断label是否在model中
      return this.isGroup ? this.model.includes(this.label) : this.model
    },
    model: {
      set(value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      },
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      }
    },
    isGroup() {
      return !!this.CheckboxGroup
    }
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.isGroup ? this.CheckboxGroup.$emit('input', this.model) : this.$emit('input', this.model)
        this.isGroup ? this.CheckboxGroup.$emit('change', this.model) : this.$emit('change', this.model)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.ed-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .ed-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ed-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .ed-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  // 没有选中的禁用
  .ed-checkbox__input.is-disabled {
    .ed-checkbox__inner {
      background-color: #edf2fc;
      border-color: #dcdfe6;
      cursor: not-allowed;
    }
  }
  .ed-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  // 没有选中的label
  .ed-checkbox__input.is-disabled+span.ed-checkbox__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
.ed-checkbox.is-checked {
  .ed-checkbox__input {
    .ed-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .ed-checkbox__label {
    color: #409eff;
  }
  // 选中的禁用样式
  .ed-checkbox__input.is-disabled .ed-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
    &:after {
      border-color: #c0c4cc;
    }
  }
}
// 基础复选框
.ed-checkbox--basic {
  .ed-checkbox__input {
    .ed-checkbox__inner {
      width: 20px;
      height: 20px;
      border-color: rgba(151, 151, 151, 1);
      border-radius: 4px;
      background: linear-gradient(#FFFFFF, #EDEDED);
      text-align: center;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 16px;
        height: 14px;
      }
      &:after {
        content: none;
      }
    }
  }
}
// 主要复选框
.ed-checkbox--primary {
  .ed-checkbox__input {
    .ed-checkbox__inner {
      width: 28px;
      height: 28px;
      border-color: rgba(39, 119, 255, 1.0);
      border-width: 2px;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-content: center;
      img {
        width: 24px;
        height: 21px;
      }
      &:after {
        content: none;
      }
    }
  }
}
.ed-checkbox--primary.is-checked {
  .ed-checkbox__input  {
    .ed-checkbox__inner {
      background: transparent;
      border-color: rgba(39, 119, 255, 1.0);
    }
  }
}
</style>