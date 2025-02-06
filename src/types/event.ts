export type Event = {
	id: string; // UUID
	name: string; // Text
	datetime: string; // ISO 8601 string representation of timestamp with time zone
	repeats: boolean; // Boolean
	frequency?: string; // weekly | monthly
	location?: string; // Optional for in person events
	url?: string; // Optional for online events
	created_at: string; // ISO 8601 string representation of timestamp with time zone
};
