import React from "react";
import { ABOUTPAGE_HEADER, ABOUTPAGE_TEXT, ABOUTPAGE_TITLE, ABOUTPAGE_PARTNERS } from "../../graphql/Queries";

// Loading Skeletons
import HeaderLoadingSkeleton from "../../components/Header/HeaderLoadingSkeleton";
import TextLoadingSkeleton from "../../components/Text/TextLoadingSkeleton";
import TitleLoadingSkeleton from "../../components/Title/TitleLoadingSkeleton";
import PartnersLoadingSkeleton from "../../components/Partners/PartnersLoadingSkeleton";

// Components
const Header = React.lazy(() => import("../../components/Header/Header"));
const Text = React.lazy(() => import("../../components/Text/Text"));
const Title = React.lazy(() => import("../../components/Title/Title"));
const Partners = React.lazy(() => import("../../components/Partners/Partners"));

const About: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={ABOUTPAGE_HEADER} />
			</React.Suspense>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<React.Suspense fallback={<TextLoadingSkeleton />}>
					<Text query={ABOUTPAGE_TEXT} />
				</React.Suspense>
				<React.Suspense fallback={<TitleLoadingSkeleton />}>
					<Title query={ABOUTPAGE_TITLE} />
				</React.Suspense>
				<React.Suspense
					fallback={<PartnersLoadingSkeleton quantity={18} />}>
					<Partners query={ABOUTPAGE_PARTNERS} quantity={18} />
				</React.Suspense>
			</div>
		</React.Fragment>
	);
};

export default About;
