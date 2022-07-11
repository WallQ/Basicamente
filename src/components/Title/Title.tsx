import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { MultilingualContextType, MultilingualContext } from "../../contexts/MultilingualContext";

import LoadingSkeleton from "./TitleLoadingSkeleton";
import ErrorBoundary from "./TitleErrorBoundary";

interface Props {
	query: DocumentNode;
}

const Title: React.FunctionComponent<Props> = ({ query }) => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, { variables: { language } });

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.title && (
				<React.Fragment>
					<h2 className="text-center text-2xl font-medium text-primary">
						{data.title.title}
					</h2>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default React.memo(Title);
