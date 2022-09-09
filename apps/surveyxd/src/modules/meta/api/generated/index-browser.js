
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.3.1
 * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
 */
Prisma.prismaVersion = {
  client: "4.3.1",
  engine: "c875e43600dfe042452e0b868f7a48b817b9640b"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
});

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
});

exports.Prisma.AnswerOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  answerId: 'answerId',
  freeTextAnswer: 'freeTextAnswer',
  surveyId: 'surveyId',
  questionId: 'questionId'
});

exports.Prisma.AnswerScalarFieldEnum = makeEnum({
  id: 'id',
  answerId: 'answerId',
  freeTextAnswer: 'freeTextAnswer',
  surveyId: 'surveyId',
  questionId: 'questionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuestionAnswerOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  textValue: 'textValue'
});

exports.Prisma.QuestionAnswerScalarFieldEnum = makeEnum({
  id: 'id',
  numericValue: 'numericValue',
  textValue: 'textValue',
  questionType: 'questionType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuestionOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  surveyId: 'surveyId'
});

exports.Prisma.QuestionScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  questionType: 'questionType',
  surveyId: 'surveyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SessionOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SurveyAccessOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  surveyId: 'surveyId',
  ownerId: 'ownerId'
});

exports.Prisma.SurveyAccessScalarFieldEnum = makeEnum({
  id: 'id',
  surveyId: 'surveyId',
  ownerId: 'ownerId',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SurveyOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  title: 'title'
});

exports.Prisma.SurveyScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  publishStatus: 'publishStatus'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image'
});

exports.Prisma.VerificationTokenOrderByRelevanceFieldEnum = makeEnum({
  identifier: 'identifier',
  token: 'token'
});

exports.Prisma.VerificationTokenScalarFieldEnum = makeEnum({
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
});
exports.QuestionType = makeEnum({
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  CHECKBOX: 'CHECKBOX'
});

exports.SurveyPublishStatus = makeEnum({
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED'
});

exports.SurveyUserAcessRoles = makeEnum({
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
});

exports.Prisma.ModelName = makeEnum({
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  Survey: 'Survey',
  SurveyAccess: 'SurveyAccess',
  Question: 'Question',
  QuestionAnswer: 'QuestionAnswer',
  Answer: 'Answer'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
