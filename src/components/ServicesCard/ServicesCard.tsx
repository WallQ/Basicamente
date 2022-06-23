import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentNode, useQuery } from '@apollo/client';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';

import LoadingSkeleton from './ServicesCardLoadingSkeleton';
import ErrorBoundary from './ServicesCardErrorBoundary';

interface Props {
	query: DocumentNode;
}

const ServicesCard: React.FunctionComponent<Props> = ({ query }) => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, {variables: { language }});

	if (loading) return <LoadingSkeleton quantity={4} />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
			{data && data.homepageServicesCollection?.items.map((service: any) => (
				<React.Fragment key={service.image.sys.id}>
					<div className="flex flex-col">
						<img src={service.image.url} alt={service.image.title} loading="eager" width={900} height={640} />
						<p className="mt-4 text-sm font-bold text-gray-900">{service.title}</p>
						<p className="mt-4 text-sm font-normal text-gray-900">{service.question}</p>
						<p className="mt-4 text-sm font-normal text-gray-900">{service.text}</p>
						<Link className="mt-4" to={service.url}>
							<span className="border-b border-b-primary text-sm font-normal text-primary hover:opacity-80">{service.urlText}</span>
						</Link>
					</div>
				</React.Fragment>
			))}
			</div>
		</React.Fragment>
	);
};

export default ServicesCard;
