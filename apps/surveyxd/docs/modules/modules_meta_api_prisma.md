[surveyxd](../README.md) / [Exports](../modules.md) / modules/meta/api/prisma

# Module: modules/meta/api/prisma

## Table of contents

### Variables

- [prisma](modules_meta_api_prisma.md#prisma)

## Variables

### prisma

• **prisma**: `PrismaClient`

We use `prisma` to connect to our DB in planetscale.

For development, we connect directly to the `dev` branch in planetscale. We use `pscale`
cli to securely connect to our DB.

## Installation
### MacOS
```bash
brew install planetscale/tap/pscale
```

### Auth
```bash
pscale auth login
```

To create a connectionn tunnel, run:
```bash
pscale connect surveyxd dev --org labxd
```

By default the DB connection is proxied through `localhost` at default mysql 3306 port.
Ensure your `.env` files includes the following:
```dotenv
DATABASE_URL="mysql://127.0.0.1:3306/surveyxd"
```

## Making changes to the DB

By default, we use `dev` branch in planetscale for development. If there is a change to be made,
we can create a new branch and make the changes there. Once the changes are tested, we can merge and
then the changes will be automatically deployed to `dev` branch using `prisma db push`. This is the 
recommended way to make changes to the DB in planetscale.

## TODO
- [ ] CI/CD to deploy to `dev` branch.
- [ ] CI/CD to merge `dev` into `main` when deploying app to prod env

#### Defined in

[apps/surveyxd/src/modules/meta/api/prisma.ts:54](https://github.com/labXD/formXD/blob/f0c75e0/apps/surveyxd/src/modules/meta/api/prisma.ts#L54)
