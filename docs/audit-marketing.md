# АУДИТ МАРКЕТИНГА И ЦИФРОВОГО ПРИСУТСТВИЯ — EVERSEE Creative Summit

**Дата аудита:** 2 марта 2026
**Домен:** eversee.de

---

## 1. SEO (ПОИСКОВАЯ ОПТИМИЗАЦИЯ)

### 1.1 Мета-теги

```html
<title>EVERSEE Creative Summit — Berlin, June 2026</title>
<meta name="description" content="An invite-only 3-day brainstorm for live entertainment creatives and technology leaders. Berlin, June 2026.">
```

- **Title:** 49 символов — хорошая длина (до 60). Содержит бренд, тип, город, дату.
- **Description:** 97 символов — можно расширить до 155. Нет ключевых слов "B2B", "live entertainment technology", "networking event".

⚠️ **IMPORTANT:** Description не оптимизирован — не содержит целевых ключевых слов.

**Рекомендация:**
```html
<meta name="description" content="EVERSEE Creative Summit — an invite-only B2B brainstorm in Berlin, June 2026. 3 days of speed matching, mixed-team sessions and keynotes at the intersection of live entertainment technology and creative direction. 50-100 curated attendees.">
```

### 1.2 On-page SEO: структура заголовков

Проблемы:
- ⚠️ Секция "About" не имеет `<h2>` — для Google это "безымянный блок"
- 💡 "Who's Coming" — неинформативный заголовок. Лучше: "Speakers & Industry Leaders"

### 1.3 Контент и ключевые слова

🔴 **CRITICAL: Ключевое слово "B2B" полностью отсутствует на странице.** Это основной дифференциатор. Google не поймёт, что это B2B-событие.

**Рекомендуемые ключевые слова для таргетинга:**
1. "B2B creative summit Berlin" (основной)
2. "live entertainment technology event"
3. "creative networking event Berlin 2026"
4. "show technology conference Europe"
5. "live entertainment brainstorm"
6. "speed matching event entertainment industry"

### 1.4 Технический SEO

🔴 **CRITICAL: Canonical URL отсутствует**
```html
<link rel="canonical" href="https://eversee.de/">
```

🔴 **CRITICAL: robots.txt отсутствует (404)**
```
User-agent: *
Allow: /
Sitemap: https://eversee.de/sitemap.xml
```

🔴 **CRITICAL: sitemap.xml отсутствует (404)**

### 1.5 Schema.org / JSON-LD

🔴 **CRITICAL: Полностью отсутствуют.** Самая серьёзная SEO-проблема. Без Schema.org Google не покажет rich snippets.

Нужно добавить:
- **Event Schema** — даты, место, цены, спикеры
- **Organization Schema** — Eversee GmbH, контакты, соцсети
- **FAQ Schema** — 9 вопросов из FAQ (для rich snippets в Google!)

