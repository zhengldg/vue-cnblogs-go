import moment from 'moment'

export function toDate(date){
	return moment(date).format('YYYY-MM-DD')
}

export function shortTime(date){
	return moment(date).format('MM-DD HH:mm')
}
