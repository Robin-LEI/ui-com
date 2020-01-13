# Icon

- Demo

```html
<template>
  <ed-icon name="delete"></ed-icon>
  <i class="ed-icon-delete"></i>
</template>
<!-- live-0-0.vue -->
```

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <i :class="'ed-icon-' + name"></i>
    <span class="icon-name1">{{ `ed-icon-${name}` }}</span>
    <!-- <span class="icon-name">{{'ed-icon-' + name}}</span> -->
  </li>
</ul>

