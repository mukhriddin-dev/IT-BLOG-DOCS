---
title: 013. Vue.js da Computed funksiyasi qanday ishlaydi ?
pubDate: 09 Nov 2024
cover: /3.webp
id: 13
type: vue
hashtags:
  - vue
  - javascript
  - frontend
---
**Vue’da**  \`\`computed\`\` properties — hisoblanadigan xossalar bo'lib, ular murakkab hisob-kitoblarni avtomatik bajarishga yordam beradi. 

Ular komponentdagi qiymatlarni qayta hisoblash zarur bo'lganda ishlatiladi, lekin Vue ularni faqat kerakli o'zgarishlar bo'lgandagina yangilaydi.

 ***Bu esa komponentning ish faoliyatini yaxshilaydi va qayta renderlashlarni kamaytiradi.***

**Computed Properties ning Asosiy Afzalliklari**


**Keshlash:** Computed properties avtomatik ravishda keshlanadi, ya’ni asosiy qiymatlar o'zgarmasa, ular qayta hisoblanmaydi.


**Murakkab hisob-kitoblarni ajratish:**  Template ichida murakkab hisob-kitoblarni amalga oshirish o'rniga, computed properties yordamida bularni alohida ajratib, kodni yanada o'qilishi oson qiladi.


**Dependensiyalarni kuzatish:**  Vue ichki tizimi computed propertiesga qaysi o'zgaruvchilar bog'langanligini biladi va faqat shu o'zgaruvchilar yangilansa, computed properties qayta hisoblanadi.
Computed Properties dan Foydalanish



### `script setup` da Computed Property



`script setup` ichida computed property yaratish juda oson. `computed` funksiyasi import qilinadi va qiymatni hisoblash uchun `getter` funksiyasi sifatida ishlatiladi.

#### Misol:

Faraz qilaylik, bizda ikkita o'zgaruvchi (`firstName` va `lastName`) bor, va biz ularni birlashtirib `fullName` ni qaytarmoqchimiz:

```html
<template>
  <p>To'liq ism: {{ fullName }}</p>
</template>

<script setup>
import { ref, computed } from 'vue';

// ref o'zgaruvchilarni e'lon qilish
const firstName = ref('Nurali');
const lastName = ref('Valiyev');

// computed property
const fullName = computed(() => `${firstName.value} ${lastName.value}`);
</script>
```

Yuqoridagi misolda:

* `firstName` va `lastName` `ref` yordamida reaktiv o'zgaruvchilar sifatida e'lon qilinadi.
* `fullName` computed property sifatida e'lon qilinadi va uning qiymati `firstName` va `lastName` qiymatlariga asoslangan holda qayta hisoblanadi.

### `script setup` da Computed Setter va Getter

`script setup` ichida computed property ni ham getter, ham setter bilan yaratish ham mumkin. Agar computed property orqali qiymatni o'zgartirish kerak bo'lsa, quyidagi usulni ishlatamiz:

```html
<template>
  <p>To'liq ism: {{ fullName }}</p>
  <input v-model="fullName" placeholder="Ismingizni kiriting">
</template>

<script setup>
import { ref, computed } from 'vue';

const firstName = ref('Nurali');
const lastName = ref('Valiyev');

// setter va getter bilan computed property
const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (newValue) => {
    const names = newValue.split(' ');
    firstName.value = names[0];
    lastName.value = names[1] || '';
  }
});
</script>
```

Bu misolda:

* `get` funksiyasi `firstName` va `lastName` ni birlashtirib, `fullName` ni qaytaradi.
* `set` funksiyasi yangi qiymatni `firstName` va `lastName` ga ajratadi va yangilaydi. Shu sababli, input maydonida `v-model="fullName"` orqali to'liq ismni kiritsangiz, `firstName` va `lastName` o'zgaruvchilari avtomatik yangilanadi.

### Demak:



`script setup` yordamida computed property larni juda oson va sodda usulda yaratishingiz mumkin. Bu Vue 3 ning asosiy imkoniyatlaridan biri bo'lib, kodni ixchamlashtirish va samaradorlikni oshirishda katta yordam beradi.