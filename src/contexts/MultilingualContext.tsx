import React from 'react';

export type MultilingualContextType = {
	language: any;
	setLanguage: React.Dispatch<any>;
}

export type MultilingualContextProviderType = {
	children: React.ReactNode;
}

export const MultilingualContext = React.createContext<MultilingualContextType | null>(null);

export const MultilingualContextProvider = ({ children }: MultilingualContextProviderType) => {
	const [language, setLanguage] = React.useState<string>('pt-PT');

	return (
		<MultilingualContext.Provider value={{ language, setLanguage }}>
			{children}
		</MultilingualContext.Provider>
	);
};