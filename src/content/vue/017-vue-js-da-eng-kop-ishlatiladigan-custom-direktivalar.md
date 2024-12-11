---
title: 017. Vue.js da eng ko'p ishlatiladigan custom direktivalar
pubDate: 11 Dec 2024
cover: https://5f3923a5.mukhridden-dev.pages.dev/3.webp
id: 17
type: vue
hashtags:
  - vue
  - extra
---
Vue.js’da eng ko‘p ishlatiladigan **custom direktivalar** odatda umumiy funksionallikni soddalashtirish yoki takrorlanadigan ishlarni avtomatlashtirish uchun ishlatiladi. Quyida eng ko‘p ishlatiladigan va foydali bo‘lgan custom direktivalar keltirilgan:

- - -

### 1. **`v-focus`** — Fokusni elementga qo'yish

Formada yoki modalda avtomatik fokuslash uchun ishlatiladi.

#### Misol:

```ts
export const focusDirective: Directive = {
  mounted(el: HTMLElement) {
    el.focus();
  }
};
```

#### Foydalanish:

```vue
<input type="text" v-focus />
```

- - -

### 2. **`v-scroll`** — Scroll hodisasini kuzatish

Elementni yoki sahifani scroll qilishni kuzatadi.

#### Misol:

```ts
export const scrollDirective: Directive = {
  mounted(el: HTMLElement) {
    el.addEventListener('scroll', () => {
      console.log('Element scrolled!');
    });
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('scroll', () => {
      console.log('Element scrolled!');
    });
  }
};
```

#### Foydalanish:

```vue
<div v-scroll class="scrollable">Scroll qil!</div>
```

- - -

### 3. **`v-click-outside`** — Tashqi klikni kuzatish

Modal yoki dropdown yopilishi kerak bo'lganda foydalaniladi.

#### Misol:

```ts
export const clickOutsideDirective: Directive = {
  mounted(el: HTMLElement, binding) {
    const onClick = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', onClick);
    (el as any)._onClickOutside = onClick;
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener('click', (el as any)._onClickOutside);
    delete (el as any)._onClickOutside;
  }
};
```

#### Foydalanish:

```vue
<div v-click-outside="handleOutsideClick">
  Bu yerga tashqaridan bosilganda modal yopiladi.
</div>
```

- - -

### 4. **`v-lazy-load`** — Rasm yoki komponentlarni lazy-load qilish

Rasmlar sahifa yuklanganda emas, balki ko'rinishga chiqqanda yuklanishi uchun ishlatiladi.

#### Misol:

```ts
export const lazyLoadDirective: Directive = {
  mounted(el: HTMLElement) {
    const loadImage = () => {
      const src = el.getAttribute('data-src');
      if (src) {
        el.setAttribute('src', src);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadImage();
        observer.disconnect();
      }
    });

    observer.observe(el);
  }
};
```

#### Foydalanish:

```vue
<img v-lazy-load data-src="real-image.jpg" alt="Lazy loaded image" />
```

- - -

### 5. **`v-draggable`** — Elementni harakatlantirish (drag-and-drop)

Elementlarni sahifa bo'ylab harakatlantirish imkonini beradi.

#### Misol:

```ts
export const draggableDirective: Directive = {
  mounted(el: HTMLElement) {
    el.style.position = 'absolute';
    el.style.cursor = 'move';

    const onMouseDown = (e: MouseEvent) => {
      const shiftX = e.clientX - el.getBoundingClientRect().left;
      const shiftY = e.clientY - el.getBoundingClientRect().top;

      const onMouseMove = (e: MouseEvent) => {
        el.style.left = `${e.pageX - shiftX}px`;
        el.style.top = `${e.pageY - shiftY}px`;
      };

      document.addEventListener('mousemove', onMouseMove);

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mouseup', onMouseUp);
    };

    el.addEventListener('mousedown', onMouseDown);
  }
};
```

#### Foydalanish:

```vue
<div v-draggable class="draggable-box">Meni ko'chiring!</div>
```

- - -

### 6. **`v-tooltip`** — Tooltip ko'rsatish

Element ustiga kursorni olib borganingizda ko'rinadigan tooltip yaratadi.

#### Misol:

```ts
export const tooltipDirective: Directive = {
  mounted(el: HTMLElement, binding) {
    const tooltip = document.createElement('div');
    tooltip.textContent = binding.value;
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#333';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '3px';
    tooltip.style.whiteSpace = 'nowrap';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);

    el.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
      const rect = el.getBoundingClientRect();
      tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
      tooltip.style.left = `${rect.left}px`;
    });

    el.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    (el as any)._tooltip = tooltip;
  },
  unmounted(el: HTMLElement) {
    const tooltip = (el as any)._tooltip;
    if (tooltip) {
      document.body.removeChild(tooltip);
    }
  }
};
```

#### Foydalanish:

```vue
<button v-tooltip="'Tooltip matni'">Ustiga olib boring</button>
```

- - -

### 7. **`v-resize`** — Oyna o'lchamlarini kuzatish

Komponentni oyna hajmi o'zgarganda yangilash uchun ishlatiladi.

#### Misol:

```ts
export const resizeDirective: Directive = {
  mounted(el: HTMLElement, binding) {
    const onResize = () => {
      binding.value(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    (el as any)._onResize = onResize;
  },
  unmounted(el: HTMLElement) {
    window.removeEventListener('resize', (el as any)._onResize);
  }
};
```

#### Foydalanish:

```vue
<div v-resize="onResizeHandler">Oyna hajmini kuzatib bor!</div>
```

- - -

### Xulosa

Ushbu direktivalar ko'pchilik uchun foydali va Vue loyihalarida tez-tez ishlatiladi. Bularni o‘z loyihangizda moslashtirishingiz yoki kengaytirishingiz mumkin.