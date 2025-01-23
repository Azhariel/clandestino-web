import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className='box-border ml-auto mr-auto h-dvh'>{children}</div>;
};

export default Container;
