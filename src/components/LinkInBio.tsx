import { Link } from '@/types/link';
import Links from '@/api/links';

const LinkInBio = async () => {
	const links: Link[] = Links.sort((a, b) => a.position - b.position);

	return (
		<div className='flex flex-col p-4 items-center justify-center h-full mt-12'>
			<div className='max-w-md w-full'>
				<div className='text-center mb-8'>
					<h1 className='text-4xl text-white font-heading'>CLANDESTINO.CC</h1>
					<p className='text-gray-400 mt-4'>Links do Coletivo</p>
				</div>
				<div className='flex flex-col space-y-4 justify-center items-center'>
					{links.map((link) => (
						<a
							key={link.title}
							href={link.url}
							target='_blank'
							rel='noopener noreferrer'
							className='relative block w-3/4 text-white font-medium py-3 px-4 rounded text-center transition-colors bg-purple-600 hover:bg-purple-700'
						>
							{link.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default LinkInBio;
