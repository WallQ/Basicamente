import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import logo from '../../assets/Basicamente-Logo.gif';

import { solucoes, work } from './_navItems';

const Navbar: React.FunctionComponent = () => {
	return (
		<Popover className="relativebg-white">
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
												{solucoes.map((item,index) => (
													<Popover.Button key={item.routeUrl+index} onClick={() => (open = false)} className='min-w-full text-left'>
														<NavLink to={item.routeUrl} className="text-base font-medium text-gray-600 block px-8 py-2 hover:bg-primary hover:text-white">
															{item.routeTitle}
														</NavLink>
													</Popover.Button>
												))}
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
												{work.map((item,index) => (
													<Popover.Button key={item.routeUrl+index} onClick={() => (open = false)} className='min-w-full text-left'>
														<NavLink to={item.routeUrl} className="text-base font-medium text-gray-600 block px-8 py-2 hover:bg-primary hover:text-white">
															{item.routeTitle}
														</NavLink>
													</Popover.Button>
												))}
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
					<Link to="pedir-proposta" className="inline-flex items-center justify-center whitespace-nowrap rounded-none border border-transparent bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm hover:opacity-80">
						Pedir Proposta
					</Link>
				</div>
			</div>
			<Transition as={React.Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
				<Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
					<div className="bg-white shadow-lg">
						<div className="flex items-center justify-between px-4 py-6">
							<div className="flex flex-1 justify-start">
								<Link to="/">
									<span className="sr-only">Basicamente</span>
									<img className="h-12 w-auto" src={logo} alt="logo" />
								</Link>
							</div>
							<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
								<span className="sr-only">
									Close menu
								</span>
								<XIcon className="h-8 w-8" aria-hidden="true" />
							</Popover.Button>
						</div>
						<div className="px-4 py-6">
							<div className="flex flex-col items-center justify-center gap-y-4">
								<Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-600">
									Home
								</Link>
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className='inline-flex align-middle items-center'>
												<span className='text-base font-medium text-gray-500 hover:text-gray-600'>Soluções</span>
												<ChevronDownIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
											</Disclosure.Button>
											<Disclosure.Panel className="flex flex-col justify-center items-center border-t border-b border-t-gray-500 border-b-gray-500">
												{solucoes.map((item,index) => (
													<Popover.Button key={item.routeUrl+index+index} onClick={() => (open = false)} className='min-w-full text-left'>
														<NavLink to={item.routeUrl} className="text-base font-medium text-gray-600 block px-8 py-2 hover:bg-gray-100">
															{item.routeTitle}
														</NavLink>
													</Popover.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								<Link to="sobre-a-basicamente" className="text-base font-medium text-gray-500 hover:text-gray-600">
									Sobre
								</Link>
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className='inline-flex align-middle items-center'>
												<span className='text-base font-medium text-gray-500 hover:text-gray-600'>Work</span>
												<ChevronDownIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
											</Disclosure.Button>
											<Disclosure.Panel className="flex flex-col justify-center items-center border-t border-b border-t-gray-500 border-b-gray-500">
												{work.map((item,index) => (
													<Popover.Button key={item.routeUrl+index+index} onClick={() => (open = false)} className='min-w-full text-left'>
														<NavLink to={item.routeUrl} className="text-base font-medium text-gray-600 block px-8 py-2 hover:bg-gray-100">
															{item.routeTitle}
														</NavLink>
													</Popover.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								<Link to="contactos" className="text-base font-medium text-gray-500 hover:text-gray-600">
									Contactos
								</Link>
							</div>
							<div className="mt-6">
								<Link to="pedir-proposta" className="flex w-full items-center justify-center whitespace-nowrap rounded-none border border-transparent bg-primary px-8 py-3.5 text-sm font-medium text-white shadow-sm hover:opacity-80">
									Pedir Proposta
								</Link>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default Navbar;
