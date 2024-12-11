---
title: 016. Vue.js da custom diretivalar bilan qanday ishlaymiz ?
pubDate: 11 Dec 2024
cover: https://5f3923a5.mukhridden-dev.pages.dev/3.webp
id: 15
type: vue
hashtags:
  - vue
  - js
  - directives
---
### Custom Directiva Nima va Nega Kerak ?



Vue.js **custom direktivalar** - bu HTML elementlariga maxsus funksionallik qo‘shish uchun ishlatiladigan vositadir. Vue'dagi standart direktivalar (`v-if`, `v-for`, `v-bind`, va boshqalar)dan tashqari, siz o‘z ehtiyojlaringizga mos keladigan direktivalarni yaratishingiz mumkin.

#### Nega kerak?

1. **Takrorlanadigan funksionallikni boshqarish**: 

   * Masalan, har bir form inputiga fokuslash kerak bo'lsa, `v-focus` kabi custom direktiva yaratib, uni qayta-qayta ishlatishingiz mumkin.
2. **Xususiy funktsiyalarni soddalashtirish**: 

   * `v-scroll`, `v-draggable` yoki `v-tooltip` kabi maxsus vazifalarni bajarish.
3. **Kodning tozaligi va qayta ishlatilishi**: 

   * Custom direktivalar yordamida kodni modul tarzida ajratib, boshqariladigan va qayta ishlatiladigan qiladi.

- - -

### Custom Directiva Qanday Yaratiladi ?



Custom direktiva - bu oddiy ob'ekt. Bu ob'ekt odatda Vue komponentining hayotiy sikllari (`mounted`, `updated`, `unmounted`) bilan ishlaydi.

- - -

### Misol: `v-focus` Direktiva

#### Yaratish

`focus.ts` faylida:

```ts
import { Directive } from 'vue';

export const focusDirective: Directive = {
  mounted(el: HTMLElement) {
    el.focus();
  }
};
```

#### Foydalanish

Vue komponentida:

```vue
<template>
  <input v-focus />
</template>
```

- - -

### Direktivalarni Papkada Saqlash va Global Foydalanish

Agar loyihada ko'p direktivalar bo'lsa, ularni alohida papkada saqlash va global ro'yxatdan o'tkazish samarali bo'ladi.

#### 1. **Papka Tuzilishi**

```
src/
├── directives/
│   ├── focus.ts
│   ├── tooltip.ts
│   ├── scroll.ts
│   └── index.ts
```

#### 2. **`index.ts` Fayli**

Barcha direktivalarni bir joyda to'plash uchun `index.ts` fayl yarating.

```ts
import { focusDirective } from './focus';
import { tooltipDirective } from './tooltip';
import { scrollDirective } from './scroll';

export default {
  focus: focusDirective,
  tooltip: tooltipDirective,
  scroll: scrollDirective,
};
```

#### 3. **`main.ts` Faylida Global Ro‘yxatdan O‘tkazish**

`main.ts` faylida barcha direktivalarni global ro‘yxatdan o‘tkazamiz.

```ts
import { createApp } from 'vue';
import App from './App.vue';
import directives from './directives';

const app = createApp(App);

// Barcha direktivalarni ro'yxatdan o'tkazish
Object.keys(directives).forEach(key => {
  app.directive(key, directives[key as keyof typeof directives]);
});

app.mount('#app');
```

#### 4. **Foydalanish**

Endi siz `v-focus`, `v-tooltip`, va `v-scroll` kabi direktivalarni har qanday komponentda ishlatishingiz mumkin:

```vue
<template>
  <div>
    <input v-focus />
    <p v-scroll>Scroll kuzatilyapti</p>
    <button v-tooltip="'Tooltip matni'">Tooltip</button>
  </div>
</template>
```

- - -

### Afzalliklari:



1. **Qayta ishlatiladigan kod**: Har qanday komponentda bir xil direktivadan foydalanish mumkin.
2. **Modullarni boshqarish**: Direktivalar bitta papkada to‘plangani uchun ularni boshqarish oson.
3. **Kod soddaligi**: Kod toza va tushunarli bo'ladi.