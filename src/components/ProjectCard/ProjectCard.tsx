import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	image: string;
	altText: string;
	title: string;
	text: string;
	urlTitle: string;
	url: string;
}

const ServicesCard: React.FunctionComponent<Props> = ({ image, altText, title, text, urlTitle, url }) => {
	return (
		<React.Fragment>
			<div className="flex flex-col">
				<img src={image} alt={altText} loading="lazy" />
				<p className="mt-4 text-sm font-bold text-gray-900">{title}</p>
				<p className="mt-4 text-sm font-light text-gray-900">{text}</p>
				<a className="mt-4" href={url}>
					<span className="border-b border-b-primary text-sm font-thin text-primary hover:opacity-80">
						{urlTitle}
					</span>
				</a>
			</div>
		</React.Fragment>
	);
};

export default ServicesCard;
