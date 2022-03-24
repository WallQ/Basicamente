import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	image: string;
	altText: string;
	title: string;
	subTitle: string;
	text: string;
	urlTitle: string;
	href: string;
}

const SimpleCard: React.FunctionComponent<Props> = ({
	image,
	altText,
	title,
	subTitle,
	text,
	urlTitle,
	href,
}) => {
	return (
        <>
            <div className='flex flex-col whitespace-pre-wrap max-w-xs'>
				<img src={image} alt={altText} />
				<p className='text-sm font-bold text-gray-600 mt-8'>
					{title}
				</p>
				<p className='text-sm font-light text-gray-600 mt-4'>
					{subTitle}
				</p>
				<p className='text-sm font-light text-gray-600 mt-4'>
					{text}
				</p>
				<Link className='mt-4' to={href}><span className='font-thin text-sm text-primary border-b border-b-primary' >{urlTitle}</span></Link>
			</div>
        </>
    );
};

export default SimpleCard;
