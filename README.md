# Portfolio Redesign — DARKPIX

Альтернативная версия портфолио **DARKPIX (Vladislav Borodatyi)** в папке
`projects/portfolio-redesign/`. Содержимое (секции, проекты, опыт, стек) — то
же, что и в `projects/portfolio/`, но оформлено в современном редизайне:

- **Bento-grid** раскладка для About, Skills и Projects
- **Glassmorphism**: полупрозрачные карточки с `backdrop-blur`, тонкие границы
- **Aurora-градиенты**: анимированные размытые blob’ы в Hero
- **Gradient text** для акцентов и CTA
- Адаптивная тёмная тема с фоновой сеткой

## Источники вдохновения

- [Bento Grid Design: 40+ Examples](https://mukeshkdesigns.com/blogs/bento-grid-design-inspiration/)
- [Glassmorphism Web Design with Code Examples](https://natebal.com/glassmorphism-web-design/)
- [32 Best Web Developer Portfolio Website Examples](https://createtoday.io/examples?category)

## Стек

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React + React Icons
- ESLint

## Запуск

```bash
cd projects/portfolio-redesign
npm run dev        # http://localhost:3000
npm run build      # продакшн-сборка
npm run lint       # ESLint
```

## Структура

- `app/page.tsx` — композиция секций
- `components/sections/` — секции страницы
- `components/ui/` — UI-компоненты (Button, Card, Badge, Sheet)
- `public/` — изображения и favicon
