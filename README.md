= Развертка development-окружения

# Должны быть доступны: bash, bundle, npm, rsync.
# Развертка окружения: cd staging && ./install.sh

= Очистка

# Очистка: cd staging && ./clean.sh

= Тестирование

# Тестирование: cd staging && ./test.sh

= Интерфейс (api)

# Используемые технологии: Ruby, Bundler, Rake, Rack, Grape

= Юнит-тестирование интерфейса (api)

# Используемые технологии: те же, что и в интерфейсе + RSpec, rack-test, SimpleCov
# Юнит-тестирование интерфейса: cd staging && ./test-api.sh
# Информацию о покрытии см. в /api/coverage/index.html

= Клиент (client)

# Используемые технологии: JavaScript (ECMAScript6 через Babel), Aurelia либо RotorJS, мелкие библиотеки

= Юнит-тестирование клиента (client)

Отсутствует

= Приемочное тестирование (acceptance_testing)

# Используемые технологии: NodeJS (--harmony режим), Electron, Nightmare
# Приемочное тестирование: cd staging && ./test-acceptance.sh

= Система сборки (staging)

# Используемые технологии: Bash
# Сборка (результат сборки - в директории /server): cd staging && ./build.sh
# Сборка для развертывания на боевом сервере (результат сборки - в директории /server_production): cd staging && ./build-production.sh

= Запуск

# Запуск development-сервера: cd staging && ./build.sh && ./start.sh
# Запуск сервера: cd staging && ./build-production.sh && ./start-production.sh && <...> && ./stop-production.sh

= Документация (docs)

