'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Button, HeroUIProvider, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import Image from 'next/image';
import logo from '../../public/logo.jpg';
import Container from '@/components/Container';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<HeroUIProvider>
					<main className='dark'>
						<Container>
							<Navbar>
								<NavbarBrand>
									<Image src={logo} alt='CLANDESTINO.CC' width={50} height={50} />
									<p className='font-bold text-inherit ml-2'>Clandestino.cc</p>
								</NavbarBrand>
								<NavbarContent className='hidden sm:flex gap-4' justify='end'>
									<NavbarItem>
										<Button as={Link} href='#' className='bg-gradient-to-tr from-red-500 to-purple-500'>
											Manifesto
										</Button>
									</NavbarItem>
								</NavbarContent>
							</Navbar>

							{children}
						</Container>
					</main>
				</HeroUIProvider>
			</body>
		</html>
	);
}
