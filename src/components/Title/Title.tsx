import React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';

import LoadingSkeleton from './TitleLoadingSkeleton';
import ErrorBoundary from './TitleErrorBoundary';

interface Props {
	query: DocumentNode;
}

const Title: React.FunctionComponent<Props> = ({ query }) => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, { variables: { language }});

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.homepageTitle && (
				<React.Fragment>
					<div className="py-12">
						<h2 className="text-center text-2xl font-medium text-primary">
							{data.homepageTitle.title}
						</h2>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Title;
