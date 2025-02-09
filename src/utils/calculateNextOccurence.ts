import { Event } from '@/types/event';

export const calculateNextOccurrence = (event: Event): string => {
	const eventDate = new Date(event.datetime);
	const now = new Date();

	if (!event.repeats) return String(eventDate);

	if (event.frequency === 'weekly') {
		while (eventDate <= now) {
			eventDate.setDate(eventDate.getDate() + 7);
		}
	} else if (event.frequency === 'monthly') {
		while (eventDate <= now) {
			eventDate.setMonth(eventDate.getMonth() + 1);
		}
	}

	return String(eventDate);
};
