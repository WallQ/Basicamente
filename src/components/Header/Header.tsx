import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { MultilingualContextType, MultilingualContext } from "../../contexts/MultilingualContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import richTextOptions from "../../utils/richTextOptions";

import LoadingSkeleton from "./HeaderLoadingSkeleton";
import ErrorBoundary from "./HeaderErrorBoundary";

interface Props {
	query: DocumentNode;
}

const Header: React.FunctionComponent<Props> = ({ query }) => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, { variables: { language } });

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.header && (
				<React.Fragment>
					<div className="bg-primary bg-cover bg-center bg-no-repeat py-24 lg:py-48" style={{backgroundImage: `url(${data.header.image.url})`}}>
						<div className="container mx-auto flex flex-col items-center justify-center gap-y-8 px-4 text-center text-white sm:px-6 lg:px-8 xl:w-2/3">
							<h1 className="text-2xl font-medium lg:text-4xl">
								{data.header.title}
							</h1>
							<div className="text-base font-light lg:text-2xl">
								{documentToReactComponents(data.header.text.json, richTextOptions)}
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default React.memo(Header);
