import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MultilingualContext, MultilingualContextType } from "../../contexts/MultilingualContext";

const Footer: React.FunctionComponent = () => {
	const { isPortuguese } = React.useContext(MultilingualContext) as MultilingualContextType;

	return (
		<div className="bg-primary">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto py-8 px-8 lg:py-12">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-start lg:justify-evenly lg:gap-y-0 lg:text-left">
					<div className="space-y-4 lg:space-y-8">
						<h4 className="text-xl font-bold text-white">
							{isPortuguese()
								? "Soluções Basicamente"
								: "Solutions Basically"
							}
						</h4>
						<div className="flex flex-col">
							<ul className="space-y-1 text-base text-white">
								<li>
									<Link to="services/digital-commerce" className="border-b border-b-white">
										{isPortuguese()
											? "Comércio Digital"
											: "Digital Commerce"
										}
									</Link>
								</li>
								<li>
									<Link to="services/marketing-digital-performance" className="border-b border-b-white">
										{isPortuguese()
											? "Marketing Digital e Performance"
											: "Digital Marketing and Performance"
										}
									</Link>
								</li>
								<li>
									<Link to="services/uiux-design" className="border-b border-b-white">
										{isPortuguese()
											? "Design UI/UX"
											: "UI/UX Design"
										}
									</Link>
								</li>
								<li>
									<Link to="services/web-development" className="border-b border-b-white">
										{isPortuguese()
											? "Desenvolvimento Web"
											: "Web Development"
										}
									</Link>
								</li>
								<li>
									<Link to="services/websites-digital-workplaces" className="border-b border-b-white">
										{isPortuguese()
											? "Websites e Workplaces Digitais"
											: "Websites and Digital Workplaces"
										}
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="space-y-4 lg:space-y-8">
						<h4 className="text-xl font-bold text-white">
							{isPortuguese()
								? "Onde estamos?"
								: "Where are we?"
							}
						</h4>
						<div className="flex flex-col gap-y-4">
							<div className="text-base text-white">
								<p className="font-base font-bold">Porto</p>
								<span>
									Av. 1º Maio 1080, Ed. Carvalhido, Ent 3,
									7ºEQ, 4600-013 Amarante
								</span>
							</div>
							<div className="text-base text-white">
								<p className="font-base font-bold">Lisboa</p>
								<span>
									Rocha Conde d&apos;Óbidos 1350-352 Lisboa
								</span>
							</div>
						</div>
					</div>
					<div className="space-y-4 lg:space-y-8">
						<h4 className="text-xl font-bold text-white">
							{isPortuguese()
								? "Contacte-nos:"
								: "Contact us:"
							}
						</h4>
						<div className="flex flex-col">
							<ul className="space-y-1 text-base text-white">
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
						<div className="flex flex-row justify-start gap-x-2 lg:justify-start">
							<a href="https://www.instagram.com/basicamente.digital/" target="_blank" rel="noreferrer" className="rounded-full border-2 border-white p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">Instagram</span>
								<FaInstagram className="text-white" />
							</a>
							<a href="https://www.facebook.com/basicamentedigital/" target="_blank" rel="noreferrer" className="rounded-full border-2 border-white p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">Facebook</span>
								<FaFacebookF className="text-white" />
							</a>
							<a href="https://pt.linkedin.com/company/basicamente/" target="_blank" rel="noreferrer" className="rounded-full border-2 border-white p-1.5 text-gray-400 hover:text-gray-500">
								<span className="sr-only">LinkedIn</span>
								<FaLinkedinIn className="text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white py-8 px-8">
				<div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
					<Link to="terms-conditions" className="border-b border-b-primary text-xs text-primary hover:opacity-80">
						{isPortuguese()
							? "Termos e Condições"
							: "Terms and Conditions"
						}
					</Link>
					<Link to="dispute-resolution" className="border-b border-b-primary text-xs text-primary hover:opacity-80">
						{isPortuguese()
							? "Resolução de Litígios"
							: "Dispute Resolution"
						}
					</Link>
					<a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noreferrer" className="border-b border-b-primary text-xs text-primary hover:opacity-80">
						{isPortuguese()
							? "Livro de Reclamações"
							: "Complaint Book"
						}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
