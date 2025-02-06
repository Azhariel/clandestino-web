'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { Event } from '@/types/event';
import CountdownTimer from '@/components/CountdownTimer';
// import { Button } from '@heroui/react';
import logo from '@/public/logo_grafite_branco.png';

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
			datetime: new Date(event.datetime), // Convert Supabase datetime string to Date object
		}))
		.find((event) => event.datetime > now);

	return (
		<div className='flex flex-col grow text-center justify-center items-center h-5/6'>
			<h1>PEDAL COLETIVO</h1>
			<Image src={logo} alt='CLANDESTINO.CC' width={600} height={100} />
			{nextEvent ? (
				<>
					<CountdownTimer targetDate={nextEvent.datetime} />
					<p>
						Próximo evento: {nextEvent.name} em {nextEvent.datetime.toLocaleString()}
					</p>
				</>
			) : (
				<p>Nenhum evento programado.</p>
			)}
			{/* <Button onPress={() => alert('Join the ride!')}>Join Now</Button>
			<Button onPress={fetchEvents}>Refetch events</Button> */}
		</div>
	);
};

export default HomePage;
