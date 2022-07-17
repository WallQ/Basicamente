import React from "react";
import { SERVICES_WEBDEVELOPMENTPAGE_HEADER, SERVICES_WEBDEVELOPMENTPAGE_TEXT, SERVICES_WEBDEVELOPMENTPAGE_TEXT_2, SERVICES_WEBDEVELOPMENTPAGE_PARTNERS, CONTACT_FORM } from "../../graphql/Queries";

// Components
import SideToSide from "../../components/SideToSide/SideToSide";

// Loading Skeletons
import HeaderLoadingSkeleton from "../../components/Header/HeaderLoadingSkeleton";
import TextLoadingSkeleton from "../../components/Text/TextLoadingSkeleton";
import PartnersLoadingSkeleton from "../../components/Partners/PartnersLoadingSkeleton";
import ContactFormLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";

// Components
const Header = React.lazy(() => import("../../components/Header/Header"));
const Text = React.lazy(() => import("../../components/Text/Text"));
const Partners = React.lazy(() => import("../../components/Partners/Partners"));
const ContactForm = React.lazy(() => import("../../components/ContactForm/ContactForm"));

const WebDevelopment: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={SERVICES_WEBDEVELOPMENTPAGE_HEADER} />
			</React.Suspense>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SideToSide>
					<React.Suspense fallback={<TextLoadingSkeleton />}>
						<Text query={SERVICES_WEBDEVELOPMENTPAGE_TEXT} />
					</React.Suspense>
					<React.Suspense fallback={<TextLoadingSkeleton />}>
						<Text query={SERVICES_WEBDEVELOPMENTPAGE_TEXT_2} />
					</React.Suspense>
				</SideToSide>
				<React.Suspense fallback={<PartnersLoadingSkeleton quantity={3} />}>
					<Partners query={SERVICES_WEBDEVELOPMENTPAGE_PARTNERS} />
				</React.Suspense>
			</div>
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={CONTACT_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default WebDevelopment;
