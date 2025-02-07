'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { Event } from '@/types/event';
import CountdownTimer from '@/components/CountdownTimer';
import logo from '@/public/logo_grafite_branco.png';
import { calculateNextOccurrence } from '@/utils/calculateNextOccurence';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { generateGoogleCalendarLink } from '@/utils/generateGoogleCalendarLink';

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
			{nextEvent ? (
				<Card className='p-2 mt-6'>
					<CardHeader className='justify-center text-center text-xl'>
						<h2>{nextEvent.name}</h2>
					</CardHeader>
					<CardBody className='mx-2'>
						<CountdownTimer targetDate={new Date(nextEvent.datetime)} />
						<p>
							🗓️ <strong>Quando: </strong>
							{new Date(nextEvent.datetime).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
						</p>
						{nextEvent.location && (
							<p>
								📍 <strong>Onde:</strong> {nextEvent.location}
							</p>
						)}
						{nextEvent.url && (
							<p>
								🌐 <strong>Link:</strong>{' '}
								<a href={nextEvent.url} target='_blank' rel='noopener noreferrer'>
									Participe Online
								</a>
							</p>
						)}
					</CardBody>
					<CardFooter className='flex justify-around gap-4'>
						<Button onPress={() => window.open(generateGoogleCalendarLink(nextEvent), '_blank')}>
							Adicione ao Calendário
						</Button>
						{nextEvent.url && <Button onPress={() => window.open(nextEvent.url, '_blank')}>Participe Online</Button>}
					</CardFooter>
				</Card>
			) : (
				<p>Nenhum evento programado.</p>
			)}
		</div>
	);
};

export default HomePage;
