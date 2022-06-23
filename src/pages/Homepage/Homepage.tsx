import React from 'react';
import { useQuery } from '@apollo/client';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';
import { HOMEPAGE_HEADER, HOMEPAGE_TITLE, HOMEPAGE_SERVICES, HOMEPAGE_PROJECTS, HOMEPAGE_PARTNERS, HOMEPAGE_CONTACT } from '../../graphql/Queries';

// Components
import Title from '../../components/Title/Title';

// Loading Skeletons
import PageLoadingSkeleton from '../../components/PageLoadingSkeleton/PageLoadingSkeleton';
import HeaderLoadingSkeleton from '../../components/Header/HeaderLoadingSkeleton';
import ServicesCardLoadingSkeleton from '../../components/ServicesCard/ServicesCardLoadingSkeleton';
import ProjectsCardLoadingSkeleton from '../../components/ProjectsCard/ProjectsCardLoadingSkeleton';
import PartnersLoadingSkeleton from '../../components/Partners/PartnersLoadingSkeleton';
import ContactFormLoadingSkeleton from '../../components/ContactForm/ContactFormLoadingSkeleton';

// Error Boundary
import ErrorBoundary from '../../components/PageErrorBoundary/PageErrorBoundary';

// Components
const Header = React.lazy(() => import('../../components/Header/Header'));
const ServicesCard = React.lazy(() => import('../../components/ServicesCard/ServicesCard'));
const ProjectsCard = React.lazy(() => import('../../components/ProjectsCard/ProjectsCard'));
const Partners = React.lazy(() => import('../../components/Partners/Partners'));
const ContactForm = React.lazy(() => import('../../components/ContactForm/ContactForm'));

const Homepage: React.FunctionComponent = () => {
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;
	const { loading, error, data } = useQuery<any>(HOMEPAGE_TITLE, {variables: { language }});

	if (loading) return <PageLoadingSkeleton />;
	if (error) return <ErrorBoundary message={error.message} />;

	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={HOMEPAGE_HEADER} />
			</React.Suspense>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<Title title={data.homepageTitleCollection.items[0].title} />
				<React.Suspense fallback={<ServicesCardLoadingSkeleton quantity={4} />}>
					<ServicesCard query={HOMEPAGE_SERVICES} />
				</React.Suspense>
				<Title title={data.homepageTitleCollection.items[1].title} />
				<React.Suspense fallback={<ProjectsCardLoadingSkeleton quantity={3} />}>
					<ProjectsCard query={HOMEPAGE_PROJECTS} />
				</React.Suspense>
				<Title title={data.homepageTitleCollection.items[2].title} />
				<React.Suspense fallback={<PartnersLoadingSkeleton quantity={6} />}>
					<Partners query={HOMEPAGE_PARTNERS} />
				</React.Suspense>
			</div>
			<React.Suspense fallback={<ContactFormLoadingSkeleton />}>
				<ContactForm query={HOMEPAGE_CONTACT} />
			</React.Suspense>
		</React.Fragment>
	);
};

export default React.memo(Homepage);
