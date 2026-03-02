# EVERSEE Website — Технический и юридический аудит

**Дата:** 2 марта 2026
**Файлы:**
- `index.html` (604 строки)
- `css/style.css` (1259 строк)
- `js/main.js` (273 строки)
- `impressum.html` (99 строк)
- `datenschutz.html` (109 строк)

Прочие файлы: `eversee_hero.mp4`, `.DS_Store`. Нет `robots.txt`, `sitemap.xml`, `favicon.ico`, `og-image.jpg`.

---

## 1. LEGAL / COMPLIANCE (немецкое право, DSGVO/GDPR)

### Impressum (impressum.html)

🔴 **MUST FIX: Отсутствует регистрационная информация**
По § 5 TMG для GmbH обязательны:
- Handelsregister (номер и регистрирующий суд) — **отсутствует**
- USt-IdNr. (Umsatzsteuer-Identifikationsnummer) — **отсутствует**

Строки 66-71: есть адрес и имя Geschäftsführer, но нет:
```
Registergericht: Amtsgericht Charlottenburg
Registernummer: HRB XXXXX
USt-IdNr.: DE XXXXXXXXX
```

✅ **OK: Основные поля**
- Полное наименование компании (Eversee GmbH)
- Адрес (Dievenowstr. 14, 14199 Berlin)
- Geschäftsführer (Artem Badalyan)
- Контакт: телефон + email
- Haftung für Inhalte / Links / Urheberrecht
- Streitschlichtung с ссылкой на OS-Plattform

### Datenschutzerklärung (datenschutz.html)

✅ **OK: Хорошо покрыты основные разделы:**
- Verantwortlicher (стр. 66-72)
- Rechtsgrundlagen (Art. 6 DSGVO)
- Hosting (IONOS, Server-Logs) (стр. 78)
- Kontaktaufnahme per E-Mail (стр. 81)
- Formspree + Transfer в USA + Standardvertragsklauseln (стр. 84)
- Google Fonts (стр. 87)
- Cookies — "keine Cookies" (стр. 90)
- Betroffenenrechte (Art. 15-21 DSGVO) (стр. 93-101)
- Beschwerderecht + zuständige Behörde (стр. 105)

