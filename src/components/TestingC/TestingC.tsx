import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentNode, useQuery } from '@apollo/client';

import ErrorC from './ErrorC';
import LoadingC from './LoadingC';

interface Props {
	query: DocumentNode;
}

const TestingC: React.FunctionComponent<Props> = ({ query }) => {
	const { loading, error, data } = useQuery<any>(query);

	if (loading) return <LoadingC cardsNumber={4} />;
	if (error) return <ErrorC message={error.message} />;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
			{data && data.homepageServicesCollection?.items.map((services: any) => (
				<React.Fragment key={services.image.sys.id}>
					<div className="flex flex-col">
						<img src={services.image.url} alt={services.image.title} loading="lazy" width={900} height={640} />
						<p className="mt-4 text-sm font-bold text-gray-900">{services.title}</p>
						<p className="mt-4 text-sm font-normal text-gray-900">{services.question}</p>
						<p className="mt-4 text-sm font-normal text-gray-900">{services.text}</p>
						<Link className="mt-4" to={services.url}>
							<span className="border-b border-b-primary text-sm font-normal text-primary hover:opacity-80">Saber mais</span>
						</Link>
					</div>
				</React.Fragment>
			))}
			</div>
		</React.Fragment>
	);
};

export default TestingC;