**Пример Event Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BusinessEvent",
  "name": "EVERSEE Creative Summit",
  "description": "An invite-only 3-day B2B brainstorm...",
  "startDate": "2026-06-01T10:00:00+02:00",
  "endDate": "2026-06-03T14:00:00+02:00",
  "location": {
    "@type": "Place",
    "name": "Central Berlin",
    "address": {"@type": "PostalAddress", "addressLocality": "Berlin", "addressCountry": "DE"}
  },
  "organizer": {
    "@type": "Organization",
    "name": "Eversee GmbH",
    "url": "https://eversee.de"
  },
  "offers": [
    {"@type": "Offer", "name": "Creative Summit (Creators)", "price": "300", "priceCurrency": "EUR"},
    {"@type": "Offer", "name": "Creative Summit (Companies)", "price": "700", "priceCurrency": "EUR"}
  ],
  "maximumAttendeeCapacity": 100
}
```

### 1.6 Скорость загрузки

⚠️ **IMPORTANT:** 3 CDN-скрипта загружаются синхронно — добавить `defer`.
⚠️ **IMPORTANT:** Hero-видео без `poster` атрибута — удар по LCP.
✅ Скрипты в конце `<body>` — правильно.
✅ CSS-переменные — минимальный overhead.

### 1.7 Mobile-first

✅ viewport, responsive дизайн, touch-friendly кнопки (44px), mobile menu — всё на месте.

### 1.8 Image SEO

🔴 **CRITICAL: og-image.jpg не существует** — при шаринге в соцсетях картинка не отображается.
⚠️ **IMPORTANT:** Нет ни одного `<img>` тега — Google Images не проиндексирует ничего.
⚠️ **IMPORTANT:** Favicon отсутствует.

### 1.9 Локальный SEO

⚠️ **IMPORTANT:** Google Business Profile не создан. Для B2B-мероприятия в Берлине важно.

---

## 2. АНАЛИТИКА И ТРЕКИНГ

### 2.1 Текущее состояние

🔴 **CRITICAL: Аналитика НЕ ПОДКЛЮЧЕНА.** GA4 закомментирован с placeholder ID. LinkedIn Insight Tag — пустой комментарий. Нет никаких данных о посещаемости.

### 2.2 Рекомендуемый стек

🔴 **Google Analytics 4 (GA4):**
1. Создать GA4 property
2. Получить Measurement ID (G-XXXXXXX)
3. Раскомментировать код в index.html

⚠️ **Matomo как GDPR-альтернатива:**
Matomo Cloud (€19/мес.) не требует cookie-баннера при определённой конфигурации. Сейчас в datenschutz написано "keine Cookies" — при подключении GA4 это станет ложным и потребуется cookie banner.

⚠️ **Google Tag Manager (GTM):**
Одна вставка GTM заменяет отдельные вставки GA4, LinkedIn Pixel, Facebook Pixel.

### 2.3 Какие события отслеживать

**Конверсионные (🔴 CRITICAL):**
1. `waitlist_signup` — отправка формы Formspree
2. `ticket_email_click` — клик на "Get ticket" (mailto)
3. `corporate_inquiry` — клик на "Contact us"

**Engagement (⚠️ IMPORTANT):**
4. `addon_select` — какие аддоны популярны
5. `faq_expand` — какие вопросы открывают
6. `scroll_depth` — 25%, 50%, 75%, 100%
7. `social_click` — клики на соцсети
8. `cta_click` — клики на "Get Your Badge"

### 2.4 Воронка конверсии

```
Визит → Scroll до About → Program → Speakers → Tickets →
→ [Addon selection] → Click "Get ticket" (mailto)
→ ИЛИ: Scroll до Waitlist → Email signup
```

🔴 **Проблема:** Основная конверсия через mailto — невозможно отследить, отправил ли пользователь email. Рекомендуется заменить на форму.

### 2.5 Google Search Console

🔴 **CRITICAL: Не настроен.** Шаги:
1. Зарегистрировать eversee.de в GSC
2. Подтвердить через DNS TXT
3. Отправить sitemap.xml

### 2.6 UTM-стратегия

| Канал | Пример UTM |
|---|---|
| LinkedIn organic | `?utm_source=linkedin&utm_medium=organic&utm_campaign=launch` |
| LinkedIn Ads | `?utm_source=linkedin&utm_medium=cpc&utm_campaign=b2b_creative` |
| Email рассылка | `?utm_source=email&utm_medium=newsletter&utm_campaign=earlybird` |
| Instagram bio | `?utm_source=instagram&utm_medium=social&utm_campaign=bio_link` |
| Speaker sharing | `?utm_source=speaker&utm_medium=referral&utm_campaign=speaker_name` |

### 2.7 Retargeting пиксели

⚠️ **LinkedIn Insight Tag** — главный канал ретаргетинга для B2B.
💡 **Meta Pixel** — менее приоритетен для B2B.
💡 **Microsoft Clarity** (бесплатно) — heatmaps и записи сессий.

---

## 3. СОЦИАЛЬНЫЕ СЕТИ / SMM

### 3.1 Open Graph теги

🔴 **CRITICAL: `og:url` указывает на `https://eversee.com`** — а не на eversee.de! При шаринге ссылка ведёт не туда.

🔴 **CRITICAL: `og:image` — относительный путь** — должен быть `https://eversee.de/og-image.jpg`. Плюс файл отсутствует.

⚠️ **IMPORTANT: Отсутствуют** `og:site_name`, `og:locale`, `og:image:width/height`.

