import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	image: string;
	altText: string;
	title: string;
	question: string;
	text: string;
	urlTitle: string;
	url: string;
}

const ServicesCard: React.FunctionComponent<Props> = ({ image, altText, title, question, text, urlTitle, url }) => {
	return (
		<React.Fragment>
			<div className="flex flex-col">
				<img src={image} alt={altText} loading="lazy" />
				<p className="mt-4 text-sm font-bold text-gray-900">{title}</p>
				<p className="mt-4 text-sm font-light text-gray-900">{question}</p>
				<p className="mt-4 text-sm font-light text-gray-900">{text}</p>
				<Link className="mt-4" to={url}>
					<span className="border-b border-b-primary text-sm font-thin text-primary hover:opacity-80">
						{urlTitle}
					</span>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default ServicesCard;
