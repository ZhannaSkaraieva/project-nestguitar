<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Add new entity

```bash
$ nest generate resource guitar
$ nest g res guitar
```

- отменяет создание файлов для тестирование при сощдании сущности (--no-spec)

# Using the built-in ValidationPipe

```bash
$ npm i --save class-validator class-transformer
```

- Введите класс-трансформер
  Эта class-transformerбиблиотека расширяет возможности DTO, преобразуя простые объекты JavaScript (например, полезные данные запроса) в экземпляры классов и преобразуя данные (например, исключая конфиденциальные поля или переименовывая свойства). Она широко используется в NestJS для:

- Сопоставление JSON с DTO : преобразование входящих запросов в проверенные экземпляры классов.
  Сериализация ответов : исключение конфиденциальных данных (например, паролей) или преобразование имен свойств.
  Упростите обработку данных : обеспечьте единообразие форматов данных во всем приложении.
  В сочетании с class-validatorDTO class-transformerэто делает его мощным инструментом для разработки API.

# Создаю фаил docker-compose.yml поднять

```bash
$ docker compose up
```

# PRISMA

```bash
$ npm install prisma --save-dev
```

- Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

  Usage

  $ prisma [command]

  Commands

              init   Set up Prisma for your app
               dev   Start a local Prisma Postgres server for development
          generate   Generate artifacts (e.g. Prisma Client)
                db   Manage your database schema and lifecycle
           migrate   Migrate your database
            studio   Browse your data with Prisma Studio
          validate   Validate your Prisma schema
            format   Format your Prisma schema
           version   Displays Prisma version info
             debug   Displays Prisma debug info
               mcp   Starts an MCP server to use with AI development tools

  Flags

       --preview-feature   Run Preview Prisma commands
       --help, -h          Show additional information about a command

┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Optimize performance through connection pooling and caching with Prisma Accelerate │
│ and capture real-time events from your database with Prisma Pulse. │
│ Learn more at https://pris.ly/cli/pdp │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Examples

      Set up a new local Prisma Postgres `prisma dev`-ready project
      $ prisma init

      Start a local Prisma Postgres server for development
      $ prisma dev

      Generate artifacts (e.g. Prisma Client)
      $ prisma generate

      Browse your data
      $ prisma studio

      Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
      $ prisma migrate dev

      Pull the schema from an existing database, updating the Prisma schema
      $ prisma db pull

      Push the Prisma schema state to the database
      $ prisma db push

      Validate your Prisma schema
      $ prisma validate

      Format your Prisma schema
      $ prisma format

      Display Prisma version info
      $ prisma version

      Display Prisma debug info
      $ prisma debug

```bash
$ npx prisma init
```

```bash
$ npm install dotenv --save
```

- Next steps:

1. Run prisma dev to start a local Prisma Postgres server.
2. Define models in the schema.prisma file.
3. Run prisma migrate dev to migrate your local Prisma Postgres database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database.

- Read: https://pris.ly/cli/beyond-orm

```bash
$ npx prisma generate
$ npx prisma migrate dev --name (init)
```

## Stripe Node.js Library

```bash
$ npm install stripe
```

```bash
$ brew install stripe/stripe-cli/stripe
```

# Авторизация в Stripe CLI

```bash
$ stripe login
```

Откроется браузер, где нужно разрешить доступ CLI к твоему аккаунту Stripe.
После успешной авторизации CLI готов слушать события.

# Запускаем слушатель вебхуков

- В терминале введи:

```bash
$ stripe listen --forward-to localhost:3000/stripe/webhook
```

Эта команда создаст туннель от Stripe в интернет к твоему локальному серверу.
После запуска CLI покажет Signing secret, например:

> Ready! Your webhook signing secret is whsec_ABC123XYZ...
> /

## ЗАПОЛНЕНИЕ ДАННЫМИ БД:

https://docs.nestjs.com/recipes/serve-static?utm_source=chatgpt.com

1. создаю папку public/products => переношу туда все картинки , которые будут отобраажаться в карточках товаров.
2. Для обслуживания статического контента в виде одностраничного приложения (SPA) мы можем использовать ServeStaticModule из @nestjs/serve-staticпакета

```bash
$ npm install --save @nestjs/serve-static
```

3. Импортирую ServeStaticModule в корень AppModule и настраиваю, передав объект конфигурации в forRoot()метод.
   @Module({
   imports: [
   ServeStaticModule.forRoot({
   rootPath: join(__dirname, '..', 'public'),
   }),
   ],
   controllers: [AppController],
   providers: [AppService],
   })

дает путь к картинке http://localhost:3000/products/.....jpg

## How to seed your database in Prisma ORM //https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

1. Add folder prisma/seed.ts
2. Create some new users and posts in your seed.ts file
3. Add typescript, ts-node and @types/node development dependencies:

```bash
$ npm install -D typescript ts-node @types/node
```

4. Add the prisma.seed field to your package.json file:
   "prisma": {
   "seed": "ts-node prisma/seed.ts"
   },
5. To seed the database, run the db seed CLI command:

```bash
$ npx prisma db seed
```

```bash
$ npm install @prisma/adapter-pg
```


