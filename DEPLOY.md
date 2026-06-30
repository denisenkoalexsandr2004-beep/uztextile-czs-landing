# Деплой сайта

Сайт **статический** (HTML/CSS/JS/картинки), сборка не нужна — публикуется как есть.

**Боевой адрес: `https://centerzakupok.ru/textile-uz/`** (подпапка домена `centerzakupok.ru`, рядом с `/club`).
Все пути в сайте относительные, поэтому он корректно работает из подпапки.
SEO-ссылки (canonical/OG/robots/sitemap) уже прописаны на этот адрес.

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
2. Перейдите в корень сайта `centerzakupok.ru` (обычно `public_html`) и создайте в нём папку **`textile-uz`**.
3. Загрузите содержимое архива `Лендинг_ЦЗС_деплой.zip` **внутрь `public_html/textile-uz/`** — так, чтобы `index.html` лежал прямо в `textile-uz`, а не во вложенной папке.
4. Откройте **https://centerzakupok.ru/textile-uz/** — сайт должен открыться.

Состав архива: `index.html`, `404.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `css/`, `js/`, `img/`.

---

## Проверка после деплоя
- Открывается главная, переключаются 4 языка и тумблер поставщик/закупщик.
- Видны фото (шапка, галерея, контакты).
- При отправке ссылки в Telegram/WhatsApp показывается превью с картинкой (Open Graph).
