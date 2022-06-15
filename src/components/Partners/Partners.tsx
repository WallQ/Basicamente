import React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';

import LoadingSkeleton from './PartnersLoadingSkeleton';
import ErrorBoundary from './PartnersErrorBoundary';

interface Props {
	query: DocumentNode;
}

const Partners: React.FunctionComponent<Props> = ({ query }) => {
	const { loading, error, data } = useQuery<any>(query);

	if (loading) return <LoadingSkeleton quantity={3} />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
				{data && data.homepagePartnersCollection?.items.map((partners: any) => (
                    partners.imagesCollection?.items.map((partner: any) => (
                        <React.Fragment key={partner.sys.id}>
                            <img src={partner.url} alt={partner.title} loading="lazy" width={1500} height={300} />
                        </React.Fragment>
                    ))
				))}
			</div>
		</React.Fragment>
	);
};

export default Partners;
