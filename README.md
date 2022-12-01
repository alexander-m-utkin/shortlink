
## Description

Сервис сокращения ссылок.

## Installation

В директории проекта и запустить:
```bash
$ docker-compose build
```

Миграции и все необходимое выполнится автоматически.

Также после этого можно остановить контейнер shortlink и запускать сервис локально 
или через дебаггер.
Не забудьте скопировать содержимое .env.example в созданный вами .env файл.
```bash
$ npm run start
```

## Running the app

В Docker:
```bash
$ docker-compose up
```

Либо локально (Docker контейнер postgres в это время должен работать):
```bash
$ npm run start
```

## Test

Тесты можно запустить локально в проекте:
```bash
# unit tests
$ npm run test
```


## TODO 
Некоторые недостатки, которые можно исправить если было время:

- обновить docker-compose.yaml до 3.9
- именование колонок БД сделать snake_case
- сделать постоянный том для контейнера postgres

