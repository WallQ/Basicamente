import React from 'react';

// Components
import BreakTitle from '../../components/BreakTitle/BreakTitle';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import InputBox from '../../components/InputBox/InputBox';
import TextArea from '../../components/TextArea/TextArea';
import Header from '../../components/Header/Header';
import HeaderLoading from '../../components/Header/HeaderLoading';

// Background Images
import FooterImage from '../../assets/Homepage/Basicamente-Footer.jpg';

// Data
import { useQuery } from '@apollo/client';
import { HOMEPAGE_CONTENT } from '../../graphqL/Queries';

const Homepage: React.FunctionComponent = () => {
	const { error, loading, data } = useQuery<any>(HOMEPAGE_CONTENT);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		alert('Formulário enviado com sucesso!');
		e.preventDefault();
	};

	return (
		<React.Fragment>
			{loading ? (
				<HeaderLoading button={false} />
			) : (
				data?.homepageHeaderCollection && (
					<Header
						image={data.homepageHeaderCollection.items[0].image.url}
						title={data.homepageHeaderCollection.items[0].title}
						text={data.homepageHeaderCollection.items[0].text}
						button={false}
					/>
				)
			)}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<BreakTitle title="Em que podemos ajudar?" />
				{loading ? (
					<h1>Loading Service Cards...</h1>
				) : (
					data?.homepageServicesCollection && (
						<div className="grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
							{data.homepageServicesCollection.items.map((services: any) => (
								<ServicesCard
									key={services.image.sys.id}
									image={services.image.url}
									altText={services.image.title}
									title={services.title}
									question={services.question}
									text={services.text}
									urlTitle={"Saber mais"}
									url={services.url}
								/>
							))}
						</div>
					)
				)}				
				<BreakTitle title="Projetos em destaque" />
				{loading ? (
					<h1>Loading Project Cards...</h1>
				) : (
					data?.homepageProjectsCollection && (
						<div className="grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
							{data.homepageProjectsCollection.items.map((projects: any) => (
								<ProjectCard
									key={projects.image.sys.id}
									image={projects.image.url}
									altText={projects.image.title}
									title={projects.title}
									text={projects.text}
									urlTitle={"Contacte-nos para saber mais"}
									url={projects.url}
								/>
							))}
						</div>
					)
				)}				
				<BreakTitle title="Dezenas de marcas confiam na Basicamente" />
				{loading ? (
					<h1>Loading Partners...</h1>
				) : (
					data?.homepagePartnersCollection && (
						<div className="grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
							{data.homepagePartnersCollection.items.map((partners: any, index: number) => (
								partners.imagesCollection.items.map((partner: any) => (
									<img
									key={partner.sys.id}
									className="w-4/5"
									src={partner.url}
									alt={partner.title}
									loading="lazy"
								/>
								))
							))}
						</div>
					)
				)}
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
