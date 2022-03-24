import React from 'react';

// Components
import BreakTitle from '../components/BreakTitle/BreakTitle';
import SimpleCard from '../components/SimpleCard/SimpleCard';

// Images
import BannerImage from '../assets/Homepage/Basicamente-Header.jpeg';
import ComércioDigitalImage from '../assets/Homepage/eCommerce.png';
import MarketingDigitalPerformanceImage from '../assets/Homepage/MarketingPerformance.png';
import UIUXDesignImage from '../assets/Homepage/UIUxDesign.png';
import WebDevelopmentImage from '../assets/Homepage/Software,CRM,Data.png';

import eCommerceMahrla from '../assets/Homepage/eCommerce-Mahrla.png';
import eCommerceB2Jovaty from '../assets/Homepage/eCommerceB2Jovaty.png';
import CaseParissete from '../assets/Homepage/Case-Parissete.png';

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
			<div className="mx-auto max-w-max px-4">
				<BreakTitle title="Em que podemos ajudar?" />
				<div className="flex flex-col flex-wrap items-center md:items-start justify-evenly gap-x-10 gap-y-10 align-middle md:flex-row">
					<SimpleCard
						size='max-w-xs'
						image={ComércioDigitalImage}
						altText="Comércio Digital"
						title="Comércio Digital"
						subTitle="Pretende vender on-line?"
						text="Implementamos soluções eCommerce B2C, eCommerce B2B, Order Management System, Headless Commerce e Live eCommerce Stream."
						urlTitle="Saber mais"
						internalHref="solucoes/comercio-digital"
					/>
					<SimpleCard
						size='max-w-xs'
						image={MarketingDigitalPerformanceImage}
						altText="Marketing Digital e Performance"
						title="Marketing Digital e Performance"
						subTitle="Procura impulsionar o seu negócio?"
						text="Somos focados em Estratégia Digital, Design e Gestão de
						Redes Sociais, Performance e E-mail Marketing,
						Consultoria e Advising Digital."
						urlTitle="Saber mais"
						internalHref="solucoes/marketing-digital-performance"
					/>
					<SimpleCard
						size='max-w-xs'
						image={UIUXDesignImage}
						altText="UI/UX Design"
						title="UI/UX Design"
						subTitle="Pretende proporcionar uma melhor experiência?"
						text="Somos focados em melhorar a experiência de produtos e
						serviços digitais, trazendo resultados incríveis para o
						negócio."
						urlTitle="Saber mais"
						internalHref="solucoes/uiux-design"
					/>
					<SimpleCard
						size='max-w-xs'
						image={WebDevelopmentImage}
						altText="Web Development"
						title="Web Development"
						subTitle="Faz tarefas manualmente?"
						text="Otimize processos, acelere a transformação digital e
						desenhe novas experiências, tirand melhor partido da
						tecnologia, obtendo dados em tempo real."
						urlTitle="Saber mais"
						internalHref="solucoes/web-development"
					/>
				</div>
				<BreakTitle title="Projetos em destaque" />
				<div className="flex flex-col flex-wrap items-center md:items-start justify-evenly gap-x-8 gap-y-10 align-middle md:flex-row">
					<SimpleCard
						size='max-w-md'
						image={eCommerceMahrla}
						altText="eCommerce B2C Mahrla"
						title="eCommerce B2C Mahrla"
						text="Implementação de um eCommerce B2C e sistema de gestão de encomendas (OMS), suportados pelas tecnologias Shopify, Node.JS, React.JS e Moloni."
						urlTitle="Contacte-nos para saber mais"
						externalHref="mailto:askus@basicamente.io?subject=Quero%20saber%20mais%20sobre%20o%20projeto%20Mahrla"
					/>
					<SimpleCard
						size='max-w-md'
						image={eCommerceB2Jovaty}
						altText="eCommerce B2B Jovaty"
						title="eCommerce B2B Jovaty"
						text="Implementação de um eCommerce B2B sincronizado com o ERP Primavera, disponibilizando listas de preço por cliente e plataforma de encomendas BSP Commerce."
						urlTitle="Contacte-nos para saber mais"
						externalHref="mailto:askus@basicamente.io?subject=Quero%20saber%20mais%20sobre%20o%20projeto%20Mahrla"
					/>
					<SimpleCard
						size='max-w-md'
						image={CaseParissete}
						altText="Data Collector Paris:sete"
						title="Data Collector Paris:sete"
						text="Implementação de uma solução de Data Collector (web scraping) baseado em Inteligência Artificial, para análise de preço e produtos dos competitors em 300.000 sku's."
						urlTitle="Contacte-nos para saber mais"
						externalHref="mailto:askus@basicamente.io?subject=Quero%20saber%20mais%20sobre%20o%20projeto%20Mahrla"
					/>
				</div>
			</div>
		</>
	);
};

export default Homepage;
