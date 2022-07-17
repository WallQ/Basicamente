import React from "react";
import {
	SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_HEADER,
	SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_TITLE,
	SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_HELPITEM,
	SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_TEXT,
	SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_PARTNERS,
	CONTACT_FORM,
} from "../../graphql/Queries";

// Loading Skeletons
import HeaderLoadingSkeleton from "../../components/Header/HeaderLoadingSkeleton";
import TitleLoadingSkeleton from "../../components/Title/TitleLoadingSkeleton";
import HelpItemLoadingSkeleton from "../../components/HelpItem/HelpItemLoadingSkeleton";
import TextLoadingSkeleton from "../../components/Text/TextLoadingSkeleton";
import PartnersLoadingSkeleton from "../../components/Partners/PartnersLoadingSkeleton";
import ContactFormLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";

// Components
const Header = React.lazy(() => import("../../components/Header/Header"));
const Title = React.lazy(() => import("../../components/Title/Title"));
const HelpItem = React.lazy(() => import("../../components/HelpItem/HelpItem"));
const Text = React.lazy(() => import("../../components/Text/Text"));
const Partners = React.lazy(() => import("../../components/Partners/Partners"));
const ContactForm = React.lazy(() => import("../../components/ContactForm/ContactForm"));

const MarketingDigitalPerformance: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_HEADER} />
			</React.Suspense>
			<div className="container mx-auto px-4 pt-12 sm:px-6 lg:px-8">
				<React.Suspense fallback={<TitleLoadingSkeleton />}>
					<Title query={SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_TITLE} />
				</React.Suspense>
				<React.Suspense fallback={<HelpItemLoadingSkeleton quantity={6} />}>
					<HelpItem query={SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_HELPITEM} />
				</React.Suspense>
				<div className="mx-auto w-3/5 text-center">
					<React.Suspense fallback={<TextLoadingSkeleton />}>
						<Text query={SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_TEXT} />
					</React.Suspense>
				</div>
				<React.Suspense fallback={<PartnersLoadingSkeleton quantity={3} />}>
					<Partners query={SERVICES_MARKETINGDIGITALPERFORMANCEPAGE_PARTNERS} />
				</React.Suspense>
			</div>
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={CONTACT_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default MarketingDigitalPerformance;
