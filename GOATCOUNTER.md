# GoatCounter для MAN MAN

## Подключение

Скрипт счётчика и разметка событий добавлены в `index.html`.
Кабинет: <https://manman.goatcounter.com>
В `<head>` подключён официальный скрипт:

```html
<script data-goatcounter="https://manman.goatcounter.com/count"
        async src="https://gc.zgo.at/count.js"></script>
```

Сбор данных на публичном сайте начнётся после публикации изменений.
Аккаунт: <https://www.goatcounter.com/signup>
Инструкция: <https://www.goatcounter.com/help/start>

## Единый подход к меткам

Используем три параметра в одном порядке:

- `utm_source` — площадка: `vk`, `google`, `yandex`, `telegram`, `instagram`, `2gis`.
- `utm_medium` — тип перехода: `social` для соцсетей и Telegram, `referral`
  для ссылок в карточках компаний Google, Яндекса и 2ГИС. Переходы из карточек
  отделяем от обычного поискового трафика, поэтому не ставим `organic`.
- `utm_campaign` — конкретное размещение по схеме `<площадка>_<размещение>`.
  В GoatCounter именно этот параметр позволяет различать шапку профиля,
  сторис и профиль администратора.

GoatCounter автоматически учитывает `utm_campaign` и `utm_source`.
`utm_medium` сохраняем для совместимости с GA4; отдельного отчёта по нему
в GoatCounter не предполагаем. `utm_content` и `utm_term` для текущего набора
не нужны.

Все значения пишем строчными латинскими буквами; слова разделяем `_`.
Не добавляем в метки имена, телефоны или другие персональные данные.
Существующие названия `vk_profile`, `vk_story` и `instagram_profile` сохраняем,
чтобы не дробить уже собранную статистику.

## Готовые ссылки для размещения

Копируйте полный адрес из таблицы, включая всё после `?`.
В URL используется обычный символ `&`, без обратной косой черты и без `&amp;`.

| Площадка | Размещение | Кампания в GoatCounter | Готовая ссылка |
| --- | --- | --- | --- |
| VK | Шапка профиля сообщества | `vk_profile` | <https://man-man.online/?utm_source=vk&utm_medium=social&utm_campaign=vk_profile> |
| VK | Сторис | `vk_story` | <https://man-man.online/?utm_source=vk&utm_medium=social&utm_campaign=vk_story> |
| VK | Профиль администратора | `vk_admin_profile` | <https://man-man.online/?utm_source=vk&utm_medium=social&utm_campaign=vk_admin_profile> |
| Google | Профиль компании | `google_business_profile` | <https://man-man.online/?utm_source=google&utm_medium=referral&utm_campaign=google_business_profile> |
| Яндекс | Профиль компании | `yandex_business_profile` | <https://man-man.online/?utm_source=yandex&utm_medium=referral&utm_campaign=yandex_business_profile> |
| Telegram | Профиль аккаунта | `telegram_profile` | <https://man-man.online/?utm_source=telegram&utm_medium=social&utm_campaign=telegram_profile> |
| Instagram | Профиль компании | `instagram_profile` | <https://man-man.online/?utm_source=instagram&utm_medium=social&utm_campaign=instagram_profile> |
| 2ГИС | Профиль компании | `2gis_business_profile` | <https://man-man.online/?utm_source=2gis&utm_medium=referral&utm_campaign=2gis_business_profile> |

### Как читать статистику и добавлять размещения

В блоке **Campaigns** сравнивайте восемь кампаний из таблицы. По `utm_source`
можно различать площадки, но три размещения VK имеют один источник `vk`.
Сторис с общей ссылкой `vk_story` учитываются вместе. Если позже понадобится
сравнивать отдельные сторис, создавайте новые кампании, например
`vk_story_2026_10_11_01`, сохраняя источник `vk` и тип `social`.
Постоянным ссылкам в профилях дату не добавляем и названия со временем не меняем.

Метки обозначают исходное размещение ссылки. Если человек перешлёт её другу,
метки сохранятся; это не гарантия того, из какого приложения открыли сайт.
Без меток аналитика может определить источник по referrer, но не всегда
сможет различить конкретное размещение.

### Внешний вид ссылки

В поле «Сайт» площадка может показывать полный URL вместе с метками.
Скрыть их средствами самого сайта в интерфейсе VK нельзя. Если интерфейс
разрешает отдельный текст ссылки, укажите `man-man.online`, оставив полный
адрес с метками в адресе перехода.

Другой вариант — короткий адрес на нашем домене с перенаправлением, например
`https://man-man.online/vk/`. Такой адрес ещё не настроен: сейчас используйте
готовые ссылки из таблицы. Убирать метки из них перед публикацией не нужно.

Отчёты по кампаниям: <https://www.goatcounter.com/help/campaigns>

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
Документация: <https://www.goatcounter.com/help/events>

## Проверка после публикации

1. Открыть опубликованный сайт с тестовой ссылкой:
   `https://man-man.online/?utm_source=test&utm_campaign=setup_check`.
2. Проверить появление просмотра и кампании `setup_check` в кабинете.
3. Нажать «Записаться онлайн» и проверить событие `click_booking`.
4. Если данных нет, проверить блокировщик рекламы и запросы к счётчику.

Существующие подключения GA4 и Tinylytics сохранены. Перед удалением любого
из них следует убедиться, что GoatCounter получает данные.
