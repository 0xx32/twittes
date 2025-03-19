import { Hono } from 'hono'
import { nanoid } from 'nanoid'
import { Buffer } from 'node:buffer'
import { writeFile } from 'node:fs/promises'
import { join, normalize } from 'node:path'

import { fileExtension } from '@/utils/helpers'

import { uploadRouteSpecs } from './upload.openapi'
import { uploadSearchValidation } from './upload.validators'

export const uploadRoute = new Hono()

uploadRoute.post('/', uploadSearchValidation, uploadRouteSpecs, async (ctx) => {
	const search = ctx.req.valid('query')
	const savePath = search.path ?? ''

	const body = await ctx.req.parseBody<{ file: File }>()
	const file = body.file

	const fileName = `${nanoid(20)}.${fileExtension(file.name)}`
	const currentPath = normalize(join(import.meta.dirname, '../../../static', savePath))

	const path = join(currentPath, fileName)
	const fileBuffer = await file.arrayBuffer()

	try {
		await writeFile(path, Buffer.from(fileBuffer))
	} catch (error) {
		console.error(error)

		ctx.status(500)
		return ctx.json({
			message: 'Ошибка записи файла',
		})
	}

	return ctx.json({
		message: 'Файл успешно загружен',
		filePath: `static/${fileName}`,
	})
})
