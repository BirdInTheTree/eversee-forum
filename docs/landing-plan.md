# Plan: One-page лендинг EVERSEE Creative Forum (v2)

> Обновлён по результатам ревью (см. `landing-review.md`)

## Контекст

Текущий сайт EVERSEE — портфолио Production/Media на WordPress у друзей. Правки идут медленно, контент устарел. Мероприятие через 4 месяца. Нужен быстрый, модный, чистый лендинг только про форум. Статический сайт (HTML/CSS/JS) — GitHub Pages / Netlify.

## Что делаем

Полная замена `index.html` + `css/style.css` + `js/main.js` на одностраничный лендинг EVERSEE Creative Forum. Контент из `pricing.html` интегрируем как секцию.

---

## Секции лендинга (сверху вниз)

### 1. Navigation (sticky)

- Логотип EVERSEE слева
- Якорные ссылки: Program / Speakers / Tickets / FAQ
- CTA кнопка "Get Your Badge" справа (золотая)

### 2. Hero (fullscreen)

- Фоновое фото (Unsplash placeholder → заменят на реальное)
- Затемнение + noise overlay
- Надпись: **EVERSEE Creative Forum**
- Подзаголовок: **Berlin · June 2026**
- Tagline: **"50 decision-makers. 3 days. One mission: reinvent live entertainment."**
  - ~~"Three days. The whole live entertainment industry in one room."~~ — overclaim при 50-100 чел
