<template>
  <transition name="dialog-fade">
    <div class="ed-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="ed-dialog" :style="{width, marginTop: top}">
        <div class="ed-dialog__header">
          <!-- 标题可以是传递进来的字符串，也可以是具体名称的slot -->
          <slot name="title">
            <span class="ed-dialog__title">{{ title }}</span>
          </slot>
          <button class="ed-dialog__headerbtn" @click="handleClose">
            <i class="ed-icon-close"></i>
          </button>
        </div>
        <div class="ed-dialog__body">
          <!-- 默认插槽 --> 
          <slot></slot>
        </div>
        <div class="ed-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'EdDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang='scss'>
.ed-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .ed-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .ed-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ed-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .ed-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: show-fade .2s;
}
.dialog-fade-leave-active {
  animation: show-fade .2s reverse;
}
@keyframes show-fade {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>