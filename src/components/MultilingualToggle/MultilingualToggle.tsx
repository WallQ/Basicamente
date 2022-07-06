import React from 'react';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';

interface Props {
	mobile: boolean;
}

const MultilingualToggle: React.FunctionComponent<Props> = ({ mobile }) => {
	const { language, setLanguage } = React.useContext(MultilingualContext) as MultilingualContextType;

	const handleClick = (languageChosen: string) => {
		setLanguage(languageChosen);
		localStorage.removeItem('BasicamenteLang');
		localStorage.setItem('BasicamenteLang', languageChosen);
	}

	return !mobile ? (
		<React.Fragment>
			<Popover className="relative flex flex-row items-center">
				{({ open }: { open: boolean }) => (
					<React.Fragment>
						<Popover.Button className="group inline-flex items-center gap-x-1 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 focus:outline-none">
							<GlobeAltIcon className="h-6 w-6 text-gray-900 group-hover:text-gray-600" aria-hidden="true" />
							<span>
								{language === 'pt-PT' ? 'Português' : 'English'}
							</span>
							<ChevronDownIcon className={`${open ? 'rotate-180 transform duration-200' : 'duration-200'} h-6 w-6 text-gray-900 group-hover:text-gray-600`} aria-hidden="true" />
						</Popover.Button>
						<Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="transform opacity-0 translate-y-1" enterTo="transform opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="transform opacity-100 translate-y-0" leaveTo="transform opacity-0 translate-y-1">
							<Popover.Panel className="absolute z-10 mt-36">
								<div className="relative flex flex-1 flex-col flex-wrap overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5">
									<Popover.Button as={'button'} className="text-left" onClick={() => handleClick('pt-PT')}>
										<span className="block px-8 py-2 text-base font-medium text-gray-900 hover:bg-primary hover:text-white">
											Português
										</span>
									</Popover.Button>
									<Popover.Button as={'button'} className="text-left" onClick={() => handleClick('en-US')}>
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
	) : (
		<React.Fragment>
			<Disclosure>
				{({ open }: { open: boolean }) => (
					<React.Fragment>
						<Disclosure.Button className="group inline-flex items-center justify-center align-middle gap-x-1 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 focus:outline-none">
							<GlobeAltIcon className="h-6 w-6 text-gray-900 group-hover:text-gray-600" aria-hidden="true" />
							<span className="text-base font-medium text-gray-900 hover:text-gray-600">
								{language === 'pt-PT' ? 'Português' : 'English'}
							</span>
							<ChevronDownIcon className={`${open ? 'rotate-180 transform duration-200' : 'duration-200'} h-6 w-6 text-gray-900 group-hover:text-gray-600`} aria-hidden="true" />
						</Disclosure.Button>
						<Disclosure.Panel className="flex flex-col flex-1 flex-grow w-full items-center justify-center border-t border-b border-t-gray-500 border-b-gray-500">
								<Popover.Button onClick={() => {(open = false); handleClick('pt-PT')}} className="min-w-full text-left">
									<span className="block px-8 py-2 text-base font-medium text-gray-600 hover:bg-primary hover:text-white">
										Português
									</span>
								</Popover.Button>
								<Popover.Button onClick={() => {(open = false); handleClick('en-US')}} className="min-w-full text-left">
									<span className="block px-8 py-2 text-base font-medium text-gray-600 hover:bg-primary hover:text-white">
										English
									</span>
								</Popover.Button>
						</Disclosure.Panel>
					</React.Fragment>
				)}
			</Disclosure>
		</React.Fragment>
	);
};

export default React.memo(MultilingualToggle);
