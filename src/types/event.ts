export type Event = {
	id: string; // UUID
	name: string; // Event title
	description: string; // Event description
	datetime: string; // ISO 8601 string representation of timestamp with time zone
	repeats: boolean; // Boolean
	frequency?: 'WEEKLY' | 'MONTHLY'; // weekly | monthly
	location?: string; // Optional for in person events
	url?: string; // Optional for online events
	created_at: string; // ISO 8601 string representation of timestamp with time zone
};