⚠️ **SHOULD FIX: Не раскрыты CDN-скрипты (jsdelivr.net)**
В `index.html` строки 26, 599-601 загружаются:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.css">
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
```
Каждый запрос к `cdn.jsdelivr.net` передаёт IP-адрес пользователя на серверы Cloudflare/Fastly (за пределами ЕС). Это **обработка персональных данных** по DSGVO, но в Datenschutzerklärung об этом ни слова. Нужно добавить раздел "CDN / Content Delivery Network".

⚠️ **SHOULD FIX: Google Fonts — загрузка через CDN, а не self-hosted**
Google Fonts передаёт IP на серверы Google. После решения LG München (январь 2022, Az. 3 O 17493/20) это проблематично без согласия. Безопаснее self-host'ить шрифты.

⚠️ **SHOULD FIX: Cookie-Banner / Consent-Management отсутствует**
Хотя в datenschutz.html написано "keine Cookies", технически Google Fonts и jsdelivr CDN устанавливают соединение с внешними серверами при каждой загрузке. Consent-механизм для передачи данных в третьи страны рекомендуется.

💡 **IMPROVEMENT: Datenschutzerklärung не упоминает соцсети**
В footer есть ссылки на Instagram, Facebook, LinkedIn. Это внешние ссылки, формально не требуют раскрытия, но хорошая практика — добавить абзац "Links zu sozialen Netzwerken".

### Итог по Legal

| Пункт | Статус |
|-------|--------|
| Impressum — основные данные | ✅ OK |
| Impressum — Handelsregister, USt-IdNr | 🔴 MUST FIX |
| Datenschutz — структура, Rechtsgrundlagen | ✅ OK |
| Datenschutz — Formspree, Google Fonts | ✅ OK |
| Datenschutz — jsdelivr CDN не раскрыт | ⚠️ SHOULD FIX |
| Google Fonts self-hosting | ⚠️ SHOULD FIX |
| Cookie/Consent-Banner | ⚠️ SHOULD FIX |
| Социальные сети в Datenschutz | 💡 IMPROVEMENT |

---

## 2. PERFORMANCE / TECHNOLOGY

### Render-blocking resources

⚠️ **SHOULD FIX: Google Fonts блокирует рендер**
`index.html` строка 23 — render-blocking CSS. `display=swap` есть, `preconnect` есть, но для максимальной производительности стоит self-host'ить шрифты.

⚠️ **SHOULD FIX: Lenis CSS блокирует рендер**
`index.html` строка 26 — внешний CSS без preload. Lenis CSS минимальный — стоит inline'ить его в style.css.

⚠️ **SHOULD FIX: Скрипты загружаются синхронно**
`index.html` строки 599-602 — рекомендуется добавить `defer` ко всем четырём скриптам.

### Видео

✅ **OK: Hero video** — `autoplay muted loop playsinline` — правильные атрибуты.

⚠️ **SHOULD FIX: Нет `poster` атрибута** — добавить `poster="poster.jpg"` для первого кадра.

💡 **IMPROVEMENT: Только один формат видео (mp4)** — нет WebM альтернативы (на 25-30% легче).

### OG Image

⚠️ **SHOULD FIX: og-image.jpg отсутствует** — файла нет в проекте. Социальные превью без картинки.

### CSS

✅ **OK: Одна таблица стилей** `style.css` (1259 строк) — разумный размер.

💡 **IMPROVEMENT: Неиспользуемые CSS-правила (~80 строк мёртвого кода)**
- `.ticket-card__badge`, `.ticket-card__eyebrow`, `.ticket-card--featured`
- `.ticket-card__price--custom`, `.tickets__grid--two`, `.tickets__grid--three`
- `.speakers__sub`, `.speakers__tech-label`, `.speakers__logos`, `.speakers__logo`
- `.speaker-card__city`

### Итог по Performance

| Пункт | Статус |
|-------|--------|
| Google Fonts render-blocking | ⚠️ SHOULD FIX |
| Lenis CSS render-blocking | ⚠️ SHOULD FIX |
| Скрипты без defer | ⚠️ SHOULD FIX |
| Video autoplay/muted/playsinline | ✅ OK |
| Video poster отсутствует | ⚠️ SHOULD FIX |
| Video только MP4 | 💡 IMPROVEMENT |
| OG Image отсутствует | ⚠️ SHOULD FIX |
| CSS размер | ✅ OK |
| Мёртвый CSS | 💡 IMPROVEMENT |
| font-display:swap | ✅ OK |
| CDN self-hosting | ⚠️ SHOULD FIX |

---

## 3. SEO

### Meta Tags

✅ **OK: Основные meta-теги присутствуют** — title, description, OG tags, Twitter cards.

⚠️ **SHOULD FIX: og:image — относительный URL** — должен быть абсолютный: `https://eversee.de/og-image.jpg`.

⚠️ **SHOULD FIX: Нет canonical URL** — `<link rel="canonical" href="https://eversee.de/">`.

⚠️ **SHOULD FIX: Нет robots.txt и sitemap.xml**

⚠️ **SHOULD FIX: Нет favicon**

### Semantic HTML

⚠️ **SHOULD FIX: Пропущен h2 в about-секции** — контент без заголовка секции.

⚠️ **SHOULD FIX: Нет `<main>` landmark** — весь контент между header и footer должен быть в `<main>`.

⚠️ **SHOULD FIX: Нет structured data (JSON-LD)** — Event, Organization, FAQ schemas.

✅ **OK: lang атрибуты** — en на index, de на legal pages.

---

## 4. ACCESSIBILITY (WCAG 2.1)

### Контраст

✅ **OK: Основной текст** — white on dark ~19.5:1 (AAA).

⚠️ **SHOULD FIX: Accent `#FF2883` на тёмном фоне** — ~5.3:1, не проходит AA для мелкого текста (< 18px). `.hero__early` (14px) — проблема.

⚠️ **SHOULD FIX: Accent на section background** — `#FF2883` на `#17112B` — ~4.3:1, не проходит AA.

### Keyboard Navigation

⚠️ **SHOULD FIX: Нет видимых focus indicators** — нет кастомного `:focus-visible`.

⚠️ **SHOULD FIX: FAQ без `aria-expanded`** — скринридер не знает, открыт ли ответ.

⚠️ **SHOULD FIX: Email input без `<label>`** — placeholder не замена label'у.

⚠️ **SHOULD FIX: Нет `prefers-reduced-motion`** — сайт использует Lenis, scroll reveal, pulse анимации.

⚠️ **SHOULD FIX: Нет skip navigation link**

✅ **OK: Burger button имеет `aria-label="Menu"`**

### Итог по Accessibility

| Пункт | Статус |
|-------|--------|
| Основной контраст | ✅ OK |
| Accent на section background | ⚠️ SHOULD FIX |
| Accent мелкий текст | ⚠️ SHOULD FIX |
| Focus indicators | ⚠️ SHOULD FIX |
| FAQ aria-expanded | ⚠️ SHOULD FIX |
| Email input без label | ⚠️ SHOULD FIX |
| prefers-reduced-motion | ⚠️ SHOULD FIX |
| Skip-to-content | ⚠️ SHOULD FIX |

