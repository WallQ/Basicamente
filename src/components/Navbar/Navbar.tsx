import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react';
import { ChartBarIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import logo from '../../assets/logo.gif';

const Navbar: React.FunctionComponent = () => {
	return (
		<Popover className="relative bg-white border-2 border-red-600">
			<div className="flex justify-between items-center px-4 py-6">
				<div className="flex justify-start flex-1">
					<Link to="/">
						<span className="sr-only">Basicamente</span>
						<img className="h-10 w-auto" src={logo} alt="logo" />
					</Link>
				</div>
				<div className="md:hidden">
					<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
						<span className="sr-only">Open menu</span>
						<MenuIcon className="h-6 w-6" aria-hidden="true" />
					</Popover.Button>
				</div>
				<Popover.Group as="nav" className="hidden md:flex space-x-10">
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button
									className={`${
										open ? 'text-gray-900' : 'text-gray-500'
									} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
								>
									<span>Solutions</span>
									<ChevronDownIcon
										className={`${
											open
												? 'text-gray-600'
												: 'text-gray-400'
										} ml-2 h-5 w-5 group-hover:text-gray-500`}
										aria-hidden="true"
									/>
								</Popover.Button>
								<Transition
									as={React.Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
										<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
											<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
												<a
													href="##"
													className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
												>
													<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
														<ChartBarIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</div>
													<div className="ml-4">
														<p className="text-base font-medium text-gray-900">
															TEST
														</p>
														<p className="mt-1 text-sm text-gray-500">
															TEST TEST TEST
														</p>
													</div>
												</a>
											</div>
											<div className="p-5 bg-gray-50 sm:p-8">
												<a
													href="##"
													className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
												>
													<div className="flex items-center">
														<div className="text-base font-medium text-gray-900">
															Enterprise
														</div>
														<span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
															New
														</span>
													</div>
													<p className="mt-1 text-sm text-gray-500">
														Empower your entire team
														with even more advanced
														tools.
													</p>
												</a>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
					<a
						href="##"
						className="text-base font-medium text-gray-500 hover:text-gray-900"
					>
						Pricing
					</a>
					<a
						href="##"
						className="text-base font-medium text-gray-500 hover:text-gray-900"
					>
						Docs
					</a>
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button
									className={`${
										open ? 'text-gray-900' : 'text-gray-500'
									} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
								>
									<span>More</span>
									<ChevronDownIcon
										className={`${
											open
												? 'text-gray-600'
												: 'text-gray-400'
										} ml-2 h-5 w-5 group-hover:text-gray-500`}
										aria-hidden="true"
									/>
								</Popover.Button>
								<Transition
									as={React.Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
										<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
											<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
												<a
													href="##"
													className="-m-3 p-3 block rounded-md hover:bg-gray-50"
												>
													<p className="text-base font-medium text-gray-900">
														Test
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Test Test Test
													</p>
												</a>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
				</Popover.Group>
				<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
					<a
						href="##"
						className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
					>
						Sign In
					</a>
					<a
						href="##"
						className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Sign Up
					</a>
				</div>
			</div>
			<Transition
				as={React.Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src={logo}
										alt="logo"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">
											Close menu
										</span>
										<XIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid grid-cols-1 gap-7">
									<a
										href="##"
										className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
									>
										<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
											<ChartBarIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
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
								<a
									href="##"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Pricing
								</a>
								<a
									href="##"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Docs
								</a>
								<a
									href="##"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Enterprise
								</a>
								<a
									href="##"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									TEST
								</a>
							</div>
							<div className="mt-6">
								<a
									href="##"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
								>
									Sign up
								</a>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									Existing customer?{' '}
									<a
										href="##"
										className="text-indigo-600 hover:text-indigo-500"
									>
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
