<template>
  <div class="ed-switch" :class="{'is-checked': value}" @click="handleSwitch">
    <span class="ed-switch__core" ref="core">
      <span class="ed-switch__button"></span>
    </span>
    <!-- 支持表单 name属性 -->
    <input
      class="ed-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
  </div>
</template>

<script>
  export default {
    name: 'EdSwitch',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        default: ''
      },
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      }
    },
    methods: {
      async handleSwitch() {
        this.$emit('input', !this.value)
        // 数据修改，等待DOM更新
        await this.$nextTick()
        this.setColor()
      },
      setColor() {
        if (this.activeColor || this.inactiveColor) {
          const color = this.value ? this.activeColor : this.inactiveColor
          this.$refs.core.style.borderColor = color
          this.$refs.core.style.backgroundColor = color
        }
        this.$refs.input.checked = this.value
      }
    },
    mounted() {
      this.setColor()
    }
  }
</script>

<style lang='scss'>
.ed-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .ed-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .ed-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .ed-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.ed-switch.is-checked {
  .ed-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .ed-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>