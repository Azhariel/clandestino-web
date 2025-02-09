'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { Event } from '@/types/event';
import logo from '@/public/logo_grafite_branco.png';
import { calculateNextOccurrence } from '@/utils/calculateNextOccurence';
import { EventCard } from '@/components/EventCard';

const HomePage = () => {
	const [events, setEvents] = useState<Event[]>([]);

	useEffect(() => {
		fetchEvents();
	}, []);

	const fetchEvents = async () => {
		const { data, error } = await supabase.from('events').select('*');
		if (error) console.error('Error fetching events:', error);
		else setEvents(data);
	};

	// Find the next event
	const now = new Date();
	const nextEvent = events
		.map((event) => ({
			...event,
			datetime: calculateNextOccurrence(event),
		}))
		.find((event) => new Date(event.datetime) > now);

	return (
		<div className='flex flex-col grow text-center justify-center items-center h-5/6'>
			<h1>PEDAL COLETIVO</h1>
			<Image src={logo} alt='CLANDESTINO.CC' width={600} height={100} />
			{nextEvent ? <EventCard event={nextEvent} /> : <p>Nenhum evento programado.</p>}
		</div>
	);
};

export default HomePage;
