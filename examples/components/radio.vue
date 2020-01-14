<template>
  <label class="ed-radio" :class="[`ed-radio--${type}`, {'is-checked': value === label}]">
    <span class="ed-radio__input" :class="{'is-checked': value === label, 'is-disabled': disabled}">
      <span class="ed-radio__inner"></span>
      <!-- value值就是接受到的label -->
      <input
        class="ed-radio__original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled"
        @change="handleChange"
      >
    </span>
    <span class="ed-radio__label">
      <slot></slot>
      <!-- 如果没有传递内容，就把label作为内容 -->
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'EdRadio',
    props: {
      label: {
        type: [String, Boolean, Number],
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      value: null,
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
      model: {
        get() {
          // 把父组件传递过来的数据返回
          return this.value
        },
        set(value) {
          // 把当前value的值传递给父组件
          this.$emit('input', value)
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
        });
      }
    }
  }
</script>
<style lang='scss'>
.ed-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .ed-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ed-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .ed-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .ed-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.ed-radio.is-checked {
  .ed-radio__input {
    .ed-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .ed-radio__label {
    color: #409eff;
  }
}
// 主要单选框
.ed-radio--primary {
  .ed-radio__input {
    .ed-radio__inner {
      width: 20px;
      height: 20px;
      border-radius:10px;
      border:1px solid rgba(151,151,151,1);
      background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(237,237,237,1) 100%);
      &:after {
        width:12px;
        height:12px;
        background:rgba(39,119,255,1);
      }
    }
  }
}
.ed-radio__input.is-disabled.is-checked .ed-radio__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
}
.ed-radio__input.is-checked .ed-radio__inner {
  border-color: #409eff;
  background: #409eff;
}
.ed-radio__input.is-disabled .ed-radio__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  cursor: not-allowed;
}
.ed-radio__input.is-disabled.is-checked .ed-radio__inner:after {
  background-color: #c0c4cc;
}
// 主要单选框
.ed-radio--primary .ed-radio__input.is-checked .ed-radio__inner {
  background:rgba(255,255,255,1);
  border-radius:10px;
  border:1px solid rgba(39,119,255,1);
}
.ed-radio--primary .is-disabled.ed-radio__input.is-checked .ed-radio__inner {
  background-color: #f5f7fa;
  border-color: #ccc;
}
</style>