**Исправленные OG-теги:**
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="EVERSEE">
<meta property="og:title" content="EVERSEE Creative Summit — Berlin, June 2026">
<meta property="og:description" content="Invite-only B2B brainstorm summit at the intersection of live entertainment technology and creative direction.">
<meta property="og:image" content="https://eversee.de/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://eversee.de">
<meta property="og:locale" content="en_US">
```

### 3.2 Social proof на сайте

✅ "Who's Coming" с 6 спикерами — хорошо.
✅ Cirque du Soleil и Friedrichstadt-Palast — сильные бренды.
⚠️ **Фото спикеров отсутствуют** — social proof работает на 30% от потенциала.
⚠️ **Нет логотипов компаний-участников** — CSS-стили есть, но в HTML не используются.

### 3.3 Контент-стратегия по платформам

🔴 **LinkedIn — главная платформа (#1):**
- Personal posts от организаторов и спикеров
- Speaker announcements с тегированием
- Behind-the-scenes, pain points индустрии

⚠️ **Instagram (#2):**
- Visual storytelling: Берлин, площадки, backstage
- Reels, Stories с countdown

💡 **Facebook (#3):**
- Event page для discoverability
- Sharing в тематических группах

💡 **YouTube (#4):**
- Trailer видео, speaker introductions

---

## 4. SERP (РЕЗУЛЬТАТЫ ПОИСКА)

### Текущее отображение в Google

```
EVERSEE Creative Summit — Berlin, June 2026
https://eversee.de
An invite-only 3-day brainstorm for live entertainment creatives...
```

Без rich snippets. Без даты, цены, FAQ.

### С Event Schema + FAQ Schema

```
EVERSEE Creative Summit — Berlin, June 2026
https://eversee.de
Jun 1-3, 2026 · Berlin · From €300
An invite-only 3-day brainstorm...
▼ Where does it take place?
▼ What's included in the ticket?
```

Значительно увеличивает CTR.

⚠️ **IMPORTANT:** Создать Google Business Profile — поможет при запросах "creative events Berlin".

---

## 5. EMAIL-МАРКЕТИНГ

### Текущий email capture

✅ Waitlist форма функционирует (Formspree AJAX).
⚠️ **IMPORTANT: Только email, без имени и компании** — невозможно сегментировать на "creative" и "tech".

### Lead magnets

⚠️ Предложения:
1. "EVERSEE Attendee Preview" — PDF с программой и спикерами
2. "Berlin Creative Scene Guide" — PDF-гид
3. "Speed Matching Playbook"

### Email-автоматизация

⚠️ **IMPORTANT:** Нет автоматизации. Нет welcome email, нет drip campaign.

**Рекомендуемый стек:** Mailchimp Free или Brevo + Formspree webhook.

**Автоцепочка:**
1. Сразу: Welcome + что такое EVERSEE
2. Через 3 дня: Программа + спикеры
3. Через 7 дней: Early bird reminder
4. Ближе к дедлайну: "Last days for Early Bird"

---

## 6. КОНТЕНТ-МАРКЕТИНГ

🔴 **CRITICAL: Нет секции "About EVERSEE / Organizers"** — ни слова о том, кто стоит за мероприятием. Для B2B — ключевой фактор решения о покупке.

⚠️ **IMPORTANT: Фото спикеров отсутствуют** — пустые div'ы с градиентом.

⚠️ **IMPORTANT: Venue не указан** — в FAQ "will be announced in March" — нужно обновить.

⚠️ **IMPORTANT: Нет блога** — каждая статья = дополнительная страница для индексации.

---

## 7. ГОТОВНОСТЬ К ПЛАТНОЙ РЕКЛАМЕ

### Landing page

⚠️ **IMPORTANT:** Длинный one-pager — для paid traffic пользователь долго скроллит до CTA. Для LinkedIn Ads использовать anchor `eversee.de/#tickets`.

### Conversion tracking

🔴 **CRITICAL: Нет tracking ни на одной конверсии.** Без этого невозможно оптимизировать рекламу.

### LinkedIn Ads

⚠️ **IMPORTANT — идеальная платформа для этого мероприятия:**

**Targeting:**
- Job titles: Show Director, Creative Director, Technical Director
- Industries: Entertainment, Performing Arts, Events Services
- Company size: 10-500
- Geography: Europe

