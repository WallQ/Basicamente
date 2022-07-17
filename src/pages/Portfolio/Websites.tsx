import React from "react";
import { PORTFOLIO_WEBSITESPAGE_PORTFOLIO, CONTACT_FORM } from "../../graphql/Queries";

// Loading Skeletons
import ProjectsCardLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";
import ContactFormLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";

// Components
const PortfolioCard = React.lazy(() => import("../../components/PortfolioCard/PortfolioCard"));
const ContactForm = React.lazy(() => import("../../components/ContactForm/ContactForm"));

const Websites: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<ProjectsCardLoadingSkeleton />}>
				<PortfolioCard query={PORTFOLIO_WEBSITESPAGE_PORTFOLIO} />
			</React.Suspense>
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={CONTACT_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default Websites;
