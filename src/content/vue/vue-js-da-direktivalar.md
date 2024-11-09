---
title: Vue.js da Direktivalar
pubDate: 09 Nov 2024
cover: /3.webp
id: 11
type: vue
hashtags:
  - vue
  - javascript
  - direktiva
---
Assalamu alaykum! Vue 3 da mavjud bo'lgan barcha direktivalarni to'liqroq ko'rib chiqamiz.

---

### 1. **`v-bind`** - Atributlarni Bog'lash

   - Atributlarni dinamik qiymatlar bilan bog'lash imkonini beradi.
   - Ko'pincha `:attribute` sifatida qisqartiriladi.
     ```html
     <img v-bind:src="imageUrl" alt="Rasm">
     ```

### 2. **`v-model`** - Ikki Tomonlama Data Bog'lash

   - Ma'lumotlarni komponent bilan asinxron sinxronlash imkonini beradi.
   - `v-model` form elementlari bilan ishlashda juda qulay.
     ```html
     <input v-model="username" placeholder="Ismingizni kiriting">
     ```

### 3. **`v-if`, `v-else-if`, `v-else`** - Shartli Renderlash

   - **`v-if`** - Shartga ko'ra DOMga qo'shadi yoki o'chiradi.
   - **`v-else-if`** - Alternativ shartlarni tekshiradi.
   - **`v-else`** - Barcha boshqa holatlar uchun ko'rsatiladi.
     ```html
     <p v-if="isLoggedIn">Xush kelibsiz!</p>
     <p v-else>Ro'yxatdan o'ting yoki tizimga kiring.</p>
     ```

### 4. **`v-show`** - Ko'rsatish/Yashirish

   - DOMdan o'chirmay, `display: none` orqali yashiradi.
     ```html
     <p v-show="isLoggedIn">Siz tizimdasiz</p>
     ```

### 5. **`v-for`** - Looping

   - Ro'yxat yoki obyekt elementlarini iteratsiya qilish uchun ishlatiladi.
     ```html
     <ul>
       <li v-for="item in items" :key="item.id">{{ item.name }}</li>
     </ul>
     ```

### 6. **`v-on`** - Hodisalarni Tutish

   - Hodisalarni tutish uchun ishlatiladi (masalan, `click`, `submit`).
   - `@event` qisqartmasi mavjud.
     ```html
     <button @click="toggle">Bosish</button>
     ```

### 7. **`v-bind:class` va `v-bind:style`** - Dinamik Class va Style

   - **`v-bind:class`** - Dinamik class qiymatlari qo'shish.
     ```html
     <div :class="{ active: isActive, 'text-large': isLarge }">Matn</div>
     ```
   - **`v-bind:style`** - Dinamik style qo'shish.
     ```html
     <div :style="{ color: textColor, fontSize: fontSize + 'px' }">Matn</div>
     ```

### 8. **`v-slot`** - Slotlar bilan Ishlash

   - Dinamik kontent qo'shish uchun slotlardan foydalanadi.
     ```html
     <template v-slot:header>
       <h1>Bosh sahifa</h1>
     </template>
     ```

### 9. **`v-pre`** - Vue Kodlarini E'tibordan Chiqish (renderni) oldini olish

   - Elementni Vue tomonidan qayta ishlashdan chiqarib qo'yadi.
     ```html
     <span v-pre>{{ bu_shunchaki_text }}</span>
     ```

### 10. **`v-cloak`** - Vue Yuklanishi Davomida Yashirish

   - Vue yuklanmaguncha elementni yashirishda ishlatiladi.
     ```html
     <div v-cloak>... Yuklanmoqda ...</div>
     ```

### 11. **`v-once`** - Bir Martalik Renderlash

   - Elementni bir martalik render qilish uchun ishlatiladi.
     ```html
     <p v-once>{{ initialText }}</p>
     ```

### 12. **`v-memo`** - Keshlash

   - Vue 3.2 da kiritilgan yangi direktiva bo'lib, ishlatiladigan qiymatlar o'zgarmasa, qayta renderlashdan saqlaydi.
     ```html
     <div v-memo="[value1, value2]">Bu memo qilingan blok</div>
     ```

### 13. **Custom Direktivalar** - Maxsus Direktivalar Yaratish

   - Vue orqali o'zingizga xos yangi direktivalar yaratishingiz mumkin. Bu direktivalar orqali elementlarga maxsus xatti-harakatlar o'rnatishingiz mumkin.

     ```javascript
     app.directive('focus', {
       mounted(el) {
         el.focus();
       }
     });
     ```

   - **Foydalanish**:
     ```html
     <input v-focus>
     ```

---

Yuqoridagi barcha direktivalarni o'rganib chiqsangiz, Vue 3 dagi barcha asosiy va qo'shimcha direktivalarni to'liq qamrab olgan bo'lasiz. Bu sizga Vue 3 da kuchli va interaktiv ilovalar yaratishga imkon beradi.

Custom deriktiva haqida esa kyingi postlarda batafsil gaplashamiz.