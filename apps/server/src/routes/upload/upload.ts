import { Hono } from 'hono'
import { Buffer } from 'node:buffer'
import { mkdir, writeFile } from 'node:fs/promises'
import path, { join } from 'node:path'

import { uploadRouteSpecs } from './upload.openapi'
import { uploadSearchValidation } from './upload.validators'

export const uploadRoute = new Hono()

uploadRoute.post('/', uploadSearchValidation, uploadRouteSpecs, async (ctx) => {
	const search = ctx.req.valid('query')
	const savePath = search.path ?? ''
	const fileName = search.name ?? ''

	const contentType = ctx.req.header('Content-Type')

	if (contentType !== 'multipart/form-data') {
		return ctx.json({ message: 'Тип запроса не соответствует типу данных' }, 400)
	}

	const blob = await ctx.req.blob()
	const buffer = await blob.arrayBuffer()

	const currentPath = path.join(import.meta.dirname, '../../../static', savePath)

	try {
		if (savePath) {
			const dirPath = await mkdir(currentPath, { recursive: true })

			if (!dirPath) {
				return ctx.json({ message: 'Ошибка загрузки файла' }, 400)
			}

			await writeFile(path.join(dirPath, fileName), Buffer.from(buffer))
		} else {
			await writeFile(join(currentPath, fileName), Buffer.from(buffer))
		}
	} catch (error) {
		console.error(error)
		return ctx.json({ message: 'Ошибка загрузки файла' }, 400)
	}

	const responseFilePath = `static${savePath.length > 0 ? `/${savePath}` : ''}/${fileName}`

	return ctx.json({
		message: 'Файл успешно загружен',
		filePath: responseFilePath,
	})
})
