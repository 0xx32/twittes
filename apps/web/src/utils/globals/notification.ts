export const notificationSource = new EventSource('http://localhost:4040/api/event/notification', {
	withCredentials: true,
})
