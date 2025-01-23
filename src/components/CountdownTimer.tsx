'use client';
import React from 'react';
import Countdown from 'react-countdown';
import { messages } from '../utils/messages';
import { CircularProgress } from '@heroui/progress';

type CountdownTimerProps = {
	targetDate: Date;
};

type CountdownTimerRendererProps = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
	const renderer = ({ days, hours, minutes, seconds, completed }: CountdownTimerRendererProps) => {
		if (completed && hours <= 2) return <span>{messages.ongoing}</span>;
		if (completed) return <span>{messages.completed}</span>;
		return (
			<div className='flex flex-col m-4 text-center justify-center items-center gap-4'>
				<CircularProgress
					value={(days * 24 + hours) * -1}
					maxValue={0}
					minValue={7 * 24 * -1}
					color='danger'
					size='lg'
					strokeWidth={5}
				/>
				<p>
					{days > 0 && <span>{days} dias e </span>}
					{days === 0 && !completed && <span>HOJE em </span>}
					{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')} até o
					próximo pedal!
				</p>
				{days === 0 && hours <= 20 && <p>{messages.soon}</p>}
			</div>
		);
	};

	return <Countdown date={targetDate} renderer={renderer} overtime />;
};

export default CountdownTimer;
