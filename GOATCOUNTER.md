# GoatCounter для MAN MAN

## Подключение

Скрипт счётчика и разметка событий добавлены в `index.html`.
Кабинет: https://manman.goatcounter.com
В `<head>` подключён официальный скрипт:

```html
<script data-goatcounter="https://manman.goatcounter.com/count"
        async src="https://gc.zgo.at/count.js"></script>
```

Сбор данных на публичном сайте начнётся после публикации изменений.
Аккаунт: https://www.goatcounter.com/signup
Инструкция: https://www.goatcounter.com/help/start

## Ссылки для размещения

Для каждого места публикации используйте отдельный `utm_campaign`.
GoatCounter автоматически учитывает `utm_campaign` и `utm_source`.
Не рассчитывайте на отдельные отчёты по `utm_content` или `utm_medium`.

| Размещение | Ссылка |
| --- | --- |
| Профиль VK | https://man-man.online/?utm_source=vk&utm_medium=social&utm_campaign=vk_profile |
| Пост VK | https://man-man.online/?utm_source=vk&utm_medium=social&utm_campaign=vk_post_2026_10_10 |
| Профиль Instagram | https://man-man.online/?utm_source=instagram&utm_medium=social&utm_campaign=instagram_profile |
| Пост Telegram | https://man-man.online/?utm_source=telegram&utm_medium=social&utm_campaign=telegram_post_2026_10_10 |
| QR-код на визитке | https://man-man.online/?utm_source=business_card&utm_medium=qr&utm_campaign=business_card_2026 |

Названия кампаний задавайте строчными латинскими буквами, без персональных
данных. При перепубликации ссылки метки сохраняются: они обозначают исходное
размещение ссылки, а не гарантированное приложение, из которого её открыли.

Отчёты по кампаниям: https://www.goatcounter.com/help/campaigns

## События

Подготовлены атрибуты `data-goatcounter-click` и `data-goatcounter-title`:

- `click_booking` — переход к записи в DIKIDI;
- `click_phone` — нажатие на телефон;
- `click_map` — открытие карты;
- `click_vk` — открытие VK;
- `click_instagram` — открытие Instagram;
- `click_email` — нажатие на почту.

Эти действия не подтверждают завершённую запись, звонок или отправку письма.
GoatCounter по умолчанию может объединять быстрые повторные события в сессии.
Документация: https://www.goatcounter.com/help/events

## Проверка после публикации

1. Открыть опубликованный сайт с тестовой ссылкой:
   `https://man-man.online/?utm_source=test&utm_campaign=setup_check`.
2. Проверить появление просмотра и кампании `setup_check` в кабинете.
3. Нажать «Записаться онлайн» и проверить событие `click_booking`.
4. Если данных нет, проверить блокировщик рекламы и запросы к счётчику.

Существующие подключения GA4 и Tinylytics сохранены. Перед удалением любого
из них следует убедиться, что GoatCounter получает данные.
