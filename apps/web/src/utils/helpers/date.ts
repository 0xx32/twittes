import {
	secondInDay,
	secondInHour,
	secondInMinute,
	secondInMonth,
	secondInWeek,
	secondInYear,
} from '../constants/time'

export const formatDistance = (earlierDate: Date, laterDate: Date) => {
	const difference = laterDate.getTime() - earlierDate.getTime()
	const seconds = Math.floor(difference / 1000)

	if (seconds === 0) {
		return 'Сейчас'
	}

	if (seconds < secondInMinute) {
		return `${seconds}c`
	}
	if (seconds < secondInHour) {
		return `${Math.floor(seconds / secondInMinute)}м`
	}
	if (seconds < secondInDay) {
		return `${Math.floor(seconds / secondInHour)}ч`
	}
	if (seconds < secondInWeek) {
		return `${Math.floor(seconds / secondInDay)}д`
	}
	if (seconds < secondInMonth) {
		return `${Math.floor(seconds / secondInWeek)}нед`
	}
	if (seconds < secondInYear) {
		return `${Math.floor(seconds / secondInMonth)}мес`
	}
}
