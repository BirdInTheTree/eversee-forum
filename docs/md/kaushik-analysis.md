# Анализ рассылки Авинаша Каушика (TMAI Newsletter)

> 134 письма, 2021–2026. Разбор эволюции тем, ключевых фреймворков и применимости к Creative Summit.

---

## Эволюция тем

### Выросло в значимости

1. **Инкрементальность** — главная тема Каушика за все годы.
   - 2021 — идея
   - 2022 — CPIS (Cost Per Incremental Sale), "Stop Attribution!"
   - 2023 — серия из 3 частей о преодолении барьеров
   - 2024 — Tech Stack для доказательства инкрементальности, nMMMs
   - 2025 — центральная метрика
   - Суть: не "кто привёл клиента", а "сколько клиентов НЕ пришло бы без нас"

2. **AI / Answer Engine Optimization (AEO)**
   - 2021 — "Future of Analytics" (теория)
   - 2023 — AI Activation Framework (практика)
   - 2024 — "AI Search: Sky is Falling!" + AEO как ответ
   - 2025 — серия из 6 частей; прогноз: 30% потерь органического трафика к 2026 из-за ChatGPT/Perplexity
   - 2026 — "Bye, Bye Human-Powered Digital Analytics"

3. **Креатив и Pre-Testing**
   - 2024 — "Creative = 65% of success"
   - 2025 — Creative Pre-Testing как системный подход
   - Суть: pre-testing до запуска кампании важнее таргетинга

4. **Profit вместо Revenue**
   - 2022 — CPIS
   - 2024 — POAS (Profit on Ad Spend) вместо ROAS; Calculated Metrics в GA4
   - 2025 — "Accountability Over Outcomes Over Activity"
   - Суть: считай маржинальность, а не выручку

5. **Organic Social: Content Graph**
   - 2022 — "Enduring Myth of Organic Social"
   - 2023 — смерть Social Graph, переход к Content Graph (влияние TikTok)
   - 2025 — "4 Plays to 10x Impact"; на $1 контента — $12 amplification

### Ушло на второй план

- **Attribution Modeling** — заменена инкрементальностью и nMMMs
- **A/B тестирование** — фундаментальные проблемы, "Stop A/B Testing"
- **GA4 техническая настройка** — все уже перешли, осталась только практика (Calculated Metrics)
- **Impressions как метрика** — "10,800 показов на человека в день — это не метрика"
- **Bounce Rate** — только как исторический пример

### Постоянные темы (все годы)

- KPI-дизайн и дашборды
- Критика vanity metrics (Impressions, Views, CPM)
- Культура данных и лидерство
- "It's not the ink, it's the think"
- Бренд vs. Перформанс маркетинг — не антагонисты

---

## Ключевые фреймворки Каушика

| Фреймворк | Суть |
|---|---|
| **See-Think-Do-Care** | Стадии intent аудитории; применимо к B2B |
| **Purpose x ROI Matrix** | 2x2 матрица: ROI+/ROI-/Reputation/Long-term Bets |
| **IAbI** | Insight → Action → business Impact — роль аналитика |
| **ABO** | Acquisition → Behavior → Outcomes — структура дашборда |
| **MAMM** | Modern Analytics Maturity Model — 4 уровня зрелости |
| **Big 6 KPIs** | 6 KPI как "магическая пуля" для масштабной трансформации |
| **KPI > Metrics > IVs** | Иерархия: KPI (CMO) > Diagnostic Metrics (Directors) > Influencing Variables (Agencies) |
| **Accountability > Outcomes > Activity** | Иерархия измерений маркетинга |
| **Win Before / Win While You Spend** | Pre-testing + in-flight optimization |
| **Organic Social 4D** | Purpose (Soul) / Content (Fuel) / Amplification (Scale) / Measurement (Proof) |

## Рекомендуемые метрики

- **CPIS** (Cost Per Incremental Sale) — вместо CPS
- **POAS** (Profit on Ad Spend) — вместо ROAS
- **Estimated Profit** — через Calculated Metrics в GA4
- **Task Completion Rate by Primary Purpose** — для UX
- **Brand Queries on Google** — "некрутая" но мощная метрика бренда
- **Share of Search** — аналог Share of Voice через поисковые данные
- **Earned Growth Ratio** — top-level бизнес-метрика

## Рекомендуемые методологии

- **Matched Market Tests (MMTs)** — для инкрементальности
- **Media-Mix Models (nMMMs)** — ML-powered
- **GEO Experiments** — географические эксперименты
- **Conversion Lift Experiments** — бесплатные от Google/Meta
- **Propensity Models** — XGBoost, LightGBM, Random Forests
- **Data-Driven Attribution** — единственный приемлемый вариант атрибуции
- **Creative Pre-Testing** — до запуска кампании

---

## Повторяющиеся принципы

1. "It's not the ink, it's the think"
2. "Data in aggregate is crap" — Segment, segment, SEGMENT!
3. "Outsmart, not outspend"
4. Не более 4 KPI на бизнес — безжалостное упрощение
5. Measurement without Targets is a waste of time
6. Global maxima > Local maxima
7. "Solve for humans" — B2B маркетинг тоже для людей
8. Change Agent, не Reporting Squirrel
9. Start small, prove value, scale
10. Leaders, Process, Culture — корневые причины неудач (не данные/инструменты)
11. Word of mouth — #1 для малого бизнеса

---

## Применимость к EVERSEE Creative Summit

### Немедленные действия

**KPI для ивента (не больше 4):**
- Incremental Ticket Revenue
- Cost Per Incremental Registration
- Diagnostic: Conversion Rate (посетитель → регистрация), Average Ticket Value

**GA4 Calculated Metrics:**
- Estimated Profit = (Revenue × Margin%) − Campaign Cost
- POAS вместо ROAS для каждого канала

**AEO:**
- Schema.org Event уже на сайте — правильно
- FAQ оптимизировать для AI-ответов
- Контент должен отвечать на вопросы, а не только содержать ключевые слова

**Consent Mode V2:**
- Обязательно для EU-трафика
- CMP через GTM, политика, аудит compliance

### Стратегические рекомендации

**Дашборд по ABO:**
- Acquisition: откуда трафик, по каналам
- Behavior: что делают на сайте (программа, билеты, спикеры)
- Outcomes: регистрации, revenue, profit
- Красный/зеленый к targets

**See-Think-Do-Care для ивента:**
- See: узнали о саммите (awareness, reach quality)
- Think: изучают программу, спикеров (engagement, pages/session)
- Do: покупают билет (conversion rate, revenue)
- Care: возвращаются на следующий год (retention, referrals)

**Word of Mouth:**
- В confirmation email: "расскажите коллегам" + прямая ссылка на WhatsApp/Telegram
- Измерять Earned Growth Ratio: доля новых регистраций по рекомендации

**Organic Social:**
- Не "вежливые обои" — контент ценен сам по себе
- На $1 контента — $12 на amplification лучших постов
- Backstage спикеров, провокационные вопросы, Reels с событий

**Email:**
- Propensity-based: разные письма для прошлых участников vs. новых
- Task Completion Rate: мини-опрос "зачем вы пришли на сайт?"

**Приоритеты бюджета (Small Business Playbook):**
- M1 (бесплатно): SEO/AEO, email, organic social
- M2 (немного): Google Ads по брендовым + intent запросам
- M3 (много): Paid Social — только если M1 и M2 отработаны

---

> *"The single biggest way for a small business to grow into a medium-sized business is word of mouth."* — Avinash Kaushik

Источник: 134 выпуска TMAI Newsletter (ak@kaushik.net), 2021–2026.
