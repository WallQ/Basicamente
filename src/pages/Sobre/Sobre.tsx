import React from 'react';

// Components
import BreakTitle from '../../components/Title/Title';

// Background Images
import BannerImage from '../../assets/Sobre/Basicamente-Header.jpg';

// Data
import { partners } from './_data';

const Sobre = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-24 lg:py-56" style={{ backgroundImage: `url(${BannerImage})` }}>
				<div className="m-auto w-4/5 space-y-8 text-center leading-loose text-white lg:w-1/2">
					<h1 className="text-xl font-medium lg:text-4xl">
						Sobre a Basicamente Digital
					</h1>
					<p className="text-base font-light leading-normal lg:text-2xl">
						Mais do que um fornecedor de serviços,{' '}
						<span className="font-bold">
							somos um parceiro de negócio!
						</span>
					</p>
				</div>
			</div>
			<div className="mx-auto max-w-max px-12 lg:px-48">
                <div className='mx-auto max-w-5xl py-16 lg:py-44'>
                    <div className="flex flex-col flex-wrap items-center justify-center gap-y-4">
                        <p className="whitespace-pre-wrap text-center text-sm font-thin text-gray-900">
                            Basicamente, ajudamos empresas e organizações a
                            Transformar, Inovar e a Escalar Negócios no Digital,
                            entregando soluções únicas e inovadoras de Comércio
                            Eletrónico, UI/UX, Web Development, Marketing Digital,
                            Performance, Websites e Workplaces Digitais.
                        </p>
                        <p className="whitespace-pre-wrap text-center text-sm font-thin text-gray-900">
                            Presentes no mercado desde 2014, dispomos de uma equipa
                            qualificada de especialistas em Engenharia de Software &
                            Cloud, Análise de Sistemas, Design de Ui/UX, Marketing
                            Digital, Design, Performance, Comércio Digital e
                            Transformação Digital.
                        </p>
                        <p className="whitespace-pre-wrap text-center text-sm font-thin text-gray-900">
                            A nossa experiência e versatilidade, torna-nos capazes
                            de idealizar as melhores soluções para o seu negócio.
                        </p>
                        <p className="whitespace-pre-wrap text-center text-sm font-thin text-gray-900">
                            Faz parte do nosso ADN a parceria continua, a
                            transparência e ambição em entregar o máximo de valor
                            acrescentado.
                        </p>
                        <p className="whitespace-pre-wrap text-center text-sm font-thin text-gray-900">
                            Basicamente, o seu parceiro Digital.
                        </p>
                    </div>
                </div>
                <BreakTitle title="Estamos ao seu lado, sempre!" />
                <div className="grid grid-cols-1 content-center justify-items-center gap-y-6 gap-x-4 pb-12 lg:grid-cols-3">
                    {partners.map((partner, index) => (
                        <img
                            key={partner.altText + index}
                            className="h-auto w-full"
                            src={partner.image}
                            alt={partner.altText}
                            loading="lazy"
                        />
                    ))}
                </div>
			</div>
		</>
	);
};

export default Sobre;
