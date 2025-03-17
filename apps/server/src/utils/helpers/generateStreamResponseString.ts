import { isObject } from './utils'

export const generateStreamResponseString = (
	eventName: string,
	id: string,
	data: string | Record<string, unknown>
) => {
	if (typeof data === 'string') {
		return `event:${eventName}\ndata:${data}\nid:${id}\n\n`
	}

	if (isObject(data)) {
		return `event:update\ndata: ${JSON.stringify(data)}\nid: some-id\n\n`
	}

	return `event:${eventName}\ndata:${data}\nid:${id}\n\n`
}
