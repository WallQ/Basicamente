import React from 'react';
import { Link } from 'react-router-dom';
import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
	image: string;
	title: string;
	text: any;
	button: boolean;
}

const options = {
	renderMark: {
		[MARKS.BOLD]: (text: any) => <span className="font-bold">{text}</span>,
	},
};

const Header: React.FunctionComponent<Props> = ({ image, title, text, button }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-20 lg:py-44" style={{ backgroundImage: `url(${image})` }}>
				<div className="flex w-2/3 flex-col items-center gap-y-8 text-center text-white lg:w-1/2">
					<h1 className="text-xl font-medium lg:text-4xl">{title}</h1>
					<div className="whitespace-pre-wrap text-base font-light leading-normal lg:text-2xl">
						{documentToReactComponents(text.json, options)}
					</div>
					{button && (
						<Link to="pedir-proposta" className="w-48 bg-white px-4 py-4 text-base font-normal text-black hover:bg-gray-100">
							Pedir Proposta
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
