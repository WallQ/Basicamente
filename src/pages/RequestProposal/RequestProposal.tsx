import React from "react";
import { PROPOSAL_FORM } from "../../graphql/Queries";

// Loading Skeletons
import ProposalFormLoadingSkeleton from "../../components/ProposalForm/ProposalFormLoadingSkeleton";

// Components
const ProposalForm = React.lazy(() => import("../../components/ProposalForm/ProposalForm"));

const RequestProposal: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<ProposalFormLoadingSkeleton />}>
				<ProposalForm query={PROPOSAL_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default RequestProposal;
