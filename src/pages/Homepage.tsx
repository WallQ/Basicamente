import React from 'react';

// Components
import SimpleCard from '../components/SimpleCard/SimpleCard';

// Images
import BannerImage from '../assets/Homepage/BasicamenteBanner.jpeg';
import ComércioDigitalImage from '../assets/Homepage/eCommerce.png';
import MarketingDigitalPerformanceImage from '../assets/Homepage/MarketingPerformance.png';
import UIUXDesignImage from '../assets/Homepage/UIUxDesign.png';
import WebDevelopmentImage from '../assets/Homepage/Software,CRM,Data.png';

const Homepage: React.FunctionComponent = () => {
	return (
		<>
			<div
				className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-44"
				style={{ backgroundImage: `url(${BannerImage})` }}
			>
				<div className="m-auto w-1/2 space-y-8 text-center leading-loose text-white">
					<h1 className="text-4xl font-medium">
						Aceleramos a sua Transformação Digital
					</h1>
					<p className="text-2xl font-light leading-normal">
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
			<div className="py-12">
				<h2 className="whitespace-pre-wrap text-center text-2xl font-medium text-primary">
					Em que podemos ajudar?
				</h2>
			</div>
			<div className="flex flex-col flex-wrap items-start justify-evenly gap-x-4 gap-y-8 align-middle md:flex-row">
				<SimpleCard
					image={ComércioDigitalImage}
					altText="Comércio Digital"
					title="Comércio Digital"
					subTitle="Pretende vender on-line?"
					text="Implementamos soluções eCommerce B2C, eCommerce B2B, Order Management System, Headless Commerce e Live eCommerce Stream."
					urlTitle="Saber mais"
					href="solucoes/comercio-digital"
				/>
				<SimpleCard
					image={MarketingDigitalPerformanceImage}
					altText="Marketing Digital e Performance"
					title="Marketing Digital e Performance"
					subTitle="Procura impulsionar o seu negócio?"
					text="Somos focados em Estratégia Digital, Design e Gestão de
					Redes Sociais, Performance e E-mail Marketing,
					Consultoria e Advising Digital."
					urlTitle="Saber mais"
					href="solucoes/marketing-digital-performance"
				/>
				<SimpleCard
					image={UIUXDesignImage}
					altText="UI/UX Design"
					title="UI/UX Design"
					subTitle="Pretende proporcionar uma melhor experiência?"
					text="Somos focados em melhorar a experiência de produtos e
					serviços digitais, trazendo resultados incríveis para o
					negócio."
					urlTitle="Saber mais"
					href="solucoes/uiux-design"
				/>
				<SimpleCard
					image={WebDevelopmentImage}
					altText="Web Development"
					title="Web Development"
					subTitle="Faz tarefas manualmente?"
					text="Otimize processos, acelere a transformação digital e
					desenhe novas experiências, tirand melhor partido da
					tecnologia, obtendo dados em tempo real."
					urlTitle="Saber mais"
					href="solucoes/web-development"
				/>
			</div>
		</>
	);
};

export default Homepage;
