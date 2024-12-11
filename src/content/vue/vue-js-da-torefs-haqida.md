---
title: 014. Vue.js da toRefs haqida
pubDate: 11 Nov 2024
cover: https://5f3923a5.mukhridden-dev.pages.dev/3.webp
id: 13
type: vue
hashtags:
  - vue
  - ts
  - refs
---
Mana, `toRefs` haqida barcha ma’lumotlar bitta joyda nusxalash uchun tayyor shaklda:

---

## **Vue 3: `toRefs` haqida to‘liq qo‘llanma**

`toRefs` funksiyasi `reactive` obyektni destrukturatsiya qilganda reaktivlikni saqlash uchun ishlatiladi.

---

### **Oddiy Misol**
```vue
<template>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
</template>

<script setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
  count: 0,
});

const { count } = toRefs(state); // Reaktivlik saqlanadi

const increment = () => {
  count.value++; // `.value` orqali qiymatni o'zgartiramiz
};
</script>
```

---

### **Boshqa qiymatlar bilan ishlash**
```vue
<template>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <button @click="age++">Increase Age</button>
</template>

<script setup>
import { reactive, toRefs } from 'vue';

const user = reactive({
  name: 'Ali',
  age: 25,
});

const { name, age } = toRefs(user); // Faqat kerakli qiymatlar reaktiv bo'ladi
</script>
```

---

### **Deep Nesting va `toRefs`**
```vue
<template>
  <p>City: {{ address.city }}</p>
  <button @click="address.city = 'Tashkent'">Change City</button>
</template>

<script setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
  address: {
    city: 'Samarkand',
  },
});

const { address } = toRefs(state); // Ichki obyektni reaktivligicha qoldirish
</script>
```

---

### **`toRefs` va `computed`**
```vue
<template>
  <p>Original Count: {{ count }}</p>
  <p>Double Count: {{ doubleCount }}</p>
  <button @click="count++">Increment</button>
</template>

<script setup>
import { reactive, toRefs, computed } from 'vue';

const state = reactive({
  count: 0,
});

const { count } = toRefs(state);

const doubleCount = computed(() => count.value * 2);
</script>
```

---

### **TypeScript bilan ishlash**
```vue
<template>
  <p>Count: {{ count }}</p>
  <p>Name: {{ name }}</p>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';

interface State {
  count: number;
  name: string;
}

const state = reactive<State>({
  count: 0,
  name: 'Ali',
});

const { count, name } = toRefs(state);
</script>
```

---

### **Muammolarni bartaraf etish**
- Agar `toRefs` ishlamasa, Vue 3'ning versiyasini tekshiring:
  ```bash
  npm install vue@latest
  ```
- `reactive` obyektni destrukturatsiya qilganda `toRefs`dan foydalanishni unutmang.

