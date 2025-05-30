'use client';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	useDisclosure,
} from '@heroui/react';
import Image from 'next/image';
import logo from '../../public/logo.jpg';

const ClandestineNavbar: React.FC = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Navbar>
				<NavbarBrand>
					<Link href='/' className='text-white'>
						<Image
							src={logo}
							alt='CLANDESTINO.CC'
							width={50}
							height={50}
							// onClick={() => router.push('/')}
							// className='cursor-pointer'
						/>
						<h1 className='hidden sm:flex font-heading text-xl uppercase ml-2'>Clandestino.cc</h1>
					</Link>
				</NavbarBrand>
				<NavbarContent className='hidden sm:flex gap-4' justify='end'>
					<NavbarItem>
						<Button
							content='WhatsApp'
							as={Link}
							href='https://chat.whatsapp.com/Dwlwv2suYdQKXfgWeAoXTL'
							target='_blank'
							className='bg-gradient-to-tr from-green-500 to-green-700'
						>
							WhatsApp
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} href='/manifesto' className='bg-gradient-to-tr from-red-500 to-purple-500'>
							Manifesto
						</Button>
					</NavbarItem>
				</NavbarContent>
				<div className='sm:hidden flex items-center'>
					<Button onPress={onOpen}>Menu</Button>
				</div>
			</Navbar>
			<Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement='right' className='dark' size='sm'>
				<DrawerContent>
					{(onClose) => (
						<>
							<DrawerHeader className='flex flex-col gap-1'>Menu</DrawerHeader>
							<DrawerBody>
								<Button as={Link} href='#' className='bg-gradient-to-tr from-red-500 to-purple-500'>
									Manifesto
								</Button>
								<Button
									content='WhatsApp'
									as={Link}
									href='https://chat.whatsapp.com/Dwlwv2suYdQKXfgWeAoXTL'
									target='_blank'
									className='bg-gradient-to-tr from-green-500 to-green-700'
								>
									WhatsApp
								</Button>
							</DrawerBody>
							<DrawerFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									Fechar
								</Button>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default ClandestineNavbar;
