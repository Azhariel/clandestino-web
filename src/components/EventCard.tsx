import { generateGoogleCalendarLink } from '@/utils/generateGoogleCalendarLink';
import { Card, CardHeader, CardBody, CardFooter, Button, Divider } from '@heroui/react';
import CountdownTimer from './CountdownTimer';
import { Event } from '@/types/event';

type EventCardProps = {
	event: Event;
};

export const EventCard = ({ event }: EventCardProps) => {
	return (
		<Card className='p-2 mt-12'>
			<CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
				<h2 className='uppercase font-bold'>{event.name}</h2>
				<small className='text-default-500'>{event.description}</small>
			</CardHeader>
			<Divider className='mt-2' />
			<CardBody>
				<h3 className='font-bold text-tiny uppercase '>🗓️ Quando?</h3>
				{new Date(event.datetime).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
				{event.location && (
					<>
						<h3 className='font-bold text-tiny uppercase'>📍 Onde?</h3>
						{event.location}
					</>
				)}
				{event.url && (
					<>
						<h3 className='font-bold text-tiny uppercase'>🌐 Link:</h3>
						<a href={event?.url} target='_blank' rel='noopener noreferrer' className='text-danger-500 underline'>
							Participe online
						</a>
					</>
				)}
				<CountdownTimer targetDate={new Date(event.datetime)} className='mt-2' />
			</CardBody>
			<Divider />
			<CardFooter className='flex flex-col gap-4'>
				<Button onPress={() => window.open(generateGoogleCalendarLink(event), '_blank')}>Marcar no Calendário</Button>
				{event.url && <Button onPress={() => window.open(event.url, '_blank')}>Participe Online</Button>}
			</CardFooter>
		</Card>
	);
};
