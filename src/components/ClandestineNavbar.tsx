'use client';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import Image from 'next/image';
import logo from '../../public/logo.jpg';

const ClandestineNavbar: React.FC = () => {
	return (
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
	);
};

export default ClandestineNavbar;
