import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';

interface Props {}

const TestingComponent: React.FunctionComponent<Props> = () => {
	const { setLanguage } = React.useContext(MultilingualContext) as MultilingualContextType;
	return (
		<React.Fragment>
			<Popover className="relative">
				{({ open }: { open: boolean }) => (
					<React.Fragment>
						<Popover.Button className="group inline-flex items-center gap-x-1 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 focus:outline-none">
							<GlobeAltIcon className="h-6 w-6 text-gray-900 group-hover:text-gray-600" aria-hidden="true" />
							<span>Portuguese</span>
							<ChevronDownIcon className="h-6 w-6 text-gray-900 group-hover:text-gray-600" aria-hidden="true" />
						</Popover.Button>




						<Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="transform opacity-0 translate-y-1" enterTo="transform opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="transform opacity-100 translate-y-0" leaveTo="transform opacity-0 translate-y-1">
							<Popover.Panel className="absolute z-10 mt-4">
								<div className="relative overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col flex-1 flex-wrap">
									<Popover.Button as={'button'} className="text-left" onClick={() => setLanguage('pt-PT')}>
										<span className="block px-8 py-2 text-base font-medium text-gray-900 hover:bg-primary hover:text-white">
											Portuguese
										</span>
									</Popover.Button>
									<Popover.Button as={'button'} className="text-left" onClick={() => setLanguage('en-US')}>
										<span className="block px-8 py-2 text-base font-medium text-gray-900 hover:bg-primary hover:text-white">
											English
										</span>
									</Popover.Button>
								</div>
							</Popover.Panel>
						</Transition>
					</React.Fragment>
				)}
			</Popover>
		</React.Fragment>
	);
};

export default TestingComponent;
