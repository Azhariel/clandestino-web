import { Event } from '@/types/event';

export const generateGoogleCalendarLink = (event: Event) => {
	// Convert the datetime to the required format (YYYYMMDDTHHmmssZ)
	const startTime = new Date(event.datetime).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

	// Assume the event duration is 2 hours
	// TODO - Refactor this to use the event duration if available
	const endTime =
		new Date(new Date(event.datetime).getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] +
		'Z';

	// Encode event details for the URL
	const title = encodeURIComponent(`${event.name}`);
	const details = event.description ? encodeURIComponent(`${event.description}`) : '';
	const url = event.url ? encodeURIComponent(`${event.url}`) : '';
	const location = event.location ? encodeURIComponent(`${event.location}`) : '';
	const recurrence = event.repeats ? `recur=RRULE:FREQ=${event.frequency};INTERVAL=1` : '';

	// Generate the Google Calendar link
	const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&ctz=America/Sao_Paulo&details=${details}%0A${url}&location=${location}&${recurrence}`;

	return calendarUrl;
};
