---
title: CSR , SSR , SSG , isbular nima ?
pubDate: 10 Nov 2024
cover: https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiyjj6r3zjo2dm7ilyeub.jpg
id: 5
type: blog
hashtags:
  - SEO
  - NextJS
  - WEB
---
CSR, SSR, SSG va ISR — bularning barchasi web sahifalarni render qilish usullari bo‘lib, ularning har biri sayt qanday yaratilishi va foydalanuvchiga qanday ko‘rsatilishini belgilaydi.



![](https://mercecom.ghost.io/content/images/2023/01/JQ1vFf6N05.png)

### 1. CSR (Client-Side Rendering)

**Client-Side Rendering** brauzer tomonidan sahifani yaratish usuli. Bu usulda barcha asosiy HTML, CSS va JavaScript kodlari serverdan bir martada yuboriladi, so‘ngra JavaScript yordamida sahifa foydalanuvchi tomonda (brauzerda) dinamik tarzda shakllanadi.

* **Jarayon**: Sahifa birinchi yuklanganda, faqat bitta HTML fayli yuklanadi, keyin JavaScript orqali sahifaning qolgan qismi yig‘iladi va yangilanadi.
* **Afzalliklari**:

  * Dinamik va interaktiv dasturlar uchun yaxshi ishlaydi (masalan, bir sahifali ilovalar - SPA).
  * Foydalanuvchi bilan tezkor o‘zaro aloqani ta'minlaydi.
* **Kamchiliklari**:

  * Dastlabki yuklanish vaqti uzoqroq bo‘lishi mumkin, chunki barcha JavaScript yuklanishini kutish talab etiladi.
  * SEO uchun qiyinchilik tug‘diradi, chunki sahifa mazmuni JavaScript yuklanishidan keyin ko‘rsatiladi.

### 2. SSR (Server-Side Rendering)

**Server-Side Rendering** sahifani serverda tayyorlab, to‘liq HTML shaklida brauzerga yuboradi. Foydalanuvchi sahifani ochganda, to‘liq HTML ko‘rinishi darhol ko‘rsatiladi.

* **Jarayon**: Har bir so‘rovda (har bir sahifa ochilishida) server yangi HTML sahifani yaratib, brauzerga yuboradi.
* **Afzalliklari**:

  * Sahifa tezroq yuklanadi, chunki to‘liq HTML brauzerga yuboriladi.
  * SEO uchun qulay, chunki sahifaning to‘liq mazmuni serverda tayyorlangan bo‘ladi.
* **Kamchiliklari**:

  * Har bir so‘rovda serverga yuklanish ortadi.
  * Katta yoki ko‘p foydalanuvchi talab qiladigan dasturlar uchun server yukini oshirishi mumkin.

### 3. SSG (Static-Site Generation)

**Static-Site Generation** sahifalarni oldindan (build vaqtida) statik HTML fayllari sifatida yaratib, keyin ularni serverga yuklash usuli. Har bir sahifa oldindan tayyor bo‘lgani uchun foydalanuvchi murojaat qilganda uni server darhol ko‘rsata oladi.

* **Jarayon**: Har bir sahifa build jarayonida statik tarzda yaratiladi. Foydalanuvchi ushbu tayyorlangan HTML fayllarga murojaat qilganda server ularga xizmat qiladi.
* **Afzalliklari**:

  * Sahifalar juda tez yuklanadi, chunki ular oldindan mavjud.
  * SEO uchun juda mos keladi, chunki sahifa mazmuni oldindan yaratilgan.
* **Kamchiliklari**:

  * Dinamik ma’lumotlarni yangilash uchun qayta build qilish kerak.
  * Tez-tez o‘zgaradigan ma’lumotlarga ega katta saytlar uchun uncha mos emas.

### 4. ISR (Incremental Static Regeneration)

**Incremental Static Regeneration** — bu Static-Site Generation (SSG) bilan bir xil tarzda sahifalarni oldindan yaratib, kerakli vaqtlarda yangilashga imkon beruvchi usul. ISR saytning bir qismi dinamik bo‘lishi kerak bo‘lganda, lekin shu bilan birga yuqori yuklanish tezligini saqlab qolishni xohlaganda ishlatiladi.

* **Jarayon**: Build vaqtida barcha sahifalar statik shaklda yaratiladi, ammo sahifa ochilganida yoki belgilangan vaqt o‘tgach, u avtomatik ravishda yangilanadi.
* **Afzalliklari**:

  * Har bir sahifa juda tez yuklanadi, chunki u oldindan yaratilgan. Shu bilan birga, u vaqt o'tishi bilan dinamik ma’lumotlarni ham yangilaydi.
  * SEO uchun mos, chunki sahifaning statik versiyasi oldindan mavjud bo‘lib, qidiruv tizimlariga oson topiladi.
* **Kamchiliklari**:

  * ISR murakkablik qo‘shishi mumkin, chunki ma'lumotlarning yangilanishi uchun belgilangan intervalni to‘g‘ri o‘rnatish kerak.
  * Juda tez o‘zgaradigan ma’lumotlar uchun bu usul qoniqarli natija bermasligi mumkin.

### Qisqacha Taqqoslash

| Rendering turi | Dastlabki yuklanish | SEO uchun qulaylik | Server yuklanishi | Dinamik kontent qo‘llab-quvvatlash |
| -------------- | ------------------- | ------------------ | ----------------- | ---------------------------------- |
| CSR            | Sekinroq            | Past               | Minimal           | Juda yaxshi                        |
| SSR            | O‘rtacha            | Yuqori             | Yuqori            | Yaxshi                             |
| SSG            | Tezroq              | Yuqori             | Minimal           | Cheklangan                         |
| ISR            | Tezroq              | Yuqori             | Minimal/Orta      | O‘rtacha/cheklangan                |

### Qaysi Birini Tanlash Kerak?

* **Dinamik dasturlar** uchun **CSR yoki SSR** yaxshi ishlaydi.
* **SEO kerak bo‘lgan saytlar** uchun **SSR yoki SSG** mos.
* **Blog yoki yangiliklar saytlar** uchun **SSG yoki ISR** ideal, chunki ular statik bo‘ladi va ISR yordamida belgilangan vaqt oralig‘ida yangilanadi. 
* **Tez-tez yangilanish kerak bo‘lgan sahifalar** uchun **ISR** yaxshi tanlov, chunki ISR yordamida sahifalarni dinamik yangilab turish mumkin.

Har bir rendering usuli o‘ziga xos holatlar uchun mos keladi va zamonaviy dasturlashda bir nechta usullar birgalikda ishlatiladi.