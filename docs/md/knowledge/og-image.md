# OG Image — что это и как сделать

## Что это

Когда ссылка шарится в Telegram, LinkedIn, Facebook, Twitter — появляется карточка-превью с картинкой, заголовком и описанием. Эта картинка — `og:image` (Open Graph image).

Без неё — пустой серый прямоугольник или случайный кусок страницы.

## Размер

**1200 × 630 px** — универсальный стандарт (соотношение 1.91:1).

- JPEG — для фото/градиентов
- PNG — если много текста или нужна прозрачность
- Максимум 5 MB (лучше < 300 KB)

## Что должно быть на картинке

Одно правило: **одно сообщение за 1 секунду**.

Для мероприятия:
- Название (EVERSEE Creative Summit)
- Дата и место (Berlin · June 2026)
- Брендовые цвета/логотип
- Текст крупный, по центру — соцсети обрезают края

## Что делает OG Image хорошим

- **Одно ясное сообщение** — не перегружать
- **Высококонтрастный текст** — читаемость на мобилке
- **Единый брендинг** — лого, цвета, типографика
- **Отступы от краёв** — платформы кропают по-разному
- **Правильные размеры** — 1200×630 для совместимости

## Чего избегать

- Слишком яркие / кислотные цвета
- Текст занимает > 25% площади (правило Facebook Ads)
- Заголовок длиннее 60 символов
- Мелкие детали, которые не видны на превью

## Где посмотреть примеры

- **[ogimage.gallery](https://www.ogimage.gallery)** — курированная коллекция OG-image с реальных сайтов
  - [Creative](https://www.ogimage.gallery/category/creative)
  - [Arts & Culture](https://www.ogimage.gallery/category/arts-culture)
- **[OG Image Examples and Best Practices](https://logofast.app/guides/og-image-examples)** — примеры + разбор
- **[Ultimate Guide to OG Image Dimensions](https://www.ogimage.gallery/libary/the-ultimate-guide-to-og-image-dimensions-2024-update)** — размеры под каждую платформу

## Как быстро сделать

1. **Canva** — шаблон 1200×630, тёмный фон, градиентный текст
2. **Скриншот hero-секции** — обрезать до нужного размера
3. **[og-image.org](https://og-image.org/)** — генератор OG-image для разработчиков

## Как проверить

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — как выглядит в FB
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) — как выглядит в Twitter/X
- [opengraph.xyz](https://www.opengraph.xyz/) — универсальный превью

## Где лежит в проекте

Файл: `eversee-new/og-image.jpg`

В HTML:
```html
<meta property="og:image" content="https://eversee.de/og-image.jpg">
<meta name="twitter:image" content="https://eversee.de/og-image.jpg">
```
