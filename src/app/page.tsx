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

	// Find all the next events
	const now = new Date();
	const nextEvents = events
		.map((event) => ({
			...event,
			datetime: calculateNextOccurrence(event),
		}))
		.filter((event) => new Date(event.datetime) > now)
		.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());

	return (
		<>
			<div className='flex flex-col grow text-center justify-center items-center h-5/6 px-4 mt-12'>
				<div className=''>
					<h1 className='text-5xl font-heading'>PEDAL COLETIVO</h1>
					<Image src={logo} alt='CLANDESTINO.CC' width={600} height={100} className='' />
				</div>
				<div className='flex gap-4 flex-wrap justify-center'>
					{nextEvents.length > 0 ? (
						nextEvents.map((event) => <EventCard key={event.id} event={event} />)
					) : (
						<p>Nenhum evento programado.</p>
					)}
				</div>
			</div>
		</>
	);
};

export default HomePage;
