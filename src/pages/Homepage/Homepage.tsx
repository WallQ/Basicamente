import React from 'react';

// Components
import BreakTitle from '../../components/BreakTitle/BreakTitle';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import InputBox from '../../components/InputBox/InputBox';
import TextArea from '../../components/TextArea/TextArea';
import Header from '../../components/Header/Header';
import HeaderLoading from '../../components/Header/HeaderLoading';

// Background Images
import FooterImage from '../../assets/Homepage/Basicamente-Footer.jpg';

// Data
import { useQuery } from '@apollo/client';
import { HOMEPAGE_CONTENT } from '../../graphqL/Queries';
import { services, works, partners } from './_data';

const Homepage: React.FunctionComponent = () => {
	const { error, loading, data } = useQuery<any>(HOMEPAGE_CONTENT);

	// debug
	console.error(error);
	console.log(loading);
	console.log(data);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		alert('Formulário enviado com sucesso!');
		e.preventDefault();
	};

	return (
		<React.Fragment>
			{loading ? (
				<HeaderLoading button={false} />
			) : (
				data.homepageHeaderCollection && (
					<Header
						image={data.homepageHeaderCollection.items[0].image.url}
						title={data.homepageHeaderCollection.items[0].title}
						text={data.homepageHeaderCollection.items[0].text}
						button={false}
					/>
				)
			)};
			<div className="mx-auto max-w-max px-8">
				<BreakTitle title="Em que podemos ajudar?" />
				<div className="flex min-w-full flex-col flex-wrap items-center justify-evenly gap-x-8 gap-y-10 align-middle md:flex-row md:items-start">
					{services.map((service, index) => (
						<SimpleCard
							key={service.title + index}
							size={service.size}
							image={service.image}
							altText={service.altText}
							title={service.title}
							subTitle={service.subTitle}
							text={service.text}
							urlTitle={service.urlTitle}
							internalHref={service.internalHref}
						/>
					))}
				</div>
				<BreakTitle title="Projetos em destaque" />
				<div className="flex flex-col flex-wrap items-center justify-evenly gap-x-8 gap-y-10 align-middle md:flex-row md:items-start">
					{works.map((work, index) => (
						<SimpleCard
							key={work.title + index}
							size={work.size}
							image={work.image}
							altText={work.altText}
							title={work.title}
							text={work.text}
							urlTitle={work.urlTitle}
							externalHref={work.externalHref}
						/>
					))}
				</div>
				<BreakTitle title="Dezenas de marcas confiam na Basicamente" />
				<div className="grid grid-cols-1 content-center justify-items-center gap-y-6 pb-12 lg:grid-cols-3">
					{partners.map((partner, index) => (
						<img
							key={partner.altText + index}
							className="w-4/5"
							src={partner.image}
							alt={partner.altText}
							loading="lazy"
						/>
					))}
				</div>
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
