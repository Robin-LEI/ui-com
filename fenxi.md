# export default { name: '' }
# 使用`vue-cli3.x`脚手架工具

# export default { name: name的作用 }

# 引入字体图标
1. [class*='ed-icon-'] // 属性选择器，只要class类名中包含`ed-icon-`开头，就使用这个样式

# slots
1. $slots.default
2. 老式用法：`<slot name="title"></slot>`和`<template slot="title"></template>`
3. 新式用法：`<slot v-bind:title="title"></slot>`和`<template v-slot="title"></template>`

# self修饰符
1. 阻止事件的冒泡和捕获
2. 只有当绑定点击事件的元素和当前点击的元素一致的时候才会触发

# sync
1. 是一个语法糖
2. 父组件：`<demo :money="money" @update:money="fn"></demo>`，子组件：希望去修改money值，通过`this.$emit("update:money", new-value)`
3. 这个时候就可以使用async语法，`<demo :money.sync="money"></demo>`，子组件：通过`this.$emit("update:money", new-value)`

# vue的动画
1. 使用transition包裹
```js
<transition name="dialog-fade"></transition>
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
```

# Vscode自动补全：settings.json: "emmet.triggerExpansionOnTab": true

# Vscode支持vue语法：Vue snippets

# v-model
1. 语法糖
2. `<input v-model="username"></input>`
3. `<input :value="username" @input="username = $events.target.value"></input>`

# input隐藏显示密码
1. `<input :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"><>`

# this.$nectTick
1. 等待value值发生了变化再去操作
2. this.$nectTick().then(() => {})
3. await this.$nectTick() // 数据修改后，等待DOM更新，再修改按钮的颜色
