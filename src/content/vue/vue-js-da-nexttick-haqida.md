---
title: Vue.js da nextTick haqida
pubDate: 09 Dec 2024
cover: https://5f3923a5.mukhridden-dev.pages.dev/3.webp
id: 14
type: vue
hashtags:
  - vue
  - javascript
  - nextTick
---
Vue 3 `nextTick` - bu Vue komponentida DOM o'zgarishlari amalga oshirilganidan keyin kodni bajarish uchun ishlatiladigan yordamchi funksiyadir. Vue ichki reaktivlik tizimi asosan o'zgarishlarni guruhlab DOMni optimallashtirish uchun asenkron ravishda qayta render qiladi. `nextTick` yordamida o'zgarishlar DOMda aks etgandan so'ng ma'lum bir kodni bajarish mumkin.

### Qanday ishlaydi?



`nextTick` Vue komponentidagi DOM holatini to'liq yangilashni kutib, undan keyin kodni bajaradi. Bu, masalan, dinamik o'zgarishlardan keyin DOM elementlariga murojaat qilish kerak bo'lganda, muhim bo'lishi mumkin.

- - -

### Sintaksis

```vue
<script setup>
import { ref, nextTick } from 'vue';

const count = ref(0);

const increment = async () => {
  count.value++;
  await nextTick(); // DOM yangilanishini kutamiz
  console.log("DOM yangilandi, yangi qiymat:", count.value);
};
</script>

<template>
  <div>
    <p>Hozirgi son: {{ count }}</p>
    <button @click="increment">Ortish</button>
  </div>
</template>
```

- - -

### Asosiy foydalanish holatlari:

1. **DOMni yangilashdan keyin amallar bajarish:**
   `nextTick` yordamida DOMni o'zgartirgandan keyin elementlarga murojaat qilish mumkin:

   ```vue
   <script setup>
   import { ref, nextTick } from 'vue';

   const items = ref([]);
   const addItem = async () => {
     items.value.push("Yangi element");
     await nextTick();
     console.log("DOM yangilandi va yangi element qo'shildi.");
   };
   </script>

   <template>
     <div>
       <ul>
         <li v-for="(item, index) in items" :key="index">{{ item }}</li>
       </ul>
       <button @click="addItem">Element qo'shish</button>
     </div>
   </template>
   ```
2. **Elementlar o'lchamini yoki pozitsiyasini aniqlash:**
   Dinamik tarkib qo'shilganidan so'ng uning o'lchami yoki pozitsiyasini aniqlash uchun:

   ```vue
   <script setup>
   import { ref, nextTick } from 'vue';

   const boxVisible = ref(false);

   const toggleBox = async () => {
     boxVisible.value = !boxVisible.value;
     await nextTick();
     if (boxVisible.value) {
       const box = document.querySelector('.box');
       console.log('Boxning balandligi:', box.offsetHeight);
     }
   };
   </script>

   <template>
     <div>
       <button @click="toggleBox">Boxni ko'rsatish/yashirish</button>
       <div v-if="boxVisible" class="box">Dinamik Box</div>
     </div>
   </template>

   <style>
   .box {
     height: 100px;
     width: 100px;
     background-color: lightblue;
   }
   </style>
   ```

- - -

### `nextTick` bilan ishlashni oson tushunish uchun:

* **Muammo:** Vue reaktiv tizimi bilan o'zgarish qilgandan so'ng, DOM darhol yangilanmaydi. 
* **Yechim:** `nextTick` yordamida DOM o'zgarishini kutib, keyingi qadamni bajarish.

Bu funksional imkoniyat Vue 3 da asenkron jarayonlarni boshqarishda juda qulay vositadir.