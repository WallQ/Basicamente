import React from 'react';

// Square Logo
import SquareLogo from '../../assets/Contactos/Basicamente-Contactos.jpg';

const Contactos = () => {
	return (
		<>
			<div className="container mx-auto max-w-max px-12 lg:px-48 py-10">
				<div className="flex flex-col lg:flex-row items-center justify-between">
                    <img width="750" height="500" src={SquareLogo} alt="Basicamente Square Logo" className="w-max md:w-1/2 h-auto" />
					<div className="flex flex-col grow gap-y-6 py-14 lg:py-28 lg:px-28">
						<h1 className='text-4xl font-medium'>Contactar a Basicamente</h1>
						<a href="mailto:askus@basicamente.io?subject=Contacto%20feito%20em%20Basicamente.pt">
                            <span className="font-thin text-sm border-b border-b-gray-900">
                                askus@basicamente.io
							</span>
						</a>
						<div className="flex flex-col text-gray-900">
							<p className="font-base text-base font-bold">
								Porto
							</p>
							<span className="text-sm font-thin">
								Av. 1º Maio 1080, Ed. Carvalhido, Ent 3, 7ºEQ,
								4600-013 Amarante
							</span>
							<a href="tel:+351220946850" className=" font-thin">
								<span className="font-thin text-sm border-b border-b-gray-900">
									+351 220 946 850
								</span>
							</a>
						</div>
						<div className="flex flex-col text-gray-900">
							<p className="font-base text-base font-bold">
								Lisboa
							</p>
							<span className="text-sm font-thin">
								Rocha Conde d'Óbidos 1350-352 Lisboa
							</span>
							<a href="tel:+351211374667" className=" font-thin">
								<span className="font-thin text-sm border-b border-b-gray-900">
									+351 211 374 667
								</span>
							</a>
						</div>
						<div className="flex flex-col">
							<ul className="space-y-1 text-sm font-thin text-gray-900">
								<li>
									<a href="https://www.facebook.com/basicamentedigital/" target="_blank" rel="noreferrer" className="border-b border-b-gray-900">
										Facebook
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/basicamente.digital/" target="_blank" rel="noreferrer" className="border-b border-b-gray-900">
										Instagram
									</a>
								</li>
								<li>
									<a href="https://pt.linkedin.com/company/basicamente/" target="_blank" rel="noreferrer" className="border-b border-b-gray-900">
										Linkedin
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contactos;