- Countdown timer (дни/часы/мин/сек до июня 2026)
- CTA: "Get Your Badge" (золотая кнопка → якорь #tickets)
- Под кнопкой: "Early Bird pricing until April 1"
- **[NEW] Email capture:** под early bird — "Not ready to commit? Join the waitlist" + поле email + кнопка. Минимальная интеграция (Mailchimp embed или Buttondown).

### 3. About (что это)

- Два коротких блока: **FOR CREATIVES** / **FOR TECH**
- Каждый объясняет зачем приезжать именно этой стороне
- Числа: **"3 days · 50+ professionals · 10 speed matching rounds · 2 world-class shows"**
  - ~~100+~~ → 50+ (реалистичное число)
- **[NEW] Пометка:** "Application-based event. We curate every participant to ensure the right mix of creative and technology leaders."
  - Повышает perceived value, подчёркивает эксклюзивность

### 4. Program (3 дня)

Три карточки в ряд:

- **Day 1 — DISCOVER:** Keynotes, Lightning Talks, Speed Matching, Dinner + Alizée
  - ~~Demo Zone~~ — убрана: при 50-100 людях и 12 tech-компаниях отдельная "зона" — overclaim. Демо происходит органически за столами Speed Matching и в перерывах
- **Day 2 — CREATE:** Brainstorm teams, Group presentations, Open Mic, Dinner + Friedrichstadt-Palast
- **Day 3 — VISION:** Strategy session, Open discussion, **Backstage tour at Friedrichstadt-Palast**

Каждая карточка: название дня, ключевые пункты, вечерняя программа выделена золотым.

В описании тикетов: ~~"Conference & workshops"~~ → "Brainstorm sessions, lightning talks, speed matching"

### 5. Speed Matching (ключевая фишка)

- Отдельная секция — главный selling point
- **"10 live conversations with industry leaders in 1 hour"**
- Два блока:
  - **For Tech:** "A focus group with Europe's top show directors, circus creators, and ceremony designers. The kind of insights marketing departments pay agencies tens of thousands for."
  - **For Creatives:** "A personal technology showroom. 10 solutions you didn't know existed — each one a potential tool for your next project."
- Визуально выделена (рамка или другой фон)

### 6. [NEW] Speakers & Participants

> **P1 — без этого конверсия будет низкой. Люди не покупают билет на €890 к незнакомым.**

**Confirmed Creatives** (карточки: фото, имя, роль, город):
- Enno Uhde — Ceremony Director (FIFA, UEFA), Germany
- Fabrice Becker — Artistic Director, Cirque du Soleil Alizée, France
- Sebastian Hückst — Artistic Director, Friedrichstadt-Palast, Berlin
- Thomas Herda — Technical Director, Friedrichstadt-Palast, Berlin
- Pavel Kotov — Casting Director, Cirque du Soleil, Montreal
- Daniele Finzi Pasca — Theatre & Circus Director, Italy/Switzerland
- Boris Verkhovsky — Head Coach, Cirque du Soleil
- James Tanabe — Director, Dragone
- Dominik Uli — Event & Circus Director, Switzerland

**Confirmed Tech** (логобар):
- Panasonic Connect
- Robe
- AVA
- Artistic Licence
- Anolis
- ISE
- AVIXA
- InfoComm
- Pufferfish
- Garriets
- Slide Media
- 2Sync.io

Под блоком: "More names announced monthly. Join the waitlist to stay updated."

### 7. Tickets (из pricing.html)

Портируем стили и контент из `pricing.html`:

**Creative:**
- Essential (€290) / Full (€590)
- ~~"Conference & workshops — 2 days"~~ → "Brainstorm sessions, lightning talks, speed matching — 2 days"
  - Essential должен звучать как самостоятельное предложение, не как "урезанный Full"

**Immersive (для компаний):**
- Standard (€690) / Full (€890) / Corporate (on request)
- ~~"7-min presentation slot in front of 200+ directors & producers"~~ → **"in front of 50+ directors & producers"**
  - Критично: 200+ при формате 50-100 чел — несоответствие, подрывает доверие
- Corporate: добавить 2-3 bullet points ("Custom team composition, branded demo station, priority speed matching curation")

**Механизм покупки:**
- CTA кнопки "Get ticket" → пока Stripe Payment Links (самый быстрый вариант, без бэкенда)
- Альтернатива: Tito или Eventbrite embed
- "Contact us" для Corporate → mailto:info@eversee.com или форма

Early bird badge + pulse анимация — оставляем.

### 8. FAQ (аккордеон)

- **Where does it take place?** → "Central Berlin. Exact venue will be announced in March."
  - ~~"Berlin, venue TBA"~~ — TBA звучит тревожно за 4 месяца до ивента
- **What language?** → English
- **What's included?** → зависит от пакета (ссылка на секцию tickets)
- **Can I get a refund?** → политика возврата
- **How to get there?** → Berlin airports + public transport
- **Group discounts?** → Corporate package
- **[NEW] Is this a conference?** → "No. It's an application-based brainstorm forum. No keynote marathons, no expo booths. You work in mixed teams, solve real creative briefs, and meet decision-makers in structured speed matching sessions."
- **[NEW] Who attends?** → "Show directors, circus creators, ceremony designers, artistic directors — alongside technology companies building tools for live entertainment. We curate the participant list to ensure productive conversations."

### 9. Footer

- Email: info@eversee.com
- Соцсети: Instagram, Facebook, LinkedIn
- © EVERSEE, 2026

---

## Дизайн-система

**Переиспользуем:**
- Шрифты: Space Grotesk (заголовки) + Inter (тело)
- Тёмная тема: #0d0d0d фон, #f7f7f7 текст
- Золотой акцент: #c9a96e
- Lenis smooth scroll
- GSAP + ScrollTrigger для scroll reveal
- Custom cursor (десктоп)
- Noise overlay на hero
- Responsive: 768px / 1024px breakpoints

**Новое:**
- Золотой как основной акцентный цвет (вместо серого)
- Countdown timer на JS
- FAQ аккордеон (чистый JS)
- Program cards grid
- Speakers карточки + логобар
- Email capture форма (Mailchimp/Buttondown embed)

---

## [NEW] Meta & Analytics

### Open Graph (обязательно для LinkedIn-шаринга)
```html
<meta property="og:title" content="EVERSEE Creative Forum — Berlin, June 2026">
<meta property="og:description" content="3-day brainstorm forum at the intersection of live entertainment technology and creative direction. 50+ industry leaders. Application-based.">
<meta property="og:image" content="[og-image.jpg — 1200x630, тёмный фон + золотой текст]">
<meta property="og:url" content="https://eversee.com">
<meta name="twitter:card" content="summary_large_image">
```

### Аналитика
- GA4 — базовая аналитика + events (click_get_badge, click_get_ticket, submit_waitlist)
- LinkedIn Insight Tag — основной рекламный канал для B2B
- Placeholder в коде: `<!-- ANALYTICS -->` блок в `<head>`, заполняется при деплое

### Meta description
~~"EVERSEE — Producing emotions, creating memories."~~ → "EVERSEE Creative Forum — Berlin, June 2026. A 3-day brainstorm for live entertainment technology and creative professionals."

---

## Файлы

| Файл | Действие |
|------|----------|
| `index.html` | Полная перезапись — новый лендинг |
| `css/style.css` | Полная перезапись — новые стили |
| `js/main.js` | Полная перезапись — новая логика |
| `pricing.html` | Остаётся как backup |
| `og-image.jpg` | [TODO] Создать OG-image 1200x630 |

---

## Контент

Весь текст на английском. Источники:
- `event-plan-en.md` — программа, описания
- `pricing.html` — пакеты и цены
- `Список участников.md` — имена для секции Speakers
- `eversee_tz.pdf` — тон и подача

---

## Чеклист перед деплоем

1. [ ] Все секции на месте, якорная навигация работает
2. [ ] Countdown timer считает до июня 2026
3. [ ] Responsive: 375px (мобильный) и 1440px (десктоп)
4. [ ] FAQ аккордеон открывает/закрывает
5. [ ] CTA кнопки ведут к #tickets
6. [ ] Email capture форма работает (или хотя бы mailto fallback)
7. [ ] "Get ticket" кнопки ведут на Stripe/Tito (или placeholder с mailto)
8. [ ] OG tags заполнены, share preview корректный
9. [ ] Числа соответствуют реальности (50+, не 200+)
10. [ ] Meta description обновлён
11. [ ] Аналитика подключена (GA4 + LinkedIn)
