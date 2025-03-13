/**
 * Client
 */

import * as runtime from './runtime/library.js'

import $Types = runtime.Types // general types
import $Extensions = runtime.Types.Extensions
import $Public = runtime.Types.Public
import $Result = runtime.Types.Result
import $Utils = runtime.Types.Utils

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 *
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Twitt
 *
 */
export type Twitt = $Result.DefaultSelection<Prisma.$TwittPayload>

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
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	U = 'log' extends keyof ClientOptions
		? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions['log']>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

	constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
	$on<V extends U>(
		eventType: V,
		callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
	): PrismaClient

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>

	/**
	 * Add a middleware
	 * @deprecated since 4.16.0. For new code, prefer client extensions instead.
	 * @see https://pris.ly/d/extensions
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
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>

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
	$executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>

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
	$queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

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
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

	$transaction<R>(
		fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number
			timeout?: number
			isolationLevel?: Prisma.TransactionIsolationLevel
		}
	): $Utils.JsPromise<R>

	$extends: $Extensions.ExtendsHook<
		'extends',
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs
			}
		>
	>

	/**
	 * `prisma.account`: Exposes CRUD operations for the **Account** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Accounts
	 * const accounts = await prisma.account.findMany()
	 * ```
	 */
	get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.session`: Exposes CRUD operations for the **Session** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Sessions
	 * const sessions = await prisma.session.findMany()
	 * ```
	 */
	get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.twitt`: Exposes CRUD operations for the **Twitt** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Twitts
	 * const twitts = await prisma.twitt.findMany()
	 * ```
	 */
	get twitt(): Prisma.TwittDelegate<ExtArgs, ClientOptions>
}

export namespace Prisma {
	export import DMMF = runtime.DMMF

	export type PrismaPromise<T> = $Public.PrismaPromise<T>

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
	export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
	export type Metrics = runtime.Metrics
	export type Metric<T> = runtime.Metric<T>
	export type MetricHistogram = runtime.MetricHistogram
	export type MetricHistogramBucket = runtime.MetricHistogramBucket

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs
	export import getExtensionContext = runtime.Extensions.getExtensionContext
	export import Args = $Public.Args
	export import Payload = $Public.Payload
	export import Result = $Public.Result
	export import Exact = $Public.Exact

	/**
	 * Prisma Client JS version: 6.5.0
	 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
	 */
	export interface PrismaVersion {
		client: string
	}

	export const prismaVersion: PrismaVersion

	/**
	 * Utility Types
	 */

	export import JsonObject = runtime.JsonObject
	export import JsonArray = runtime.JsonArray
	export import JsonValue = runtime.JsonValue
	export import InputJsonObject = runtime.InputJsonObject
	export import InputJsonArray = runtime.InputJsonArray
	export import InputJsonValue = runtime.InputJsonValue

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

	interface SelectAndInclude {
		select: any
		include: any
	}

