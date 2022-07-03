import React from 'react';

export type MultilingualContextType = {
	language: any;
	setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export type MultilingualContextProviderType = {
	children: React.ReactNode;
}

export const MultilingualContext = React.createContext<MultilingualContextType | null>(null);

export const MultilingualContextProvider = ({ children }: MultilingualContextProviderType) => {
	const [language, setLanguage] = React.useState<string>(localStorage.getItem("BasicamenteLang") || 'pt-PT');

	return (
		<MultilingualContext.Provider value={{ language, setLanguage }}>
			{children}
		</MultilingualContext.Provider>
	);
};
