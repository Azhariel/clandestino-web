import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Container from '@/components/Container';
import { Metadata } from 'next';
import ClandestineNavbar from '@/components/ClandestineNavbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Clandestino.cc',
	description: 'Pedal Coletivo em Porto Alegre',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<main className='dark'>
					<Container>
						<ClandestineNavbar />
						{children}
					</Container>
				</main>
			</body>
		</html>
	);
}
