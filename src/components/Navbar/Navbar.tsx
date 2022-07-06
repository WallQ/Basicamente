import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import MultilingualToggle from '../MultilingualToggle/MultilingualToggle';
import logo from '../../assets/Basicamente-Logo.gif';
import { services, portfolio } from './_navItems';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';

const Navbar: React.FunctionComponent = () => {
	const { isPortuguese } = React.useContext(MultilingualContext) as MultilingualContextType;

	const id = React.useId();
	const location = useLocation();
	const currentPath = location.pathname.split('/')[1];
	return (
		<React.Fragment>
			<Popover className="relative">
				{/* Web */}
				<div className="flex flex-row flex-wrap items-center justify-between bg-white py-8 px-4">
					{/* Logo */}
					<div className="flex flex-1 flex-row justify-start">
						<Link to="/">
							<img className="h-12 w-auto" src={logo} alt="Basicamente logo" width={800} height={150} loading={"eager"} />
						</Link>
					</div>
					{/* /Logo */}
					{/* Navigation Items */}
					<Popover.Group as="nav" className="hidden flex-row gap-x-8 lg:flex">
						<NavLink to="/" className={({ isActive }) => isActive ? 'border-b border-b-gray-900 text-base font-medium text-gray-900 hover:text-gray-600' : 'text-base font-medium text-gray-900 hover:text-gray-600'}>
							Home
						</NavLink>
						{/* Services */}
						<Popover className="relative">
							{({ open }: { open: boolean }) => (
								<React.Fragment>
									<Popover.Button className="group inline-flex items-center gap-x-1 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 focus:outline-none">
										<span className={currentPath === 'services' ? 'border-b border-b-gray-900' : ''}>
											{isPortuguese() ? 'Serviços' : 'Services'}
										</span>
										<ChevronDownIcon className={`${open ? 'rotate-180 transform duration-200' : 'duration-200'} h-6 w-6 text-gray-900 group-hover:text-gray-600`} aria-hidden="true" />
									</Popover.Button>
									<Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="transform opacity-0 translate-y-1" enterTo="transform opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="transform opacity-100 translate-y-0" leaveTo="transform opacity-0 translate-y-1">
										<Popover.Panel className="absolute left-1/2 z-10 mt-4 w-max max-w-xs -translate-x-1/2 transform">
											<div className="relative overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5">
												{services.map((item: any, index: number) => (
													<Popover.Button key={`${id}-Services-${index}`} onClick={() => (open = false)} className="min-w-full text-left">
														<NavLink to={item.routeUrl} className="block px-8 py-2 text-base font-medium text-gray-900 hover:bg-primary hover:text-white">
															{item.routeTitle}
														</NavLink>
													</Popover.Button>
												))}
											</div>
										</Popover.Panel>
									</Transition>
								</React.Fragment>
							)}
						</Popover>						
						{/* /Services */}
						{/* Portfolio */}
						<Popover className="relative">
							{({ open }: { open: boolean }) => (
								<React.Fragment>
									<Popover.Button className="group inline-flex items-center gap-x-1 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 focus:outline-none">
										<span className={currentPath === 'portfolio' ? 'border-b border-b-gray-900' : '' }>
											{isPortuguese() ? 'Portfólio' : 'Portfolio'}
										</span>
										<ChevronDownIcon className={`${open ? 'rotate-180 transform duration-200' : 'duration-200'} h-6 w-6 text-gray-900 group-hover:text-gray-600`} aria-hidden="true" />
									</Popover.Button>
									<Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="transform opacity-0 translate-y-1" enterTo="transform opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="transform opacity-100 translate-y-0" leaveTo="transform opacity-0 translate-y-1">
										<Popover.Panel className="absolute left-1/2 z-10 mt-4 w-max max-w-xs -translate-x-1/2 transform">
											<div className="relative overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5">
												{portfolio.map((item: any, index: number) => (
													<Popover.Button key={`${id}-Portfolio-${index}`} onClick={() =>(open = false)} className="min-w-full text-left">
														<NavLink to={item.routeUrl} className="block px-8 py-2 text-base font-medium text-gray-900 hover:bg-primary hover:text-white">
															{item.routeTitle}
														</NavLink>
													</Popover.Button>
												))}
											</div>
										</Popover.Panel>
									</Transition>
								</React.Fragment>
							)}
						</Popover>
						{/* /Portfolio */}
						<NavLink to="about" className={({ isActive }) => isActive ? 'border-b border-b-gray-900 text-base font-medium text-gray-900 hover:text-gray-600' : 'text-base font-medium text-gray-900 hover:text-gray-600'}>
							{isPortuguese() ? 'Sobre' : 'About'}
						</NavLink>
						<NavLink to="contact" className={({ isActive }) => isActive ? 'border-b border-b-gray-900 text-base font-medium text-gray-900 hover:text-gray-600' : 'text-base font-medium text-gray-900 hover:text-gray-600'}>
							{isPortuguese() ? 'Contactos' : 'Contacts'}
						</NavLink>
					</Popover.Group>
					{/* /Navigation Items */}
					{/* Button */}
					<div className="hidden items-center justify-end gap-x-4 lg:flex lg:flex-1 lg:flex-row">
						<MultilingualToggle mobile={false} />
						<Link to="get-quote" className="flex h-12 items-center justify-center rounded-none border border-transparent bg-primary px-4 text-base font-medium text-white shadow-sm hover:opacity-80">
							{isPortuguese() ? 'Pedir Proposta' : 'Get a Quote'}
						</Link>
					</div>
					{/* /Button */}
					{/* Open Menu Button */}
					<div className="lg:hidden">
						<Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-600 focus:outline-none">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-8 w-8" aria-hidden="true" />
						</Popover.Button>
					</div>
					{/* /Open Menu Button */}
				</div>
				{/* Mobile */}
				<Transition as={React.Fragment} enter="transition duration-200 ease-out" enterFrom="transform opacity-0 scale-100" enterTo="transform opacity-100 scale-100" leave="transition duration-100 ease-in" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-100">
					<Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform transition lg:hidden">
						<div className="bg-white shadow-lg">
							<div className="flex flex-row flex-wrap items-center justify-between bg-white py-8 px-4">
								{/* Logo */}
								<div className="flex flex-1 flex-row justify-start">
									<Link to="/">
										<img className="h-12 w-auto" src={logo} alt="Basicamente logo" width={800} height={150} loading={"eager"} />
									</Link>
								</div>
								{/* /Logo */}
								{/* Close Menu Button */}
								<Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-600 focus:outline-none">
									<span className="sr-only">Close menu</span>
									<XIcon className="h-8 w-8" aria-hidden="true" />
								</Popover.Button>
								{/* /Close Menu Button */}
							</div>
							<div className="flex flex-col items-center justify-center px-4 py-6">
								{/* Navigation Items */}
								<div className="flex flex-col items-center justify-center gap-y-4">
									<NavLink to="/" className="text-base font-medium text-gray-900 hover:text-gray-600">
										Home
									</NavLink>
									{/* Services */}
									<Disclosure>
										{({ open }: { open: boolean }) => (
											<React.Fragment>
												<Disclosure.Button className="inline-flex items-center align-middle">
													<span className="text-base font-medium text-gray-900 hover:text-gray-600">
														{isPortuguese() ? 'Serviços' : 'Services'}
													</span>
													<ChevronDownIcon className={`${open ? 'rotate-180 transform duration-200' : 'duration-200'} h-6 w-6`}/>
												</Disclosure.Button>
												<Disclosure.Panel className="flex flex-col items-center justify-center border-t border-b border-t-gray-500 border-b-gray-500">
													{services.map((item: any, index: number) => (
														<Popover.Button key={`${id}-ServicesMobile-${index}`} onClick={() => (open = false)} className="min-w-full text-left">
															<NavLink to={item.routeUrl} className="block px-8 py-2 text-base font-medium text-gray-600 hover:bg-primary hover:text-white">
																{item.routeTitle}
															</NavLink>
														</Popover.Button>
													))}
												</Disclosure.Panel>
											</React.Fragment>
										)}
									</Disclosure>
									{/* /Services */}
									{/* Portfolio */}
									<Disclosure>
										{({ open }: { open: boolean }) => (
											<React.Fragment>
												<Disclosure.Button className="inline-flex items-center align-middle">
													<span className="text-base font-medium text-gray-900 hover:text-gray-600">
														{isPortuguese() ? 'Portfólio' : 'Portfolio'}
													</span>
													<ChevronDownIcon className={`${open ? 'rotate-180 transform duration-200' : 'duration-200'} h-6 w-6`} />
												</Disclosure.Button>
												<Disclosure.Panel className="flex flex-col items-center justify-center border-t border-b border-t-gray-500 border-b-gray-500">
													{portfolio.map((item: any, index: number) => (
														<Popover.Button key={`${id}-PortfolioMobile-${index}`} onClick={() => (open = false)} className="min-w-full text-left">
															<NavLink to={item.routeUrl} className="block px-8 py-2 text-base font-medium text-gray-600 hover:bg-primary hover:text-white">
																{item.routeTitle}
															</NavLink>
														</Popover.Button>
													))}
												</Disclosure.Panel>
											</React.Fragment>
										)}
									</Disclosure>
									{/* /Portfolio */}
									<NavLink to="about" className="text-base font-medium text-gray-900 hover:text-gray-600">
										{isPortuguese() ? 'Sobre' : 'About'}
									</NavLink>
									<NavLink to="contact" className="text-base font-medium text-gray-900 hover:text-gray-600">
										{isPortuguese() ? 'Contactos' : 'Contacts'}
									</NavLink>
									<MultilingualToggle mobile={true} />
								</div>
								{/* /Navigation Items */}
								{/* Button */}
								<div className="mt-6">
									<Link to="get-quote" className="inline-flex h-12 items-center justify-center rounded-none border border-transparent bg-primary px-4 text-base font-medium text-white shadow-sm hover:opacity-80">
										{isPortuguese() ? 'Pedir Proposta' : 'Get a Quote'}
									</Link>
								</div>
								{/* /Button */}
							</div>
						</div>
					</Popover.Panel>
				</Transition>
				{/* /Mobile */}
			</Popover>
		</React.Fragment>
	);
};

export default Navbar;
