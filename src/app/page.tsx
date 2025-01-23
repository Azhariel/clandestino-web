import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

const HomePage = () => {
	// Calculate the next Tuesday at 20:00
	const now = new Date();
	const nextTuesday = new Date(now);
	nextTuesday.setDate(now.getDate() + ((2 - now.getDay() + 7) % 7)); // 2 = Tuesday
	nextTuesday.setHours(20, 0, 0, 0);

	return (
		<div className='flex flex-col grow text-center justify-center items-center h-5/6'>
			<h1 className='text-4xl text-red-500'>CLANDESTINO.CC</h1>
			<p>PEDAL COLETIVO</p>
			<CountdownTimer targetDate={nextTuesday} />
		</div>
	);
};

export default HomePage;
