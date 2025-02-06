export type Event = {
	id: string; // UUID
	name: string; // Text
	datetime: string; // ISO 8601 string representation of timestamp with time zone
	repeats: boolean; // Boolean
	frequency?: string; // Optional text
	created_at: string; // ISO 8601 string representation of timestamp with time zone
};