	interface SelectAndOmit {
		select: any
		omit: any
	}

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
		ReturnType<T>
	>

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P]
	}

	export type Enumerable<T> = T | Array<T>

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
	}[keyof T]

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K
	}

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

	/**
	 * Subset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
	 */
	export type Subset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	}

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	} & (T extends SelectAndInclude
		? 'Please either choose `select` or `include`.'
		: T extends SelectAndOmit
			? 'Please either choose `select` or `omit`.'
			: {})

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	} & K

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
			? False
			: T extends Date
				? False
				: T extends Uint8Array
					? False
					: T extends bigint
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

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>
		0: EitherLoose<O, K>
	}[strict]

	type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
		? _Either<O, K, strict>
		: never

	export type Union = any

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
	} & {}

	/** Helper Types for "Merge" */
	export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
		k: infer I
	) => void
		? I
		: never

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
	} & {}

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>
			}
		>
	>

	type Key = string | number | symbol
	type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
	type AtStrict<O extends object, K extends Key> = O[K & keyof O]
	type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
	export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
		1: AtStrict<O, K>
		0: AtLoose<O, K>
	}[strict]

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
				[K in keyof A]: A[K]
			} & {}

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K]
	} & {}

	type _Record<K extends keyof any, T> = {
		[P in K]: T
	}

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
			: never
	>

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>
	/** End Helper Types for "Merge" */

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

	export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

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

	type Cast<A, B> = A extends B ? A : B

	export const type: unique symbol

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never
			}
		: never

	type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
		IsObject<T> extends True ? U : T

	type GetHavingFields<T> = {
		[K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
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
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
		T,
		MaybeTupleToUnion<K>
	>

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>

	export const ModelName: {
		Account: 'Account'
		User: 'User'
		Session: 'Session'
		Twitt: 'Twitt'
	}

	export type ModelName = (typeof ModelName)[keyof typeof ModelName]

	export interface Datasources {
		db?: Datasource
	}

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
		returns: Prisma.TypeMap<
			this['params']['extArgs'],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions
		}
		meta: {
			modelProps: 'account' | 'user' | 'session' | 'twitt'
			txIsolationLevel: Prisma.TransactionIsolationLevel
		}
		model: {
			Account: {
				payload: Prisma.$AccountPayload<ExtArgs>
				fields: Prisma.AccountFieldRefs
				operations: {
					findUnique: {
						args: Prisma.AccountFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					findFirst: {
						args: Prisma.AccountFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					findMany: {
						args: Prisma.AccountFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
					}
					create: {
						args: Prisma.AccountCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					createMany: {
						args: Prisma.AccountCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
					}
					delete: {
						args: Prisma.AccountDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					update: {
						args: Prisma.AccountUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					deleteMany: {
						args: Prisma.AccountDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.AccountUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
					}
					upsert: {
						args: Prisma.AccountUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$AccountPayload>
					}
					aggregate: {
						args: Prisma.AccountAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateAccount>
					}
					groupBy: {
						args: Prisma.AccountGroupByArgs<ExtArgs>
						result: $Utils.Optional<AccountGroupByOutputType>[]
					}
					count: {
						args: Prisma.AccountCountArgs<ExtArgs>
						result: $Utils.Optional<AccountCountAggregateOutputType> | number
					}
				}
			}
			User: {
				payload: Prisma.$UserPayload<ExtArgs>
				fields: Prisma.UserFieldRefs
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateUser>
					}
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>
						result: $Utils.Optional<UserGroupByOutputType>[]
					}
					count: {
						args: Prisma.UserCountArgs<ExtArgs>
						result: $Utils.Optional<UserCountAggregateOutputType> | number
					}
				}
			}
			Session: {
				payload: Prisma.$SessionPayload<ExtArgs>
				fields: Prisma.SessionFieldRefs
				operations: {
					findUnique: {
						args: Prisma.SessionFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>
					}
					findFirst: {
						args: Prisma.SessionFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>
					}
					findMany: {
						args: Prisma.SessionFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
					}
					create: {
						args: Prisma.SessionCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>
					}
					createMany: {
						args: Prisma.SessionCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
					}
					delete: {
						args: Prisma.SessionDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>
					}
					update: {
						args: Prisma.SessionUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>
					}
					deleteMany: {
						args: Prisma.SessionDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.SessionUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
					}
					upsert: {
						args: Prisma.SessionUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$SessionPayload>
					}
					aggregate: {
						args: Prisma.SessionAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateSession>
					}
					groupBy: {
						args: Prisma.SessionGroupByArgs<ExtArgs>
						result: $Utils.Optional<SessionGroupByOutputType>[]
					}
					count: {
						args: Prisma.SessionCountArgs<ExtArgs>
						result: $Utils.Optional<SessionCountAggregateOutputType> | number
					}
				}
			}
			Twitt: {
				payload: Prisma.$TwittPayload<ExtArgs>
				fields: Prisma.TwittFieldRefs
				operations: {
					findUnique: {
						args: Prisma.TwittFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.TwittFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>
					}
					findFirst: {
						args: Prisma.TwittFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.TwittFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>
					}
					findMany: {
						args: Prisma.TwittFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>[]
					}
					create: {
						args: Prisma.TwittCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>
					}
					createMany: {
						args: Prisma.TwittCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.TwittCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>[]
					}
					delete: {
						args: Prisma.TwittDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>
					}
					update: {
						args: Prisma.TwittUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>
					}
					deleteMany: {
						args: Prisma.TwittDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.TwittUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.TwittUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>[]
					}
					upsert: {
						args: Prisma.TwittUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$TwittPayload>
					}
					aggregate: {
						args: Prisma.TwittAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateTwitt>
					}
					groupBy: {
						args: Prisma.TwittGroupByArgs<ExtArgs>
						result: $Utils.Optional<TwittGroupByOutputType>[]
					}
					count: {
						args: Prisma.TwittCountArgs<ExtArgs>
						result: $Utils.Optional<TwittCountAggregateOutputType> | number
					}
				}
			}
		}
	} & {
		other: {
			payload: any
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
			}
		}
	}
	export const defineExtension: $Extensions.ExtendsHook<
		'define',
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>
	export type DefaultPrismaClient = PrismaClient
	export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string
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
		 *   { emit: 'stdout', level: 'query' },
		 *   { emit: 'stdout', level: 'info' },
		 *   { emit: 'stdout', level: 'warn' }
		 *   { emit: 'stdout', level: 'error' }
		 * ]
		 * ```
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[]
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number
			timeout?: number
			isolationLevel?: Prisma.TransactionIsolationLevel
		}
		/**
		 * Global configuration for omitting model fields by default.
		 *
		 * @example
		 * ```
		 * const prisma = new PrismaClient({
		 *   omit: {
		 *     user: {
		 *       password: true
		 *     }
		 *   }
		 * })
		 * ```
		 */
		omit?: Prisma.GlobalOmitConfig
	}
	export interface GlobalOmitConfig {
		account?: AccountOmit
		user?: UserOmit
		session?: SessionOmit
		twitt?: TwittOmit
	}

	/* Types for Logging */
	export type LogLevel = 'info' | 'query' | 'warn' | 'error'
	export interface LogDefinition {
		level: LogLevel
		emit: 'stdout' | 'event'
	}

	export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
		? T['emit'] extends 'event'
			? T['level']
			: never
		: never
	export type GetEvents<T extends any> =
		T extends Array<LogLevel | LogDefinition>
			? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
			: never

	export interface QueryEvent {
		timestamp: Date
		query: string
		params: string
		duration: number
		target: string
	}

	export interface LogEvent {
		timestamp: Date
		message: string
		target: string
	}
	/* End Types for Logging */

	export type PrismaAction =
		| 'findUnique'
		| 'findUniqueOrThrow'
		| 'findMany'
		| 'findFirst'
		| 'findFirstOrThrow'
		| 'create'
		| 'createMany'
		| 'createManyAndReturn'
		| 'update'
		| 'updateMany'
		| 'updateManyAndReturn'
		| 'upsert'
		| 'delete'
		| 'deleteMany'
		| 'executeRaw'
		| 'queryRaw'
		| 'aggregate'
		| 'count'
		| 'runCommandRaw'
		| 'findRaw'
		| 'groupBy'

	/**
	 * These options are being passed into the middleware as "params"
	 */
	export interface MiddlewareParams {
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
		next: (params: MiddlewareParams) => $Utils.JsPromise<T>
	) => $Utils.JsPromise<T>

	// tested in getLogLevel.test.ts
	export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

	export interface Datasource {
		url?: string
	}

	/**
	 * Count Types
	 */

	/**
	 * Count Type UserCountOutputType
	 */

	export interface UserCountOutputType {
		twitts: number
		sessions: number
	}

	export interface UserCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		twitts?: boolean | UserCountOutputTypeCountTwittsArgs
		sessions?: boolean | UserCountOutputTypeCountSessionsArgs
	}

	// Custom InputTypes
	/**
	 * UserCountOutputType without action
	 */
	export interface UserCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the UserCountOutputType
		 */
		select?: UserCountOutputTypeSelect<ExtArgs> | null
	}

	/**
	 * UserCountOutputType without action
	 */
	export interface UserCountOutputTypeCountTwittsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		where?: TwittWhereInput
	}

	/**
	 * UserCountOutputType without action
	 */
	export interface UserCountOutputTypeCountSessionsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		where?: SessionWhereInput
	}

	/**
	 * Models
	 */

	/**
	 * Model Account
	 */

	export interface AggregateAccount {
		_count: AccountCountAggregateOutputType | null
		_min: AccountMinAggregateOutputType | null
		_max: AccountMaxAggregateOutputType | null
	}

	export interface AccountMinAggregateOutputType {
		id: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface AccountMaxAggregateOutputType {
		id: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface AccountCountAggregateOutputType {
		id: number
		createdAt: number
		updatedAt: number
		_all: number
	}

	export interface AccountMinAggregateInputType {
		id?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface AccountMaxAggregateInputType {
		id?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface AccountCountAggregateInputType {
		id?: true
		createdAt?: true
		updatedAt?: true
		_all?: true
	}

	export interface AccountAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which Account to aggregate.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Accounts
		 */
		_count?: true | AccountCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 */
		_min?: AccountMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 */
		_max?: AccountMaxAggregateInputType
	}

	export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
		[P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateAccount[P]>
			: GetScalarType<T[P], AggregateAccount[P]>
	}

	export interface AccountGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		where?: AccountWhereInput
		orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
		by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
		having?: AccountScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: AccountCountAggregateInputType | true
		_min?: AccountMinAggregateInputType
		_max?: AccountMaxAggregateInputType
	}

	export interface AccountGroupByOutputType {
		id: string
		createdAt: Date
		updatedAt: Date
		_count: AccountCountAggregateOutputType | null
		_min: AccountMinAggregateOutputType | null
		_max: AccountMaxAggregateOutputType | null
	}

	type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<AccountGroupByOutputType, T['by']> & {
				[P in keyof T & keyof AccountGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], AccountGroupByOutputType[P]>
					: GetScalarType<T[P], AccountGroupByOutputType[P]>
			}
		>
	>

	export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetSelect<
			{
				id?: boolean
				createdAt?: boolean
				updatedAt?: boolean
			},
			ExtArgs['result']['account']
		>

	export type AccountSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['account']
	>

	export type AccountSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['account']
	>

	export interface AccountSelectScalar {
		id?: boolean
		createdAt?: boolean
		updatedAt?: boolean
	}

	export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<'id' | 'createdAt' | 'updatedAt', ExtArgs['result']['account']>

	export interface $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			name: 'Account'
			objects: {}
			scalars: $Extensions.GetPayloadResult<
				{
					id: string
					createdAt: Date
					updatedAt: Date
				},
				ExtArgs['result']['account']
			>
			composites: {}
		}

	type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> =
		$Result.GetResult<Prisma.$AccountPayload, S>

	type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
		AccountFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: AccountCountAggregateInputType | true
	}

	export interface AccountDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account']; meta: { name: 'Account' } }
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
		 */
		findUnique<T extends AccountFindUniqueArgs>(
			args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one Account that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
		 * @example
		 * // Get one Account
		 * const account = await prisma.account.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
			args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		findFirst<T extends AccountFindFirstArgs>(
			args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Account that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
		 */
		findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
			args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more Accounts that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
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
		 */
		findMany<T extends AccountFindManyArgs>(
			args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>

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
		 */
		create<T extends AccountCreateArgs>(
			args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many Accounts.
		 * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
		 * @example
		 * // Create many Accounts
		 * const account = await prisma.account.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends AccountCreateManyArgs>(
			args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Accounts and returns the data saved in the database.
		 * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
		 * @example
		 * // Create many Accounts
		 * const account = await prisma.account.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Accounts and only return the `id`
		 * const accountWithIdOnly = await prisma.account.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(
			args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>

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
		 */
		delete<T extends AccountDeleteArgs>(
			args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		update<T extends AccountUpdateArgs>(
			args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		deleteMany<T extends AccountDeleteManyArgs>(
			args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

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
		 */
		updateMany<T extends AccountUpdateManyArgs>(
			args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Accounts and returns the data updated in the database.
		 * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
		 * @example
		 * // Update many Accounts
		 * const account = await prisma.account.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Accounts and only return the `id`
		 * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(
			args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$AccountPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>

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
		 */
		upsert<T extends AccountUpsertArgs>(
			args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
		): Prisma__AccountClient<
			$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		count<T extends AccountCountArgs>(
			args?: Subset<T, AccountCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
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
		 */
		aggregate<T extends AccountAggregateArgs>(
			args: Subset<T, AccountAggregateArgs>
		): Prisma.PrismaPromise<GetAccountAggregateType<T>>

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
		 */
		groupBy<
			T extends AccountGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: AccountGroupByArgs['orderBy'] }
				: { orderBy?: AccountGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
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
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Account model
		 */
		readonly fields: AccountFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Account.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__AccountClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Account model
	 */
	interface AccountFieldRefs {
		readonly id: FieldRef<'Account', 'String'>
		readonly createdAt: FieldRef<'Account', 'DateTime'>
		readonly updatedAt: FieldRef<'Account', 'DateTime'>
	}

	// Custom InputTypes
	/**
	 * Account findUnique
	 */
	export interface AccountFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account findUniqueOrThrow
	 */
	export interface AccountFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account findFirst
	 */
	export interface AccountFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Accounts.
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Accounts.
		 */
		distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
	}

	/**
	 * Account findFirstOrThrow
	 */
	export interface AccountFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Filter, which Account to fetch.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Accounts.
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Accounts.
		 */
		distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
	}

	/**
	 * Account findMany
	 */
	export interface AccountFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Filter, which Accounts to fetch.
		 */
		where?: AccountWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Accounts to fetch.
		 */
		orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Accounts.
		 */
		cursor?: AccountWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Accounts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Accounts.
		 */
		skip?: number
		distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
	}

	/**
	 * Account create
	 */
	export interface AccountCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * The data needed to create a Account.
		 */
		data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
	}

	/**
	 * Account createMany
	 */
	export interface AccountCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to create many Accounts.
		 */
		data: AccountCreateManyInput | AccountCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Account createManyAndReturn
	 */
	export interface AccountCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * The data used to create many Accounts.
		 */
		data: AccountCreateManyInput | AccountCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Account update
	 */
	export interface AccountUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * The data needed to update a Account.
		 */
		data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
		/**
		 * Choose, which Account to update.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account updateMany
	 */
	export interface AccountUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to update Accounts.
		 */
		data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
		/**
		 * Filter which Accounts to update
		 */
		where?: AccountWhereInput
		/**
		 * Limit how many Accounts to update.
		 */
		limit?: number
	}

	/**
	 * Account updateManyAndReturn
	 */
	export interface AccountUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * The data used to update Accounts.
		 */
		data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
		/**
		 * Filter which Accounts to update
		 */
		where?: AccountWhereInput
		/**
		 * Limit how many Accounts to update.
		 */
		limit?: number
	}

	/**
	 * Account upsert
	 */
	export interface AccountUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * The filter to search for the Account to update in case it exists.
		 */
		where: AccountWhereUniqueInput
		/**
		 * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
		 */
		create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
		/**
		 * In case the Account was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
	}

	/**
	 * Account delete
	 */
	export interface AccountDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
		/**
		 * Filter which Account to delete.
		 */
		where: AccountWhereUniqueInput
	}

	/**
	 * Account deleteMany
	 */
	export interface AccountDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which Accounts to delete
		 */
		where?: AccountWhereInput
		/**
		 * Limit how many Accounts to delete.
		 */
		limit?: number
	}

	/**
	 * Account without action
	 */
	export interface AccountDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Account
		 */
		select?: AccountSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Account
		 */
		omit?: AccountOmit<ExtArgs> | null
	}

	/**
	 * Model User
	 */

	export interface AggregateUser {
		_count: UserCountAggregateOutputType | null
		_min: UserMinAggregateOutputType | null
		_max: UserMaxAggregateOutputType | null
	}

	export interface UserMinAggregateOutputType {
		id: string | null
		email: string | null
		username: string | null
		password: string | null
		displayName: string | null
		picture: string | null
		isVerified: boolean | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface UserMaxAggregateOutputType {
		id: string | null
		email: string | null
		username: string | null
		password: string | null
		displayName: string | null
		picture: string | null
		isVerified: boolean | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface UserCountAggregateOutputType {
		id: number
		email: number
		username: number
		password: number
		displayName: number
		picture: number
		isVerified: number
		createdAt: number
		updatedAt: number
		_all: number
	}

	export interface UserMinAggregateInputType {
		id?: true
		email?: true
		username?: true
		password?: true
		displayName?: true
		picture?: true
		isVerified?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface UserMaxAggregateInputType {
		id?: true
		email?: true
		username?: true
		password?: true
		displayName?: true
		picture?: true
		isVerified?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface UserCountAggregateInputType {
		id?: true
		email?: true
		username?: true
		password?: true
		displayName?: true
		picture?: true
		isVerified?: true
		createdAt?: true
		updatedAt?: true
		_all?: true
	}

	export interface UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 */
		_count?: true | UserCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 */
		_min?: UserMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 */
		_max?: UserMaxAggregateInputType
	}

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>
	}

	export interface UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			where?: UserWhereInput
			orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
			by: UserScalarFieldEnum[] | UserScalarFieldEnum
			having?: UserScalarWhereWithAggregatesInput
			take?: number
			skip?: number
			_count?: UserCountAggregateInputType | true
			_min?: UserMinAggregateInputType
			_max?: UserMaxAggregateInputType
		}

	export interface UserGroupByOutputType {
		id: string
		email: string | null
		username: string
		password: string
		displayName: string
		picture: string | null
		isVerified: boolean
		createdAt: Date
		updatedAt: Date
		_count: UserCountAggregateOutputType | null
		_min: UserMinAggregateOutputType | null
		_max: UserMaxAggregateOutputType | null
	}

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T['by']> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>
			}
		>
	>

	export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetSelect<
			{
				id?: boolean
				email?: boolean
				username?: boolean
				password?: boolean
				displayName?: boolean
				picture?: boolean
				isVerified?: boolean
				createdAt?: boolean
				updatedAt?: boolean
				twitts?: boolean | User$twittsArgs<ExtArgs>
				sessions?: boolean | User$sessionsArgs<ExtArgs>
				_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
			},
			ExtArgs['result']['user']
		>

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			username?: boolean
			password?: boolean
			displayName?: boolean
			picture?: boolean
			isVerified?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['user']
	>

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			username?: boolean
			password?: boolean
			displayName?: boolean
			picture?: boolean
			isVerified?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['user']
	>

	export interface UserSelectScalar {
		id?: boolean
		email?: boolean
		username?: boolean
		password?: boolean
		displayName?: boolean
		picture?: boolean
		isVerified?: boolean
		createdAt?: boolean
		updatedAt?: boolean
	}

	export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<
			| 'id'
			| 'email'
			| 'username'
			| 'password'
			| 'displayName'
			| 'picture'
			| 'isVerified'
			| 'createdAt'
			| 'updatedAt',
			ExtArgs['result']['user']
		>
	export interface UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		twitts?: boolean | User$twittsArgs<ExtArgs>
		sessions?: boolean | User$sessionsArgs<ExtArgs>
		_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
	}
	export interface UserIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {}
	export interface UserIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {}

	export interface $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		name: 'User'
		objects: {
			twitts: Prisma.$TwittPayload<ExtArgs>[]
			sessions: Prisma.$SessionPayload<ExtArgs>[]
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: string
				email: string | null
				username: string
				password: string
				displayName: string
				picture: string | null
				isVerified: boolean
				createdAt: Date
				updatedAt: Date
			},
			ExtArgs['result']['user']
		>
		composites: {}
	}

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
		Prisma.$UserPayload,
		S
	>

	type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
		UserFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: UserCountAggregateInputType | true
	}

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } }
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
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
		 */
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>

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
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
		>

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
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

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
		 */
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Users and returns the data updated in the database.
		 * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
		>

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
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
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
		 */
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>
		): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
		 */
		groupBy<
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs['orderBy'] }
				: { orderBy?: UserGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
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
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		twitts<T extends User$twittsArgs<ExtArgs> = {}>(
			args?: Subset<T, User$twittsArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
		>
		sessions<T extends User$sessionsArgs<ExtArgs> = {}>(
			args?: Subset<T, User$sessionsArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<'User', 'String'>
		readonly email: FieldRef<'User', 'String'>
		readonly username: FieldRef<'User', 'String'>
		readonly password: FieldRef<'User', 'String'>
		readonly displayName: FieldRef<'User', 'String'>
		readonly picture: FieldRef<'User', 'String'>
		readonly isVerified: FieldRef<'User', 'Boolean'>
		readonly createdAt: FieldRef<'User', 'DateTime'>
		readonly updatedAt: FieldRef<'User', 'DateTime'>
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export interface UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findUniqueOrThrow
	 */
	export interface UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findFirst
	 */
	export interface UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User findFirstOrThrow
	 */
	export interface UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User findMany
	 */
	export interface UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the User
			 */
			select?: UserSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the User
			 */
			omit?: UserOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: UserInclude<ExtArgs> | null
			/**
			 * Filter, which Users to fetch.
			 */
			where?: UserWhereInput
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
			 *
			 * Determine the order of Users to fetch.
			 */
			orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
			 *
			 * Sets the position for listing Users.
			 */
			cursor?: UserWhereUniqueInput
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
			 *
			 * Take `±n` Users from the position of the cursor.
			 */
			take?: number
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
			 *
			 * Skip the first `n` Users.
			 */
			skip?: number
			distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
		}

	/**
	 * User create
	 */
	export interface UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>
	}

	/**
	 * User createMany
	 */
	export interface UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * User createManyAndReturn
	 */
	export interface UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * User update
	 */
	export interface UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User updateMany
	 */
	export interface UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput
		/**
		 * Limit how many Users to update.
		 */
		limit?: number
	}

	/**
	 * User updateManyAndReturn
	 */
	export interface UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput
		/**
		 * Limit how many Users to update.
		 */
		limit?: number
	}

	/**
	 * User upsert
	 */
	export interface UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
	}

	/**
	 * User delete
	 */
	export interface UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User deleteMany
	 */
	export interface UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number
	}

	/**
	 * User.twitts
	 */
	export interface User$twittsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the Twitt
			 */
			select?: TwittSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the Twitt
			 */
			omit?: TwittOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: TwittInclude<ExtArgs> | null
			where?: TwittWhereInput
			orderBy?: TwittOrderByWithRelationInput | TwittOrderByWithRelationInput[]
			cursor?: TwittWhereUniqueInput
			take?: number
			skip?: number
			distinct?: TwittScalarFieldEnum | TwittScalarFieldEnum[]
		}

	/**
	 * User.sessions
	 */
	export interface User$sessionsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		where?: SessionWhereInput
		orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
		cursor?: SessionWhereUniqueInput
		take?: number
		skip?: number
		distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
	}

	/**
	 * User without action
	 */
	export interface UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the User
			 */
			select?: UserSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the User
			 */
			omit?: UserOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: UserInclude<ExtArgs> | null
		}

	/**
	 * Model Session
	 */

	export interface AggregateSession {
		_count: SessionCountAggregateOutputType | null
		_min: SessionMinAggregateOutputType | null
		_max: SessionMaxAggregateOutputType | null
	}

	export interface SessionMinAggregateOutputType {
		id: string | null
		token: string | null
		ipAddress: string | null
		userAgent: string | null
		expires: Date | null
		userId: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface SessionMaxAggregateOutputType {
		id: string | null
		token: string | null
		ipAddress: string | null
		userAgent: string | null
		expires: Date | null
		userId: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface SessionCountAggregateOutputType {
		id: number
		token: number
		ipAddress: number
		userAgent: number
		expires: number
		userId: number
		createdAt: number
		updatedAt: number
		_all: number
	}

	export interface SessionMinAggregateInputType {
		id?: true
		token?: true
		ipAddress?: true
		userAgent?: true
		expires?: true
		userId?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface SessionMaxAggregateInputType {
		id?: true
		token?: true
		ipAddress?: true
		userAgent?: true
		expires?: true
		userId?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface SessionCountAggregateInputType {
		id?: true
		token?: true
		ipAddress?: true
		userAgent?: true
		expires?: true
		userId?: true
		createdAt?: true
		updatedAt?: true
		_all?: true
	}

	export interface SessionAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which Session to aggregate.
		 */
		where?: SessionWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sessions to fetch.
		 */
		orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: SessionWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sessions from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sessions.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Sessions
		 */
		_count?: true | SessionCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 */
		_min?: SessionMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 */
		_max?: SessionMaxAggregateInputType
	}

	export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
		[P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateSession[P]>
			: GetScalarType<T[P], AggregateSession[P]>
	}

	export interface SessionGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		where?: SessionWhereInput
		orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
		by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
		having?: SessionScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: SessionCountAggregateInputType | true
		_min?: SessionMinAggregateInputType
		_max?: SessionMaxAggregateInputType
	}

	export interface SessionGroupByOutputType {
		id: string
		token: string
		ipAddress: string | null
		userAgent: string | null
		expires: Date
		userId: string
		createdAt: Date
		updatedAt: Date
		_count: SessionCountAggregateOutputType | null
		_min: SessionMinAggregateOutputType | null
		_max: SessionMaxAggregateOutputType | null
	}

	type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<SessionGroupByOutputType, T['by']> & {
				[P in keyof T & keyof SessionGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], SessionGroupByOutputType[P]>
					: GetScalarType<T[P], SessionGroupByOutputType[P]>
			}
		>
	>

	export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetSelect<
			{
				id?: boolean
				token?: boolean
				ipAddress?: boolean
				userAgent?: boolean
				expires?: boolean
				userId?: boolean
				createdAt?: boolean
				updatedAt?: boolean
				user?: boolean | UserDefaultArgs<ExtArgs>
			},
			ExtArgs['result']['session']
		>

	export type SessionSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			token?: boolean
			ipAddress?: boolean
			userAgent?: boolean
			expires?: boolean
			userId?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['session']
	>

	export type SessionSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			token?: boolean
			ipAddress?: boolean
			userAgent?: boolean
			expires?: boolean
			userId?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['session']
	>

	export interface SessionSelectScalar {
		id?: boolean
		token?: boolean
		ipAddress?: boolean
		userAgent?: boolean
		expires?: boolean
		userId?: boolean
		createdAt?: boolean
		updatedAt?: boolean
	}

	export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<
			'id' | 'token' | 'ipAddress' | 'userAgent' | 'expires' | 'userId' | 'createdAt' | 'updatedAt',
			ExtArgs['result']['session']
		>
	export interface SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export interface SessionIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export interface SessionIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}

	export interface $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			name: 'Session'
			objects: {
				user: Prisma.$UserPayload<ExtArgs>
			}
			scalars: $Extensions.GetPayloadResult<
				{
					id: string
					token: string
					ipAddress: string | null
					userAgent: string | null
					expires: Date
					userId: string
					createdAt: Date
					updatedAt: Date
				},
				ExtArgs['result']['session']
			>
			composites: {}
		}

	type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> =
		$Result.GetResult<Prisma.$SessionPayload, S>

	type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
		SessionFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: SessionCountAggregateInputType | true
	}

	export interface SessionDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session']; meta: { name: 'Session' } }
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
		 */
		findUnique<T extends SessionFindUniqueArgs>(
			args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one Session that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
		 * @example
		 * // Get one Session
		 * const session = await prisma.session.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
			args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		findFirst<T extends SessionFindFirstArgs>(
			args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Session that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
		 */
		findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
			args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more Sessions that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
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
		 */
		findMany<T extends SessionFindManyArgs>(
			args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>

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
		 */
		create<T extends SessionCreateArgs>(
			args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many Sessions.
		 * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
		 * @example
		 * // Create many Sessions
		 * const session = await prisma.session.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends SessionCreateManyArgs>(
			args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Sessions and returns the data saved in the database.
		 * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
		 * @example
		 * // Create many Sessions
		 * const session = await prisma.session.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Sessions and only return the `id`
		 * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(
			args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SessionPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>

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
		 */
		delete<T extends SessionDeleteArgs>(
			args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		update<T extends SessionUpdateArgs>(
			args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		deleteMany<T extends SessionDeleteManyArgs>(
			args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

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
		 */
		updateMany<T extends SessionUpdateManyArgs>(
			args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Sessions and returns the data updated in the database.
		 * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
		 * @example
		 * // Update many Sessions
		 * const session = await prisma.session.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Sessions and only return the `id`
		 * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(
			args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$SessionPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>

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
		 */
		upsert<T extends SessionUpsertArgs>(
			args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
		): Prisma__SessionClient<
			$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		 */
		count<T extends SessionCountArgs>(
			args?: Subset<T, SessionCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
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
		 */
		aggregate<T extends SessionAggregateArgs>(
			args: Subset<T, SessionAggregateArgs>
		): Prisma.PrismaPromise<GetSessionAggregateType<T>>

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
		 */
		groupBy<
			T extends SessionGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: SessionGroupByArgs['orderBy'] }
				: { orderBy?: SessionGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
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
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Session model
		 */
		readonly fields: SessionFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Session.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__SessionClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>
		): Prisma__UserClient<
			| $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Session model
	 */
	interface SessionFieldRefs {
		readonly id: FieldRef<'Session', 'String'>
		readonly token: FieldRef<'Session', 'String'>
		readonly ipAddress: FieldRef<'Session', 'String'>
		readonly userAgent: FieldRef<'Session', 'String'>
		readonly expires: FieldRef<'Session', 'DateTime'>
		readonly userId: FieldRef<'Session', 'String'>
		readonly createdAt: FieldRef<'Session', 'DateTime'>
		readonly updatedAt: FieldRef<'Session', 'DateTime'>
	}

	// Custom InputTypes
	/**
	 * Session findUnique
	 */
	export interface SessionFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * Filter, which Session to fetch.
		 */
		where: SessionWhereUniqueInput
	}

	/**
	 * Session findUniqueOrThrow
	 */
	export interface SessionFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * Filter, which Session to fetch.
		 */
		where: SessionWhereUniqueInput
	}

	/**
	 * Session findFirst
	 */
	export interface SessionFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * Filter, which Session to fetch.
		 */
		where?: SessionWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sessions to fetch.
		 */
		orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Sessions.
		 */
		cursor?: SessionWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sessions from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sessions.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Sessions.
		 */
		distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
	}

	/**
	 * Session findFirstOrThrow
	 */
	export interface SessionFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * Filter, which Session to fetch.
		 */
		where?: SessionWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sessions to fetch.
		 */
		orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Sessions.
		 */
		cursor?: SessionWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sessions from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sessions.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Sessions.
		 */
		distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
	}

	/**
	 * Session findMany
	 */
	export interface SessionFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * Filter, which Sessions to fetch.
		 */
		where?: SessionWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Sessions to fetch.
		 */
		orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Sessions.
		 */
		cursor?: SessionWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Sessions from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Sessions.
		 */
		skip?: number
		distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
	}

	/**
	 * Session create
	 */
	export interface SessionCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * The data needed to create a Session.
		 */
		data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
	}

	/**
	 * Session createMany
	 */
	export interface SessionCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to create many Sessions.
		 */
		data: SessionCreateManyInput | SessionCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Session createManyAndReturn
	 */
	export interface SessionCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * The data used to create many Sessions.
		 */
		data: SessionCreateManyInput | SessionCreateManyInput[]
		skipDuplicates?: boolean
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Session update
	 */
	export interface SessionUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * The data needed to update a Session.
		 */
		data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
		/**
		 * Choose, which Session to update.
		 */
		where: SessionWhereUniqueInput
	}

	/**
	 * Session updateMany
	 */
	export interface SessionUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to update Sessions.
		 */
		data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
		/**
		 * Filter which Sessions to update
		 */
		where?: SessionWhereInput
		/**
		 * Limit how many Sessions to update.
		 */
		limit?: number
	}

	/**
	 * Session updateManyAndReturn
	 */
	export interface SessionUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * The data used to update Sessions.
		 */
		data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
		/**
		 * Filter which Sessions to update
		 */
		where?: SessionWhereInput
		/**
		 * Limit how many Sessions to update.
		 */
		limit?: number
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Session upsert
	 */
	export interface SessionUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * The filter to search for the Session to update in case it exists.
		 */
		where: SessionWhereUniqueInput
		/**
		 * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
		 */
		create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
		/**
		 * In case the Session was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
	}

	/**
	 * Session delete
	 */
	export interface SessionDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
		/**
		 * Filter which Session to delete.
		 */
		where: SessionWhereUniqueInput
	}

	/**
	 * Session deleteMany
	 */
	export interface SessionDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which Sessions to delete
		 */
		where?: SessionWhereInput
		/**
		 * Limit how many Sessions to delete.
		 */
		limit?: number
	}

	/**
	 * Session without action
	 */
	export interface SessionDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Session
		 */
		select?: SessionSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Session
		 */
		omit?: SessionOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: SessionInclude<ExtArgs> | null
	}

	/**
	 * Model Twitt
	 */

	export interface AggregateTwitt {
		_count: TwittCountAggregateOutputType | null
		_min: TwittMinAggregateOutputType | null
		_max: TwittMaxAggregateOutputType | null
	}

	export interface TwittMinAggregateOutputType {
		id: string | null
		title: string | null
		content: string | null
		image: string | null
		userId: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface TwittMaxAggregateOutputType {
		id: string | null
		title: string | null
		content: string | null
		image: string | null
		userId: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export interface TwittCountAggregateOutputType {
		id: number
		title: number
		content: number
		image: number
		userId: number
		createdAt: number
		updatedAt: number
		_all: number
	}

	export interface TwittMinAggregateInputType {
		id?: true
		title?: true
		content?: true
		image?: true
		userId?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface TwittMaxAggregateInputType {
		id?: true
		title?: true
		content?: true
		image?: true
		userId?: true
		createdAt?: true
		updatedAt?: true
	}

	export interface TwittCountAggregateInputType {
		id?: true
		title?: true
		content?: true
		image?: true
		userId?: true
		createdAt?: true
		updatedAt?: true
		_all?: true
	}

	export interface TwittAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which Twitt to aggregate.
		 */
		where?: TwittWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Twitts to fetch.
		 */
		orderBy?: TwittOrderByWithRelationInput | TwittOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: TwittWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Twitts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Twitts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Twitts
		 */
		_count?: true | TwittCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 */
		_min?: TwittMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 */
		_max?: TwittMaxAggregateInputType
	}

	export type GetTwittAggregateType<T extends TwittAggregateArgs> = {
		[P in keyof T & keyof AggregateTwitt]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateTwitt[P]>
			: GetScalarType<T[P], AggregateTwitt[P]>
	}

	export interface TwittGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			where?: TwittWhereInput
			orderBy?: TwittOrderByWithAggregationInput | TwittOrderByWithAggregationInput[]
			by: TwittScalarFieldEnum[] | TwittScalarFieldEnum
			having?: TwittScalarWhereWithAggregatesInput
			take?: number
			skip?: number
			_count?: TwittCountAggregateInputType | true
			_min?: TwittMinAggregateInputType
			_max?: TwittMaxAggregateInputType
		}

	export interface TwittGroupByOutputType {
		id: string
		title: string
		content: string
		image: string | null
		userId: string
		createdAt: Date
		updatedAt: Date
		_count: TwittCountAggregateOutputType | null
		_min: TwittMinAggregateOutputType | null
		_max: TwittMaxAggregateOutputType | null
	}

	type GetTwittGroupByPayload<T extends TwittGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<TwittGroupByOutputType, T['by']> & {
				[P in keyof T & keyof TwittGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], TwittGroupByOutputType[P]>
					: GetScalarType<T[P], TwittGroupByOutputType[P]>
			}
		>
	>

	export type TwittSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetSelect<
			{
				id?: boolean
				title?: boolean
				content?: boolean
				image?: boolean
				userId?: boolean
				createdAt?: boolean
				updatedAt?: boolean
				user?: boolean | UserDefaultArgs<ExtArgs>
			},
			ExtArgs['result']['twitt']
		>

	export type TwittSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			title?: boolean
			content?: boolean
			image?: boolean
			userId?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['twitt']
	>

	export type TwittSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			title?: boolean
			content?: boolean
			image?: boolean
			userId?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			user?: boolean | UserDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['twitt']
	>

	export interface TwittSelectScalar {
		id?: boolean
		title?: boolean
		content?: boolean
		image?: boolean
		userId?: boolean
		createdAt?: boolean
		updatedAt?: boolean
	}

	export type TwittOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<
			'id' | 'title' | 'content' | 'image' | 'userId' | 'createdAt' | 'updatedAt',
			ExtArgs['result']['twitt']
		>
	export interface TwittInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export interface TwittIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}
	export interface TwittIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		user?: boolean | UserDefaultArgs<ExtArgs>
	}

	export interface $TwittPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
		name: 'Twitt'
		objects: {
			user: Prisma.$UserPayload<ExtArgs>
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: string
				title: string
				content: string
				image: string | null
				userId: string
				createdAt: Date
				updatedAt: Date
			},
			ExtArgs['result']['twitt']
		>
		composites: {}
	}

	type TwittGetPayload<S extends boolean | null | undefined | TwittDefaultArgs> = $Result.GetResult<
		Prisma.$TwittPayload,
		S
	>

	type TwittCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
		TwittFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: TwittCountAggregateInputType | true
	}

	export interface TwittDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Twitt']; meta: { name: 'Twitt' } }
		/**
		 * Find zero or one Twitt that matches the filter.
		 * @param {TwittFindUniqueArgs} args - Arguments to find a Twitt
		 * @example
		 * // Get one Twitt
		 * const twitt = await prisma.twitt.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends TwittFindUniqueArgs>(
			args: SelectSubset<T, TwittFindUniqueArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one Twitt that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {TwittFindUniqueOrThrowArgs} args - Arguments to find a Twitt
		 * @example
		 * // Get one Twitt
		 * const twitt = await prisma.twitt.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends TwittFindUniqueOrThrowArgs>(
			args: SelectSubset<T, TwittFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Twitt that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TwittFindFirstArgs} args - Arguments to find a Twitt
		 * @example
		 * // Get one Twitt
		 * const twitt = await prisma.twitt.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends TwittFindFirstArgs>(
			args?: SelectSubset<T, TwittFindFirstArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first Twitt that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TwittFindFirstOrThrowArgs} args - Arguments to find a Twitt
		 * @example
		 * // Get one Twitt
		 * const twitt = await prisma.twitt.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends TwittFindFirstOrThrowArgs>(
			args?: SelectSubset<T, TwittFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more Twitts that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TwittFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Twitts
		 * const twitts = await prisma.twitt.findMany()
		 *
		 * // Get first 10 Twitts
		 * const twitts = await prisma.twitt.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const twittWithIdOnly = await prisma.twitt.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends TwittFindManyArgs>(
			args?: SelectSubset<T, TwittFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>

		/**
		 * Create a Twitt.
		 * @param {TwittCreateArgs} args - Arguments to create a Twitt.
		 * @example
		 * // Create one Twitt
		 * const Twitt = await prisma.twitt.create({
		 *   data: {
		 *     // ... data to create a Twitt
		 *   }
		 * })
		 *
		 */
		create<T extends TwittCreateArgs>(
			args: SelectSubset<T, TwittCreateArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many Twitts.
		 * @param {TwittCreateManyArgs} args - Arguments to create many Twitts.
		 * @example
		 * // Create many Twitts
		 * const twitt = await prisma.twitt.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends TwittCreateManyArgs>(
			args?: SelectSubset<T, TwittCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Twitts and returns the data saved in the database.
		 * @param {TwittCreateManyAndReturnArgs} args - Arguments to create many Twitts.
		 * @example
		 * // Create many Twitts
		 * const twitt = await prisma.twitt.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Twitts and only return the `id`
		 * const twittWithIdOnly = await prisma.twitt.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends TwittCreateManyAndReturnArgs>(
			args?: SelectSubset<T, TwittCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
		>

		/**
		 * Delete a Twitt.
		 * @param {TwittDeleteArgs} args - Arguments to delete one Twitt.
		 * @example
		 * // Delete one Twitt
		 * const Twitt = await prisma.twitt.delete({
		 *   where: {
		 *     // ... filter to delete one Twitt
		 *   }
		 * })
		 *
		 */
		delete<T extends TwittDeleteArgs>(
			args: SelectSubset<T, TwittDeleteArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Update one Twitt.
		 * @param {TwittUpdateArgs} args - Arguments to update one Twitt.
		 * @example
		 * // Update one Twitt
		 * const twitt = await prisma.twitt.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends TwittUpdateArgs>(
			args: SelectSubset<T, TwittUpdateArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Delete zero or more Twitts.
		 * @param {TwittDeleteManyArgs} args - Arguments to filter Twitts to delete.
		 * @example
		 * // Delete a few Twitts
		 * const { count } = await prisma.twitt.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends TwittDeleteManyArgs>(
			args?: SelectSubset<T, TwittDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Twitts.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TwittUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Twitts
		 * const twitt = await prisma.twitt.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends TwittUpdateManyArgs>(
			args: SelectSubset<T, TwittUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Twitts and returns the data updated in the database.
		 * @param {TwittUpdateManyAndReturnArgs} args - Arguments to update many Twitts.
		 * @example
		 * // Update many Twitts
		 * const twitt = await prisma.twitt.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Twitts and only return the `id`
		 * const twittWithIdOnly = await prisma.twitt.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends TwittUpdateManyAndReturnArgs>(
			args: SelectSubset<T, TwittUpdateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
		>

		/**
		 * Create or update one Twitt.
		 * @param {TwittUpsertArgs} args - Arguments to update or create a Twitt.
		 * @example
		 * // Update or create a Twitt
		 * const twitt = await prisma.twitt.upsert({
		 *   create: {
		 *     // ... data to create a Twitt
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Twitt we want to update
		 *   }
		 * })
		 */
		upsert<T extends TwittUpsertArgs>(
			args: SelectSubset<T, TwittUpsertArgs<ExtArgs>>
		): Prisma__TwittClient<
			$Result.GetResult<Prisma.$TwittPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Count the number of Twitts.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TwittCountArgs} args - Arguments to filter Twitts to count.
		 * @example
		 * // Count the number of Twitts
		 * const count = await prisma.twitt.count({
		 *   where: {
		 *     // ... the filter for the Twitts we want to count
		 *   }
		 * })
		 */
		count<T extends TwittCountArgs>(
			args?: Subset<T, TwittCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], TwittCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a Twitt.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TwittAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		 */
		aggregate<T extends TwittAggregateArgs>(
			args: Subset<T, TwittAggregateArgs>
		): Prisma.PrismaPromise<GetTwittAggregateType<T>>

		/**
		 * Group by Twitt.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TwittGroupByArgs} args - Group by arguments.
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
		 */
		groupBy<
			T extends TwittGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: TwittGroupByArgs['orderBy'] }
				: { orderBy?: TwittGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
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
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, TwittGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors ? GetTwittGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Twitt model
		 */
		readonly fields: TwittFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Twitt.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__TwittClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>
		): Prisma__UserClient<
			| $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Twitt model
	 */
	interface TwittFieldRefs {
		readonly id: FieldRef<'Twitt', 'String'>
		readonly title: FieldRef<'Twitt', 'String'>
		readonly content: FieldRef<'Twitt', 'String'>
		readonly image: FieldRef<'Twitt', 'String'>
		readonly userId: FieldRef<'Twitt', 'String'>
		readonly createdAt: FieldRef<'Twitt', 'DateTime'>
		readonly updatedAt: FieldRef<'Twitt', 'DateTime'>
	}

	// Custom InputTypes
	/**
	 * Twitt findUnique
	 */
	export interface TwittFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Twitt
		 */
		select?: TwittSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Twitt
		 */
		omit?: TwittOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TwittInclude<ExtArgs> | null
		/**
		 * Filter, which Twitt to fetch.
		 */
		where: TwittWhereUniqueInput
	}

	/**
	 * Twitt findUniqueOrThrow
	 */
	export interface TwittFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Twitt
		 */
		select?: TwittSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Twitt
		 */
		omit?: TwittOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TwittInclude<ExtArgs> | null
		/**
		 * Filter, which Twitt to fetch.
		 */
		where: TwittWhereUniqueInput
	}

	/**
	 * Twitt findFirst
	 */
	export interface TwittFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Twitt
		 */
		select?: TwittSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Twitt
		 */
		omit?: TwittOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TwittInclude<ExtArgs> | null
		/**
		 * Filter, which Twitt to fetch.
		 */
		where?: TwittWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Twitts to fetch.
		 */
		orderBy?: TwittOrderByWithRelationInput | TwittOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Twitts.
		 */
		cursor?: TwittWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Twitts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Twitts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Twitts.
		 */
		distinct?: TwittScalarFieldEnum | TwittScalarFieldEnum[]
	}

	/**
	 * Twitt findFirstOrThrow
	 */
	export interface TwittFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Twitt
		 */
		select?: TwittSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Twitt
		 */
		omit?: TwittOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TwittInclude<ExtArgs> | null
		/**
		 * Filter, which Twitt to fetch.
		 */
		where?: TwittWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Twitts to fetch.
		 */
		orderBy?: TwittOrderByWithRelationInput | TwittOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Twitts.
		 */
		cursor?: TwittWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Twitts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Twitts.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Twitts.
		 */
		distinct?: TwittScalarFieldEnum | TwittScalarFieldEnum[]
	}

	/**
	 * Twitt findMany
	 */
	export interface TwittFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Twitt
		 */
		select?: TwittSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the Twitt
		 */
		omit?: TwittOmit<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TwittInclude<ExtArgs> | null
		/**
		 * Filter, which Twitts to fetch.
		 */
		where?: TwittWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Twitts to fetch.
		 */
		orderBy?: TwittOrderByWithRelationInput | TwittOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Twitts.
		 */
		cursor?: TwittWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Twitts from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Twitts.
		 */
		skip?: number
		distinct?: TwittScalarFieldEnum | TwittScalarFieldEnum[]
	}

	/**
	 * Twitt create
	 */
	export interface TwittCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the Twitt
			 */
			select?: TwittSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the Twitt
			 */
			omit?: TwittOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: TwittInclude<ExtArgs> | null
			/**
			 * The data needed to create a Twitt.
			 */
			data: XOR<TwittCreateInput, TwittUncheckedCreateInput>
		}

	/**
	 * Twitt createMany
	 */
	export interface TwittCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to create many Twitts.
		 */
		data: TwittCreateManyInput | TwittCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Twitt createManyAndReturn
	 */
	export interface TwittCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Twitt
		 */
		select?: TwittSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Twitt
		 */
		omit?: TwittOmit<ExtArgs> | null
		/**
		 * The data used to create many Twitts.
		 */
		data: TwittCreateManyInput | TwittCreateManyInput[]
		skipDuplicates?: boolean
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TwittIncludeCreateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Twitt update
	 */
	export interface TwittUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the Twitt
			 */
			select?: TwittSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the Twitt
			 */
			omit?: TwittOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: TwittInclude<ExtArgs> | null
			/**
			 * The data needed to update a Twitt.
			 */
			data: XOR<TwittUpdateInput, TwittUncheckedUpdateInput>
			/**
			 * Choose, which Twitt to update.
			 */
			where: TwittWhereUniqueInput
		}

	/**
	 * Twitt updateMany
	 */
	export interface TwittUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * The data used to update Twitts.
		 */
		data: XOR<TwittUpdateManyMutationInput, TwittUncheckedUpdateManyInput>
		/**
		 * Filter which Twitts to update
		 */
		where?: TwittWhereInput
		/**
		 * Limit how many Twitts to update.
		 */
		limit?: number
	}

	/**
	 * Twitt updateManyAndReturn
	 */
	export interface TwittUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Select specific fields to fetch from the Twitt
		 */
		select?: TwittSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the Twitt
		 */
		omit?: TwittOmit<ExtArgs> | null
		/**
		 * The data used to update Twitts.
		 */
		data: XOR<TwittUpdateManyMutationInput, TwittUncheckedUpdateManyInput>
		/**
		 * Filter which Twitts to update
		 */
		where?: TwittWhereInput
		/**
		 * Limit how many Twitts to update.
		 */
		limit?: number
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: TwittIncludeUpdateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Twitt upsert
	 */
	export interface TwittUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the Twitt
			 */
			select?: TwittSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the Twitt
			 */
			omit?: TwittOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: TwittInclude<ExtArgs> | null
			/**
			 * The filter to search for the Twitt to update in case it exists.
			 */
			where: TwittWhereUniqueInput
			/**
			 * In case the Twitt found by the `where` argument doesn't exist, create a new Twitt with this data.
			 */
			create: XOR<TwittCreateInput, TwittUncheckedCreateInput>
			/**
			 * In case the Twitt was found with the provided `where` argument, update it with this data.
			 */
			update: XOR<TwittUpdateInput, TwittUncheckedUpdateInput>
		}

	/**
	 * Twitt delete
	 */
	export interface TwittDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the Twitt
			 */
			select?: TwittSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the Twitt
			 */
			omit?: TwittOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: TwittInclude<ExtArgs> | null
			/**
			 * Filter which Twitt to delete.
			 */
			where: TwittWhereUniqueInput
		}

	/**
	 * Twitt deleteMany
	 */
	export interface TwittDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		/**
		 * Filter which Twitts to delete
		 */
		where?: TwittWhereInput
		/**
		 * Limit how many Twitts to delete.
		 */
		limit?: number
	}

	/**
	 * Twitt without action
	 */
	export interface TwittDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
			/**
			 * Select specific fields to fetch from the Twitt
			 */
			select?: TwittSelect<ExtArgs> | null
			/**
			 * Omit specific fields from the Twitt
			 */
			omit?: TwittOmit<ExtArgs> | null
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: TwittInclude<ExtArgs> | null
		}

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: 'ReadUncommitted'
		ReadCommitted: 'ReadCommitted'
		RepeatableRead: 'RepeatableRead'
		Serializable: 'Serializable'
	}

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

	export const AccountScalarFieldEnum: {
		id: 'id'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
	}

	export type AccountScalarFieldEnum =
		(typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]

	export const UserScalarFieldEnum: {
		id: 'id'
		email: 'email'
		username: 'username'
		password: 'password'
		displayName: 'displayName'
		picture: 'picture'
		isVerified: 'isVerified'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
	}

	export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

	export const SessionScalarFieldEnum: {
		id: 'id'
		token: 'token'
		ipAddress: 'ipAddress'
		userAgent: 'userAgent'
		expires: 'expires'
		userId: 'userId'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
	}

	export type SessionScalarFieldEnum =
		(typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]

	export const TwittScalarFieldEnum: {
		id: 'id'
		title: 'title'
		content: 'content'
		image: 'image'
		userId: 'userId'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
	}

	export type TwittScalarFieldEnum =
		(typeof TwittScalarFieldEnum)[keyof typeof TwittScalarFieldEnum]

	export const SortOrder: {
		asc: 'asc'
		desc: 'desc'
	}

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

	export const QueryMode: {
		default: 'default'
		insensitive: 'insensitive'
	}

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

	export const NullsOrder: {
		first: 'first'
		last: 'last'
	}

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'DateTime[]'
	>

	/**
	 * Reference to a field of type 'Boolean'
	 */
	export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>

	/**
	 * Deep Input Types
	 */

	export interface AccountWhereInput {
		AND?: AccountWhereInput | AccountWhereInput[]
		OR?: AccountWhereInput[]
		NOT?: AccountWhereInput | AccountWhereInput[]
		id?: StringFilter<'Account'> | string
		createdAt?: DateTimeFilter<'Account'> | Date | string
		updatedAt?: DateTimeFilter<'Account'> | Date | string
	}

	export interface AccountOrderByWithRelationInput {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type AccountWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			AND?: AccountWhereInput | AccountWhereInput[]
			OR?: AccountWhereInput[]
			NOT?: AccountWhereInput | AccountWhereInput[]
			createdAt?: DateTimeFilter<'Account'> | Date | string
			updatedAt?: DateTimeFilter<'Account'> | Date | string
		},
		'id'
	>

	export interface AccountOrderByWithAggregationInput {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		_count?: AccountCountOrderByAggregateInput
		_max?: AccountMaxOrderByAggregateInput
		_min?: AccountMinOrderByAggregateInput
	}

	export interface AccountScalarWhereWithAggregatesInput {
		AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
		OR?: AccountScalarWhereWithAggregatesInput[]
		NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'Account'> | string
		createdAt?: DateTimeWithAggregatesFilter<'Account'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'Account'> | Date | string
	}

	export interface UserWhereInput {
		AND?: UserWhereInput | UserWhereInput[]
		OR?: UserWhereInput[]
		NOT?: UserWhereInput | UserWhereInput[]
		id?: StringFilter<'User'> | string
		email?: StringNullableFilter<'User'> | string | null
		username?: StringFilter<'User'> | string
		password?: StringFilter<'User'> | string
		displayName?: StringFilter<'User'> | string
		picture?: StringNullableFilter<'User'> | string | null
		isVerified?: BoolFilter<'User'> | boolean
		createdAt?: DateTimeFilter<'User'> | Date | string
		updatedAt?: DateTimeFilter<'User'> | Date | string
		twitts?: TwittListRelationFilter
		sessions?: SessionListRelationFilter
	}

	export interface UserOrderByWithRelationInput {
		id?: SortOrder
		email?: SortOrderInput | SortOrder
		username?: SortOrder
		password?: SortOrder
		displayName?: SortOrder
		picture?: SortOrderInput | SortOrder
		isVerified?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		twitts?: TwittOrderByRelationAggregateInput
		sessions?: SessionOrderByRelationAggregateInput
	}

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			email?: string
			username?: string
			AND?: UserWhereInput | UserWhereInput[]
			OR?: UserWhereInput[]
			NOT?: UserWhereInput | UserWhereInput[]
			password?: StringFilter<'User'> | string
			displayName?: StringFilter<'User'> | string
			picture?: StringNullableFilter<'User'> | string | null
			isVerified?: BoolFilter<'User'> | boolean
			createdAt?: DateTimeFilter<'User'> | Date | string
			updatedAt?: DateTimeFilter<'User'> | Date | string
			twitts?: TwittListRelationFilter
			sessions?: SessionListRelationFilter
		},
		'id' | 'email' | 'username'
	>

	export interface UserOrderByWithAggregationInput {
		id?: SortOrder
		email?: SortOrderInput | SortOrder
		username?: SortOrder
		password?: SortOrder
		displayName?: SortOrder
		picture?: SortOrderInput | SortOrder
		isVerified?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		_count?: UserCountOrderByAggregateInput
		_max?: UserMaxOrderByAggregateInput
		_min?: UserMinOrderByAggregateInput
	}

	export interface UserScalarWhereWithAggregatesInput {
		AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
		OR?: UserScalarWhereWithAggregatesInput[]
		NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'User'> | string
		email?: StringNullableWithAggregatesFilter<'User'> | string | null
		username?: StringWithAggregatesFilter<'User'> | string
		password?: StringWithAggregatesFilter<'User'> | string
		displayName?: StringWithAggregatesFilter<'User'> | string
		picture?: StringNullableWithAggregatesFilter<'User'> | string | null
		isVerified?: BoolWithAggregatesFilter<'User'> | boolean
		createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
	}

	export interface SessionWhereInput {
		AND?: SessionWhereInput | SessionWhereInput[]
		OR?: SessionWhereInput[]
		NOT?: SessionWhereInput | SessionWhereInput[]
		id?: StringFilter<'Session'> | string
		token?: StringFilter<'Session'> | string
		ipAddress?: StringNullableFilter<'Session'> | string | null
		userAgent?: StringNullableFilter<'Session'> | string | null
		expires?: DateTimeFilter<'Session'> | Date | string
		userId?: StringFilter<'Session'> | string
		createdAt?: DateTimeFilter<'Session'> | Date | string
		updatedAt?: DateTimeFilter<'Session'> | Date | string
		user?: XOR<UserScalarRelationFilter, UserWhereInput>
	}

	export interface SessionOrderByWithRelationInput {
		id?: SortOrder
		token?: SortOrder
		ipAddress?: SortOrderInput | SortOrder
		userAgent?: SortOrderInput | SortOrder
		expires?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		user?: UserOrderByWithRelationInput
	}

	export type SessionWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			token?: string
			AND?: SessionWhereInput | SessionWhereInput[]
			OR?: SessionWhereInput[]
			NOT?: SessionWhereInput | SessionWhereInput[]
			ipAddress?: StringNullableFilter<'Session'> | string | null
			userAgent?: StringNullableFilter<'Session'> | string | null
			expires?: DateTimeFilter<'Session'> | Date | string
			userId?: StringFilter<'Session'> | string
			createdAt?: DateTimeFilter<'Session'> | Date | string
			updatedAt?: DateTimeFilter<'Session'> | Date | string
			user?: XOR<UserScalarRelationFilter, UserWhereInput>
		},
		'id' | 'token'
	>

	export interface SessionOrderByWithAggregationInput {
		id?: SortOrder
		token?: SortOrder
		ipAddress?: SortOrderInput | SortOrder
		userAgent?: SortOrderInput | SortOrder
		expires?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		_count?: SessionCountOrderByAggregateInput
		_max?: SessionMaxOrderByAggregateInput
		_min?: SessionMinOrderByAggregateInput
	}

	export interface SessionScalarWhereWithAggregatesInput {
		AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
		OR?: SessionScalarWhereWithAggregatesInput[]
		NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'Session'> | string
		token?: StringWithAggregatesFilter<'Session'> | string
		ipAddress?: StringNullableWithAggregatesFilter<'Session'> | string | null
		userAgent?: StringNullableWithAggregatesFilter<'Session'> | string | null
		expires?: DateTimeWithAggregatesFilter<'Session'> | Date | string
		userId?: StringWithAggregatesFilter<'Session'> | string
		createdAt?: DateTimeWithAggregatesFilter<'Session'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'Session'> | Date | string
	}

	export interface TwittWhereInput {
		AND?: TwittWhereInput | TwittWhereInput[]
		OR?: TwittWhereInput[]
		NOT?: TwittWhereInput | TwittWhereInput[]
		id?: StringFilter<'Twitt'> | string
		title?: StringFilter<'Twitt'> | string
		content?: StringFilter<'Twitt'> | string
		image?: StringNullableFilter<'Twitt'> | string | null
		userId?: StringFilter<'Twitt'> | string
		createdAt?: DateTimeFilter<'Twitt'> | Date | string
		updatedAt?: DateTimeFilter<'Twitt'> | Date | string
		user?: XOR<UserScalarRelationFilter, UserWhereInput>
	}

	export interface TwittOrderByWithRelationInput {
		id?: SortOrder
		title?: SortOrder
		content?: SortOrder
		image?: SortOrderInput | SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		user?: UserOrderByWithRelationInput
	}

	export type TwittWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			AND?: TwittWhereInput | TwittWhereInput[]
			OR?: TwittWhereInput[]
			NOT?: TwittWhereInput | TwittWhereInput[]
			title?: StringFilter<'Twitt'> | string
			content?: StringFilter<'Twitt'> | string
			image?: StringNullableFilter<'Twitt'> | string | null
			userId?: StringFilter<'Twitt'> | string
			createdAt?: DateTimeFilter<'Twitt'> | Date | string
			updatedAt?: DateTimeFilter<'Twitt'> | Date | string
			user?: XOR<UserScalarRelationFilter, UserWhereInput>
		},
		'id'
	>

	export interface TwittOrderByWithAggregationInput {
		id?: SortOrder
		title?: SortOrder
		content?: SortOrder
		image?: SortOrderInput | SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		_count?: TwittCountOrderByAggregateInput
		_max?: TwittMaxOrderByAggregateInput
		_min?: TwittMinOrderByAggregateInput
	}

	export interface TwittScalarWhereWithAggregatesInput {
		AND?: TwittScalarWhereWithAggregatesInput | TwittScalarWhereWithAggregatesInput[]
		OR?: TwittScalarWhereWithAggregatesInput[]
		NOT?: TwittScalarWhereWithAggregatesInput | TwittScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'Twitt'> | string
		title?: StringWithAggregatesFilter<'Twitt'> | string
		content?: StringWithAggregatesFilter<'Twitt'> | string
		image?: StringNullableWithAggregatesFilter<'Twitt'> | string | null
		userId?: StringWithAggregatesFilter<'Twitt'> | string
		createdAt?: DateTimeWithAggregatesFilter<'Twitt'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'Twitt'> | Date | string
	}

	export interface AccountCreateInput {
		id?: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface AccountUncheckedCreateInput {
		id?: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface AccountUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface AccountUncheckedUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface AccountCreateManyInput {
		id?: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface AccountUpdateManyMutationInput {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface AccountUncheckedUpdateManyInput {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface UserCreateInput {
		id?: string
		email?: string | null
		username: string
		password: string
		displayName: string
		picture?: string | null
		isVerified?: boolean
		createdAt?: Date | string
		updatedAt?: Date | string
		twitts?: TwittCreateNestedManyWithoutUserInput
		sessions?: SessionCreateNestedManyWithoutUserInput
	}

	export interface UserUncheckedCreateInput {
		id?: string
		email?: string | null
		username: string
		password: string
		displayName: string
		picture?: string | null
		isVerified?: boolean
		createdAt?: Date | string
		updatedAt?: Date | string
		twitts?: TwittUncheckedCreateNestedManyWithoutUserInput
		sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
	}

	export interface UserUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		twitts?: TwittUpdateManyWithoutUserNestedInput
		sessions?: SessionUpdateManyWithoutUserNestedInput
	}

	export interface UserUncheckedUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		twitts?: TwittUncheckedUpdateManyWithoutUserNestedInput
		sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
	}

	export interface UserCreateManyInput {
		id?: string
		email?: string | null
		username: string
		password: string
		displayName: string
		picture?: string | null
		isVerified?: boolean
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface UserUpdateManyMutationInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface UserUncheckedUpdateManyInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface SessionCreateInput {
		id?: string
		token: string
		ipAddress?: string | null
		userAgent?: string | null
		expires: Date | string
		createdAt?: Date | string
		updatedAt?: Date | string
		user: UserCreateNestedOneWithoutSessionsInput
	}

	export interface SessionUncheckedCreateInput {
		id?: string
		token: string
		ipAddress?: string | null
		userAgent?: string | null
		expires: Date | string
		userId: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface SessionUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
		userAgent?: NullableStringFieldUpdateOperationsInput | string | null
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		user?: UserUpdateOneRequiredWithoutSessionsNestedInput
	}

	export interface SessionUncheckedUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
		userAgent?: NullableStringFieldUpdateOperationsInput | string | null
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
		userId?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface SessionCreateManyInput {
		id?: string
		token: string
		ipAddress?: string | null
		userAgent?: string | null
		expires: Date | string
		userId: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface SessionUpdateManyMutationInput {
		id?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
		userAgent?: NullableStringFieldUpdateOperationsInput | string | null
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface SessionUncheckedUpdateManyInput {
		id?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
		userAgent?: NullableStringFieldUpdateOperationsInput | string | null
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
		userId?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface TwittCreateInput {
		id?: string
		title: string
		content: string
		image?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
		user: UserCreateNestedOneWithoutTwittsInput
	}

	export interface TwittUncheckedCreateInput {
		id?: string
		title: string
		content: string
		image?: string | null
		userId: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface TwittUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		title?: StringFieldUpdateOperationsInput | string
		content?: StringFieldUpdateOperationsInput | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		user?: UserUpdateOneRequiredWithoutTwittsNestedInput
	}

	export interface TwittUncheckedUpdateInput {
		id?: StringFieldUpdateOperationsInput | string
		title?: StringFieldUpdateOperationsInput | string
		content?: StringFieldUpdateOperationsInput | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		userId?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface TwittCreateManyInput {
		id?: string
		title: string
		content: string
		image?: string | null
		userId: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface TwittUpdateManyMutationInput {
		id?: StringFieldUpdateOperationsInput | string
		title?: StringFieldUpdateOperationsInput | string
		content?: StringFieldUpdateOperationsInput | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface TwittUncheckedUpdateManyInput {
		id?: StringFieldUpdateOperationsInput | string
		title?: StringFieldUpdateOperationsInput | string
		content?: StringFieldUpdateOperationsInput | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		userId?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface StringFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringFilter<$PrismaModel> | string
	}

	export interface DateTimeFilter<$PrismaModel = never> {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string
	}

	export interface AccountCountOrderByAggregateInput {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface AccountMaxOrderByAggregateInput {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface AccountMinOrderByAggregateInput {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface StringWithAggregatesFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedStringFilter<$PrismaModel>
		_max?: NestedStringFilter<$PrismaModel>
	}

	export interface DateTimeWithAggregatesFilter<$PrismaModel = never> {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedDateTimeFilter<$PrismaModel>
		_max?: NestedDateTimeFilter<$PrismaModel>
	}

	export interface StringNullableFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringNullableFilter<$PrismaModel> | string | null
	}

	export interface BoolFilter<$PrismaModel = never> {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolFilter<$PrismaModel> | boolean
	}

	export interface TwittListRelationFilter {
		every?: TwittWhereInput
		some?: TwittWhereInput
		none?: TwittWhereInput
	}

	export interface SessionListRelationFilter {
		every?: SessionWhereInput
		some?: SessionWhereInput
		none?: SessionWhereInput
	}

	export interface SortOrderInput {
		sort: SortOrder
		nulls?: NullsOrder
	}

	export interface TwittOrderByRelationAggregateInput {
		_count?: SortOrder
	}

	export interface SessionOrderByRelationAggregateInput {
		_count?: SortOrder
	}

	export interface UserCountOrderByAggregateInput {
		id?: SortOrder
		email?: SortOrder
		username?: SortOrder
		password?: SortOrder
		displayName?: SortOrder
		picture?: SortOrder
		isVerified?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface UserMaxOrderByAggregateInput {
		id?: SortOrder
		email?: SortOrder
		username?: SortOrder
		password?: SortOrder
		displayName?: SortOrder
		picture?: SortOrder
		isVerified?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface UserMinOrderByAggregateInput {
		id?: SortOrder
		email?: SortOrder
		username?: SortOrder
		password?: SortOrder
		displayName?: SortOrder
		picture?: SortOrder
		isVerified?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface StringNullableWithAggregatesFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedStringNullableFilter<$PrismaModel>
		_max?: NestedStringNullableFilter<$PrismaModel>
	}

	export interface BoolWithAggregatesFilter<$PrismaModel = never> {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedBoolFilter<$PrismaModel>
		_max?: NestedBoolFilter<$PrismaModel>
	}

	export interface UserScalarRelationFilter {
		is?: UserWhereInput
		isNot?: UserWhereInput
	}

	export interface SessionCountOrderByAggregateInput {
		id?: SortOrder
		token?: SortOrder
		ipAddress?: SortOrder
		userAgent?: SortOrder
		expires?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface SessionMaxOrderByAggregateInput {
		id?: SortOrder
		token?: SortOrder
		ipAddress?: SortOrder
		userAgent?: SortOrder
		expires?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface SessionMinOrderByAggregateInput {
		id?: SortOrder
		token?: SortOrder
		ipAddress?: SortOrder
		userAgent?: SortOrder
		expires?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface TwittCountOrderByAggregateInput {
		id?: SortOrder
		title?: SortOrder
		content?: SortOrder
		image?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface TwittMaxOrderByAggregateInput {
		id?: SortOrder
		title?: SortOrder
		content?: SortOrder
		image?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface TwittMinOrderByAggregateInput {
		id?: SortOrder
		title?: SortOrder
		content?: SortOrder
		image?: SortOrder
		userId?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export interface StringFieldUpdateOperationsInput {
		set?: string
	}

	export interface DateTimeFieldUpdateOperationsInput {
		set?: Date | string
	}

	export interface TwittCreateNestedManyWithoutUserInput {
		create?:
			| XOR<TwittCreateWithoutUserInput, TwittUncheckedCreateWithoutUserInput>
			| TwittCreateWithoutUserInput[]
			| TwittUncheckedCreateWithoutUserInput[]
		connectOrCreate?: TwittCreateOrConnectWithoutUserInput | TwittCreateOrConnectWithoutUserInput[]
		createMany?: TwittCreateManyUserInputEnvelope
		connect?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
	}

	export interface SessionCreateNestedManyWithoutUserInput {
		create?:
			| XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
			| SessionCreateWithoutUserInput[]
			| SessionUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| SessionCreateOrConnectWithoutUserInput
			| SessionCreateOrConnectWithoutUserInput[]
		createMany?: SessionCreateManyUserInputEnvelope
		connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
	}

	export interface TwittUncheckedCreateNestedManyWithoutUserInput {
		create?:
			| XOR<TwittCreateWithoutUserInput, TwittUncheckedCreateWithoutUserInput>
			| TwittCreateWithoutUserInput[]
			| TwittUncheckedCreateWithoutUserInput[]
		connectOrCreate?: TwittCreateOrConnectWithoutUserInput | TwittCreateOrConnectWithoutUserInput[]
		createMany?: TwittCreateManyUserInputEnvelope
		connect?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
	}

	export interface SessionUncheckedCreateNestedManyWithoutUserInput {
		create?:
			| XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
			| SessionCreateWithoutUserInput[]
			| SessionUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| SessionCreateOrConnectWithoutUserInput
			| SessionCreateOrConnectWithoutUserInput[]
		createMany?: SessionCreateManyUserInputEnvelope
		connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
	}

	export interface NullableStringFieldUpdateOperationsInput {
		set?: string | null
	}

	export interface BoolFieldUpdateOperationsInput {
		set?: boolean
	}

	export interface TwittUpdateManyWithoutUserNestedInput {
		create?:
			| XOR<TwittCreateWithoutUserInput, TwittUncheckedCreateWithoutUserInput>
			| TwittCreateWithoutUserInput[]
			| TwittUncheckedCreateWithoutUserInput[]
		connectOrCreate?: TwittCreateOrConnectWithoutUserInput | TwittCreateOrConnectWithoutUserInput[]
		upsert?:
			| TwittUpsertWithWhereUniqueWithoutUserInput
			| TwittUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: TwittCreateManyUserInputEnvelope
		set?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		disconnect?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		delete?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		connect?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		update?:
			| TwittUpdateWithWhereUniqueWithoutUserInput
			| TwittUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| TwittUpdateManyWithWhereWithoutUserInput
			| TwittUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: TwittScalarWhereInput | TwittScalarWhereInput[]
	}

	export interface SessionUpdateManyWithoutUserNestedInput {
		create?:
			| XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
			| SessionCreateWithoutUserInput[]
			| SessionUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| SessionCreateOrConnectWithoutUserInput
			| SessionCreateOrConnectWithoutUserInput[]
		upsert?:
			| SessionUpsertWithWhereUniqueWithoutUserInput
			| SessionUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: SessionCreateManyUserInputEnvelope
		set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		update?:
			| SessionUpdateWithWhereUniqueWithoutUserInput
			| SessionUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| SessionUpdateManyWithWhereWithoutUserInput
			| SessionUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
	}

	export interface TwittUncheckedUpdateManyWithoutUserNestedInput {
		create?:
			| XOR<TwittCreateWithoutUserInput, TwittUncheckedCreateWithoutUserInput>
			| TwittCreateWithoutUserInput[]
			| TwittUncheckedCreateWithoutUserInput[]
		connectOrCreate?: TwittCreateOrConnectWithoutUserInput | TwittCreateOrConnectWithoutUserInput[]
		upsert?:
			| TwittUpsertWithWhereUniqueWithoutUserInput
			| TwittUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: TwittCreateManyUserInputEnvelope
		set?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		disconnect?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		delete?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		connect?: TwittWhereUniqueInput | TwittWhereUniqueInput[]
		update?:
			| TwittUpdateWithWhereUniqueWithoutUserInput
			| TwittUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| TwittUpdateManyWithWhereWithoutUserInput
			| TwittUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: TwittScalarWhereInput | TwittScalarWhereInput[]
	}

	export interface SessionUncheckedUpdateManyWithoutUserNestedInput {
		create?:
			| XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
			| SessionCreateWithoutUserInput[]
			| SessionUncheckedCreateWithoutUserInput[]
		connectOrCreate?:
			| SessionCreateOrConnectWithoutUserInput
			| SessionCreateOrConnectWithoutUserInput[]
		upsert?:
			| SessionUpsertWithWhereUniqueWithoutUserInput
			| SessionUpsertWithWhereUniqueWithoutUserInput[]
		createMany?: SessionCreateManyUserInputEnvelope
		set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
		update?:
			| SessionUpdateWithWhereUniqueWithoutUserInput
			| SessionUpdateWithWhereUniqueWithoutUserInput[]
		updateMany?:
			| SessionUpdateManyWithWhereWithoutUserInput
			| SessionUpdateManyWithWhereWithoutUserInput[]
		deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
	}

	export interface UserCreateNestedOneWithoutSessionsInput {
		create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
		connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
		connect?: UserWhereUniqueInput
	}

	export interface UserUpdateOneRequiredWithoutSessionsNestedInput {
		create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
		connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
		upsert?: UserUpsertWithoutSessionsInput
		connect?: UserWhereUniqueInput
		update?: XOR<
			XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>,
			UserUncheckedUpdateWithoutSessionsInput
		>
	}

	export interface UserCreateNestedOneWithoutTwittsInput {
		create?: XOR<UserCreateWithoutTwittsInput, UserUncheckedCreateWithoutTwittsInput>
		connectOrCreate?: UserCreateOrConnectWithoutTwittsInput
		connect?: UserWhereUniqueInput
	}

	export interface UserUpdateOneRequiredWithoutTwittsNestedInput {
		create?: XOR<UserCreateWithoutTwittsInput, UserUncheckedCreateWithoutTwittsInput>
		connectOrCreate?: UserCreateOrConnectWithoutTwittsInput
		upsert?: UserUpsertWithoutTwittsInput
		connect?: UserWhereUniqueInput
		update?: XOR<
			XOR<UserUpdateToOneWithWhereWithoutTwittsInput, UserUpdateWithoutTwittsInput>,
			UserUncheckedUpdateWithoutTwittsInput
		>
	}

	export interface NestedStringFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringFilter<$PrismaModel> | string
	}

	export interface NestedDateTimeFilter<$PrismaModel = never> {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string
	}

	export interface NestedStringWithAggregatesFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedStringFilter<$PrismaModel>
		_max?: NestedStringFilter<$PrismaModel>
	}

	export interface NestedIntFilter<$PrismaModel = never> {
		equals?: number | IntFieldRefInput<$PrismaModel>
		in?: number[] | ListIntFieldRefInput<$PrismaModel>
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntFilter<$PrismaModel> | number
	}

	export interface NestedDateTimeWithAggregatesFilter<$PrismaModel = never> {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedDateTimeFilter<$PrismaModel>
		_max?: NestedDateTimeFilter<$PrismaModel>
	}

	export interface NestedStringNullableFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringNullableFilter<$PrismaModel> | string | null
	}

	export interface NestedBoolFilter<$PrismaModel = never> {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolFilter<$PrismaModel> | boolean
	}

	export interface NestedStringNullableWithAggregatesFilter<$PrismaModel = never> {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedStringNullableFilter<$PrismaModel>
		_max?: NestedStringNullableFilter<$PrismaModel>
	}

	export interface NestedIntNullableFilter<$PrismaModel = never> {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableFilter<$PrismaModel> | number | null
	}

	export interface NestedBoolWithAggregatesFilter<$PrismaModel = never> {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedBoolFilter<$PrismaModel>
		_max?: NestedBoolFilter<$PrismaModel>
	}

	export interface TwittCreateWithoutUserInput {
		id?: string
		title: string
		content: string
		image?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface TwittUncheckedCreateWithoutUserInput {
		id?: string
		title: string
		content: string
		image?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface TwittCreateOrConnectWithoutUserInput {
		where: TwittWhereUniqueInput
		create: XOR<TwittCreateWithoutUserInput, TwittUncheckedCreateWithoutUserInput>
	}

	export interface TwittCreateManyUserInputEnvelope {
		data: TwittCreateManyUserInput | TwittCreateManyUserInput[]
		skipDuplicates?: boolean
	}

	export interface SessionCreateWithoutUserInput {
		id?: string
		token: string
		ipAddress?: string | null
		userAgent?: string | null
		expires: Date | string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface SessionUncheckedCreateWithoutUserInput {
		id?: string
		token: string
		ipAddress?: string | null
		userAgent?: string | null
		expires: Date | string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface SessionCreateOrConnectWithoutUserInput {
		where: SessionWhereUniqueInput
		create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
	}

	export interface SessionCreateManyUserInputEnvelope {
		data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
		skipDuplicates?: boolean
	}

	export interface TwittUpsertWithWhereUniqueWithoutUserInput {
		where: TwittWhereUniqueInput
		update: XOR<TwittUpdateWithoutUserInput, TwittUncheckedUpdateWithoutUserInput>
		create: XOR<TwittCreateWithoutUserInput, TwittUncheckedCreateWithoutUserInput>
	}

	export interface TwittUpdateWithWhereUniqueWithoutUserInput {
		where: TwittWhereUniqueInput
		data: XOR<TwittUpdateWithoutUserInput, TwittUncheckedUpdateWithoutUserInput>
	}

	export interface TwittUpdateManyWithWhereWithoutUserInput {
		where: TwittScalarWhereInput
		data: XOR<TwittUpdateManyMutationInput, TwittUncheckedUpdateManyWithoutUserInput>
	}

	export interface TwittScalarWhereInput {
		AND?: TwittScalarWhereInput | TwittScalarWhereInput[]
		OR?: TwittScalarWhereInput[]
		NOT?: TwittScalarWhereInput | TwittScalarWhereInput[]
		id?: StringFilter<'Twitt'> | string
		title?: StringFilter<'Twitt'> | string
		content?: StringFilter<'Twitt'> | string
		image?: StringNullableFilter<'Twitt'> | string | null
		userId?: StringFilter<'Twitt'> | string
		createdAt?: DateTimeFilter<'Twitt'> | Date | string
		updatedAt?: DateTimeFilter<'Twitt'> | Date | string
	}

	export interface SessionUpsertWithWhereUniqueWithoutUserInput {
		where: SessionWhereUniqueInput
		update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
		create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
	}

	export interface SessionUpdateWithWhereUniqueWithoutUserInput {
		where: SessionWhereUniqueInput
		data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
	}

	export interface SessionUpdateManyWithWhereWithoutUserInput {
		where: SessionScalarWhereInput
		data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
	}

	export interface SessionScalarWhereInput {
		AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
		OR?: SessionScalarWhereInput[]
		NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
		id?: StringFilter<'Session'> | string
		token?: StringFilter<'Session'> | string
		ipAddress?: StringNullableFilter<'Session'> | string | null
		userAgent?: StringNullableFilter<'Session'> | string | null
		expires?: DateTimeFilter<'Session'> | Date | string
		userId?: StringFilter<'Session'> | string
		createdAt?: DateTimeFilter<'Session'> | Date | string
		updatedAt?: DateTimeFilter<'Session'> | Date | string
	}

	export interface UserCreateWithoutSessionsInput {
		id?: string
		email?: string | null
		username: string
		password: string
		displayName: string
		picture?: string | null
		isVerified?: boolean
		createdAt?: Date | string
		updatedAt?: Date | string
		twitts?: TwittCreateNestedManyWithoutUserInput
	}

	export interface UserUncheckedCreateWithoutSessionsInput {
		id?: string
		email?: string | null
		username: string
		password: string
		displayName: string
		picture?: string | null
		isVerified?: boolean
		createdAt?: Date | string
		updatedAt?: Date | string
		twitts?: TwittUncheckedCreateNestedManyWithoutUserInput
	}

	export interface UserCreateOrConnectWithoutSessionsInput {
		where: UserWhereUniqueInput
		create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
	}

	export interface UserUpsertWithoutSessionsInput {
		update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
		create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
		where?: UserWhereInput
	}

	export interface UserUpdateToOneWithWhereWithoutSessionsInput {
		where?: UserWhereInput
		data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
	}

	export interface UserUpdateWithoutSessionsInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		twitts?: TwittUpdateManyWithoutUserNestedInput
	}

	export interface UserUncheckedUpdateWithoutSessionsInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		twitts?: TwittUncheckedUpdateManyWithoutUserNestedInput
	}

	export interface UserCreateWithoutTwittsInput {
		id?: string
		email?: string | null
		username: string
		password: string
		displayName: string
		picture?: string | null
		isVerified?: boolean
		createdAt?: Date | string
		updatedAt?: Date | string
		sessions?: SessionCreateNestedManyWithoutUserInput
	}

	export interface UserUncheckedCreateWithoutTwittsInput {
		id?: string
		email?: string | null
		username: string
		password: string
		displayName: string
		picture?: string | null
		isVerified?: boolean
		createdAt?: Date | string
		updatedAt?: Date | string
		sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
	}

	export interface UserCreateOrConnectWithoutTwittsInput {
		where: UserWhereUniqueInput
		create: XOR<UserCreateWithoutTwittsInput, UserUncheckedCreateWithoutTwittsInput>
	}

	export interface UserUpsertWithoutTwittsInput {
		update: XOR<UserUpdateWithoutTwittsInput, UserUncheckedUpdateWithoutTwittsInput>
		create: XOR<UserCreateWithoutTwittsInput, UserUncheckedCreateWithoutTwittsInput>
		where?: UserWhereInput
	}

	export interface UserUpdateToOneWithWhereWithoutTwittsInput {
		where?: UserWhereInput
		data: XOR<UserUpdateWithoutTwittsInput, UserUncheckedUpdateWithoutTwittsInput>
	}

	export interface UserUpdateWithoutTwittsInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		sessions?: SessionUpdateManyWithoutUserNestedInput
	}

	export interface UserUncheckedUpdateWithoutTwittsInput {
		id?: StringFieldUpdateOperationsInput | string
		email?: NullableStringFieldUpdateOperationsInput | string | null
		username?: StringFieldUpdateOperationsInput | string
		password?: StringFieldUpdateOperationsInput | string
		displayName?: StringFieldUpdateOperationsInput | string
		picture?: NullableStringFieldUpdateOperationsInput | string | null
		isVerified?: BoolFieldUpdateOperationsInput | boolean
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
	}

	export interface TwittCreateManyUserInput {
		id?: string
		title: string
		content: string
		image?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface SessionCreateManyUserInput {
		id?: string
		token: string
		ipAddress?: string | null
		userAgent?: string | null
		expires: Date | string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export interface TwittUpdateWithoutUserInput {
		id?: StringFieldUpdateOperationsInput | string
		title?: StringFieldUpdateOperationsInput | string
		content?: StringFieldUpdateOperationsInput | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface TwittUncheckedUpdateWithoutUserInput {
		id?: StringFieldUpdateOperationsInput | string
		title?: StringFieldUpdateOperationsInput | string
		content?: StringFieldUpdateOperationsInput | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface TwittUncheckedUpdateManyWithoutUserInput {
		id?: StringFieldUpdateOperationsInput | string
		title?: StringFieldUpdateOperationsInput | string
		content?: StringFieldUpdateOperationsInput | string
		image?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface SessionUpdateWithoutUserInput {
		id?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
		userAgent?: NullableStringFieldUpdateOperationsInput | string | null
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface SessionUncheckedUpdateWithoutUserInput {
		id?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
		userAgent?: NullableStringFieldUpdateOperationsInput | string | null
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export interface SessionUncheckedUpdateManyWithoutUserInput {
		id?: StringFieldUpdateOperationsInput | string
		token?: StringFieldUpdateOperationsInput | string
		ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
		userAgent?: NullableStringFieldUpdateOperationsInput | string | null
		expires?: DateTimeFieldUpdateOperationsInput | Date | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export interface BatchPayload {
		count: number
	}

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF
}
