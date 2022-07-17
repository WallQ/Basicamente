import React from "react";
import { HOMEPAGE_HEADER, HOMEPAGE_TITLE, HOMEPAGE_TITLE_2, HOMEPAGE_TITLE_3, HOMEPAGE_SERVICES, HOMEPAGE_PROJECTS, HOMEPAGE_PARTNERS, CONTACT_FORM } from "../../graphql/Queries";

// Loading Skeletons
import HeaderLoadingSkeleton from "../../components/Header/HeaderLoadingSkeleton";
import TitleLoadingSkeleton from "../../components/Title/TitleLoadingSkeleton";
import ServicesCardLoadingSkeleton from "../../components/ServicesCard/ServicesCardLoadingSkeleton";
import ProjectsCardLoadingSkeleton from "../../components/ProjectsCard/ProjectsCardLoadingSkeleton";
import PartnersLoadingSkeleton from "../../components/Partners/PartnersLoadingSkeleton";
import ContactFormLoadingSkeleton from "../../components/ContactForm/ContactFormLoadingSkeleton";

// Components
const Header = React.lazy(() => import("../../components/Header/Header"));
const Title = React.lazy(() => import("../../components/Title/Title"));
const ServicesCard = React.lazy(() => import("../../components/ServicesCard/ServicesCard"));
const ProjectsCard = React.lazy(() => import("../../components/ProjectsCard/ProjectsCard"));
const Partners = React.lazy(() => import("../../components/Partners/Partners"));
const ContactForm = React.lazy(() => import("../../components/ContactForm/ContactForm"));

const Home: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={HOMEPAGE_HEADER} />
			</React.Suspense>
			<div className="container mx-auto px-4 pt-12 sm:px-6 lg:px-8">
				<React.Suspense fallback={<TitleLoadingSkeleton />}>
					<Title query={HOMEPAGE_TITLE} />
				</React.Suspense>
				<React.Suspense fallback={<ServicesCardLoadingSkeleton quantity={4} />}>
					<ServicesCard query={HOMEPAGE_SERVICES} />
				</React.Suspense>
				<React.Suspense fallback={<TitleLoadingSkeleton />}>
					<Title query={HOMEPAGE_TITLE_2} />
				</React.Suspense>
				<React.Suspense fallback={<ProjectsCardLoadingSkeleton quantity={3} />}>
					<ProjectsCard query={HOMEPAGE_PROJECTS} />
				</React.Suspense>
				<React.Suspense fallback={<TitleLoadingSkeleton />}>
					<Title query={HOMEPAGE_TITLE_3} />
				</React.Suspense>
				<React.Suspense fallback={<PartnersLoadingSkeleton quantity={6} />}>
					<Partners query={HOMEPAGE_PARTNERS} />
				</React.Suspense>
			</div>
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={CONTACT_FORM} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default Home;
