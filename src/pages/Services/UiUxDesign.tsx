import React from "react";
import { SERVICES_UIUXDESIGNPAGE_HEADER, SERVICES_UIUXDESIGNPAGE_TITLE, SERVICES_UIUXDESIGNPAGE_TEXT, SERVICES_UIUXDESIGNPAGE_TEXT_2, SERVICES_UIUXDESIGNPAGE_TEXT_3, SERVICES_UIUXDESIGNPAGE_PARTNERS, CONTACT_FORM } from "../../graphql/Queries";

// Components
import SideToSide from "../../components/SideToSide/SideToSide";

// Loading Skeletons
import HeaderLoadingSkeleton from "../../components/Header/HeaderLoadingSkeleton";
import TitleLoadingSkeleton from "../../components/Title/TitleLoadingSkeleton";
import TextLoadingSkeleton from "../../components/Text/TextLoadingSkeleton";
import PartnersLoadingSkeleton from "../../components/Partners/PartnersLoadingSkeleton";
import ContactFormLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";

// Components
const Header = React.lazy(() => import("../../components/Header/Header"));
const Title = React.lazy(() => import("../../components/Title/Title"));
const Text = React.lazy(() => import("../../components/Text/Text"));
const Partners = React.lazy(() => import("../../components/Partners/Partners"));
const ContactForm = React.lazy(() => import("../../components/ContactForm/ContactForm"));

const UiUxDesign: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={SERVICES_UIUXDESIGNPAGE_HEADER} />
			</React.Suspense>
			<div className="container mx-auto px-4 pt-12 sm:px-6 lg:px-8">
				<React.Suspense fallback={<TitleLoadingSkeleton />}>
					<Title query={SERVICES_UIUXDESIGNPAGE_TITLE} />
				</React.Suspense>
				<SideToSide>
					<div className="text-center lg:text-left">
						<React.Suspense fallback={<TextLoadingSkeleton />}>
							<Text query={SERVICES_UIUXDESIGNPAGE_TEXT} />
						</React.Suspense>
					</div>
					<div className="text-center lg:text-left">
						<React.Suspense fallback={<TextLoadingSkeleton />}>
							<Text query={SERVICES_UIUXDESIGNPAGE_TEXT_2} />
						</React.Suspense>
					</div>
				</SideToSide>
				<div className="mx-auto w-3/5 text-center">
					<React.Suspense fallback={<TextLoadingSkeleton />}>
						<Text query={SERVICES_UIUXDESIGNPAGE_TEXT_3} />
					</React.Suspense>
				</div>
				<React.Suspense
					fallback={<PartnersLoadingSkeleton quantity={3} />}>
					<Partners query={SERVICES_UIUXDESIGNPAGE_PARTNERS} />
				</React.Suspense>
			</div>
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={CONTACT_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default UiUxDesign;
