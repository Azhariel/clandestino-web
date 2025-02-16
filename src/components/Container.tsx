'use client';
import { HeroUIProvider } from '@heroui/system';
import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<HeroUIProvider>
			<div className='ml-auto mr-auto'>{children}</div>
		</HeroUIProvider>
	);
};

export default Container;
