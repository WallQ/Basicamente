import React from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/solid';

import PortugalFlag from '../../assets/icons/pt.svg';
import UnitedKingdomFlag from '../../assets/icons/gb.svg';

interface Props {}

const languages = [
	{ id: 1, initial: 'pt', name: 'Portuguese', flag: PortugalFlag },
	{ id: 2, initial: 'en-US', name: 'English', flag: UnitedKingdomFlag },
];

const TestingComponent: React.FunctionComponent<Props> = () => {
	const [selectedLanguage, setSelectedLanguage] = React.useState<any>(languages[0]);

	return (
		<React.Fragment>
			<Listbox as="div" value={selectedLanguage} onChange={setSelectedLanguage} className={'relative flex items-center justify-center'}>
				<Listbox.Button className={'inline-flex cursor-pointer items-center justify-center gap-x-1'}>
					<GlobeAltIcon className="h-6 w-6 text-gray-900 group-hover:text-gray-600" aria-hidden="true" />
					<span className="text-base font-medium text-gray-900 hover:text-gray-600">Portuguese</span>
					<ChevronDownIcon className="h-6 w-6 text-gray-900 group-hover:text-gray-600" aria-hidden="true" />
				</Listbox.Button>
				<Transition as={React.Fragment} enter="transition duration-200 ease-out" enterFrom="transform scale-100 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition duration-100 ease-out" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-100 opacity-0">
					<Listbox.Options className={'relative'}>
						<div className="absolute right-1/2 z-10 flex w-max max-w-xs translate-y-1/3 transform cursor-pointer flex-col gap-y-1 bg-white px-4 py-2">
							{languages.map((language) => (
								<Listbox.Option key={language.id} value={language} className={'inline-flex flex-1 items-center'}>
									<img src={language.flag} alt={language.name} width={24} height={24} />
									<span className="ml-2 text-base font-normal">
										{language.name}
									</span>
								</Listbox.Option>
							))}
						</div>
					</Listbox.Options>
				</Transition>
			</Listbox>
		</React.Fragment>
	);
};

export default TestingComponent;
