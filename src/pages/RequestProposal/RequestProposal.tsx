import React from 'react';
import { PROPOSAL_FORM } from "../../graphql/Queries";

// Loading Skeletons
import ProposalFormLoadingSkeleton from "../../components/ProposalForm/ProposalForm";

// Components
const ProposalForm = React.lazy(() => import("../../components/ProposalForm/ProposalForm"));

const RequestProposal: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <ProposalForm query={PROPOSAL_FORM} />
			</div>
		</React.Fragment>
	);
};

export default RequestProposal;