---

## 5. SECURITY

⚠️ **SHOULD FIX: CDN-скрипты без SRI (integrity hash)** — если CDN скомпрометирован, вредоносный код попадёт на сайт. Нужно `integrity="sha384-..."` + `crossorigin="anonymous"`.

⚠️ **SHOULD FIX: CDN URL с мажорными версиями** (`@1`, `@3`) — SRI-хеш при обновлении сломается. Пиннить точные версии или self-host'ить.

💡 **IMPROVEMENT: Нет CSP (Content-Security-Policy)** — можно добавить через `<meta>` тег.

💡 **IMPROVEMENT: Добавить honeypot для anti-spam** — `<input type="text" name="_gotcha" style="display:none">`.

✅ **OK: Нет XSS-уязвимостей** — используется `textContent`, нет `innerHTML` / `eval`.

✅ **OK: mailto injection невозможна** — все данные из data-атрибутов + `encodeURIComponent`.

⚠️ **SHOULD FIX: `.DS_Store` в проекте** — добавить в `.gitignore`.

---

## 6. BROWSER COMPATIBILITY

✅ **OK: Vendor prefixes** — `-webkit-background-clip`, `-webkit-backdrop-filter` добавлены.

✅ **OK: ES5-совместимый JS** — `var`, `function()`, без arrow functions.

✅ **OK: Mobile responsive** — breakpoints 768px, 1024px, 480px.

✅ **OK: Touch targets 44px** — на кнопках и интерактивных элементах.

💡 **IMPROVEMENT: Hover на touch-устройствах** — обернуть в `@media (hover: hover)`.

---

## 7. CODE QUALITY

⚠️ **SHOULD FIX: Нет `<main>` element**

⚠️ **SHOULD FIX: `<nav>` без `aria-label`** — две навигации без различия.

⚠️ **SHOULD FIX: `setInterval` без `clearInterval`** в countdown (main.js стр. 119) — timer продолжает работать после достижения нуля.

✅ **OK: BEM-naming** — последовательное использование.

✅ **OK: CSS custom properties** — цвета, шрифты вынесены в `:root`.

✅ **OK: IIFE + strict mode** — код обёрнут в IIFE.

✅ **OK: Модульная структура JS** — каждая функция делает одно.

💡 **IMPROVEMENT: Inline стили дублируются** в impressum.html и datenschutz.html (~50 строк).

---

## СВОДКА ПРИОРИТЕТОВ

### 🔴 MUST FIX

1. **Impressum: добавить Handelsregister + USt-IdNr** — штраф до €50 000 и Abmahnung.

### ⚠️ SHOULD FIX (по приоритету)

| # | Что | Где |
|---|-----|-----|
| 2 | Datenschutz: раскрыть jsdelivr CDN | datenschutz.html |
| 3 | Self-host Google Fonts | index.html |
| 4 | SRI хеши на CDN-скриптах | index.html |
| 5 | og-image: создать файл + абсолютный URL | index.html |
| 6 | Добавить `<main>` landmark | index.html |
| 7 | Focus indicators (`:focus-visible`) | style.css |
| 8 | `prefers-reduced-motion` | style.css |
| 9 | FAQ: `aria-expanded` | index.html + main.js |
| 10 | Email input: `<label>` | index.html |
| 11 | Canonical URL | index.html |
| 12 | Favicon | index.html + файл |
| 13 | robots.txt | корень сайта |
| 14 | JSON-LD structured data | index.html |
| 15 | Heading hierarchy (about section) | index.html |
| 16 | Skip navigation link | index.html |
| 17 | Скрипты с `defer` | index.html |
| 18 | Video poster | index.html |
| 19 | setInterval без clearInterval | main.js |
| 20 | .DS_Store в .gitignore | корень |
| 21 | Nav aria-labels | index.html |
| 22 | Accent контраст на bg-section | style.css |

### 💡 IMPROVEMENT

| # | Что |
|---|-----|
| 23 | sitemap.xml |
| 24 | CSP header (meta tag) |
| 25 | Honeypot anti-spam field |
| 26 | Hover states в `@media (hover: hover)` |
| 27 | Удалить мёртвый CSS (~80 строк) |
| 28 | WebM альтернатива для hero video |
| 29 | Общий CSS для legal-страниц |
| 30 | Раздел про соцсети в Datenschutz |
