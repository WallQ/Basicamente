import React from "react";
import { DocumentNode, useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
	MultilingualContextType,
	MultilingualContext,
} from "../../contexts/MultilingualContext";
import richTextOptions from "../../utils/richTextOptions";

import LoadingSkeleton from "./TextLoadingSkeleton";
import ErrorBoundary from "./TextErrorBoundary";

interface Props {
	query: DocumentNode;
}

const Text: React.FunctionComponent<Props> = ({ query }) => {
	const { language } = React.useContext(
		MultilingualContext,
	) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(query, {
		variables: { language },
	});

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			{data && data.text && (
				<div className="mx-auto py-12">
					<div className="flex flex-col flex-wrap items-center justify-center gap-y-4">
						<div className="whitespace-pre-wrap text-base font-normal text-gray-900">
							{documentToReactComponents(
								data.text.text.json,
								richTextOptions,
							)}
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default React.memo(Text);
