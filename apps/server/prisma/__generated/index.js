Object.defineProperty(exports, '__esModule', { value: true })

const {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
	PrismaClientRustPanicError,
	PrismaClientInitializationError,
	PrismaClientValidationError,
	getPrismaClient,
	sqltag,
	empty,
	join,
	raw,
	skip,
	Decimal,
	Debug,
	objectEnumValues,
	makeStrictEnum,
	Extensions,
	warnOnce,
	defineDmmfProperty,
	Public,
	getRuntime,
	createParam,
} = require('./runtime/library.js')

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
	client: '6.5.0',
	engine: '173f8d54f8d52e692c7e27e72a88314ec7aeff60',
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
	DbNull: objectEnumValues.classes.DbNull,
	JsonNull: objectEnumValues.classes.JsonNull,
	AnyNull: objectEnumValues.classes.AnyNull,
}

const path = require('node:path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
	ReadUncommitted: 'ReadUncommitted',
	ReadCommitted: 'ReadCommitted',
	RepeatableRead: 'RepeatableRead',
	Serializable: 'Serializable',
})

exports.Prisma.AccountScalarFieldEnum = {
	id: 'id',
	createdAt: 'createdAt',
	updatedAt: 'updatedAt',
}

exports.Prisma.UserScalarFieldEnum = {
	id: 'id',
	email: 'email',
	username: 'username',
	password: 'password',
	displayName: 'displayName',
	picture: 'picture',
	isVerified: 'isVerified',
	createdAt: 'createdAt',
	updatedAt: 'updatedAt',
}

exports.Prisma.SessionScalarFieldEnum = {
	id: 'id',
	token: 'token',
	ipAddress: 'ipAddress',
	userAgent: 'userAgent',
	expires: 'expires',
	userId: 'userId',
	createdAt: 'createdAt',
	updatedAt: 'updatedAt',
}

exports.Prisma.TwittScalarFieldEnum = {
	id: 'id',
	title: 'title',
	content: 'content',
	image: 'image',
	userId: 'userId',
	createdAt: 'createdAt',
	updatedAt: 'updatedAt',
}

exports.Prisma.SortOrder = {
	asc: 'asc',
	desc: 'desc',
}

exports.Prisma.QueryMode = {
	default: 'default',
	insensitive: 'insensitive',
}

exports.Prisma.NullsOrder = {
	first: 'first',
	last: 'last',
}

exports.Prisma.ModelName = {
	Account: 'Account',
	User: 'User',
	Session: 'Session',
	Twitt: 'Twitt',
}
/**
 * Create the Client
 */
const config = {
	generator: {
		name: 'client',
		provider: {
			fromEnvVar: null,
			value: 'prisma-client-js',
		},
		output: {
			value: 'K:\\Work\\Projects\\twittes\\server\\prisma\\__generated',
			fromEnvVar: null,
		},
		config: {
			engineType: 'library',
		},
		binaryTargets: [
			{
				fromEnvVar: null,
				value: 'windows',
				native: true,
			},
		],
		previewFeatures: [],
		sourceFilePath: 'K:\\Work\\Projects\\twittes\\server\\prisma\\schema.prisma',
		isCustomOutput: true,
	},
	relativeEnvPaths: {
		rootEnvPath: '../../.env',
		schemaEnvPath: '../../.env',
	},
	relativePath: '..',
	clientVersion: '6.5.0',
	engineVersion: '173f8d54f8d52e692c7e27e72a88314ec7aeff60',
	datasourceNames: ['db'],
	activeProvider: 'postgresql',
	postinstall: false,
	inlineDatasources: {
		db: {
			url: {
				fromEnvVar: 'DATABASE_URL',
				value: null,
			},
		},
	},
	inlineSchema:
		'generator client {\n  provider = "prisma-client-js"\n  output   = "./__generated"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel Account {\n  id String @id @default(cuid())\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("accounts")\n}\n\nmodel User {\n  id String @id @default(cuid())\n\n  email    String? @unique\n  username String  @unique\n  password String\n\n  displayName String  @map("display_name")\n  picture     String?\n\n  isVerified Boolean @default(false) @map("is_verified")\n\n  twitts   Twitt[]\n  sessions Session[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("users")\n}\n\nmodel Session {\n  id String @id @default(cuid())\n\n  token     String   @unique\n  ipAddress String?  @map("ip_address")\n  userAgent String?  @map("user_agent")\n  expires   DateTime\n\n  userId String @map("user_id")\n  user   User   @relation(fields: [userId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("sessions")\n}\n\nmodel Twitt {\n  id String @id @default(cuid())\n\n  title   String\n  content String\n  image   String?\n\n  userId String @map("user_id")\n  user   User   @relation(fields: [userId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("twitts")\n}\n',
	inlineSchemaHash: 'ee7caa12959e020390510c8266215c551bba7eae0a98b349bbb0eee5e195eca0',
	copyEngine: true,
}

const fs = require('node:fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
	const alternativePaths = ['prisma/__generated', '__generated']

	const alternativePath =
		alternativePaths.find((altPath) => {
			return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
		}) ?? alternativePaths[0]

	config.dirname = path.join(process.cwd(), alternativePath)
	config.isBundled = true
}

config.runtimeDataModel = JSON.parse(
	'{"models":{"Account":{"dbName":"accounts","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"User":{"dbName":"users","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"displayName","dbName":"display_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"picture","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isVerified","dbName":"is_verified","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"twitts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Twitt","nativeType":null,"relationName":"TwittToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"sessions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Session","nativeType":null,"relationName":"SessionToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Session":{"dbName":"sessions","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"token","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ipAddress","dbName":"ip_address","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"userAgent","dbName":"user_agent","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"expires","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"SessionToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Twitt":{"dbName":"twitts","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"image","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"TwittToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
	rootEnvPath:
		config.relativeEnvPaths.rootEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
	schemaEnvPath:
		config.relativeEnvPaths.schemaEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, 'query_engine-windows.dll.node')
path.join(process.cwd(), 'prisma/__generated/query_engine-windows.dll.node')
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma')
path.join(process.cwd(), 'prisma/__generated/schema.prisma')
