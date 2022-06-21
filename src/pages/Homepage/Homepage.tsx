import React from 'react';

// Context
import { MultilingualContext } from '../../contexts/LanguageContext';

// Components
import BreakTitle from '../../components/BreakTitle/BreakTitle';

// Loading Skeletons
import HeaderLoadingSkeleton from '../../components/Header/HeaderLoadingSkeleton';
import ServicesCardLoadingSkeleton from '../../components/ServicesCard/ServicesCardLoadingSkeleton';
import ProjectsCardLoadingSkeleton from '../../components/ProjectsCard/ProjectsCardLoadingSkeleton';
import PartnersLoadingSkeleton from '../../components/Partners/PartnersLoadingSkeleton';

// Components
const Header = React.lazy(() => import('../../components/Header/Header'));
const ServicesCard = React.lazy(() => import('../../components/ServicesCard/ServicesCard'));
const ProjectsCard = React.lazy(() => import('../../components/ProjectsCard/ProjectsCard'));
const Partners = React.lazy(() => import('../../components/Partners/Partners'));
const Contact = React.lazy(() => import('../../components/ContactForm/ContactForm'));


const Homepage: React.FunctionComponent = () => {
	const language = React.useContext(MultilingualContext);
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={language.homepage.Header} />
			</React.Suspense>			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<BreakTitle title="Em que podemos ajudar?" />
				<React.Suspense fallback={<ServicesCardLoadingSkeleton quantity={4} />}>
					<ServicesCard query={language.homepage.Services} />
				</React.Suspense>
				<BreakTitle title="Projetos em destaque" />
				<React.Suspense fallback={<ProjectsCardLoadingSkeleton quantity={3} />}>
					<ProjectsCard query={language.homepage.Projects} />
				</React.Suspense>
				<BreakTitle title="Dezenas de marcas confiam na Basicamente" />
				<React.Suspense fallback={<PartnersLoadingSkeleton quantity={6} />}>
					<Partners query={language.homepage.Partners} />
				</React.Suspense>
			</div>
			<Contact query={language.homepage.Contact} />
		</React.Fragment>
	);
};

export default Homepage;
