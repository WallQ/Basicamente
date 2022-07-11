import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { MultilingualContextType, MultilingualContext } from "../../contexts/MultilingualContext";

import LoadingSkeleton from "./PartnersLoadingSkeleton";
import ErrorBoundary from "./PartnersErrorBoundary";

interface Props {
	query: DocumentNode;
	quantity?: number;
}

const Partners: React.FunctionComponent<Props> = ({ query, quantity }) => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, { variables: { language } });

	if (loading) return <LoadingSkeleton quantity={quantity || 3} />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
				{data && data.partners.imagesCollection?.items.map((partner: any) => (
					<img key={partner.sys.id} className="h-auto w-full" src={partner.url} alt={partner.title} loading="lazy" width={500} height={300} />
				))}
			</div>
		</React.Fragment>
	);
};

export default React.memo(Partners);
