import React from 'react';
import { ABOUTPAGE_HEADER, ABOUTPAGE_TEXT, ABOUTPAGE_PARTNERS } from '../../graphql/Queries';

// Loading Skeletons
import HeaderLoadingSkeleton from '../../components/Header/HeaderLoadingSkeleton';

// Components
const Header = React.lazy(() => import('../../components/Header/Header'));

const About: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<HeaderLoadingSkeleton />}>
				<Header query={ABOUTPAGE_HEADER} />
			</React.Suspense>
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
                {/* <BreakTitle title="Estamos ao seu lado, sempre!" /> */}
                <div className="grid grid-cols-1 content-center justify-items-center gap-y-6 gap-x-4 pb-12 lg:grid-cols-3">
                    {/* {partners.map((partner, index) => (
                        <img
                            key={partner.altText + index}
                            className="h-auto w-full"
                            src={partner.image}
                            alt={partner.altText}
                            loading="lazy"
                        />
                    ))} */}
                </div>
			</div>
		</React.Fragment>
	);
};

export default About;