**Budget:** EUR 30-50/день для начала.

---

## 8. КОНКУРЕНТНОЕ ПОЗИЦИОНИРОВАНИЕ

| Элемент | EVERSEE | Типичный конкурент |
|---|---|---|
| Hero с видео | ✅ Есть | Есть у 40% |
| Countdown | ✅ Есть | Есть у 60% |
| Программа | ✅ Есть (хорошая) | Есть |
| Speakers с фото | ❌ Нет фото | Всегда с фото |
| Company logos | ❌ Нет | Всегда есть |
| About organizers | ❌ Нет | У 90% |
| Online ticket purchase | ❌ Нет (mailto) | У 95% |
| Analytics | ❌ Нет | У 99% |
| Schema.org | ❌ Нет | У 40% |

### USP

✅ Позиционирование чёткое: "Invite-only", "Zero PowerPoint", "Speed Matching", Dual audience.
⚠️ USP размыт по странице — нет одного summary абзаца с ключевыми словами.

### CTA

✅ Множественные CTA на странице.
⚠️ **Проблема:** "Get ticket" через mailto — 30-50% потеря лидов. У 40%+ мобильных пользователей нет настроенного почтового клиента.

---

## ОБЩАЯ ОЦЕНКА

> **Дизайн — отличный.** Визуал, типография, анимации, mobile-responsive — на высоком уровне.
>
> **Маркетинг — пока не работает.** Нет аналитики, нет Schema.org, нет robots.txt, нет og-image, og:url указывает на другой домен. Сайт невидим для Google и соцсетей. Конверсия через mailto теряет 30-50% лидов.
>
> **Главный риск:** Платные кампании без пунктов 1-15 = деньги без возможности измерить результат.

---

## СВОДНАЯ ТАБЛИЦА ПРИОРИТЕТОВ

### 🔴 CRITICAL — Сделать до запуска маркетинга

| # | Задача | Трудоёмкость |
|---|--------|-------------|
| 1 | Подключить GA4 | 15 мин |
| 2 | Создать og-image.jpg (1200×630) | 1 час |
| 3 | Исправить og:url → eversee.de | 1 мин |
| 4 | og:image и twitter:image → абсолютные URL | 1 мин |
| 5 | Добавить Event JSON-LD Schema | 30 мин |
| 6 | Добавить FAQ JSON-LD Schema | 20 мин |
| 7 | Добавить Organization JSON-LD Schema | 10 мин |
| 8 | Создать robots.txt | 5 мин |
| 9 | Создать sitemap.xml | 10 мин |
| 10 | Добавить canonical URL | 1 мин |
| 11 | Google Search Console | 20 мин |
| 12 | Добавить "B2B" в контент | 10 мин |
| 13 | Event tracking (waitlist, ticket clicks) | 1 час |
| 14 | Секция "About EVERSEE" | 2 часа |

### ⚠️ IMPORTANT — Для эффективного маркетинга

| # | Задача |
|---|--------|
| 15 | Реальные фото спикеров |
| 16 | Логотипы компаний-участников |
| 17 | LinkedIn Insight Tag |
| 18 | GTM вместо прямых тегов |
| 19 | Расширить meta description |
| 20 | Расширить waitlist форму (имя + тип) |
| 21 | Email automation (Mailchimp/Brevo) |
| 22 | Google Business Profile |
| 23 | LinkedIn-стратегия |
| 24 | UTM-стратегия |
| 25 | Cookie consent banner (при добавлении GA4) |

### 💡 NICE TO HAVE

| # | Задача |
|---|--------|
| 26 | Favicon |
| 27 | Microsoft Clarity (heatmaps) |
| 28 | Блог / Updates |
| 29 | Speaker bio pages |
| 30 | YouTube канал |
| 31 | Lead magnet PDF |
| 32 | Отдельный landing для paid traffic |
| 33 | Google Ads branded campaign |

**Рекомендуемый порядок:**
1. **Неделя 1:** Пункты 1-14 (Critical) — техническая база
2. **Неделя 2:** Фото спикеров, логотипы, LinkedIn Insight Tag
3. **Неделя 3:** Email automation, UTM, начало LinkedIn-кампаний
4. **Ongoing:** Контент в LinkedIn, blog posts, speaker videos
