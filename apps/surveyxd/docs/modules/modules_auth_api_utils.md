[surveyxd](../README.md) / [Exports](../modules.md) / modules/auth/api/utils

# Module: modules/auth/api/utils

## Table of contents

### Variables

- [nextAuthOptions](modules_auth_api_utils.md#nextauthoptions)

## Variables

### nextAuthOptions

• `Const` **nextAuthOptions**: `NextAuthOptions`

# Authentication

## Google OAuth

We are leveraging `next-auth` to handle login flow. Primarily, for google
authetication to work, we need to ensure `GOOGLE_CLIENT_ID` and
`GOOGLE_CLIENT_SECRET` is included in your `.env` files.

#### Defined in

[apps/surveyxd/src/modules/auth/api/utils.ts:15](https://github.com/labXD/formXD/blob/f0c75e0/apps/surveyxd/src/modules/auth/api/utils.ts#L15)
