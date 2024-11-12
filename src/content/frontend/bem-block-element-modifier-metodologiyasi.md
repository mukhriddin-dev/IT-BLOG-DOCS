---
title: BEM (Block, Element, Modifier) metodologiyasi
pubDate: 13 Nov 2024
cover: /bem.png
id: 5
type: css
hashtags:
  - CSS
  - HTML
  - frontend
  - BEM
---
### BEM (Block, Element, Modifier)



![BEM CSS](https://media.licdn.com/dms/image/D4D12AQGyyZivTUp8LQ/article-cover_image-shrink_600_2000/0/1711624538075?e=2147483647&v=beta&t=tFmCyFki9p-07cz_O3lOpCeU3FVzLSRPzEzPal4TG08 "mukhriddin.dev")

BEM (Block, Element, Modifier) metodologiyasi — veb-sahifalardagi HTML va CSS kodlarini tartibli, qulay boshqariladigan va qayta ishlatishga moslashtirishga yordam beruvchi metodologiya. Uni Yandex kompaniyasi ishlab chiqqan. BEM asosiy 3 komponent orqali tashkil topgan:

1. **Blok** - mustaqil komponent, o'zining aniq funksiyasini bajaradi va boshqa bloklardan butunlay ajratilgan bo'ladi. Masalan, `menu`, `header`, `footer` kabi bloklar. BEM'da blok nomi element yoki modifikator bilan birikmaguncha mustaqil holda ishlatiladi.

   ```html
   <div class="menu">...</div>
   ```
2. **Element** - blokning bir qismi bo'lib, blokdan tashqarida mustaqil ishlay olmaydi. Element blokning ba'zi qismlarini ifodalaydi va u bilan bog'langan holda ishlatiladi. Element nomi blok nomiga  **(ikki pastki chiziq) bilan birikadi. Masalan, `menu**item`yoki`header__logo`.

   ```html
   <div class="menu">
       <div class="menu__item">Item 1</div>
       <div class="menu__item">Item 2</div>
   </div>
   ```
3. **Modifikator** - blok yoki elementning ko'rinishini yoki xususiyatlarini o'zgartiradi. Modifikator nomi blok yoki element nomiga _ (bir pastki chiziq) bilan birikadi. Masalan, `menu__item_active` yoki `button_large`.

   ```html
   <div class="menu">
       <div class="menu__item menu__item_active">Item 1</div>
       <div class="menu__item">Item 2</div>
   </div>
   ```

### BEM metodologiyasining afzalliklari:

* **Modulli tuzilma**: BEM orqali yozilgan kodlar osonroq qayta ishlatilishi va boshqarilishi mumkin.
* **Kodlarni o'qish qulayligi**: Har bir sinf nomi o'zining o'rnini va vazifasini aniq ifodalaydi.
* **Katta loyihalarda moslashuvchanlik**: Komponentlarni boshqarish osonroq bo'ladi va ularda o'zgarish qilish soddalashadi.

## Keling, **Card** komponentini BEM metodologiyasi yordamida yaratamiz.



### Card komponentining tuzilishi

1. **Blok**: `card` - asosiy blok.
2. **Elementlar**:

   * `card__header` - kartaning sarlavha qismi.
   * `card__image` - kartaning rasm qismi.
   * `card__content` - kartaning matn qismi.
   * `card__footer` - kartaning pastki qismi.
3. **Modifikatorlar**:

   * `card_theme_dark` - qora fonli karta varianti.
   * `card__header_large` - katta sarlavhali karta varianti.

### HTML va CSS Misol



#### HTML:

```html
<div class="card card_theme_dark">
    <div class="card__header card__header_large">Karta sarlavhasi</div>
    <div class="card__image">
        <img src="rasm.jpg" alt="Rasm">
    </div>
    <div class="card__content">
        Karta kontenti yoki tavsifi.
    </div>
    <div class="card__footer">
        Qo'shimcha ma'lumot
    </div>
</div>
```

#### CSS:

```css
/* Asosiy Card bloki */
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
}

/* Card'ning dark modifikatori */
.card_theme_dark {
    background-color: #333;
    color: #fff;
}

/* Card sarlavhasi */
.card__header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

/* Katta sarlavhali modifikator */
.card__header_large {
    font-size: 24px;
}

/* Card rasm qismi */
.card__image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 8px;
}

/* Card kontent qismi */
.card__content {
    font-size: 16px;
    color: #555;
    margin-bottom: 8px;
}

/* Card pastki qismi */
.card__footer {
    font-size: 14px;
    color: #999;
    text-align: right;
}
```

### Demak:

* `card` asosiy blok bo'lib, uning barcha elementlari (`card__header`, `card__image`, `card__content`, `card__footer`) unga bog'liq holda ishlaydi.
* `card_theme_dark` modifikatori kartaning umumiy fon rangini o'zgartiradi.
* `card__header_large` modifikatori esa sarlavhani kattalashtiradi.

BEM metodologiyasidan foydalangan holda, kartani tartibli va qulay boshqariladigan tuzilishda yaratdik. Har bir sinf nomi o'zining rolini aniq ifodalaydi, bu esa loyihani kengaytirishni va boshqarishni osonlashtiradi.



Batafsil **BEM**  haqida : https://getbem.com



https://t.me/mukhriddinweb