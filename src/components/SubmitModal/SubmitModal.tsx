import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { MultilingualContextType, MultilingualContext } from '../../contexts/MultilingualContext';
import { SubmitModalContextType, SubmitModalContext } from '../../contexts/SubmitModalContext';

interface Props {
    success: boolean | null;
    message: any;
}

const SubmitModal: React.FunctionComponent<Props> = ({ success, message }) => {
	const { openModal, setOpenModal } = React.useContext(SubmitModalContext) as SubmitModalContextType;
	const { language } = React.useContext(MultilingualContext) as MultilingualContextType;

	return (
		<React.Fragment>
			<Transition.Root show={openModal} as={React.Fragment}>
				<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setOpenModal(false)}>
					<div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child as={React.Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>
						<span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child as={React.Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
							<div className="inline-block transform overflow-hidden rounded-none bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
								<div>
									<div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${success ? 'bg-green-100': 'bg-red-100'}`}>
										{success 
											? <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
											: <XIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
										}
									</div>
									<div className="mt-3 text-center sm:mt-5">
										<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-black">
											{message.title}
										</Dialog.Title>
										<div className="mt-2">
											<p className="text-sm text-gray-500">
												{message.text}
											</p>
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6">
									<div className="cursor-pointer flex h-12 w-full items-center justify-center rounded-none border border-transparent bg-primary px-4 text-base font-medium text-white shadow-sm hover:opacity-80" onClick={() => setOpenModal(false)}>
                                        {language === 'pt-PT' ? 'Fechar' : 'Close'}
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</React.Fragment>
	);
};

export default React.memo(SubmitModal);
