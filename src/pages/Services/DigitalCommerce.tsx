import React from "react";
import { SERVICES_DIGITALCOMMERCEPAGE_HEADER, SERVICES_DIGITALCOMMERCEPAGE_SOLUTIONS, SERVICES_DIGITALCOMMERCEPAGE_SOLUTIONS_2, SERVICES_DIGITALCOMMERCEPAGE_PARTNERS, CONTACT_FORM } from "../../graphql/Queries";

// Loading Skeletons
import HeaderLoadingSkeleton from "../../components/Header/HeaderLoadingSkeleton";
import SolutionsLoadingSkeleton from "../../components/Solutions/SolutionsLoadingSkeleton";
import PartnersLoadingSkeleton from "../../components/Partners/PartnersLoadingSkeleton";
import ContactFormLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";

// Components
const Header = React.lazy(() => import("../../components/Header/Header"));
const Solutions = React.lazy(() => import("../../components/Solutions/Solutions"));
const Partners = React.lazy(() => import("../../components/Partners/Partners"));
const ContactForm = React.lazy(() => import("../../components/ContactForm/ContactForm"));

const DigitalCommerce: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={SERVICES_DIGITALCOMMERCEPAGE_HEADER} />
			</React.Suspense>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<React.Suspense fallback={<SolutionsLoadingSkeleton quantity={2} />}>
					<Solutions query={SERVICES_DIGITALCOMMERCEPAGE_SOLUTIONS} />
				</React.Suspense>
				<React.Suspense fallback={<SolutionsLoadingSkeleton quantity={2} />}>
					<Solutions query={SERVICES_DIGITALCOMMERCEPAGE_SOLUTIONS_2} />
				</React.Suspense>
				<React.Suspense fallback={<PartnersLoadingSkeleton quantity={3} />}>
					<Partners query={SERVICES_DIGITALCOMMERCEPAGE_PARTNERS} />
				</React.Suspense>
			</div>
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={CONTACT_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default DigitalCommerce;
