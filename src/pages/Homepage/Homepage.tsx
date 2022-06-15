import React from 'react';

// Components
import BreakTitle from '../../components/BreakTitle/BreakTitle';
import InputBox from '../../components/InputBox/InputBox';
import TextArea from '../../components/TextArea/TextArea';

import HeaderLoadingSkeleton from '../../components/Header/HeaderLoadingSkeleton';
import ServicesCardLoadingSkeleton from '../../components/ServicesCard/ServicesCardLoadingSkeleton';
import ProjectsCardLoadingSkeleton from '../../components/ProjectsCard/ProjectsCardLoadingSkeleton';
import PartnersLoadingSkeleton from '../../components/Partners/PartnersLoadingSkeleton';

// Background Images
import FooterImage from '../../assets/Homepage/Basicamente-Footer.jpg';

// Queries
import { HOMEPAGE_HEADER, HOMEPAGE_SERVICES, HOMEPAGE_PROJECTS, HOMEPAGE_PARTNERS } from '../../graphql/Queries';

const Header = React.lazy(() => import('../../components/Header/Header'));
const ServicesCard = React.lazy(() => import('../../components/ServicesCard/ServicesCard'));
const ProjectsCard = React.lazy(() => import('../../components/ProjectsCard/ProjectsCard'));
const Partners = React.lazy(() => import('../../components/Partners/Partners'));

const Homepage: React.FunctionComponent = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		alert('Formulário enviado com sucesso!');
		e.preventDefault();
	};

	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={HOMEPAGE_HEADER} />
			</React.Suspense>			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<BreakTitle title="Em que podemos ajudar?" />
				<React.Suspense fallback={<ServicesCardLoadingSkeleton quantity={4} />}>
					<ServicesCard query={HOMEPAGE_SERVICES} />
				</React.Suspense>
				<BreakTitle title="Projetos em destaque" />
				<React.Suspense fallback={<ProjectsCardLoadingSkeleton quantity={3} />}>
					<ProjectsCard query={HOMEPAGE_PROJECTS} />
				</React.Suspense>
				<BreakTitle title="Dezenas de marcas confiam na Basicamente" />
				<React.Suspense fallback={<PartnersLoadingSkeleton quantity={6} />}>
					<Partners query={HOMEPAGE_PARTNERS} />
				</React.Suspense>
			</div>


			<div
				className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-16 lg:py-28"
				style={{ backgroundImage: `url(${FooterImage})` }}
			>
				<div className="space-y-8 text-center leading-loose text-white lg:w-1/2">
					<h1 className="text-xl font-medium lg:text-3xl">
						Basicamente, vamos conversar?
					</h1>
					<p className="text-base font-light leading-normal">
						Teremos ao seu dispor uma equipa de profissionais
						disponível a ajudá-lo.
					</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="mt-8 flex w-4/5 flex-col flex-wrap justify-center gap-y-6 text-white lg:w-1/2"
				>
					<div className="inline-flex w-full items-end justify-between gap-x-2">
						<div className="flex grow flex-col">
							<InputBox
								id="name"
								title="Nome"
								subTitle="Nome *"
								type="text"
							/>
						</div>
						<div className="flex grow flex-col">
							<InputBox
								id="surname"
								title="Sobrenome"
								type="text"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<InputBox
							id="email"
							title="O seu e-mail *"
							type="email"
						/>
					</div>
					<div className="flex flex-col">
						<InputBox
							id="telephone"
							title="Telefone *"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<InputBox
							id="company"
							title="A sua empresa *"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<TextArea
							id="message"
							title="Conte-nos o seu projeto *"
							row={4}
							col={2}
						/>
					</div>
					<div className="flex flex-row justify-center">
						<button
							type="submit"
							className="whitespace-nowrap rounded-none border border-transparent bg-primary px-8 py-4 text-sm font-thin text-white shadow-sm hover:opacity-80"
						>
							Desejo ser contactado
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
