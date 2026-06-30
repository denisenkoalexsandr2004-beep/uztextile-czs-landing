# Деплой сайта

Сайт **статический** (HTML/CSS/JS/картинки), сборка не нужна — публикуется как есть.

> Базовый адрес для SEO/превью сейчас указывает на GitHub Pages.
> Когда подключите свой домен — замените его в файлах:
> `index.html` (блок canonical/OG/Twitter), `robots.txt`, `sitemap.xml`.

---

## Вариант A — Netlify (рекомендуется, бесплатно, авто-деплой из GitHub)

1. Зайдите на https://app.netlify.com → **Add new site → Import an existing project → GitHub**.
2. Выберите репозиторий `uztextile-czs-landing`.
3. Build command — пусто, Publish directory — `.` (уже задано в `netlify.toml`).
4. **Deploy**. Через ~1 минуту сайт получит адрес вида `имя.netlify.app`.
5. Свой домен: **Site settings → Domain management → Add domain**, далее по инструкции Netlify пропишете DNS.

После любого `git push` в `main` Netlify пересоберёт сайт автоматически.

## Вариант B — Vercel

1. https://vercel.com → **Add New → Project → Import** репозиторий `uztextile-czs-landing`.
2. Framework Preset — **Other**, build — пусто (настройки в `vercel.json`). **Deploy**.
3. Домен: **Settings → Domains**.

## Вариант C — Cloudflare Pages

1. https://dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git**.
2. Репозиторий `uztextile-czs-landing`. Build command — пусто, Output directory — `/`.
3. **Save and Deploy**. Домен — во вкладке **Custom domains**.

---

## Вариант D — Timeweb / обычный хостинг (загрузка файлов по FTP или через файловый менеджер)

Нужны только runtime-файлы (без `build_standalone.py`, `README.md`, `.git` и т.п.).
Готовый архив для загрузки: **`Лендинг_ЦЗС_деплой.zip`** (лежит в корне проекта `Imperia Forum`).

1. В панели Timeweb откройте **Файловый менеджер** (или подключитесь по FTP).
2. Перейдите в корневую папку сайта (обычно `public_html` или `/<домен>/public_html`).
3. Загрузите содержимое архива `Лендинг_ЦЗС_деплой.zip` (распакуйте так, чтобы `index.html` лежал в корне сайта, а не во вложенной папке).
4. Откройте домен в браузере — сайт должен открыться.

Состав архива: `index.html`, `404.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `css/`, `js/`, `img/`.

---

## Проверка после деплоя
- Открывается главная, переключаются 4 языка и тумблер поставщик/закупщик.
- Видны фото (шапка, галерея, контакты).
- При отправке ссылки в Telegram/WhatsApp показывается превью с картинкой (Open Graph).
