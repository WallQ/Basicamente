import React from "react";
import { TERMSCONDITIONS_TEXT } from "../../graphql/Queries";

// Loading Skeletons
import TextLoadingSkeleton from "../../components/Text/TextLoadingSkeleton";

// Components
const Text = React.lazy(() => import("../../components/Text/Text"));

const TermsConditions: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<React.Suspense fallback={<TextLoadingSkeleton />}>
					<Text query={TERMSCONDITIONS_TEXT} />
				</React.Suspense>
			</div>
		</React.Fragment>
	);
};

export default TermsConditions;