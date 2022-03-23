import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChartBarIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import logo from '../../assets/logo.gif';

const Navbar: React.FunctionComponent = () => {
	return (
		<Popover className="relative border-2 bg-white">
			<div className="flex items-center justify-between px-4 py-6">
				<div className="flex flex-1 justify-start">
					<Link to="/">
						<span className="sr-only">Basicamente</span>
						<img className="h-12 w-auto" src={logo} alt="logo" />
					</Link>
				</div>
				<div className="md:hidden">
					<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
						<span className="sr-only">Open menu</span>
						<MenuIcon className="h-8 w-8" aria-hidden="true" />
					</Popover.Button>
				</div>
				<Popover.Group as="nav" className="hidden space-x-10 md:flex">
					<NavLink to="/" className={({ isActive }) => (isActive ? 'text-base font-medium text-gray-600 hover:text-gray-500 border-b border-b-gray-900' : 'text-base font-medium text-gray-600 hover:text-gray-500')}>
						Home
					</NavLink>
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button className={`${open ? 'text-gray-500' : 'text-gray-600'} group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none`}>
									<span>Soluções</span>
									<ChevronDownIcon className={`${open ? 'text-gray-500' : 'text-gray-600'} ml-2 h-5 w-5 group-hover:text-gray-500`} aria-hidden="true" />
								</Popover.Button>
								<Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
									<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
										<div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="relative bg-white">
												<NavLink to="solucoes/comercio-digital" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														Comércio Digital
													</p>
												</NavLink>
												<NavLink to="solucoes/marketing-digital-performance" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														Marketing Digital e Performance
													</p>
												</NavLink>
												<NavLink to="solucoes/uiux-design" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														UI/UI Design
													</p>
												</NavLink>
												<NavLink to="solucoes/websites-workplaces-digitais" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														Websites e Workplaces Digitais
													</p>
												</NavLink>
												<NavLink to="solucoes/web-development" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														Web Development
													</p>
												</NavLink>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
					<NavLink to="sobre-a-basicamente" className={({ isActive }) => (isActive ? 'text-base font-medium text-gray-500 hover:text-gray-600 border-b border-b-gray-900' : 'text-base font-medium text-gray-500 hover:text-gray-600')}>
						Sobre
					</NavLink>
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button className={`${open ? 'text-gray-500' : 'text-gray-600'} group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none`}>
									<span>Work</span>
									<ChevronDownIcon className={`${open ? 'text-gray-500' : 'text-gray-600'} ml-2 h-5 w-5 group-hover:text-gray-500`} aria-hidden="true" />
								</Popover.Button>
								<Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
									<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
										<div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="relative bg-white">
												<NavLink to="work/websites" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														Websites
													</p>
												</NavLink>
												<NavLink to="work/e-commerce" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														eCommerce
													</p>
												</NavLink>
												<NavLink to="work/web-development" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														Web Development
													</p>
												</NavLink>
												<NavLink to="work/marketing-digital-performance" className="block px-8 py-2 hover:bg-gray-100">
													<p className="text-base font-medium text-gray-600">
														Marketing Digital e Performance
													</p>
												</NavLink>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
					<NavLink to="contactos" className={({ isActive }) => (isActive ? 'text-base font-medium text-gray-500 hover:text-gray-600 border-b border-b-gray-900' : 'text-base font-medium text-gray-500 hover:text-gray-600')}>
						Contactos
					</NavLink>
				</Popover.Group>
				<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
					<a href="##" className="inline-flex items-center justify-center whitespace-nowrap rounded-none border border-transparent bg-primary px-8 py-3.5 text-xs font-medium text-white shadow-sm hover:opacity-80">
						Pedir Proposta
					</a>
				</div>
			</div>
            {/* Popover mobile */}
			<Transition as={React.Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
				<Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
					<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<img className="h-8 w-auto" src={logo} alt="logo" />
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">
											Close menu
										</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid grid-cols-1 gap-7">
									<a href="##" className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
											<ChartBarIcon className="h-6 w-6" aria-hidden="true" />
										</div>
										<div className="ml-4 text-base font-medium text-gray-900">
											TEST
										</div>
									</a>
								</nav>
							</div>
						</div>
						<div className="py-6 px-5">
							<div className="grid grid-cols-2 gap-4">
								<a href="##" className="text-base font-medium text-gray-900 hover:text-gray-700">
									Pricing
								</a>
								<a href="##" className="text-base font-medium text-gray-900 hover:text-gray-700">
									Docs
								</a>
								<a href="##" className="text-base font-medium text-gray-900 hover:text-gray-700">
									Enterprise
								</a>
								<a href="##" className="text-base font-medium text-gray-900 hover:text-gray-700">
									TEST
								</a>
							</div>
							<div className="mt-6">
								<a href="##" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                    Sign up
								</a>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									Existing customer?{' '}
									<a href="##" className="text-indigo-600 hover:text-indigo-500">
										Sign in
									</a>
								</p>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default Navbar;
