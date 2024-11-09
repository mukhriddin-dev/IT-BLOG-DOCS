---
title: 012. Vue.js da v-once va v-memo direktivasi ishlashi
pubDate: 09 Nov 2024
cover: /3.webp
id: 12
type: vue
hashtags:
  - vue
  - javascript
  - direktiva
---
Vue 3.2 da kiritilgan **`v-memo`** direktivasi, `v-once` direktivasiga o'xshash, lekin undan ko'ra murakkabroq holatlarda qo'llaniladi. Bu direktiva elementni yoki komponentni qayta renderlashdan saqlaydi va shu orqali ilovaning ish faoliyatini yaxshilaydi. Lekin, bu faqatgina unga bog'langan ma'lum bir qiymatlar o'zgarmagan taqdirda amalga oshadi.

### `v-memo` Direktivasining Asosiy qoidasi:

- **Ma'lum shartlar bo'yicha qayta renderlashni cheklash**: `v-memo` bilan, komponent yoki element faqat **bog'langan qiymat o'zgarganda** qayta renderlanadi.
- **Ish faoliyatini yaxshilash**: Ma'lum shartlar bajarilgan taqdirda Vue elementni qayta renderlamaydi, bu esa ilovaning ish faoliyatini yaxshilashga yordam beradi.

### `v-memo` ning Ishlash Usuli

`v-memo` direktivasi qiymat sifatida bir yoki bir nechta qiymatlarning massivi (`Array`) ni qabul qiladi. Vue bularning qiymatini tekshiradi va faqat shu qiymatlardan birortasi o'zgargan taqdirda elementni yoki komponentni qayta renderlaydi.

#### Misol:

Faraz qilaylik, bizda ikkita o'zgaruvchi bor: `value1` va `value2`. Ularning faqat biri o'zgarganda Vue elementni qayta renderlashini xohlaymiz.

```html
<div v-memo="[value1, value2]">
  Bu memo qilingan blok. 
  <span>{{ value1 }}</span> va <span>{{ value2 }}</span>
</div>
```

Yuqoridagi kodda:
- Agar **faqat `value1` yoki `value2` qiymatlaridan biri o'zgarsa**, element qayta renderlanadi.
- Aks holda, Vue elementni qayta renderlamasdan, avvalgi holatini saqlab qoladi.

### `v-memo` va `v-once` Farqi

| **`v-once`** | **`v-memo`** |
|--------------|--------------|
| Element yoki komponentni faqat **birinchi martada** render qiladi va keyin o'zgarmaydi. | Element yoki komponentni faqat bog'langan qiymatlar o'zgarganda renderlaydi. |
| **Statik kontent** uchun ishlatiladi. | Dinamik kontent uchun ishlatiladi, lekin shartli ravishda renderlash cheklanishi mumkin. |

### Qachon `v-memo` dan Foydalanish Kerak?

- **Ko'p qayta renderlashlar bo'lsa**: Ma'lumotlar yoki qiymatlar tez-tez yangilanadigan, lekin faqat ma'lum shartlar bajarilsa o'zgarishi kerak bo'lgan holatlar uchun `v-memo` juda foydali.
- **Optimizatsiya**: Katta komponentlar ko'p qayta renderlash orqali ish faoliyatiga salbiy ta'sir qilmasligi uchun, `v-memo` orqali qayta renderlashni cheklash mumkin.

### E'tiborga Olish kerakki:

1. **Reaktivlikni to'liq tushunish**: Agar noto'g'ri qiymatlar bilan ishlatilsa, `v-memo` kutilmagan xatolarga olib kelishi mumkin.
2. **Oddiy holatlar uchun emas**: Juda murakkab komponentlar yoki katta ro'yxatlar uchun ko'proq foyda beradi.

### Yakuniy Xulosa

`v-memo` direktivasi Vue 3 ilovalari uchun qayta renderlashni boshqarishning kuchli ustunlik beradi. Bu katta va murakkab ilovalarda ish faoliyatini sezilarli darajada yaxshilaydi.
