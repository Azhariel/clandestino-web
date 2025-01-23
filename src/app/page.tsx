'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo_grafite_branco.png';
import CountdownTimer from '../components/CountdownTimer';

const HomePage = () => {
	// Calculate the next Tuesday at 20:00
	const now = new Date();
	const nextTuesday = new Date(now);
	nextTuesday.setDate(now.getDate() + ((2 - now.getDay() + 7) % 7)); // 2 = Tuesday
	nextTuesday.setHours(20, 0, 0, 0);

	return (
		<div className='flex flex-col grow text-center justify-center items-center h-5/6'>
			<Image src={logo} alt='CLANDESTINO.CC' width={600} height={100} />
			<p>PEDAL COLETIVO</p>
			<CountdownTimer targetDate={nextTuesday} />
		</div>
	);
};

export default HomePage;
