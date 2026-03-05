# Дашборд EVERSEE Creative Summit — план

> GA4 Property: G-XF69DY9RPE
> Инструмент: Looker Studio (бесплатный, от Google)
> Подход: ABO-фреймворк Каушика (Acquisition → Behavior → Outcomes)

---

## Перед началом: что нужно сделать в GA4

### 1. Найти Google-аккаунт
- [x] Вспомнить/найти на какой email зарегистрирован GA4 для eversee.de - 9249209@gmail.com
- [ ] Зайти на analytics.google.com под этим аккаунтом

### 2. Настроить events и conversions
Сейчас GA4 считает только pageviews. Нужно добавить:

| Event | Как трекать | Тип |
|-------|------------|-----|
| `ticket_email_click` | Уже есть в JS (gtag event) | Conversion |
| `waitlist_submit` | Добавить gtag event в форму waitlist | Conversion |
| `corporate_contact` | Добавить gtag event на клик "Contact us" (corporate) | Conversion |
| `scroll_to_tickets` | Добавить event при скролле до секции Tickets | Engagement |
| `program_view` | Добавить event при скролле до секции Program | Engagement |

### 3. Google Consent Mode V2
- [ ] Проверить что cookie banner передаёт consent в gtag
- [ ] Режим `analytics_storage: 'denied'` до согласия, `'granted'` после

---

## Структура дашборда (Looker Studio)

### Страница 1: Overview (одна страница — главная)

**Шапка:**
- Период (фильтр дат)
- Сравнение с предыдущим периодом

**Блок A — Acquisition (откуда приходят)**

| Метрика | Визуализация |
|---------|-------------|
| Sessions по каналам | Горизонтальная гистограмма (Organic Search, Direct, Social, Referral, Paid) |
| New vs Returning users | Donut chart |
| Top источники трафика | Таблица: Source/Medium → Sessions → Conversions |
| География | Таблица: Country → Sessions (для B2B важно знать откуда компании) |

**Блок B — Behavior (что делают на сайте)**

| Метрика | Визуализация |
|---------|-------------|
| Top pages по views | Таблица: Page → Views → Avg Time |
| Engagement Rate | Scorecard с трендом |
| Путь: Landing → Tickets | Funnel (если настроим events) |
| Устройства | Donut: Desktop / Mobile / Tablet |

**Блок C — Outcomes (результаты)**

| Метрика             | Визуализация                                  |
| ------------------- | --------------------------------------------- |
| Ticket email clicks | Scorecard + тренд по дням                     |
| Waitlist submits    | Scorecard + тренд                             |
| Corporate contacts  | Scorecard + тренд                             |
| Conversion Rate     | Scorecard: (все conversions / sessions) × 100 |

**Цветовая схема:**
- Зелёный: метрика выше target
- Красный: метрика ниже target
- Каушик: "Red/green — crystal clarity"

---

### Страница 2: See-Think-Do-Care (стратегический взгляд)

По фреймворку Каушика — 4 стадии intent:

| Стадия | Что измеряем | Метрики |
|--------|-------------|---------|
| **See** (узнали) | Awareness | Sessions, New Users, Impressions (Google Search Console) |
| **Think** (изучают) | Consideration | Pages/Session, Avg Session Duration, Program/Speakers page views |
| **Do** (покупают) | Conversion | Ticket clicks, Waitlist submits, Corporate contacts |
| **Care** (возвращаются) | Retention | Returning Users %, повторные визиты |

---

### Страница 3: Channel Deep Dive

Для каждого канала отдельно:
- **Organic Search**: запросы (через Search Console коннектор), позиции, CTR
- **Social**: LinkedIn vs Instagram vs другие → какой приносит конверсии
- **Direct**: сколько приходят напрямую (word of mouth индикатор)
- **Referral**: кто ссылается на нас

---

## Targets (установить!)

Каушик: "Measurement without Targets is a waste of time"

| Метрика | Target (предложение) | Логика |
|---------|---------------------|--------|
| Sessions/week | 500 | Начальный ориентир, пересмотреть через 2 недели |
| Ticket email clicks/week | 10 | ~1.5 в день |
| Waitlist submits/week | 20 | Более лёгкое действие чем покупка |
| Engagement Rate | >60% | GA4 стандарт для лендингов |
| Conversion Rate | >2% | Нормально для B2B event |

Targets пересматриваем каждые 2 недели по факту.

---

## Email-рассылка дашборда

В Looker Studio: Share → Schedule delivery
- Кому: тебе + Артёму
- Частота: раз в неделю (понедельник утром)
- Формат: PDF

---

## Шаги для подключения

1. Зайти на lookerstudio.google.com (тем же Google-аккаунтом что и GA4)
2. Create → Report → Add data → Google Analytics → выбрать eversee.de property
3. Я подскажу какие графики добавить и как настроить

Также можно подключить **Google Search Console** как второй источник — это даст данные по поисковым запросам (важно для AEO-мониторинга).

---

## Что НЕ включаем в дашборд (по Каушику)

- ❌ Impressions — "firing of a pixel", не метрика
- ❌ Bounce Rate — устарело, заменено Engagement Rate
- ❌ Total Page Views без контекста — vanity metric
- ❌ Больше 4 KPI — "безжалостное упрощение"

> *"The purpose of a dashboard is to provoke a discussion about actions, not to display data."* — Avinash Kaushik
