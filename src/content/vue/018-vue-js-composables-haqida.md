---
title: 018. Vue.js Composables haqida
pubDate: 11 Dec 2024
cover: https://5f3923a5.mukhridden-dev.pages.dev/3.webp
id: 18
type: vue
hashtags:
  - vue
  - javascript
  - composables
---
### Vue.js Composables haqida

**Composables** - bu Vue 3 `Composition API` bilan ishlashda qayta foydalaniladigan mantiqiy qismlar va funksiyalarni tashkil qilish usuli. **Composables** yordamida siz komponentlar o‘rtasida kodni bo‘lishishingiz va qayta ishlatiladigan funksionallik yaratishingiz mumkin.

- - -

### Nega Composables kerak?

1. **Qayta foydalanish**: 

   * Bir xil funksionallikni bir nechta komponentda ishlatishni soddalashtiradi.
2. **Kodning tozaligi**: 

   * Komponentlar haddan tashqari katta bo‘lib ketmasligi uchun, mantiqni alohida fayllarga ajratadi.
3. **Test qilish osonligi**: 

   * Composables funktsiyalarni alohida sinovdan o‘tkazish qulay.
4. **Bo‘linish va modullar**:

   * Loyihani modul sifatida boshqarish va mantiqni alohida saqlash imkonini beradi.

- - -

### Composables Qanday Ishlaydi?

**Composables** bu oddiy JavaScript yoki TypeScript funksiyalari bo'lib, ular Vue ning reaktiv funksiyalarini (`ref`, `reactive`, `computed`, va hokazo) qaytaradi.

- - -

### Oddiy Misol: `useCounter`

#### 1. **Composable Funksiya**

`src/composables/useCounter.ts` faylida:

```ts
import { ref } from 'vue';

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    increment,
    decrement,
  };
}
```

#### 2. **Foydalanish**

Komponentda composable funksiyani import qilib foydalanamiz:

```vue
<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

const { count, increment, decrement } = useCounter();
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
```

- - -

### Ko‘p Mantiqni Birlashtirish

#### 1. **Composables: `useToggle`**

`src/composables/useToggle.ts` faylida:

```ts
import { ref } from 'vue';

export function useToggle(initialValue = false) {
  const state = ref(initialValue);

  const toggle = () => {
    state.value = !state.value;
  };

  return {
    state,
    toggle,
  };
}
```

#### 2. **Foydalanish**

Komponentda bir nechta composable ishlatish mumkin:

```vue
<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';
import { useToggle } from '@/composables/useToggle';

const { count, increment, decrement } = useCounter();
const { state: isVisible, toggle } = useToggle();
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <button @click="toggle">Toggle Visibility</button>
    <p v-if="isVisible">This is visible!</p>
  </div>
</template>
```

- - -

### Composables uchun Papka Tuzilishi

Katta loyihalarda composables funksiyalarni boshqarish uchun papka tuzilishini quyidagicha tashkil qilish mumkin:

```
src/
├── composables/
│   ├── useCounter.ts
│   ├── useToggle.ts
│   ├── useFetch.ts
```

Barchasini qulay ro‘yxatdan o‘tkazish uchun `index.ts` fayl yaratilishi mumkin:

#### `index.ts`

```ts
export { useCounter } from './useCounter';
export { useToggle } from './useToggle';
export { useFetch } from './useFetch';
```

#### Foydalanish:

Endi composables-ni shunday import qilishingiz mumkin:

```ts
import { useCounter, useToggle } from '@/composables';
```

- - -

### Qo‘llanma: Composables-dan foydalanishda yaxshi amaliyotlar

1. **Fayl nomlash**:

   * Fayl nomi doim `use` bilan boshlansin (`useCounter`, `useFetch`, va hokazo).
2. **Qo‘shimcha util funksiyalarni saqlash**:

   * Composable funktsiyani qisqa va faqat bitta vazifaga qaratilgan holda qoldiring. Qo‘shimcha mantiqni alohida util fayllarda saqlang.
3. **State boshqaruvi**:

   * Composable funksiyalar reaktiv obyektlar (`ref`, `reactive`) bilan ishlashi kerak, lekin holatni global qilib bermang, aks holda undan noto‘g‘ri foydalanish xavfi bor.
4. **To‘g‘ri test qilish**:

   * Composables-ni alohida testlardan o‘tkazing, bu katta loyihalarda xatoliklarni kamaytiradi.

- - -