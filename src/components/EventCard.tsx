import { generateGoogleCalendarLink } from '@/utils/generateGoogleCalendarLink';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@heroui/react';
import CountdownTimer from './CountdownTimer';
import { Event } from '@/types/event';

type EventCardProps = {
	event: Event;
};

export const EventCard = ({ event }: EventCardProps) => {
	return (
		<Card className='p-2 mt-6'>
			<CardHeader className='justify-center text-center text-xl'>
				<h2>{event.name}</h2>
			</CardHeader>
			<CardBody className='mx-2'>
				<CountdownTimer targetDate={new Date(event.datetime)} />
				<p>
					🗓️ <strong>Quando: </strong>
					{new Date(event.datetime).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
				</p>
				{event.location && (
					<p>
						📍 <strong>Onde:</strong> {event.location}
					</p>
				)}
				{event.url && (
					<p>
						🌐 <strong>Link:</strong>{' '}
						<a href={event.url} target='_blank' rel='noopener noreferrer'>
							Participe Online
						</a>
					</p>
				)}
			</CardBody>
			<CardFooter className='flex justify-around gap-4'>
				<Button onPress={() => window.open(generateGoogleCalendarLink(event), '_blank')}>Adicione ao Calendário</Button>
				{event.url && <Button onPress={() => window.open(event.url, '_blank')}>Participe Online</Button>}
			</CardFooter>
		</Card>
	);
};
