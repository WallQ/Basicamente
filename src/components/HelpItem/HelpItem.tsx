import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { MultilingualContextType, MultilingualContext } from "../../contexts/MultilingualContext";

import LoadingSkeleton from "./HelpItemLoadingSkeleton";
import ErrorBoundary from "./HelpItemErrorBoundary";

interface Props {
	query: DocumentNode;
}

const HelpItem: React.FunctionComponent<Props> = ({ query }) => {
	const id = React.useId();

	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, { variables: { language } });

	if (loading) return <LoadingSkeleton quantity={2} />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-3">
				{data &&
					data.helpItemCollection?.items.map((helpItem: any, index: number) => (
						<React.Fragment key={`${id}-HelpItem-${index}`}>
							<div className="flex flex-col items-center justify-center gap-y-4 text-center">
								<h5 className="text-base font-normal text-primary">
									{helpItem.title}
								</h5>
								<p className="text-base font-normal text-gray-900">
									{helpItem.text}
								</p>
							</div>
						</React.Fragment>
					))}
			</div>
		</React.Fragment>
	);
};

export default React.memo(HelpItem);
