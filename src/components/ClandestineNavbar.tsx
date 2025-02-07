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
