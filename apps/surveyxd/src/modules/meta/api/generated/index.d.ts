
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
}

/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = {
  identifier: string
  token: string
  expires: Date
}

/**
 * Model Survey
 * 
 */
export type Survey = {
  id: string
  title: string | null
  createdAt: Date
  updatedAt: Date
  publishStatus: SurveyPublishStatus
}

/**
 * Model SurveyAccess
 * 
 */
export type SurveyAccess = {
  id: string
  surveyId: string
  ownerId: string
  role: SurveyUserAcessRoles
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Question
 * 
 */
export type Question = {
  id: string
  title: string
  questionType: QuestionType
  surveyId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model QuestionAnswer
 * 
 */
export type QuestionAnswer = {
  id: string
  numericValue: number
  textValue: string
  questionType: QuestionType
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Answer
 * 
 */
export type Answer = {
  id: string
  answerId: string
  freeTextAnswer: string | null
  surveyId: string
  questionId: string
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const QuestionType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  CHECKBOX: 'CHECKBOX'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const SurveyPublishStatus: {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED'
};

export type SurveyPublishStatus = (typeof SurveyPublishStatus)[keyof typeof SurveyPublishStatus]


export const SurveyUserAcessRoles: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type SurveyUserAcessRoles = (typeof SurveyUserAcessRoles)[keyof typeof SurveyUserAcessRoles]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<GlobalReject>;

  /**
   * `prisma.surveyAccess`: Exposes CRUD operations for the **SurveyAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyAccesses
    * const surveyAccesses = await prisma.surveyAccess.findMany()
    * ```
    */
  get surveyAccess(): Prisma.SurveyAccessDelegate<GlobalReject>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<GlobalReject>;

  /**
   * `prisma.questionAnswer`: Exposes CRUD operations for the **QuestionAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionAnswers
    * const questionAnswers = await prisma.questionAnswer.findMany()
    * ```
    */
  get questionAnswer(): Prisma.QuestionAnswerDelegate<GlobalReject>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Survey: 'Survey',
    SurveyAccess: 'SurveyAccess',
    Question: 'Question',
    QuestionAnswer: 'QuestionAnswer',
    Answer: 'Answer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;


  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    accounts: number
    sessions: number
    usersWithAccess: number
  }

  export type UserCountOutputTypeSelect = {
    accounts?: boolean
    sessions?: boolean
    usersWithAccess?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type SurveyCountOutputType
   */


  export type SurveyCountOutputType = {
    questions: number
    usersWithAccess: number
    answers: number
  }

  export type SurveyCountOutputTypeSelect = {
    questions?: boolean
    usersWithAccess?: boolean
    answers?: boolean
  }

  export type SurveyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SurveyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SurveyCountOutputType
    : S extends undefined
    ? never
    : S extends SurveyCountOutputTypeArgs
    ?'include' extends U
    ? SurveyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SurveyCountOutputType ? SurveyCountOutputType[P] : never
  } 
    : SurveyCountOutputType
  : SurveyCountOutputType




  // Custom InputTypes

  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SurveyCountOutputType
     * 
    **/
    select?: SurveyCountOutputTypeSelect | null
  }



  /**
   * Count Type QuestionCountOutputType
   */


  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect = {
    answers?: boolean
  }

  export type QuestionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | QuestionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? QuestionCountOutputType
    : S extends undefined
    ? never
    : S extends QuestionCountOutputTypeArgs
    ?'include' extends U
    ? QuestionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof QuestionCountOutputType ? QuestionCountOutputType[P] : never
  } 
    : QuestionCountOutputType
  : QuestionCountOutputType




  // Custom InputTypes

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     * 
    **/
    select?: QuestionCountOutputTypeSelect | null
  }



  /**
   * Count Type QuestionAnswerCountOutputType
   */


  export type QuestionAnswerCountOutputType = {
    answers: number
  }

  export type QuestionAnswerCountOutputTypeSelect = {
    answers?: boolean
  }

  export type QuestionAnswerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | QuestionAnswerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? QuestionAnswerCountOutputType
    : S extends undefined
    ? never
    : S extends QuestionAnswerCountOutputTypeArgs
    ?'include' extends U
    ? QuestionAnswerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof QuestionAnswerCountOutputType ? QuestionAnswerCountOutputType[P] : never
  } 
    : QuestionAnswerCountOutputType
  : QuestionAnswerCountOutputType




  // Custom InputTypes

  /**
   * QuestionAnswerCountOutputType without action
   */
  export type QuestionAnswerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionAnswerCountOutputType
     * 
    **/
    select?: QuestionAnswerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
  }

  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Account ? Account[P] : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find one Account that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }

  /**
   * Account: findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account: findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account: findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = AccountFindUniqueArgsBase
      

  /**
   * Account: findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = AccountFindFirstArgsBase
      

  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs
  }

  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Session ? Session[P] : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find one Session that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session: findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session: findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session: findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = SessionFindUniqueArgsBase
      

  /**
   * Session: findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = SessionFindFirstArgsBase
      

  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    usersWithAccess?: boolean | SurveyAccessFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    usersWithAccess?: boolean | SurveyAccessFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'accounts' ? Array < AccountGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'usersWithAccess' ? Array < SurveyAccessGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'usersWithAccess' ? Array < SurveyAccessGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    sessions<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    usersWithAccess<T extends SurveyAccessFindManyArgs = {}>(args?: Subset<T, SurveyAccessFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SurveyAccess>>, PrismaPromise<Array<SurveyAccessGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model VerificationToken
   */


  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByWithAggregationInput>
    by: Array<VerificationTokenScalarFieldEnum>
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }


  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenGetPayload<
    S extends boolean | null | undefined | VerificationTokenArgs,
    U = keyof S
      > = S extends true
        ? VerificationToken
    : S extends undefined
    ? never
    : S extends VerificationTokenArgs | VerificationTokenFindManyArgs
    ?'include' extends U
    ? VerificationToken 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof VerificationToken ? VerificationToken[P] : never
  } 
    : VerificationToken
  : VerificationToken


  type VerificationTokenCountArgs = Merge<
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }
  >

  export interface VerificationTokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<VerificationToken>>, PrismaPromise<Array<VerificationTokenGetPayload<T>>>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Find one VerificationToken that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VerificationToken base type for findUnique actions
   */
  export type VerificationTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken: findUnique
   */
  export interface VerificationTokenFindUniqueArgs extends VerificationTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken base type for findFirst actions
   */
  export type VerificationTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     * 
    **/
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken: findFirst
   */
  export interface VerificationTokenFindFirstArgs extends VerificationTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs = {
    /**
     * The data used to create many VerificationTokens.
     * 
    **/
    data: Enumerable<VerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    /**
     * The data used to update VerificationTokens.
     * 
    **/
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     * 
    **/
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    /**
     * Filter which VerificationTokens to delete
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken: findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs = VerificationTokenFindUniqueArgsBase
      

  /**
   * VerificationToken: findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs = VerificationTokenFindFirstArgsBase
      

  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
  }



  /**
   * Model Survey
   */


  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishStatus: SurveyPublishStatus | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishStatus: SurveyPublishStatus | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    publishStatus: number
    _all: number
  }


  export type SurveyMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    publishStatus?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    publishStatus?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    publishStatus?: true
    _all?: true
  }

  export type SurveyAggregateArgs = {
    /**
     * Filter which Survey to aggregate.
     * 
    **/
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs = {
    where?: SurveyWhereInput
    orderBy?: Enumerable<SurveyOrderByWithAggregationInput>
    by: Array<SurveyScalarFieldEnum>
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }


  export type SurveyGroupByOutputType = {
    id: string
    title: string | null
    createdAt: Date
    updatedAt: Date
    publishStatus: SurveyPublishStatus
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect = {
    id?: boolean
    title?: boolean
    questions?: boolean | QuestionFindManyArgs
    usersWithAccess?: boolean | SurveyAccessFindManyArgs
    answers?: boolean | AnswerFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    publishStatus?: boolean
    _count?: boolean | SurveyCountOutputTypeArgs
  }

  export type SurveyInclude = {
    questions?: boolean | QuestionFindManyArgs
    usersWithAccess?: boolean | SurveyAccessFindManyArgs
    answers?: boolean | AnswerFindManyArgs
    _count?: boolean | SurveyCountOutputTypeArgs
  }

  export type SurveyGetPayload<
    S extends boolean | null | undefined | SurveyArgs,
    U = keyof S
      > = S extends true
        ? Survey
    : S extends undefined
    ? never
    : S extends SurveyArgs | SurveyFindManyArgs
    ?'include' extends U
    ? Survey  & {
    [P in TrueKeys<S['include']>]:
        P extends 'questions' ? Array < QuestionGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'usersWithAccess' ? Array < SurveyAccessGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'answers' ? Array < AnswerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? SurveyCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'questions' ? Array < QuestionGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'usersWithAccess' ? Array < SurveyAccessGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'answers' ? Array < AnswerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? SurveyCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Survey ? Survey[P] : never
  } 
    : Survey
  : Survey


  type SurveyCountArgs = Merge<
    Omit<SurveyFindManyArgs, 'select' | 'include'> & {
      select?: SurveyCountAggregateInputType | true
    }
  >

  export interface SurveyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurveyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SurveyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Survey'> extends True ? CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>> : CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurveyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SurveyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Survey'> extends True ? CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>> : CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SurveyFindManyArgs>(
      args?: SelectSubset<T, SurveyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Survey>>, PrismaPromise<Array<SurveyGetPayload<T>>>>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
    **/
    create<T extends SurveyCreateArgs>(
      args: SelectSubset<T, SurveyCreateArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Create many Surveys.
     *     @param {SurveyCreateManyArgs} args - Arguments to create many Surveys.
     *     @example
     *     // Create many Surveys
     *     const survey = await prisma.survey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SurveyCreateManyArgs>(
      args?: SelectSubset<T, SurveyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
    **/
    delete<T extends SurveyDeleteArgs>(
      args: SelectSubset<T, SurveyDeleteArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurveyUpdateArgs>(
      args: SelectSubset<T, SurveyUpdateArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurveyDeleteManyArgs>(
      args?: SelectSubset<T, SurveyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurveyUpdateManyArgs>(
      args: SelectSubset<T, SurveyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
    **/
    upsert<T extends SurveyUpsertArgs>(
      args: SelectSubset<T, SurveyUpsertArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Find one Survey that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SurveyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Find the first Survey that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SurveyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyClient<Survey>, Prisma__SurveyClient<SurveyGetPayload<T>>>

    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SurveyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    questions<T extends QuestionFindManyArgs = {}>(args?: Subset<T, QuestionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Question>>, PrismaPromise<Array<QuestionGetPayload<T>>>>;

    usersWithAccess<T extends SurveyAccessFindManyArgs = {}>(args?: Subset<T, SurveyAccessFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SurveyAccess>>, PrismaPromise<Array<SurveyAccessGetPayload<T>>>>;

    answers<T extends AnswerFindManyArgs = {}>(args?: Subset<T, AnswerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Answer>>, PrismaPromise<Array<AnswerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Survey base type for findUnique actions
   */
  export type SurveyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter, which Survey to fetch.
     * 
    **/
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey: findUnique
   */
  export interface SurveyFindUniqueArgs extends SurveyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Survey base type for findFirst actions
   */
  export type SurveyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter, which Survey to fetch.
     * 
    **/
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     * 
    **/
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     * 
    **/
    distinct?: Enumerable<SurveyScalarFieldEnum>
  }

  /**
   * Survey: findFirst
   */
  export interface SurveyFindFirstArgs extends SurveyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter, which Surveys to fetch.
     * 
    **/
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     * 
    **/
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SurveyScalarFieldEnum>
  }


  /**
   * Survey create
   */
  export type SurveyCreateArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * The data needed to create a Survey.
     * 
    **/
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }


  /**
   * Survey createMany
   */
  export type SurveyCreateManyArgs = {
    /**
     * The data used to create many Surveys.
     * 
    **/
    data: Enumerable<SurveyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Survey update
   */
  export type SurveyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * The data needed to update a Survey.
     * 
    **/
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     * 
    **/
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs = {
    /**
     * The data used to update Surveys.
     * 
    **/
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     * 
    **/
    where?: SurveyWhereInput
  }


  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * The filter to search for the Survey to update in case it exists.
     * 
    **/
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     * 
    **/
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }


  /**
   * Survey delete
   */
  export type SurveyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
    /**
     * Filter which Survey to delete.
     * 
    **/
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs = {
    /**
     * Filter which Surveys to delete
     * 
    **/
    where?: SurveyWhereInput
  }


  /**
   * Survey: findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs = SurveyFindUniqueArgsBase
      

  /**
   * Survey: findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs = SurveyFindFirstArgsBase
      

  /**
   * Survey without action
   */
  export type SurveyArgs = {
    /**
     * Select specific fields to fetch from the Survey
     * 
    **/
    select?: SurveySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyInclude | null
  }



  /**
   * Model SurveyAccess
   */


  export type AggregateSurveyAccess = {
    _count: SurveyAccessCountAggregateOutputType | null
    _min: SurveyAccessMinAggregateOutputType | null
    _max: SurveyAccessMaxAggregateOutputType | null
  }

  export type SurveyAccessMinAggregateOutputType = {
    id: string | null
    surveyId: string | null
    ownerId: string | null
    role: SurveyUserAcessRoles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SurveyAccessMaxAggregateOutputType = {
    id: string | null
    surveyId: string | null
    ownerId: string | null
    role: SurveyUserAcessRoles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SurveyAccessCountAggregateOutputType = {
    id: number
    surveyId: number
    ownerId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SurveyAccessMinAggregateInputType = {
    id?: true
    surveyId?: true
    ownerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SurveyAccessMaxAggregateInputType = {
    id?: true
    surveyId?: true
    ownerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SurveyAccessCountAggregateInputType = {
    id?: true
    surveyId?: true
    ownerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SurveyAccessAggregateArgs = {
    /**
     * Filter which SurveyAccess to aggregate.
     * 
    **/
    where?: SurveyAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyAccesses to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyAccessOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SurveyAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyAccesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyAccesses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyAccesses
    **/
    _count?: true | SurveyAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyAccessMaxAggregateInputType
  }

  export type GetSurveyAccessAggregateType<T extends SurveyAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyAccess[P]>
      : GetScalarType<T[P], AggregateSurveyAccess[P]>
  }




  export type SurveyAccessGroupByArgs = {
    where?: SurveyAccessWhereInput
    orderBy?: Enumerable<SurveyAccessOrderByWithAggregationInput>
    by: Array<SurveyAccessScalarFieldEnum>
    having?: SurveyAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyAccessCountAggregateInputType | true
    _min?: SurveyAccessMinAggregateInputType
    _max?: SurveyAccessMaxAggregateInputType
  }


  export type SurveyAccessGroupByOutputType = {
    id: string
    surveyId: string
    ownerId: string
    role: SurveyUserAcessRoles
    createdAt: Date
    updatedAt: Date
    _count: SurveyAccessCountAggregateOutputType | null
    _min: SurveyAccessMinAggregateOutputType | null
    _max: SurveyAccessMaxAggregateOutputType | null
  }

  type GetSurveyAccessGroupByPayload<T extends SurveyAccessGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SurveyAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyAccessGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyAccessGroupByOutputType[P]>
        }
      >
    >


  export type SurveyAccessSelect = {
    id?: boolean
    surveyId?: boolean
    survey?: boolean | SurveyArgs
    ownerId?: boolean
    owner?: boolean | UserArgs
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SurveyAccessInclude = {
    survey?: boolean | SurveyArgs
    owner?: boolean | UserArgs
  }

  export type SurveyAccessGetPayload<
    S extends boolean | null | undefined | SurveyAccessArgs,
    U = keyof S
      > = S extends true
        ? SurveyAccess
    : S extends undefined
    ? never
    : S extends SurveyAccessArgs | SurveyAccessFindManyArgs
    ?'include' extends U
    ? SurveyAccess  & {
    [P in TrueKeys<S['include']>]:
        P extends 'survey' ? SurveyGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'owner' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'survey' ? SurveyGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'owner' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof SurveyAccess ? SurveyAccess[P] : never
  } 
    : SurveyAccess
  : SurveyAccess


  type SurveyAccessCountArgs = Merge<
    Omit<SurveyAccessFindManyArgs, 'select' | 'include'> & {
      select?: SurveyAccessCountAggregateInputType | true
    }
  >

  export interface SurveyAccessDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one SurveyAccess that matches the filter.
     * @param {SurveyAccessFindUniqueArgs} args - Arguments to find a SurveyAccess
     * @example
     * // Get one SurveyAccess
     * const surveyAccess = await prisma.surveyAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurveyAccessFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SurveyAccessFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SurveyAccess'> extends True ? CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>> : CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess | null >, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T> | null >>

    /**
     * Find the first SurveyAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAccessFindFirstArgs} args - Arguments to find a SurveyAccess
     * @example
     * // Get one SurveyAccess
     * const surveyAccess = await prisma.surveyAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurveyAccessFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SurveyAccessFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SurveyAccess'> extends True ? CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>> : CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess | null >, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T> | null >>

    /**
     * Find zero or more SurveyAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAccessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyAccesses
     * const surveyAccesses = await prisma.surveyAccess.findMany()
     * 
     * // Get first 10 SurveyAccesses
     * const surveyAccesses = await prisma.surveyAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyAccessWithIdOnly = await prisma.surveyAccess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SurveyAccessFindManyArgs>(
      args?: SelectSubset<T, SurveyAccessFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SurveyAccess>>, PrismaPromise<Array<SurveyAccessGetPayload<T>>>>

    /**
     * Create a SurveyAccess.
     * @param {SurveyAccessCreateArgs} args - Arguments to create a SurveyAccess.
     * @example
     * // Create one SurveyAccess
     * const SurveyAccess = await prisma.surveyAccess.create({
     *   data: {
     *     // ... data to create a SurveyAccess
     *   }
     * })
     * 
    **/
    create<T extends SurveyAccessCreateArgs>(
      args: SelectSubset<T, SurveyAccessCreateArgs>
    ): CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>>

    /**
     * Create many SurveyAccesses.
     *     @param {SurveyAccessCreateManyArgs} args - Arguments to create many SurveyAccesses.
     *     @example
     *     // Create many SurveyAccesses
     *     const surveyAccess = await prisma.surveyAccess.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SurveyAccessCreateManyArgs>(
      args?: SelectSubset<T, SurveyAccessCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SurveyAccess.
     * @param {SurveyAccessDeleteArgs} args - Arguments to delete one SurveyAccess.
     * @example
     * // Delete one SurveyAccess
     * const SurveyAccess = await prisma.surveyAccess.delete({
     *   where: {
     *     // ... filter to delete one SurveyAccess
     *   }
     * })
     * 
    **/
    delete<T extends SurveyAccessDeleteArgs>(
      args: SelectSubset<T, SurveyAccessDeleteArgs>
    ): CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>>

    /**
     * Update one SurveyAccess.
     * @param {SurveyAccessUpdateArgs} args - Arguments to update one SurveyAccess.
     * @example
     * // Update one SurveyAccess
     * const surveyAccess = await prisma.surveyAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurveyAccessUpdateArgs>(
      args: SelectSubset<T, SurveyAccessUpdateArgs>
    ): CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>>

    /**
     * Delete zero or more SurveyAccesses.
     * @param {SurveyAccessDeleteManyArgs} args - Arguments to filter SurveyAccesses to delete.
     * @example
     * // Delete a few SurveyAccesses
     * const { count } = await prisma.surveyAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurveyAccessDeleteManyArgs>(
      args?: SelectSubset<T, SurveyAccessDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyAccesses
     * const surveyAccess = await prisma.surveyAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurveyAccessUpdateManyArgs>(
      args: SelectSubset<T, SurveyAccessUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SurveyAccess.
     * @param {SurveyAccessUpsertArgs} args - Arguments to update or create a SurveyAccess.
     * @example
     * // Update or create a SurveyAccess
     * const surveyAccess = await prisma.surveyAccess.upsert({
     *   create: {
     *     // ... data to create a SurveyAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyAccess we want to update
     *   }
     * })
    **/
    upsert<T extends SurveyAccessUpsertArgs>(
      args: SelectSubset<T, SurveyAccessUpsertArgs>
    ): CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>>

    /**
     * Find one SurveyAccess that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SurveyAccessFindUniqueOrThrowArgs} args - Arguments to find a SurveyAccess
     * @example
     * // Get one SurveyAccess
     * const surveyAccess = await prisma.surveyAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurveyAccessFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SurveyAccessFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>>

    /**
     * Find the first SurveyAccess that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAccessFindFirstOrThrowArgs} args - Arguments to find a SurveyAccess
     * @example
     * // Get one SurveyAccess
     * const surveyAccess = await prisma.surveyAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurveyAccessFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SurveyAccessFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SurveyAccessClient<SurveyAccess>, Prisma__SurveyAccessClient<SurveyAccessGetPayload<T>>>

    /**
     * Count the number of SurveyAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAccessCountArgs} args - Arguments to filter SurveyAccesses to count.
     * @example
     * // Count the number of SurveyAccesses
     * const count = await prisma.surveyAccess.count({
     *   where: {
     *     // ... the filter for the SurveyAccesses we want to count
     *   }
     * })
    **/
    count<T extends SurveyAccessCountArgs>(
      args?: Subset<T, SurveyAccessCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAccessAggregateArgs>(args: Subset<T, SurveyAccessAggregateArgs>): PrismaPromise<GetSurveyAccessAggregateType<T>>

    /**
     * Group by SurveyAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyAccessGroupByArgs['orderBy'] }
        : { orderBy?: SurveyAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyAccessGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SurveyAccessClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    survey<T extends SurveyArgs = {}>(args?: Subset<T, SurveyArgs>): CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>;

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SurveyAccess base type for findUnique actions
   */
  export type SurveyAccessFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
    /**
     * Filter, which SurveyAccess to fetch.
     * 
    **/
    where: SurveyAccessWhereUniqueInput
  }

  /**
   * SurveyAccess: findUnique
   */
  export interface SurveyAccessFindUniqueArgs extends SurveyAccessFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SurveyAccess base type for findFirst actions
   */
  export type SurveyAccessFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
    /**
     * Filter, which SurveyAccess to fetch.
     * 
    **/
    where?: SurveyAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyAccesses to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyAccessOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyAccesses.
     * 
    **/
    cursor?: SurveyAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyAccesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyAccesses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyAccesses.
     * 
    **/
    distinct?: Enumerable<SurveyAccessScalarFieldEnum>
  }

  /**
   * SurveyAccess: findFirst
   */
  export interface SurveyAccessFindFirstArgs extends SurveyAccessFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SurveyAccess findMany
   */
  export type SurveyAccessFindManyArgs = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
    /**
     * Filter, which SurveyAccesses to fetch.
     * 
    **/
    where?: SurveyAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyAccesses to fetch.
     * 
    **/
    orderBy?: Enumerable<SurveyAccessOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyAccesses.
     * 
    **/
    cursor?: SurveyAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyAccesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyAccesses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SurveyAccessScalarFieldEnum>
  }


  /**
   * SurveyAccess create
   */
  export type SurveyAccessCreateArgs = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
    /**
     * The data needed to create a SurveyAccess.
     * 
    **/
    data: XOR<SurveyAccessCreateInput, SurveyAccessUncheckedCreateInput>
  }


  /**
   * SurveyAccess createMany
   */
  export type SurveyAccessCreateManyArgs = {
    /**
     * The data used to create many SurveyAccesses.
     * 
    **/
    data: Enumerable<SurveyAccessCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SurveyAccess update
   */
  export type SurveyAccessUpdateArgs = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
    /**
     * The data needed to update a SurveyAccess.
     * 
    **/
    data: XOR<SurveyAccessUpdateInput, SurveyAccessUncheckedUpdateInput>
    /**
     * Choose, which SurveyAccess to update.
     * 
    **/
    where: SurveyAccessWhereUniqueInput
  }


  /**
   * SurveyAccess updateMany
   */
  export type SurveyAccessUpdateManyArgs = {
    /**
     * The data used to update SurveyAccesses.
     * 
    **/
    data: XOR<SurveyAccessUpdateManyMutationInput, SurveyAccessUncheckedUpdateManyInput>
    /**
     * Filter which SurveyAccesses to update
     * 
    **/
    where?: SurveyAccessWhereInput
  }


  /**
   * SurveyAccess upsert
   */
  export type SurveyAccessUpsertArgs = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
    /**
     * The filter to search for the SurveyAccess to update in case it exists.
     * 
    **/
    where: SurveyAccessWhereUniqueInput
    /**
     * In case the SurveyAccess found by the `where` argument doesn't exist, create a new SurveyAccess with this data.
     * 
    **/
    create: XOR<SurveyAccessCreateInput, SurveyAccessUncheckedCreateInput>
    /**
     * In case the SurveyAccess was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SurveyAccessUpdateInput, SurveyAccessUncheckedUpdateInput>
  }


  /**
   * SurveyAccess delete
   */
  export type SurveyAccessDeleteArgs = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
    /**
     * Filter which SurveyAccess to delete.
     * 
    **/
    where: SurveyAccessWhereUniqueInput
  }


  /**
   * SurveyAccess deleteMany
   */
  export type SurveyAccessDeleteManyArgs = {
    /**
     * Filter which SurveyAccesses to delete
     * 
    **/
    where?: SurveyAccessWhereInput
  }


  /**
   * SurveyAccess: findUniqueOrThrow
   */
  export type SurveyAccessFindUniqueOrThrowArgs = SurveyAccessFindUniqueArgsBase
      

  /**
   * SurveyAccess: findFirstOrThrow
   */
  export type SurveyAccessFindFirstOrThrowArgs = SurveyAccessFindFirstArgsBase
      

  /**
   * SurveyAccess without action
   */
  export type SurveyAccessArgs = {
    /**
     * Select specific fields to fetch from the SurveyAccess
     * 
    **/
    select?: SurveyAccessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SurveyAccessInclude | null
  }



  /**
   * Model Question
   */


  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    title: string | null
    questionType: QuestionType | null
    surveyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    questionType: QuestionType | null
    surveyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    questionType: number
    surveyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    questionType?: true
    surveyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    questionType?: true
    surveyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    questionType?: true
    surveyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs = {
    /**
     * Filter which Question to aggregate.
     * 
    **/
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs = {
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithAggregationInput>
    by: Array<QuestionScalarFieldEnum>
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }


  export type QuestionGroupByOutputType = {
    id: string
    title: string
    questionType: QuestionType
    surveyId: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect = {
    id?: boolean
    title?: boolean
    questionType?: boolean
    surveyId?: boolean
    survey?: boolean | SurveyArgs
    answers?: boolean | AnswerFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionInclude = {
    survey?: boolean | SurveyArgs
    answers?: boolean | AnswerFindManyArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionGetPayload<
    S extends boolean | null | undefined | QuestionArgs,
    U = keyof S
      > = S extends true
        ? Question
    : S extends undefined
    ? never
    : S extends QuestionArgs | QuestionFindManyArgs
    ?'include' extends U
    ? Question  & {
    [P in TrueKeys<S['include']>]:
        P extends 'survey' ? SurveyGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'answers' ? Array < AnswerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'survey' ? SurveyGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'answers' ? Array < AnswerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Question ? Question[P] : never
  } 
    : Question
  : Question


  type QuestionCountArgs = Merge<
    Omit<QuestionFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCountAggregateInputType | true
    }
  >

  export interface QuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Question'> extends True ? CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>> : CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Question'> extends True ? CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>> : CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionFindManyArgs>(
      args?: SelectSubset<T, QuestionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Question>>, PrismaPromise<Array<QuestionGetPayload<T>>>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
    **/
    create<T extends QuestionCreateArgs>(
      args: SelectSubset<T, QuestionCreateArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Create many Questions.
     *     @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const question = await prisma.question.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCreateManyArgs>(
      args?: SelectSubset<T, QuestionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
    **/
    delete<T extends QuestionDeleteArgs>(
      args: SelectSubset<T, QuestionDeleteArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionUpdateArgs>(
      args: SelectSubset<T, QuestionUpdateArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionDeleteManyArgs>(
      args?: SelectSubset<T, QuestionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionUpdateManyArgs>(
      args: SelectSubset<T, QuestionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionUpsertArgs>(
      args: SelectSubset<T, QuestionUpsertArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Find one Question that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Find the first Question that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__QuestionClient<Question>, Prisma__QuestionClient<QuestionGetPayload<T>>>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    survey<T extends SurveyArgs = {}>(args?: Subset<T, SurveyArgs>): CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>;

    answers<T extends AnswerFindManyArgs = {}>(args?: Subset<T, AnswerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Answer>>, PrismaPromise<Array<AnswerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Question base type for findUnique actions
   */
  export type QuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     * 
    **/
    where: QuestionWhereUniqueInput
  }

  /**
   * Question: findUnique
   */
  export interface QuestionFindUniqueArgs extends QuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question base type for findFirst actions
   */
  export type QuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     * 
    **/
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     * 
    **/
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     * 
    **/
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }

  /**
   * Question: findFirst
   */
  export interface QuestionFindFirstArgs extends QuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     * 
    **/
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question create
   */
  export type QuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * The data needed to create a Question.
     * 
    **/
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }


  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs = {
    /**
     * The data used to create many Questions.
     * 
    **/
    data: Enumerable<QuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Question update
   */
  export type QuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * The data needed to update a Question.
     * 
    **/
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     * 
    **/
    where: QuestionWhereUniqueInput
  }


  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs = {
    /**
     * The data used to update Questions.
     * 
    **/
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     * 
    **/
    where?: QuestionWhereInput
  }


  /**
   * Question upsert
   */
  export type QuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * The filter to search for the Question to update in case it exists.
     * 
    **/
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     * 
    **/
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }


  /**
   * Question delete
   */
  export type QuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
    /**
     * Filter which Question to delete.
     * 
    **/
    where: QuestionWhereUniqueInput
  }


  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs = {
    /**
     * Filter which Questions to delete
     * 
    **/
    where?: QuestionWhereInput
  }


  /**
   * Question: findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs = QuestionFindUniqueArgsBase
      

  /**
   * Question: findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs = QuestionFindFirstArgsBase
      

  /**
   * Question without action
   */
  export type QuestionArgs = {
    /**
     * Select specific fields to fetch from the Question
     * 
    **/
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionInclude | null
  }



  /**
   * Model QuestionAnswer
   */


  export type AggregateQuestionAnswer = {
    _count: QuestionAnswerCountAggregateOutputType | null
    _avg: QuestionAnswerAvgAggregateOutputType | null
    _sum: QuestionAnswerSumAggregateOutputType | null
    _min: QuestionAnswerMinAggregateOutputType | null
    _max: QuestionAnswerMaxAggregateOutputType | null
  }

  export type QuestionAnswerAvgAggregateOutputType = {
    numericValue: number | null
  }

  export type QuestionAnswerSumAggregateOutputType = {
    numericValue: number | null
  }

  export type QuestionAnswerMinAggregateOutputType = {
    id: string | null
    numericValue: number | null
    textValue: string | null
    questionType: QuestionType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionAnswerMaxAggregateOutputType = {
    id: string | null
    numericValue: number | null
    textValue: string | null
    questionType: QuestionType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionAnswerCountAggregateOutputType = {
    id: number
    numericValue: number
    textValue: number
    questionType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAnswerAvgAggregateInputType = {
    numericValue?: true
  }

  export type QuestionAnswerSumAggregateInputType = {
    numericValue?: true
  }

  export type QuestionAnswerMinAggregateInputType = {
    id?: true
    numericValue?: true
    textValue?: true
    questionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionAnswerMaxAggregateInputType = {
    id?: true
    numericValue?: true
    textValue?: true
    questionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionAnswerCountAggregateInputType = {
    id?: true
    numericValue?: true
    textValue?: true
    questionType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAnswerAggregateArgs = {
    /**
     * Filter which QuestionAnswer to aggregate.
     * 
    **/
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionAnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionAnswers
    **/
    _count?: true | QuestionAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionAnswerMaxAggregateInputType
  }

  export type GetQuestionAnswerAggregateType<T extends QuestionAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionAnswer[P]>
      : GetScalarType<T[P], AggregateQuestionAnswer[P]>
  }




  export type QuestionAnswerGroupByArgs = {
    where?: QuestionAnswerWhereInput
    orderBy?: Enumerable<QuestionAnswerOrderByWithAggregationInput>
    by: Array<QuestionAnswerScalarFieldEnum>
    having?: QuestionAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionAnswerCountAggregateInputType | true
    _avg?: QuestionAnswerAvgAggregateInputType
    _sum?: QuestionAnswerSumAggregateInputType
    _min?: QuestionAnswerMinAggregateInputType
    _max?: QuestionAnswerMaxAggregateInputType
  }


  export type QuestionAnswerGroupByOutputType = {
    id: string
    numericValue: number
    textValue: string
    questionType: QuestionType
    createdAt: Date
    updatedAt: Date
    _count: QuestionAnswerCountAggregateOutputType | null
    _avg: QuestionAnswerAvgAggregateOutputType | null
    _sum: QuestionAnswerSumAggregateOutputType | null
    _min: QuestionAnswerMinAggregateOutputType | null
    _max: QuestionAnswerMaxAggregateOutputType | null
  }

  type GetQuestionAnswerGroupByPayload<T extends QuestionAnswerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<QuestionAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionAnswerGroupByOutputType[P]>
        }
      >
    >


  export type QuestionAnswerSelect = {
    id?: boolean
    numericValue?: boolean
    textValue?: boolean
    questionType?: boolean
    answers?: boolean | AnswerFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | QuestionAnswerCountOutputTypeArgs
  }

  export type QuestionAnswerInclude = {
    answers?: boolean | AnswerFindManyArgs
    _count?: boolean | QuestionAnswerCountOutputTypeArgs
  }

  export type QuestionAnswerGetPayload<
    S extends boolean | null | undefined | QuestionAnswerArgs,
    U = keyof S
      > = S extends true
        ? QuestionAnswer
    : S extends undefined
    ? never
    : S extends QuestionAnswerArgs | QuestionAnswerFindManyArgs
    ?'include' extends U
    ? QuestionAnswer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'answers' ? Array < AnswerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? QuestionAnswerCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'answers' ? Array < AnswerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? QuestionAnswerCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof QuestionAnswer ? QuestionAnswer[P] : never
  } 
    : QuestionAnswer
  : QuestionAnswer


  type QuestionAnswerCountArgs = Merge<
    Omit<QuestionAnswerFindManyArgs, 'select' | 'include'> & {
      select?: QuestionAnswerCountAggregateInputType | true
    }
  >

  export interface QuestionAnswerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one QuestionAnswer that matches the filter.
     * @param {QuestionAnswerFindUniqueArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionAnswerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionAnswerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QuestionAnswer'> extends True ? CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>> : CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer | null >, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T> | null >>

    /**
     * Find the first QuestionAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindFirstArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionAnswerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionAnswerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QuestionAnswer'> extends True ? CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>> : CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer | null >, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T> | null >>

    /**
     * Find zero or more QuestionAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionAnswers
     * const questionAnswers = await prisma.questionAnswer.findMany()
     * 
     * // Get first 10 QuestionAnswers
     * const questionAnswers = await prisma.questionAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionAnswerWithIdOnly = await prisma.questionAnswer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionAnswerFindManyArgs>(
      args?: SelectSubset<T, QuestionAnswerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<QuestionAnswer>>, PrismaPromise<Array<QuestionAnswerGetPayload<T>>>>

    /**
     * Create a QuestionAnswer.
     * @param {QuestionAnswerCreateArgs} args - Arguments to create a QuestionAnswer.
     * @example
     * // Create one QuestionAnswer
     * const QuestionAnswer = await prisma.questionAnswer.create({
     *   data: {
     *     // ... data to create a QuestionAnswer
     *   }
     * })
     * 
    **/
    create<T extends QuestionAnswerCreateArgs>(
      args: SelectSubset<T, QuestionAnswerCreateArgs>
    ): CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>>

    /**
     * Create many QuestionAnswers.
     *     @param {QuestionAnswerCreateManyArgs} args - Arguments to create many QuestionAnswers.
     *     @example
     *     // Create many QuestionAnswers
     *     const questionAnswer = await prisma.questionAnswer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionAnswerCreateManyArgs>(
      args?: SelectSubset<T, QuestionAnswerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionAnswer.
     * @param {QuestionAnswerDeleteArgs} args - Arguments to delete one QuestionAnswer.
     * @example
     * // Delete one QuestionAnswer
     * const QuestionAnswer = await prisma.questionAnswer.delete({
     *   where: {
     *     // ... filter to delete one QuestionAnswer
     *   }
     * })
     * 
    **/
    delete<T extends QuestionAnswerDeleteArgs>(
      args: SelectSubset<T, QuestionAnswerDeleteArgs>
    ): CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>>

    /**
     * Update one QuestionAnswer.
     * @param {QuestionAnswerUpdateArgs} args - Arguments to update one QuestionAnswer.
     * @example
     * // Update one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionAnswerUpdateArgs>(
      args: SelectSubset<T, QuestionAnswerUpdateArgs>
    ): CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>>

    /**
     * Delete zero or more QuestionAnswers.
     * @param {QuestionAnswerDeleteManyArgs} args - Arguments to filter QuestionAnswers to delete.
     * @example
     * // Delete a few QuestionAnswers
     * const { count } = await prisma.questionAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionAnswerDeleteManyArgs>(
      args?: SelectSubset<T, QuestionAnswerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionAnswers
     * const questionAnswer = await prisma.questionAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionAnswerUpdateManyArgs>(
      args: SelectSubset<T, QuestionAnswerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionAnswer.
     * @param {QuestionAnswerUpsertArgs} args - Arguments to update or create a QuestionAnswer.
     * @example
     * // Update or create a QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.upsert({
     *   create: {
     *     // ... data to create a QuestionAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionAnswer we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionAnswerUpsertArgs>(
      args: SelectSubset<T, QuestionAnswerUpsertArgs>
    ): CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>>

    /**
     * Find one QuestionAnswer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {QuestionAnswerFindUniqueOrThrowArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionAnswerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuestionAnswerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>>

    /**
     * Find the first QuestionAnswer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindFirstOrThrowArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionAnswerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionAnswerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer>, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T>>>

    /**
     * Count the number of QuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerCountArgs} args - Arguments to filter QuestionAnswers to count.
     * @example
     * // Count the number of QuestionAnswers
     * const count = await prisma.questionAnswer.count({
     *   where: {
     *     // ... the filter for the QuestionAnswers we want to count
     *   }
     * })
    **/
    count<T extends QuestionAnswerCountArgs>(
      args?: Subset<T, QuestionAnswerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAnswerAggregateArgs>(args: Subset<T, QuestionAnswerAggregateArgs>): PrismaPromise<GetQuestionAnswerAggregateType<T>>

    /**
     * Group by QuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionAnswerGroupByArgs['orderBy'] }
        : { orderBy?: QuestionAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionAnswerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionAnswerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    answers<T extends AnswerFindManyArgs = {}>(args?: Subset<T, AnswerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Answer>>, PrismaPromise<Array<AnswerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * QuestionAnswer base type for findUnique actions
   */
  export type QuestionAnswerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
    /**
     * Filter, which QuestionAnswer to fetch.
     * 
    **/
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer: findUnique
   */
  export interface QuestionAnswerFindUniqueArgs extends QuestionAnswerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuestionAnswer base type for findFirst actions
   */
  export type QuestionAnswerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
    /**
     * Filter, which QuestionAnswer to fetch.
     * 
    **/
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionAnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAnswers.
     * 
    **/
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAnswers.
     * 
    **/
    distinct?: Enumerable<QuestionAnswerScalarFieldEnum>
  }

  /**
   * QuestionAnswer: findFirst
   */
  export interface QuestionAnswerFindFirstArgs extends QuestionAnswerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuestionAnswer findMany
   */
  export type QuestionAnswerFindManyArgs = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
    /**
     * Filter, which QuestionAnswers to fetch.
     * 
    **/
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionAnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionAnswers.
     * 
    **/
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuestionAnswerScalarFieldEnum>
  }


  /**
   * QuestionAnswer create
   */
  export type QuestionAnswerCreateArgs = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
    /**
     * The data needed to create a QuestionAnswer.
     * 
    **/
    data: XOR<QuestionAnswerCreateInput, QuestionAnswerUncheckedCreateInput>
  }


  /**
   * QuestionAnswer createMany
   */
  export type QuestionAnswerCreateManyArgs = {
    /**
     * The data used to create many QuestionAnswers.
     * 
    **/
    data: Enumerable<QuestionAnswerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QuestionAnswer update
   */
  export type QuestionAnswerUpdateArgs = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
    /**
     * The data needed to update a QuestionAnswer.
     * 
    **/
    data: XOR<QuestionAnswerUpdateInput, QuestionAnswerUncheckedUpdateInput>
    /**
     * Choose, which QuestionAnswer to update.
     * 
    **/
    where: QuestionAnswerWhereUniqueInput
  }


  /**
   * QuestionAnswer updateMany
   */
  export type QuestionAnswerUpdateManyArgs = {
    /**
     * The data used to update QuestionAnswers.
     * 
    **/
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAnswers to update
     * 
    **/
    where?: QuestionAnswerWhereInput
  }


  /**
   * QuestionAnswer upsert
   */
  export type QuestionAnswerUpsertArgs = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
    /**
     * The filter to search for the QuestionAnswer to update in case it exists.
     * 
    **/
    where: QuestionAnswerWhereUniqueInput
    /**
     * In case the QuestionAnswer found by the `where` argument doesn't exist, create a new QuestionAnswer with this data.
     * 
    **/
    create: XOR<QuestionAnswerCreateInput, QuestionAnswerUncheckedCreateInput>
    /**
     * In case the QuestionAnswer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuestionAnswerUpdateInput, QuestionAnswerUncheckedUpdateInput>
  }


  /**
   * QuestionAnswer delete
   */
  export type QuestionAnswerDeleteArgs = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
    /**
     * Filter which QuestionAnswer to delete.
     * 
    **/
    where: QuestionAnswerWhereUniqueInput
  }


  /**
   * QuestionAnswer deleteMany
   */
  export type QuestionAnswerDeleteManyArgs = {
    /**
     * Filter which QuestionAnswers to delete
     * 
    **/
    where?: QuestionAnswerWhereInput
  }


  /**
   * QuestionAnswer: findUniqueOrThrow
   */
  export type QuestionAnswerFindUniqueOrThrowArgs = QuestionAnswerFindUniqueArgsBase
      

  /**
   * QuestionAnswer: findFirstOrThrow
   */
  export type QuestionAnswerFindFirstOrThrowArgs = QuestionAnswerFindFirstArgsBase
      

  /**
   * QuestionAnswer without action
   */
  export type QuestionAnswerArgs = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     * 
    **/
    select?: QuestionAnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QuestionAnswerInclude | null
  }



  /**
   * Model Answer
   */


  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    answerId: string | null
    freeTextAnswer: string | null
    surveyId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    answerId: string | null
    freeTextAnswer: string | null
    surveyId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    answerId: number
    freeTextAnswer: number
    surveyId: number
    questionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    answerId?: true
    freeTextAnswer?: true
    surveyId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    answerId?: true
    freeTextAnswer?: true
    surveyId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    answerId?: true
    freeTextAnswer?: true
    surveyId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs = {
    /**
     * Filter which Answer to aggregate.
     * 
    **/
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs = {
    where?: AnswerWhereInput
    orderBy?: Enumerable<AnswerOrderByWithAggregationInput>
    by: Array<AnswerScalarFieldEnum>
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }


  export type AnswerGroupByOutputType = {
    id: string
    answerId: string
    freeTextAnswer: string | null
    surveyId: string
    questionId: string
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect = {
    id?: boolean
    answerId?: boolean
    answer?: boolean | QuestionAnswerArgs
    freeTextAnswer?: boolean
    surveyId?: boolean
    survey?: boolean | SurveyArgs
    questionId?: boolean
    question?: boolean | QuestionArgs
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerInclude = {
    answer?: boolean | QuestionAnswerArgs
    survey?: boolean | SurveyArgs
    question?: boolean | QuestionArgs
  }

  export type AnswerGetPayload<
    S extends boolean | null | undefined | AnswerArgs,
    U = keyof S
      > = S extends true
        ? Answer
    : S extends undefined
    ? never
    : S extends AnswerArgs | AnswerFindManyArgs
    ?'include' extends U
    ? Answer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'answer' ? QuestionAnswerGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'survey' ? SurveyGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'question' ? QuestionGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'answer' ? QuestionAnswerGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'survey' ? SurveyGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'question' ? QuestionGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Answer ? Answer[P] : never
  } 
    : Answer
  : Answer


  type AnswerCountArgs = Merge<
    Omit<AnswerFindManyArgs, 'select' | 'include'> & {
      select?: AnswerCountAggregateInputType | true
    }
  >

  export interface AnswerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnswerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnswerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Answer'> extends True ? CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>> : CheckSelect<T, Prisma__AnswerClient<Answer | null >, Prisma__AnswerClient<AnswerGetPayload<T> | null >>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnswerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnswerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Answer'> extends True ? CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>> : CheckSelect<T, Prisma__AnswerClient<Answer | null >, Prisma__AnswerClient<AnswerGetPayload<T> | null >>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnswerFindManyArgs>(
      args?: SelectSubset<T, AnswerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Answer>>, PrismaPromise<Array<AnswerGetPayload<T>>>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
    **/
    create<T extends AnswerCreateArgs>(
      args: SelectSubset<T, AnswerCreateArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Create many Answers.
     *     @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     *     @example
     *     // Create many Answers
     *     const answer = await prisma.answer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnswerCreateManyArgs>(
      args?: SelectSubset<T, AnswerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
    **/
    delete<T extends AnswerDeleteArgs>(
      args: SelectSubset<T, AnswerDeleteArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnswerUpdateArgs>(
      args: SelectSubset<T, AnswerUpdateArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnswerDeleteManyArgs>(
      args?: SelectSubset<T, AnswerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnswerUpdateManyArgs>(
      args: SelectSubset<T, AnswerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
    **/
    upsert<T extends AnswerUpsertArgs>(
      args: SelectSubset<T, AnswerUpsertArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Find one Answer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AnswerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Find the first Answer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnswerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AnswerClient<Answer>, Prisma__AnswerClient<AnswerGetPayload<T>>>

    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnswerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    answer<T extends QuestionAnswerArgs = {}>(args?: Subset<T, QuestionAnswerArgs>): CheckSelect<T, Prisma__QuestionAnswerClient<QuestionAnswer | null >, Prisma__QuestionAnswerClient<QuestionAnswerGetPayload<T> | null >>;

    survey<T extends SurveyArgs = {}>(args?: Subset<T, SurveyArgs>): CheckSelect<T, Prisma__SurveyClient<Survey | null >, Prisma__SurveyClient<SurveyGetPayload<T> | null >>;

    question<T extends QuestionArgs = {}>(args?: Subset<T, QuestionArgs>): CheckSelect<T, Prisma__QuestionClient<Question | null >, Prisma__QuestionClient<QuestionGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Answer base type for findUnique actions
   */
  export type AnswerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Filter, which Answer to fetch.
     * 
    **/
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer: findUnique
   */
  export interface AnswerFindUniqueArgs extends AnswerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Answer base type for findFirst actions
   */
  export type AnswerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Filter, which Answer to fetch.
     * 
    **/
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     * 
    **/
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     * 
    **/
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }

  /**
   * Answer: findFirst
   */
  export interface AnswerFindFirstArgs extends AnswerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Filter, which Answers to fetch.
     * 
    **/
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     * 
    **/
    orderBy?: Enumerable<AnswerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     * 
    **/
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }


  /**
   * Answer create
   */
  export type AnswerCreateArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * The data needed to create a Answer.
     * 
    **/
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }


  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs = {
    /**
     * The data used to create many Answers.
     * 
    **/
    data: Enumerable<AnswerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Answer update
   */
  export type AnswerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * The data needed to update a Answer.
     * 
    **/
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     * 
    **/
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs = {
    /**
     * The data used to update Answers.
     * 
    **/
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     * 
    **/
    where?: AnswerWhereInput
  }


  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * The filter to search for the Answer to update in case it exists.
     * 
    **/
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     * 
    **/
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }


  /**
   * Answer delete
   */
  export type AnswerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
    /**
     * Filter which Answer to delete.
     * 
    **/
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs = {
    /**
     * Filter which Answers to delete
     * 
    **/
    where?: AnswerWhereInput
  }


  /**
   * Answer: findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs = AnswerFindUniqueArgsBase
      

  /**
   * Answer: findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs = AnswerFindFirstArgsBase
      

  /**
   * Answer without action
   */
  export type AnswerArgs = {
    /**
     * Select specific fields to fetch from the Answer
     * 
    **/
    select?: AnswerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnswerInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountOrderByRelevanceFieldEnum: {
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
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const AccountScalarFieldEnum: {
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
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AnswerOrderByRelevanceFieldEnum: {
    id: 'id',
    answerId: 'answerId',
    freeTextAnswer: 'freeTextAnswer',
    surveyId: 'surveyId',
    questionId: 'questionId'
  };

  export type AnswerOrderByRelevanceFieldEnum = (typeof AnswerOrderByRelevanceFieldEnum)[keyof typeof AnswerOrderByRelevanceFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    answerId: 'answerId',
    freeTextAnswer: 'freeTextAnswer',
    surveyId: 'surveyId',
    questionId: 'questionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const QuestionAnswerOrderByRelevanceFieldEnum: {
    id: 'id',
    textValue: 'textValue'
  };

  export type QuestionAnswerOrderByRelevanceFieldEnum = (typeof QuestionAnswerOrderByRelevanceFieldEnum)[keyof typeof QuestionAnswerOrderByRelevanceFieldEnum]


  export const QuestionAnswerScalarFieldEnum: {
    id: 'id',
    numericValue: 'numericValue',
    textValue: 'textValue',
    questionType: 'questionType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionAnswerScalarFieldEnum = (typeof QuestionAnswerScalarFieldEnum)[keyof typeof QuestionAnswerScalarFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    surveyId: 'surveyId'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    questionType: 'questionType',
    surveyId: 'surveyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SurveyAccessOrderByRelevanceFieldEnum: {
    id: 'id',
    surveyId: 'surveyId',
    ownerId: 'ownerId'
  };

  export type SurveyAccessOrderByRelevanceFieldEnum = (typeof SurveyAccessOrderByRelevanceFieldEnum)[keyof typeof SurveyAccessOrderByRelevanceFieldEnum]


  export const SurveyAccessScalarFieldEnum: {
    id: 'id',
    surveyId: 'surveyId',
    ownerId: 'ownerId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SurveyAccessScalarFieldEnum = (typeof SurveyAccessScalarFieldEnum)[keyof typeof SurveyAccessScalarFieldEnum]


  export const SurveyOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type SurveyOrderByRelevanceFieldEnum = (typeof SurveyOrderByRelevanceFieldEnum)[keyof typeof SurveyOrderByRelevanceFieldEnum]


  export const SurveyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishStatus: 'publishStatus'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    usersWithAccess?: SurveyAccessListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    usersWithAccess?: SurveyAccessOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type VerificationTokenOrderByWithRelationAndSearchRelevanceInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = {
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SurveyWhereInput = {
    AND?: Enumerable<SurveyWhereInput>
    OR?: Enumerable<SurveyWhereInput>
    NOT?: Enumerable<SurveyWhereInput>
    id?: StringFilter | string
    title?: StringNullableFilter | string | null
    questions?: QuestionListRelationFilter
    usersWithAccess?: SurveyAccessListRelationFilter
    answers?: AnswerListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    publishStatus?: EnumSurveyPublishStatusFilter | SurveyPublishStatus
  }

  export type SurveyOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    usersWithAccess?: SurveyAccessOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishStatus?: SortOrder
    _relevance?: SurveyOrderByRelevanceInput
  }

  export type SurveyWhereUniqueInput = {
    id?: string
  }

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishStatus?: SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SurveyScalarWhereWithAggregatesInput>
    OR?: Enumerable<SurveyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SurveyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    publishStatus?: EnumSurveyPublishStatusWithAggregatesFilter | SurveyPublishStatus
  }

  export type SurveyAccessWhereInput = {
    AND?: Enumerable<SurveyAccessWhereInput>
    OR?: Enumerable<SurveyAccessWhereInput>
    NOT?: Enumerable<SurveyAccessWhereInput>
    id?: StringFilter | string
    surveyId?: StringFilter | string
    survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
    ownerId?: StringFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    role?: EnumSurveyUserAcessRolesFilter | SurveyUserAcessRoles
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SurveyAccessOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    surveyId?: SortOrder
    survey?: SurveyOrderByWithRelationAndSearchRelevanceInput
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationAndSearchRelevanceInput
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SurveyAccessOrderByRelevanceInput
  }

  export type SurveyAccessWhereUniqueInput = {
    id?: string
  }

  export type SurveyAccessOrderByWithAggregationInput = {
    id?: SortOrder
    surveyId?: SortOrder
    ownerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SurveyAccessCountOrderByAggregateInput
    _max?: SurveyAccessMaxOrderByAggregateInput
    _min?: SurveyAccessMinOrderByAggregateInput
  }

  export type SurveyAccessScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SurveyAccessScalarWhereWithAggregatesInput>
    OR?: Enumerable<SurveyAccessScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SurveyAccessScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    surveyId?: StringWithAggregatesFilter | string
    ownerId?: StringWithAggregatesFilter | string
    role?: EnumSurveyUserAcessRolesWithAggregatesFilter | SurveyUserAcessRoles
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestionWhereInput = {
    AND?: Enumerable<QuestionWhereInput>
    OR?: Enumerable<QuestionWhereInput>
    NOT?: Enumerable<QuestionWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    questionType?: EnumQuestionTypeFilter | QuestionType
    surveyId?: StringFilter | string
    survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
    answers?: AnswerListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuestionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    questionType?: SortOrder
    surveyId?: SortOrder
    survey?: SurveyOrderByWithRelationAndSearchRelevanceInput
    answers?: AnswerOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = {
    id?: string
  }

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    questionType?: SortOrder
    surveyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    questionType?: EnumQuestionTypeWithAggregatesFilter | QuestionType
    surveyId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestionAnswerWhereInput = {
    AND?: Enumerable<QuestionAnswerWhereInput>
    OR?: Enumerable<QuestionAnswerWhereInput>
    NOT?: Enumerable<QuestionAnswerWhereInput>
    id?: StringFilter | string
    numericValue?: IntFilter | number
    textValue?: StringFilter | string
    questionType?: EnumQuestionTypeFilter | QuestionType
    answers?: AnswerListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuestionAnswerOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    numericValue?: SortOrder
    textValue?: SortOrder
    questionType?: SortOrder
    answers?: AnswerOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: QuestionAnswerOrderByRelevanceInput
  }

  export type QuestionAnswerWhereUniqueInput = {
    id?: string
  }

  export type QuestionAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    numericValue?: SortOrder
    textValue?: SortOrder
    questionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionAnswerCountOrderByAggregateInput
    _avg?: QuestionAnswerAvgOrderByAggregateInput
    _max?: QuestionAnswerMaxOrderByAggregateInput
    _min?: QuestionAnswerMinOrderByAggregateInput
    _sum?: QuestionAnswerSumOrderByAggregateInput
  }

  export type QuestionAnswerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionAnswerScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionAnswerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionAnswerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    numericValue?: IntWithAggregatesFilter | number
    textValue?: StringWithAggregatesFilter | string
    questionType?: EnumQuestionTypeWithAggregatesFilter | QuestionType
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AnswerWhereInput = {
    AND?: Enumerable<AnswerWhereInput>
    OR?: Enumerable<AnswerWhereInput>
    NOT?: Enumerable<AnswerWhereInput>
    id?: StringFilter | string
    answerId?: StringFilter | string
    answer?: XOR<QuestionAnswerRelationFilter, QuestionAnswerWhereInput>
    freeTextAnswer?: StringNullableFilter | string | null
    surveyId?: StringFilter | string
    survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
    questionId?: StringFilter | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AnswerOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    answerId?: SortOrder
    answer?: QuestionAnswerOrderByWithRelationAndSearchRelevanceInput
    freeTextAnswer?: SortOrder
    surveyId?: SortOrder
    survey?: SurveyOrderByWithRelationAndSearchRelevanceInput
    questionId?: SortOrder
    question?: QuestionOrderByWithRelationAndSearchRelevanceInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AnswerOrderByRelevanceInput
  }

  export type AnswerWhereUniqueInput = {
    id?: string
  }

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    answerId?: SortOrder
    freeTextAnswer?: SortOrder
    surveyId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    answerId?: StringWithAggregatesFilter | string
    freeTextAnswer?: StringNullableWithAggregatesFilter | string | null
    surveyId?: StringWithAggregatesFilter | string
    questionId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    usersWithAccess?: SurveyAccessCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    usersWithAccess?: SurveyAccessUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    usersWithAccess?: SurveyAccessUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    usersWithAccess?: SurveyAccessUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyCreateInput = {
    id?: string
    title?: string | null
    questions?: QuestionCreateNestedManyWithoutSurveyInput
    usersWithAccess?: SurveyAccessCreateNestedManyWithoutSurveyInput
    answers?: AnswerCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyUncheckedCreateInput = {
    id?: string
    title?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutSurveyInput
    usersWithAccess?: SurveyAccessUncheckedCreateNestedManyWithoutSurveyInput
    answers?: AnswerUncheckedCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutSurveyNestedInput
    usersWithAccess?: SurveyAccessUpdateManyWithoutSurveyNestedInput
    answers?: AnswerUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type SurveyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutSurveyNestedInput
    usersWithAccess?: SurveyAccessUncheckedUpdateManyWithoutSurveyNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type SurveyCreateManyInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type SurveyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type SurveyAccessCreateInput = {
    id?: string
    survey: SurveyCreateNestedOneWithoutUsersWithAccessInput
    owner: UserCreateNestedOneWithoutUsersWithAccessInput
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessUncheckedCreateInput = {
    id?: string
    surveyId: string
    ownerId: string
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    survey?: SurveyUpdateOneRequiredWithoutUsersWithAccessNestedInput
    owner?: UserUpdateOneRequiredWithoutUsersWithAccessNestedInput
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessCreateManyInput = {
    id?: string
    surveyId: string
    ownerId: string
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    title: string
    questionType: QuestionType
    survey: SurveyCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    title: string
    questionType: QuestionType
    surveyId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    survey?: SurveyUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    surveyId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    title: string
    questionType: QuestionType
    surveyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    surveyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAnswerCreateInput = {
    id?: string
    numericValue: number
    textValue: string
    questionType: QuestionType
    answers?: AnswerCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAnswerUncheckedCreateInput = {
    id?: string
    numericValue: number
    textValue: string
    questionType: QuestionType
    answers?: AnswerUncheckedCreateNestedManyWithoutAnswerInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numericValue?: IntFieldUpdateOperationsInput | number
    textValue?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    answers?: AnswerUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numericValue?: IntFieldUpdateOperationsInput | number
    textValue?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    answers?: AnswerUncheckedUpdateManyWithoutAnswerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAnswerCreateManyInput = {
    id?: string
    numericValue: number
    textValue: string
    questionType: QuestionType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numericValue?: IntFieldUpdateOperationsInput | number
    textValue?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numericValue?: IntFieldUpdateOperationsInput | number
    textValue?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    answer: QuestionAnswerCreateNestedOneWithoutAnswersInput
    freeTextAnswer?: string | null
    survey: SurveyCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    answerId: string
    freeTextAnswer?: string | null
    surveyId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: QuestionAnswerUpdateOneRequiredWithoutAnswersNestedInput
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    survey?: SurveyUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    surveyId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    answerId: string
    freeTextAnswer?: string | null
    surveyId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    surveyId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: Enumerable<AccountOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionOrderByRelevanceInput = {
    fields: Enumerable<SessionOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SurveyAccessListRelationFilter = {
    every?: SurveyAccessWhereInput
    some?: SurveyAccessWhereInput
    none?: SurveyAccessWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: Enumerable<VerificationTokenOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type EnumSurveyPublishStatusFilter = {
    equals?: SurveyPublishStatus
    in?: Enumerable<SurveyPublishStatus>
    notIn?: Enumerable<SurveyPublishStatus>
    not?: NestedEnumSurveyPublishStatusFilter | SurveyPublishStatus
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyOrderByRelevanceInput = {
    fields: Enumerable<SurveyOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishStatus?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishStatus?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishStatus?: SortOrder
  }

  export type EnumSurveyPublishStatusWithAggregatesFilter = {
    equals?: SurveyPublishStatus
    in?: Enumerable<SurveyPublishStatus>
    notIn?: Enumerable<SurveyPublishStatus>
    not?: NestedEnumSurveyPublishStatusWithAggregatesFilter | SurveyPublishStatus
    _count?: NestedIntFilter
    _min?: NestedEnumSurveyPublishStatusFilter
    _max?: NestedEnumSurveyPublishStatusFilter
  }

  export type SurveyRelationFilter = {
    is?: SurveyWhereInput
    isNot?: SurveyWhereInput
  }

  export type EnumSurveyUserAcessRolesFilter = {
    equals?: SurveyUserAcessRoles
    in?: Enumerable<SurveyUserAcessRoles>
    notIn?: Enumerable<SurveyUserAcessRoles>
    not?: NestedEnumSurveyUserAcessRolesFilter | SurveyUserAcessRoles
  }

  export type SurveyAccessOrderByRelevanceInput = {
    fields: Enumerable<SurveyAccessOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type SurveyAccessCountOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    ownerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurveyAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    ownerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurveyAccessMinOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    ownerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSurveyUserAcessRolesWithAggregatesFilter = {
    equals?: SurveyUserAcessRoles
    in?: Enumerable<SurveyUserAcessRoles>
    notIn?: Enumerable<SurveyUserAcessRoles>
    not?: NestedEnumSurveyUserAcessRolesWithAggregatesFilter | SurveyUserAcessRoles
    _count?: NestedIntFilter
    _min?: NestedEnumSurveyUserAcessRolesFilter
    _max?: NestedEnumSurveyUserAcessRolesFilter
  }

  export type EnumQuestionTypeFilter = {
    equals?: QuestionType
    in?: Enumerable<QuestionType>
    notIn?: Enumerable<QuestionType>
    not?: NestedEnumQuestionTypeFilter | QuestionType
  }

  export type QuestionOrderByRelevanceInput = {
    fields: Enumerable<QuestionOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    questionType?: SortOrder
    surveyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    questionType?: SortOrder
    surveyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    questionType?: SortOrder
    surveyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter = {
    equals?: QuestionType
    in?: Enumerable<QuestionType>
    notIn?: Enumerable<QuestionType>
    not?: NestedEnumQuestionTypeWithAggregatesFilter | QuestionType
    _count?: NestedIntFilter
    _min?: NestedEnumQuestionTypeFilter
    _max?: NestedEnumQuestionTypeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type QuestionAnswerOrderByRelevanceInput = {
    fields: Enumerable<QuestionAnswerOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type QuestionAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    numericValue?: SortOrder
    textValue?: SortOrder
    questionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAnswerAvgOrderByAggregateInput = {
    numericValue?: SortOrder
  }

  export type QuestionAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    numericValue?: SortOrder
    textValue?: SortOrder
    questionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    numericValue?: SortOrder
    textValue?: SortOrder
    questionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAnswerSumOrderByAggregateInput = {
    numericValue?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type QuestionAnswerRelationFilter = {
    is?: QuestionAnswerWhereInput
    isNot?: QuestionAnswerWhereInput
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerOrderByRelevanceInput = {
    fields: Enumerable<AnswerOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    freeTextAnswer?: SortOrder
    surveyId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    freeTextAnswer?: SortOrder
    surveyId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
    freeTextAnswer?: SortOrder
    surveyId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type SurveyAccessCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutOwnerInput>, Enumerable<SurveyAccessUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutOwnerInput>
    createMany?: SurveyAccessCreateManyOwnerInputEnvelope
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type SurveyAccessUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutOwnerInput>, Enumerable<SurveyAccessUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutOwnerInput>
    createMany?: SurveyAccessCreateManyOwnerInputEnvelope
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type SurveyAccessUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutOwnerInput>, Enumerable<SurveyAccessUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<SurveyAccessUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: SurveyAccessCreateManyOwnerInputEnvelope
    set?: Enumerable<SurveyAccessWhereUniqueInput>
    disconnect?: Enumerable<SurveyAccessWhereUniqueInput>
    delete?: Enumerable<SurveyAccessWhereUniqueInput>
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
    update?: Enumerable<SurveyAccessUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<SurveyAccessUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<SurveyAccessScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type SurveyAccessUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutOwnerInput>, Enumerable<SurveyAccessUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<SurveyAccessUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: SurveyAccessCreateManyOwnerInputEnvelope
    set?: Enumerable<SurveyAccessWhereUniqueInput>
    disconnect?: Enumerable<SurveyAccessWhereUniqueInput>
    delete?: Enumerable<SurveyAccessWhereUniqueInput>
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
    update?: Enumerable<SurveyAccessUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<SurveyAccessUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<SurveyAccessScalarWhereInput>
  }

  export type QuestionCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutSurveyInput>, Enumerable<QuestionUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutSurveyInput>
    createMany?: QuestionCreateManySurveyInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type SurveyAccessCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutSurveyInput>, Enumerable<SurveyAccessUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutSurveyInput>
    createMany?: SurveyAccessCreateManySurveyInputEnvelope
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
  }

  export type AnswerCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutSurveyInput>, Enumerable<AnswerUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutSurveyInput>
    createMany?: AnswerCreateManySurveyInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutSurveyInput>, Enumerable<QuestionUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutSurveyInput>
    createMany?: QuestionCreateManySurveyInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type SurveyAccessUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutSurveyInput>, Enumerable<SurveyAccessUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutSurveyInput>
    createMany?: SurveyAccessCreateManySurveyInputEnvelope
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
  }

  export type AnswerUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutSurveyInput>, Enumerable<AnswerUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutSurveyInput>
    createMany?: AnswerCreateManySurveyInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type QuestionUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutSurveyInput>, Enumerable<QuestionUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutSurveyInput>
    createMany?: QuestionCreateManySurveyInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type SurveyAccessUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutSurveyInput>, Enumerable<SurveyAccessUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<SurveyAccessUpsertWithWhereUniqueWithoutSurveyInput>
    createMany?: SurveyAccessCreateManySurveyInputEnvelope
    set?: Enumerable<SurveyAccessWhereUniqueInput>
    disconnect?: Enumerable<SurveyAccessWhereUniqueInput>
    delete?: Enumerable<SurveyAccessWhereUniqueInput>
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
    update?: Enumerable<SurveyAccessUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<SurveyAccessUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<SurveyAccessScalarWhereInput>
  }

  export type AnswerUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutSurveyInput>, Enumerable<AnswerUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutSurveyInput>
    createMany?: AnswerCreateManySurveyInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type EnumSurveyPublishStatusFieldUpdateOperationsInput = {
    set?: SurveyPublishStatus
  }

  export type QuestionUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutSurveyInput>, Enumerable<QuestionUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutSurveyInput>
    createMany?: QuestionCreateManySurveyInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type SurveyAccessUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<SurveyAccessCreateWithoutSurveyInput>, Enumerable<SurveyAccessUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<SurveyAccessCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<SurveyAccessUpsertWithWhereUniqueWithoutSurveyInput>
    createMany?: SurveyAccessCreateManySurveyInputEnvelope
    set?: Enumerable<SurveyAccessWhereUniqueInput>
    disconnect?: Enumerable<SurveyAccessWhereUniqueInput>
    delete?: Enumerable<SurveyAccessWhereUniqueInput>
    connect?: Enumerable<SurveyAccessWhereUniqueInput>
    update?: Enumerable<SurveyAccessUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<SurveyAccessUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<SurveyAccessScalarWhereInput>
  }

  export type AnswerUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutSurveyInput>, Enumerable<AnswerUncheckedCreateWithoutSurveyInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutSurveyInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutSurveyInput>
    createMany?: AnswerCreateManySurveyInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutSurveyInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutSurveyInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type SurveyCreateNestedOneWithoutUsersWithAccessInput = {
    create?: XOR<SurveyCreateWithoutUsersWithAccessInput, SurveyUncheckedCreateWithoutUsersWithAccessInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutUsersWithAccessInput
    connect?: SurveyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUsersWithAccessInput = {
    create?: XOR<UserCreateWithoutUsersWithAccessInput, UserUncheckedCreateWithoutUsersWithAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersWithAccessInput
    connect?: UserWhereUniqueInput
  }

  export type SurveyUpdateOneRequiredWithoutUsersWithAccessNestedInput = {
    create?: XOR<SurveyCreateWithoutUsersWithAccessInput, SurveyUncheckedCreateWithoutUsersWithAccessInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutUsersWithAccessInput
    upsert?: SurveyUpsertWithoutUsersWithAccessInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<SurveyUpdateWithoutUsersWithAccessInput, SurveyUncheckedUpdateWithoutUsersWithAccessInput>
  }

  export type UserUpdateOneRequiredWithoutUsersWithAccessNestedInput = {
    create?: XOR<UserCreateWithoutUsersWithAccessInput, UserUncheckedCreateWithoutUsersWithAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersWithAccessInput
    upsert?: UserUpsertWithoutUsersWithAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUsersWithAccessInput, UserUncheckedUpdateWithoutUsersWithAccessInput>
  }

  export type EnumSurveyUserAcessRolesFieldUpdateOperationsInput = {
    set?: SurveyUserAcessRoles
  }

  export type SurveyCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutQuestionsInput
    connect?: SurveyWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: QuestionType
  }

  export type SurveyUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutQuestionsInput
    upsert?: SurveyUpsertWithoutQuestionsInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<SurveyUpdateWithoutQuestionsInput, SurveyUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type AnswerCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutAnswerInput>, Enumerable<AnswerUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutAnswerInput>
    createMany?: AnswerCreateManyAnswerInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type AnswerUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutAnswerInput>, Enumerable<AnswerUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutAnswerInput>
    createMany?: AnswerCreateManyAnswerInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnswerUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutAnswerInput>, Enumerable<AnswerUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: AnswerCreateManyAnswerInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type AnswerUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutAnswerInput>, Enumerable<AnswerUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: AnswerCreateManyAnswerInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type QuestionAnswerCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionAnswerCreateWithoutAnswersInput, QuestionAnswerUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutAnswersInput
    connect?: QuestionAnswerWhereUniqueInput
  }

  export type SurveyCreateNestedOneWithoutAnswersInput = {
    create?: XOR<SurveyCreateWithoutAnswersInput, SurveyUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutAnswersInput
    connect?: SurveyWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionAnswerUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutAnswersInput, QuestionAnswerUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutAnswersInput
    upsert?: QuestionAnswerUpsertWithoutAnswersInput
    connect?: QuestionAnswerWhereUniqueInput
    update?: XOR<QuestionAnswerUpdateWithoutAnswersInput, QuestionAnswerUncheckedUpdateWithoutAnswersInput>
  }

  export type SurveyUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<SurveyCreateWithoutAnswersInput, SurveyUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutAnswersInput
    upsert?: SurveyUpsertWithoutAnswersInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<SurveyUpdateWithoutAnswersInput, SurveyUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumSurveyPublishStatusFilter = {
    equals?: SurveyPublishStatus
    in?: Enumerable<SurveyPublishStatus>
    notIn?: Enumerable<SurveyPublishStatus>
    not?: NestedEnumSurveyPublishStatusFilter | SurveyPublishStatus
  }

  export type NestedEnumSurveyPublishStatusWithAggregatesFilter = {
    equals?: SurveyPublishStatus
    in?: Enumerable<SurveyPublishStatus>
    notIn?: Enumerable<SurveyPublishStatus>
    not?: NestedEnumSurveyPublishStatusWithAggregatesFilter | SurveyPublishStatus
    _count?: NestedIntFilter
    _min?: NestedEnumSurveyPublishStatusFilter
    _max?: NestedEnumSurveyPublishStatusFilter
  }

  export type NestedEnumSurveyUserAcessRolesFilter = {
    equals?: SurveyUserAcessRoles
    in?: Enumerable<SurveyUserAcessRoles>
    notIn?: Enumerable<SurveyUserAcessRoles>
    not?: NestedEnumSurveyUserAcessRolesFilter | SurveyUserAcessRoles
  }

  export type NestedEnumSurveyUserAcessRolesWithAggregatesFilter = {
    equals?: SurveyUserAcessRoles
    in?: Enumerable<SurveyUserAcessRoles>
    notIn?: Enumerable<SurveyUserAcessRoles>
    not?: NestedEnumSurveyUserAcessRolesWithAggregatesFilter | SurveyUserAcessRoles
    _count?: NestedIntFilter
    _min?: NestedEnumSurveyUserAcessRolesFilter
    _max?: NestedEnumSurveyUserAcessRolesFilter
  }

  export type NestedEnumQuestionTypeFilter = {
    equals?: QuestionType
    in?: Enumerable<QuestionType>
    notIn?: Enumerable<QuestionType>
    not?: NestedEnumQuestionTypeFilter | QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter = {
    equals?: QuestionType
    in?: Enumerable<QuestionType>
    notIn?: Enumerable<QuestionType>
    not?: NestedEnumQuestionTypeWithAggregatesFilter | QuestionType
    _count?: NestedIntFilter
    _min?: NestedEnumQuestionTypeFilter
    _max?: NestedEnumQuestionTypeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    usersWithAccess?: SurveyAccessCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    usersWithAccess?: SurveyAccessUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    usersWithAccess?: SurveyAccessUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    usersWithAccess?: SurveyAccessUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    usersWithAccess?: SurveyAccessCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    usersWithAccess?: SurveyAccessUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    usersWithAccess?: SurveyAccessUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    usersWithAccess?: SurveyAccessUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SurveyAccessCreateWithoutOwnerInput = {
    id?: string
    survey: SurveyCreateNestedOneWithoutUsersWithAccessInput
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessUncheckedCreateWithoutOwnerInput = {
    id?: string
    surveyId: string
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessCreateOrConnectWithoutOwnerInput = {
    where: SurveyAccessWhereUniqueInput
    create: XOR<SurveyAccessCreateWithoutOwnerInput, SurveyAccessUncheckedCreateWithoutOwnerInput>
  }

  export type SurveyAccessCreateManyOwnerInputEnvelope = {
    data: Enumerable<SurveyAccessCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type SurveyAccessUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SurveyAccessWhereUniqueInput
    update: XOR<SurveyAccessUpdateWithoutOwnerInput, SurveyAccessUncheckedUpdateWithoutOwnerInput>
    create: XOR<SurveyAccessCreateWithoutOwnerInput, SurveyAccessUncheckedCreateWithoutOwnerInput>
  }

  export type SurveyAccessUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SurveyAccessWhereUniqueInput
    data: XOR<SurveyAccessUpdateWithoutOwnerInput, SurveyAccessUncheckedUpdateWithoutOwnerInput>
  }

  export type SurveyAccessUpdateManyWithWhereWithoutOwnerInput = {
    where: SurveyAccessScalarWhereInput
    data: XOR<SurveyAccessUpdateManyMutationInput, SurveyAccessUncheckedUpdateManyWithoutUsersWithAccessInput>
  }

  export type SurveyAccessScalarWhereInput = {
    AND?: Enumerable<SurveyAccessScalarWhereInput>
    OR?: Enumerable<SurveyAccessScalarWhereInput>
    NOT?: Enumerable<SurveyAccessScalarWhereInput>
    id?: StringFilter | string
    surveyId?: StringFilter | string
    ownerId?: StringFilter | string
    role?: EnumSurveyUserAcessRolesFilter | SurveyUserAcessRoles
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuestionCreateWithoutSurveyInput = {
    id?: string
    title: string
    questionType: QuestionType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutSurveyInput = {
    id?: string
    title: string
    questionType: QuestionType
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutSurveyInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutSurveyInput, QuestionUncheckedCreateWithoutSurveyInput>
  }

  export type QuestionCreateManySurveyInputEnvelope = {
    data: Enumerable<QuestionCreateManySurveyInput>
    skipDuplicates?: boolean
  }

  export type SurveyAccessCreateWithoutSurveyInput = {
    id?: string
    owner: UserCreateNestedOneWithoutUsersWithAccessInput
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessUncheckedCreateWithoutSurveyInput = {
    id?: string
    ownerId: string
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessCreateOrConnectWithoutSurveyInput = {
    where: SurveyAccessWhereUniqueInput
    create: XOR<SurveyAccessCreateWithoutSurveyInput, SurveyAccessUncheckedCreateWithoutSurveyInput>
  }

  export type SurveyAccessCreateManySurveyInputEnvelope = {
    data: Enumerable<SurveyAccessCreateManySurveyInput>
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutSurveyInput = {
    id?: string
    answer: QuestionAnswerCreateNestedOneWithoutAnswersInput
    freeTextAnswer?: string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUncheckedCreateWithoutSurveyInput = {
    id?: string
    answerId: string
    freeTextAnswer?: string | null
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutSurveyInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutSurveyInput, AnswerUncheckedCreateWithoutSurveyInput>
  }

  export type AnswerCreateManySurveyInputEnvelope = {
    data: Enumerable<AnswerCreateManySurveyInput>
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutSurveyInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutSurveyInput, QuestionUncheckedUpdateWithoutSurveyInput>
    create: XOR<QuestionCreateWithoutSurveyInput, QuestionUncheckedCreateWithoutSurveyInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutSurveyInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutSurveyInput, QuestionUncheckedUpdateWithoutSurveyInput>
  }

  export type QuestionUpdateManyWithWhereWithoutSurveyInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: Enumerable<QuestionScalarWhereInput>
    OR?: Enumerable<QuestionScalarWhereInput>
    NOT?: Enumerable<QuestionScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    questionType?: EnumQuestionTypeFilter | QuestionType
    surveyId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SurveyAccessUpsertWithWhereUniqueWithoutSurveyInput = {
    where: SurveyAccessWhereUniqueInput
    update: XOR<SurveyAccessUpdateWithoutSurveyInput, SurveyAccessUncheckedUpdateWithoutSurveyInput>
    create: XOR<SurveyAccessCreateWithoutSurveyInput, SurveyAccessUncheckedCreateWithoutSurveyInput>
  }

  export type SurveyAccessUpdateWithWhereUniqueWithoutSurveyInput = {
    where: SurveyAccessWhereUniqueInput
    data: XOR<SurveyAccessUpdateWithoutSurveyInput, SurveyAccessUncheckedUpdateWithoutSurveyInput>
  }

  export type SurveyAccessUpdateManyWithWhereWithoutSurveyInput = {
    where: SurveyAccessScalarWhereInput
    data: XOR<SurveyAccessUpdateManyMutationInput, SurveyAccessUncheckedUpdateManyWithoutUsersWithAccessInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutSurveyInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutSurveyInput, AnswerUncheckedUpdateWithoutSurveyInput>
    create: XOR<AnswerCreateWithoutSurveyInput, AnswerUncheckedCreateWithoutSurveyInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutSurveyInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutSurveyInput, AnswerUncheckedUpdateWithoutSurveyInput>
  }

  export type AnswerUpdateManyWithWhereWithoutSurveyInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAnswersInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: Enumerable<AnswerScalarWhereInput>
    OR?: Enumerable<AnswerScalarWhereInput>
    NOT?: Enumerable<AnswerScalarWhereInput>
    id?: StringFilter | string
    answerId?: StringFilter | string
    freeTextAnswer?: StringNullableFilter | string | null
    surveyId?: StringFilter | string
    questionId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SurveyCreateWithoutUsersWithAccessInput = {
    id?: string
    title?: string | null
    questions?: QuestionCreateNestedManyWithoutSurveyInput
    answers?: AnswerCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyUncheckedCreateWithoutUsersWithAccessInput = {
    id?: string
    title?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutSurveyInput
    answers?: AnswerUncheckedCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyCreateOrConnectWithoutUsersWithAccessInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutUsersWithAccessInput, SurveyUncheckedCreateWithoutUsersWithAccessInput>
  }

  export type UserCreateWithoutUsersWithAccessInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsersWithAccessInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsersWithAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsersWithAccessInput, UserUncheckedCreateWithoutUsersWithAccessInput>
  }

  export type SurveyUpsertWithoutUsersWithAccessInput = {
    update: XOR<SurveyUpdateWithoutUsersWithAccessInput, SurveyUncheckedUpdateWithoutUsersWithAccessInput>
    create: XOR<SurveyCreateWithoutUsersWithAccessInput, SurveyUncheckedCreateWithoutUsersWithAccessInput>
  }

  export type SurveyUpdateWithoutUsersWithAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutSurveyNestedInput
    answers?: AnswerUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type SurveyUncheckedUpdateWithoutUsersWithAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutSurveyNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type UserUpsertWithoutUsersWithAccessInput = {
    update: XOR<UserUpdateWithoutUsersWithAccessInput, UserUncheckedUpdateWithoutUsersWithAccessInput>
    create: XOR<UserCreateWithoutUsersWithAccessInput, UserUncheckedCreateWithoutUsersWithAccessInput>
  }

  export type UserUpdateWithoutUsersWithAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsersWithAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SurveyCreateWithoutQuestionsInput = {
    id?: string
    title?: string | null
    usersWithAccess?: SurveyAccessCreateNestedManyWithoutSurveyInput
    answers?: AnswerCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title?: string | null
    usersWithAccess?: SurveyAccessUncheckedCreateNestedManyWithoutSurveyInput
    answers?: AnswerUncheckedCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyCreateOrConnectWithoutQuestionsInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    answer: QuestionAnswerCreateNestedOneWithoutAnswersInput
    freeTextAnswer?: string | null
    survey: SurveyCreateNestedOneWithoutAnswersInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    answerId: string
    freeTextAnswer?: string | null
    surveyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: Enumerable<AnswerCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type SurveyUpsertWithoutQuestionsInput = {
    update: XOR<SurveyUpdateWithoutQuestionsInput, SurveyUncheckedUpdateWithoutQuestionsInput>
    create: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
  }

  export type SurveyUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    usersWithAccess?: SurveyAccessUpdateManyWithoutSurveyNestedInput
    answers?: AnswerUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type SurveyUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    usersWithAccess?: SurveyAccessUncheckedUpdateManyWithoutSurveyNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAnswersInput>
  }

  export type AnswerCreateWithoutAnswerInput = {
    id?: string
    freeTextAnswer?: string | null
    survey: SurveyCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUncheckedCreateWithoutAnswerInput = {
    id?: string
    freeTextAnswer?: string | null
    surveyId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutAnswerInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAnswerInput, AnswerUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerCreateManyAnswerInputEnvelope = {
    data: Enumerable<AnswerCreateManyAnswerInput>
    skipDuplicates?: boolean
  }

  export type AnswerUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAnswerInput, AnswerUncheckedUpdateWithoutAnswerInput>
    create: XOR<AnswerCreateWithoutAnswerInput, AnswerUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAnswerInput, AnswerUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAnswerInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAnswersInput>
  }

  export type QuestionAnswerCreateWithoutAnswersInput = {
    id?: string
    numericValue: number
    textValue: string
    questionType: QuestionType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAnswerUncheckedCreateWithoutAnswersInput = {
    id?: string
    numericValue: number
    textValue: string
    questionType: QuestionType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionAnswerCreateOrConnectWithoutAnswersInput = {
    where: QuestionAnswerWhereUniqueInput
    create: XOR<QuestionAnswerCreateWithoutAnswersInput, QuestionAnswerUncheckedCreateWithoutAnswersInput>
  }

  export type SurveyCreateWithoutAnswersInput = {
    id?: string
    title?: string | null
    questions?: QuestionCreateNestedManyWithoutSurveyInput
    usersWithAccess?: SurveyAccessCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyUncheckedCreateWithoutAnswersInput = {
    id?: string
    title?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutSurveyInput
    usersWithAccess?: SurveyAccessUncheckedCreateNestedManyWithoutSurveyInput
    createdAt?: Date | string
    updatedAt?: Date | string
    publishStatus?: SurveyPublishStatus
  }

  export type SurveyCreateOrConnectWithoutAnswersInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutAnswersInput, SurveyUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    title: string
    questionType: QuestionType
    survey: SurveyCreateNestedOneWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    title: string
    questionType: QuestionType
    surveyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionAnswerUpsertWithoutAnswersInput = {
    update: XOR<QuestionAnswerUpdateWithoutAnswersInput, QuestionAnswerUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionAnswerCreateWithoutAnswersInput, QuestionAnswerUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionAnswerUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    numericValue?: IntFieldUpdateOperationsInput | number
    textValue?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionAnswerUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    numericValue?: IntFieldUpdateOperationsInput | number
    textValue?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUpsertWithoutAnswersInput = {
    update: XOR<SurveyUpdateWithoutAnswersInput, SurveyUncheckedUpdateWithoutAnswersInput>
    create: XOR<SurveyCreateWithoutAnswersInput, SurveyUncheckedCreateWithoutAnswersInput>
  }

  export type SurveyUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutSurveyNestedInput
    usersWithAccess?: SurveyAccessUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type SurveyUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutSurveyNestedInput
    usersWithAccess?: SurveyAccessUncheckedUpdateManyWithoutSurveyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishStatus?: EnumSurveyPublishStatusFieldUpdateOperationsInput | SurveyPublishStatus
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    survey?: SurveyUpdateOneRequiredWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    surveyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SurveyAccessCreateManyOwnerInput = {
    id?: string
    surveyId: string
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    survey?: SurveyUpdateOneRequiredWithoutUsersWithAccessNestedInput
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyId?: StringFieldUpdateOperationsInput | string
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessUncheckedUpdateManyWithoutUsersWithAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyId?: StringFieldUpdateOperationsInput | string
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManySurveyInput = {
    id?: string
    title: string
    questionType: QuestionType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyAccessCreateManySurveyInput = {
    id?: string
    ownerId: string
    role?: SurveyUserAcessRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateManySurveyInput = {
    id?: string
    answerId: string
    freeTextAnswer?: string | null
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | QuestionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutUsersWithAccessNestedInput
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAccessUncheckedUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    role?: EnumSurveyUserAcessRolesFieldUpdateOperationsInput | SurveyUserAcessRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: QuestionAnswerUpdateOneRequiredWithoutAnswersNestedInput
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    answerId: string
    freeTextAnswer?: string | null
    surveyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: QuestionAnswerUpdateOneRequiredWithoutAnswersNestedInput
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    survey?: SurveyUpdateOneRequiredWithoutAnswersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    surveyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyAnswerInput = {
    id?: string
    freeTextAnswer?: string | null
    surveyId: string
    questionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    survey?: SurveyUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeTextAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    surveyId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}