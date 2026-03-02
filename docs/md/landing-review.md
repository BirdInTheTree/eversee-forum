# Ревью плана лендинга EVERSEE Creative Forum

Четыре перспективы: маркетолог, tech-участник, креатив-участник, основатель/инвестор.

---

## 1. Маркетолог (7/10)

**Хорошо:**
- Структура классическая и рабочая: hero с urgency → value prop → программа → tickets → FAQ
- Speed Matching вынесен отдельно — это USP, правильно
- Два блока FOR CREATIVES / FOR TECH — каждая аудитория сразу себя находит

**Не хватает:**
- **Social proof.** Ни одного имени, ни логотипа. Для первого ивента критично. Нужна секция "Who's already in" или логобар confirmed-участников
- **Speakers / Participants.** Хотя бы "First confirmed names" с 3-5 фото + должностями
- **Venue.** "Berlin" слишком абстрактно. "Central Berlin. Venue announcement in March."
- **Tagline слабый.** "The whole live entertainment industry in one room" — overclaim при 50-100 людях. Лучше подчеркнуть эксклюзивность: "50 decision-makers. 3 days. Zero PowerPoint."
- **Email capture.** Нет формы подписки. За 4 месяца до ивента первая задача — собрать leads
- **CTA обрывается.** "Get Your Badge" → tickets → href="#". Нет механизма покупки

---

## 2. Tech-участник, VP of Sales (6/10)

**Зацепит:**
- Speed Matching — прямой доступ к 10 креативщикам за час
- Brainstorm — инсайты для продуктовых команд

**Не хватает для решения "едем":**
- **Кто там будет?** Не куплю билет за €890, не зная аудиторию. Нужен список профилей или хотя бы уровень ("Show directors from Cirque du Soleil, Friedrichstadt-Palast...")
- **ROI обоснование.** Для корпоративного бюджета нужно написать memo — дайте аргументы
- ~~**Demo Zone**~~ — при 50-100 людях отдельная "зона" — overclaim. Демо происходит за столами Speed Matching
- **"200+ directors" — враньё.** Ивент на 50-100 человек. Несоответствие подрывает доверие
- **Corporate package — "on request" без зацепки.** Хотя бы bullets что можно кастомизировать

---

## 3. Креатив-участник, Artistic Director (7/10)

**Зацепит:**
- Alizée + Friedrichstadt-Palast — не "networking dinner", а культурные события
- Speed Matching — 10 технологий за час
- Brainstorm формат — естественная среда для креативщика

**Смущает:**
- **Essential (€290, 2 дня) без шоу — ощущается как неполноценный.** €590 за Full — ощутимо для фрилансера. Essential выглядит как ловушка
- **"Conference & workshops" — скучно.** Нужно подчеркнуть что это brainstorm, не лекции
- **Нет curated/invite-only атмосферы.** "Application-based. We review every participant." поднимает perceived value
- **"Venue TBA" за 4 месяца** — тревожный сигнал

---

## 4. Основатель / инвестор (7.5/10)

**Сильно:**
- Статический сайт, GitHub Pages/Netlify — независимость от WordPress друзей, правильно
- Дизайн-система есть (pricing.html качественный), переиспользование — разумно
- GSAP + Lenis — проверенный стек
- Countdown + early bird — правильные механики

**Риски:**
- **Лендинг без платёжного шлюза = маркетинговый сайт, не продающий.** Нужен Stripe/Tito/Eventbrite
- **Нет аналитики.** GA4 + LinkedIn Insight Tag минимум. Без данных нельзя оптимизировать
- **SEO минимальный** — ок для event-лендинга с трафиком из рассылок, но OG tags + og:image обязательны для LinkedIn-шаринга
- **"200+ directors" при 50-100 участниках** — потенциальная юридическая проблема
- **Meta description от старого сайта** ("Producing emotions, creating memories") — не про форум
- **"Max 40" backstage** при 50-100 участниках — не ощущается как exclusive

---

## Сводка: что исправить перед реализацией

### P0 — без этого не запускать
- [ ] Исправить "200+" → реальное число участников
- [ ] Добавить email capture / waitlist форму
- [ ] Решить вопрос покупки билетов (Stripe Payment Link / Tito / Eventbrite)

### P1 — сильно влияет на конверсию
- [ ] Секция Speakers / "Who's attending" (имена, фото, должности)
- [ ] Логобар компаний-участников
- [ ] Meta tags, OG image, share preview для LinkedIn
- [ ] Аналитика (GA4 + LinkedIn Insight Tag)
- [ ] ~~Demo Zone~~ — убрана, overclaim при 50-100 чел

### P2 — улучшения
- [ ] Пересмотреть tagline (overclaim при 50-100 чел)
- [ ] Копирайтинг Essential пакета — должен быть жизнеспособным, не "урезанным Full"
- [ ] "Venue TBA" → "Central Berlin, details in March"
- [ ] Curated/invite-only позиционирование
- [ ] Заменить "conference & workshops" → "brainstorm sessions, lightning talks, speed matching"
