'use client';
import React from 'react';
import Countdown from 'react-countdown';
import { messages } from '../utils/messages';
import { CircularProgress } from '@heroui/progress';

type CountdownTimerProps = {
	targetDate: Date;
	className?: string;
};

type CountdownTimerRendererProps = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
};

const CountdownTimer = ({ targetDate, className = '' }: CountdownTimerProps) => {
	const renderer = ({ days, hours, minutes, seconds, completed }: CountdownTimerRendererProps) => {
		if (completed && hours <= 2) return <span>{messages.ongoing}</span>;
		if (completed) return <span>{messages.completed}</span>;
		return (
			<div className={`flex flex-col text-center justify-center items-center ${className}`}>
				<CircularProgress
					value={(days * 24 + hours) * -1}
					maxValue={0}
					minValue={7 * 24 * -1}
					color='danger'
					size='md'
					strokeWidth={5}
					aria-valuenow={(days * 24 + hours) * -1}
					aria-valuemin={7 * 24 * -1}
					aria-valuemax={0}
					aria-valuetext={`${(days * 24 + hours) * -1}%`}
					role='progressbar'
					aria-label='countdown'
				/>
				<p>
					{days > 0 && <span>{days} dias e </span>}
					{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
				</p>
			</div>
		);
	};

	return <Countdown date={targetDate} renderer={renderer} overtime />;
};

export default CountdownTimer;
