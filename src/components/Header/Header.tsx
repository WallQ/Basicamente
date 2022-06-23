import React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';

import LoadingSkeleton from './HeaderLoadingSkeleton';
import ErrorBoundary from './HeaderErrorBoundary';

interface Props {
	query: DocumentNode;
}

const options = {
	renderMark: {
		[MARKS.BOLD]: (text: any) => <span className="font-bold">{text}</span>,
	},
};

const Header: React.FunctionComponent<Props> = ({ query }) => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, {variables: { language }});

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.homepageHeader && (
				<React.Fragment>
					<div className="bg-primary bg-cover bg-center bg-no-repeat py-24 lg:py-48" style={{backgroundImage: `url(${data.homepageHeader.image.url})`}}>
						<div className="container mx-auto flex flex-col items-center justify-center gap-y-8 px-4 text-center text-white sm:px-6 xl:w-2/3 lg:px-8">
							<h1 className="text-2xl font-medium lg:text-4xl">
								{data.homepageHeader.title}
							</h1>
							<div className="text-base font-light lg:text-2xl">
								{documentToReactComponents(data.homepageHeader.text.json, options)}
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Header;
