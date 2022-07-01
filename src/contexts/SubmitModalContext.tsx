import React from 'react';

export type SubmitModalContextType = {
	openModal: boolean;
	setOpenModal: React.Dispatch<any>;
}

export type SubmitModalContextProviderType = {
	children: React.ReactNode;
}

export const SubmitModalContext = React.createContext<SubmitModalContextType | boolean>(true);

export const SubmitModalContextProvider = ({ children }: SubmitModalContextProviderType) => {
	const [openModal, setOpenModal] = React.useState<boolean>(true);

	return (
		<SubmitModalContext.Provider value={{ openModal, setOpenModal }}>
			{children}
		</SubmitModalContext.Provider>
	);
};
