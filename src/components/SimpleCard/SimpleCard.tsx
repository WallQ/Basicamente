import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	size: string;
	image: string;
	altText: string;
	title: string;
	subTitle?: string;
	text: string;
	urlTitle?: string;
	internalHref?: string;
	externalHref?: string;
}

const SimpleCard: React.FunctionComponent<Props> = ({
	size,
	image,
	altText,
	title,
	subTitle,
	text,
	urlTitle,
	internalHref,
	externalHref,
}) => {
	console.log(image);
	return (
		<>
			<div className={`flex ${size} flex-col whitespace-pre-wrap`}>
				<img src={image} alt={altText} loading="lazy" />
				<p className="mt-8 text-sm font-bold text-gray-600">{title}</p>
				{subTitle && (
					<p className="mt-4 text-sm font-light text-gray-600">
						{subTitle}
					</p>
				)}
				<p className="mt-4 text-sm font-light text-gray-600">{text}</p>
				{internalHref && (
					<Link className="mt-4" to={internalHref}>
						<span className="border-b border-b-primary text-sm font-thin text-primary">
							{urlTitle}
						</span>
					</Link>
				)}
				{externalHref && (
					<a className="mt-4" href={externalHref}>
						<span className="border-b border-b-primary text-sm font-thin text-primary">
							{urlTitle}
						</span>
					</a>
				)}
			</div>
		</>
	);
};

export default SimpleCard;
