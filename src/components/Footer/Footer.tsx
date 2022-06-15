import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FunctionComponent = () => {
	return (
		<div className="bg-primary">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto lg:py-12 py-8 px-8">
				<div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:justify-evenly lg:text-left lg:items-start">
                    <div className="space-y-4 lg:space-y-8">
						<h4 className="text-xl font-bold text-white">
                            Soluções Basicamente
						</h4>
						<div className="flex flex-col">
							<ul className="text-base text-white space-y-1">
								<li>
									<Link to="solucoes/comercio-digital" className="border-b border-b-white">
                                        Comércio Digital
									</Link>
								</li>
								<li>
									<Link to="solucoes/marketing-digital-performance" className="border-b border-b-white">
                                        Marketing Digital e Performance
									</Link>
								</li>
								<li>
									<Link to="solucoes/uiux-design" className="border-b border-b-white">
                                        UI/UX Design
									</Link>
								</li>
                                <li>
									<Link to="solucoes/websites-workplaces-digitais" className="border-b border-b-white">
                                        Websites e Workplaces Digitais
									</Link>
								</li>
								<li>
									<Link to="solucoes/web-development" className="border-b border-b-white">
                                        Web Development
									</Link>
								</li>
							</ul>
						</div>
					</div>
                    <div className="space-y-4 lg:space-y-8">
						<h4 className="text-xl font-bold text-white">
                            Onde estamos?
						</h4>
						<div className="flex flex-col gap-y-4">
							<div className="text-base text-white">
								<p className='font-base font-bold'>Porto</p>
                                <span>Av. 1º Maio 1080, Ed. Carvalhido, Ent 3, 7ºEQ, 4600-013 Amarante</span>
                            </div>
                            <div className="text-base text-white">
                                <p className='font-base font-bold'>Lisboa</p>
                                <span>Rocha Conde d'Óbidos 1350-352 Lisboa</span>
							</div>
						</div>
					</div>
					<div className="space-y-4 lg:space-y-8">
						<h4 className="text-xl font-bold text-white">
							Contacte-nos:
						</h4>
						<div className="flex flex-col">
							<ul className="text-base text-white space-y-1">
								<li>
									<a href="tel:+351211374667" className="border-b border-b-white">
										+351 211 374 667
									</a>
								</li>
								<li>
									<a href="tel:+351220946850" className="border-b border-b-white">
										+351 220 946 850
									</a>
								</li>
								<li>
									<a href="mailto:askus@basicamente.io?&subject=Pedido%20de%20Informa%C3%A7%C3%A3o%20atrav%C3%A9s%20do%20site" className="border-b border-b-white">
										askus@basicamente.io
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-row justify-start lg:justify-start gap-x-2">
							<a href="https://www.instagram.com/basicamente.digital/" target="_blank" rel='noreferrer' className="rounded-full border-2 border-white p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">Instagram</span>
								<FaInstagram className="text-white" />
							</a>
							<a href="https://www.facebook.com/basicamentedigital/" target="_blank" rel='noreferrer' className="rounded-full border-2 border-white p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">Facebook</span>
								<FaFacebookF className="text-white" />
							</a>
							<a href="https://pt.linkedin.com/company/basicamente/" target="_blank" rel='noreferrer' className="rounded-full border-2 border-white p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">LinkedIn</span>
								<FaLinkedinIn className="text-white" />
							</a>
						</div>
					</div>
				</div>
            </div>
			<div className="py-8 px-8 bg-white">
                <div className="flex flex-wrap flex-row items-center text-center justify-center gap-x-4 gap-y-2">
                    <Link to="termos-e-condicoes" className='text-xs text-primary border-b border-b-primary hover:opacity-80'>Termos e Condições</Link>
                    <Link to="resolucao-litigios" className='text-xs text-primary border-b border-b-primary hover:opacity-80'>Resolução de Litígios</Link>
                    <a href="https://www.livroreclamacoes.pt/" target="_blank" rel='noreferrer' className='text-xs text-primary border-b border-b-primary hover:opacity-80'>Livro de Reclamações</a>
                </div>
			</div>
		</div>
	);
};

export default Footer;
