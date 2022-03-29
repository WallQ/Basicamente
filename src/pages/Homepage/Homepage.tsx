import React from 'react';

// Components
import BreakTitle from '../../components/BreakTitle/BreakTitle';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import InputBox from '../../components/InputBox/InputBox';
import TextArea from '../../components/TextArea/TextArea';

// Data
import { services } from './_services';
import { works } from './_works';

// Background Images
import BannerImage from '../../assets/Homepage/Basicamente-Header.jpeg';
import FooterImage from '../../assets/Homepage/Basicamente-Footer.jpg';

// Partner Images
import Partner1 from '../../assets/Homepage/Partner-1.png';
import Partner2 from '../../assets/Homepage/Partner-2.png';
import Partner3 from '../../assets/Homepage/Partner-3.png';
import Partner4 from '../../assets/Homepage/Partner-4.png';
import Partner5 from '../../assets/Homepage/Partner-5.png';
import Partner6 from '../../assets/Homepage/Partner-6.png';

const Homepage: React.FunctionComponent = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-28 lg:py-44" style={{ backgroundImage: `url(${BannerImage})` }}>
				<div className="m-auto w-2/3 space-y-8 text-center leading-loose text-white lg:w-1/2">
					<h1 className="text-xl font-medium lg:text-4xl">
						Aceleramos a sua Transformação Digital
					</h1>
					<p className="text-base font-light leading-normal lg:text-2xl">
						Ajudamos empresas e organizações a{' '}
						<span className="font-bold">
							Transformar, Inovar e a Escalar Negócios no Digital
						</span>
						, entregando soluções únicas e inovadoras de{' '}
						<span className="font-bold">Comércio Eletrónico</span>,{' '}
						<span className="font-bold">UI/UX</span>,{' '}
						<span className="font-bold">Web Development</span>,
						<span className="font-bold">Marketing Digital</span> e{' '}
						<span className="font-bold">Websites</span> e{' '}
						<span className="font-bold">Workplaces Digitais</span>.
					</p>
				</div>
			</div>
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
				<BreakTitle title="Dezenas de marcas confiam na Basicamente " />
				<div className="grid grid-cols-1 content-center justify-items-center gap-y-6 pb-12 lg:grid-cols-3">
					<img className="w-4/5" src={Partner1} alt="Porto. & hôma" />
					<img className="w-4/5" src={Partner2} alt="mota-engil & Forcargo" />
					<img className="w-4/5" src={Partner3} alt="P.Porto & Kaizen" />
					<img className="w-4/5" src={Partner4} alt="321 Crédito & Halibut" />
					<img className="w-4/5" src={Partner5} alt="Mattreness & Clínicas Nuno Mendes" />
					<img className="w-4/5" src={Partner6} alt="Exaktus & Mahrla" />
				</div>
			</div>
			<div className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-16 lg:py-28" style={{ backgroundImage: `url(${FooterImage})` }}>
				<div className="space-y-8 text-center leading-loose text-white lg:w-1/2">
					<h1 className="text-xl font-medium lg:text-3xl">
						Basicamente, vamos conversar?
					</h1>
					<p className="text-base font-light leading-normal">
						Teremos ao seu dispor uma equipa de profissionais
						disponível a ajudá-lo.
					</p>
				</div>
				<form className="mt-8 flex w-4/5 flex-col flex-wrap justify-center gap-y-6 text-white lg:w-1/2">
					<div className="inline-flex w-full items-end justify-between gap-x-2">
						<div className="flex grow flex-col">
							<InputBox id="name" title="Nome" subTitle="Nome *" type="text" />
						</div>
						<div className="flex grow flex-col">
							<InputBox id="surname" title="Sobrenome" type="text" />
						</div>
					</div>
					<div className="flex flex-col">
						<InputBox id="email" title="O seu e-mail *" type="email" />
					</div>
					<div className="flex flex-col">
						<InputBox id="telephone" title="Telefone *" type="text" />
					</div>
					<div className="flex flex-col">
						<InputBox id="company" title="A sua empresa *" type="text" />
					</div>
					<div className="flex flex-col">
						<TextArea id="message" title="Conte-nos o seu projeto *" row={4} col={2} />
					</div>
					<div className="flex flex-row justify-center">
						<button type="submit" className="whitespace-nowrap rounded-none border border-transparent bg-primary px-8 py-4 text-sm font-thin text-white shadow-sm hover:opacity-80">
							Desejo ser contactado
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Homepage;
