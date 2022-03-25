import React from 'react';

// Components
import BreakTitle from '../components/BreakTitle/BreakTitle';
import SimpleCard from '../components/SimpleCard/SimpleCard';

// Background Images
import BannerImage from '../assets/Homepage/Basicamente-Header.jpeg';
import FooterImage from '../assets/Homepage/Basicamente-Footer.jpg';

// Card Images
import ComércioDigitalImage from '../assets/Homepage/eCommerce.png';
import MarketingDigitalPerformanceImage from '../assets/Homepage/MarketingPerformance.png';
import UIUXDesignImage from '../assets/Homepage/UIUxDesign.png';
import WebDevelopmentImage from '../assets/Homepage/Software,CRM,Data.png';

// Works Images
import eCommerceMahrla from '../assets/Homepage/eCommerce-Mahrla.png';
import eCommerceB2Jovaty from '../assets/Homepage/eCommerceB2Jovaty.png';
import CaseParissete from '../assets/Homepage/Case-Parissete.png';

// Partner Images
import Partner1 from '../assets/Homepage/Partner-1.png';
import Partner2 from '../assets/Homepage/Partner-2.png';
import Partner3 from '../assets/Homepage/Partner-3.png';
import Partner4 from '../assets/Homepage/Partner-4.png';
import Partner5 from '../assets/Homepage/Partner-5.png';
import Partner6 from '../assets/Homepage/Partner-6.png';

const Homepage: React.FunctionComponent = () => {
	return (
		<>
			<div
				className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-28 lg:py-44"
				style={{ backgroundImage: `url(${BannerImage})` }}
			>
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
					<SimpleCard
						size="max-w-xs"
						image={ComércioDigitalImage}
						altText="Comércio Digital"
						title="Comércio Digital"
						subTitle="Pretende vender on-line?"
						text="Implementamos soluções eCommerce B2C, eCommerce B2B, Order Management System, Headless Commerce e Live eCommerce Stream."
						urlTitle="Saber mais"
						internalHref="solucoes/comercio-digital"
					/>
					<SimpleCard
						size="max-w-xs"
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
						size="max-w-xs"
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
						size="max-w-xs"
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
				<div className="flex flex-col flex-wrap items-center justify-evenly gap-x-8 gap-y-10 align-middle md:flex-row md:items-start">
					<SimpleCard
						size="max-w-md"
						image={eCommerceMahrla}
						altText="eCommerce B2C Mahrla"
						title="eCommerce B2C Mahrla"
						text="Implementação de um eCommerce B2C e sistema de gestão de encomendas (OMS), suportados pelas tecnologias Shopify, Node.JS, React.JS e Moloni."
						urlTitle="Contacte-nos para saber mais"
						externalHref="mailto:askus@basicamente.io?subject=Quero%20saber%20mais%20sobre%20o%20projeto%20Mahrla"
					/>
					<SimpleCard
						size="max-w-md"
						image={eCommerceB2Jovaty}
						altText="eCommerce B2B Jovaty"
						title="eCommerce B2B Jovaty"
						text="Implementação de um eCommerce B2B sincronizado com o ERP Primavera, disponibilizando listas de preço por cliente e plataforma de encomendas BSP Commerce."
						urlTitle="Contacte-nos para saber mais"
						externalHref="mailto:askus@basicamente.io?subject=Quero%20saber%20mais%20sobre%20o%20projeto%20Mahrla"
					/>
					<SimpleCard
						size="max-w-md"
						image={CaseParissete}
						altText="Data Collector Paris:sete"
						title="Data Collector Paris:sete"
						text="Implementação de uma solução de Data Collector (web scraping) baseado em Inteligência Artificial, para análise de preço e produtos dos competitors em 300.000 sku's."
						urlTitle="Contacte-nos para saber mais"
						externalHref="mailto:askus@basicamente.io?subject=Quero%20saber%20mais%20sobre%20o%20projeto%20Mahrla"
					/>
				</div>
				<BreakTitle title="Dezenas de marcas confiam na Basicamente " />
				<div className="grid grid-cols-3 content-center justify-items-center gap-y-6 pb-12">
					<img 
						className="w-4/5" 
						src={Partner1} 
						alt="Porto. & hôma" 
					/>
					<img
						className="w-4/5"
						src={Partner2}
						alt="mota-engil & Forcargo"
					/>
					<img
						className="w-4/5"
						src={Partner3}
						alt="P.Porto & Kaizen"
					/>
					<img
						className="w-4/5"
						src={Partner4}
						alt="321 Crédito & Halibut"
					/>
					<img
						className="w-4/5"
						src={Partner5}
						alt="Mattreness & Clínicas Nuno Mendes"
					/>
					<img
						className="w-4/5"
						src={Partner6}
						alt="Exaktus & Mahrla"
					/>
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
				<form className='flex flex-col flex-wrap text-white mt-8 w-1/2 justify-center gap-y-6'>
					<div className='inline-flex gap-x-2 w-full justify-between'>
						<div className='flex flex-col grow'>
							<label htmlFor="name" className="block text-sm font-thin text-white">
                                Nome *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
                                    aria-describedby="name-description"
                                />
                            </div>
                            <p className="mt-2 text-sm font-thin text-white" id="name-description">
                                Nome
                            </p>
						</div>
						<div className='flex flex-col grow'>
                            <div className="mt-6">
                                <input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
                                    aria-describedby="surname-description"
                                />
                            </div>
                            <p className="mt-2 text-sm font-thin text-white" id="surname-description">
                                Sobrenome
                            </p>
						</div>
					</div>
					<div className='flex flex-col'>
						<label htmlFor="email" className="block text-sm font-thin text-white">
							O seu e-mail *
						</label>
						<div className="mt-1">
							<input
								type="email"
								name="email"
								id="email"
								className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
								aria-describedby="email-description"
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label htmlFor="telephone" className="block text-sm font-thin text-white">
							Telefone *
						</label>
						<div className="mt-1">
							<input
								type="text"
								name="telephone"
								id="telephone"
								className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
								aria-describedby="telephone-description"
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label htmlFor="company" className="block text-sm font-thin text-white">
							A sua empresa *
						</label>
						<div className="mt-1">
							<input
								type="text"
								name="company"
								id="company"
								className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
								aria-describedby="company-description"
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label htmlFor="message" className="block text-sm font-thin text-white">
							Conte-nos o seu projeto *
						</label>
						<div className="mt-1">
							<textarea
                                rows={3}
                                name="message"
                                id="message"
                                className="block w-full rounded-sm border-gray-300 py-2.5 pl-4 text-gray-600 shadow-sm focus:ring-4 focus:ring-white sm:text-sm"
                                aria-describedby="message-description"
                            />
						</div>
					</div>
					<div className='flex flex-row justify-center'>
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
