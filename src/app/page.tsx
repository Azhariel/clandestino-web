'use client';
import { HeroUIProvider } from '@heroui/react';

export default function Home() {
	return (
		<HeroUIProvider>
			<div>
				<h1>Hello World</h1>
			</div>
		</HeroUIProvider>
	);
}
