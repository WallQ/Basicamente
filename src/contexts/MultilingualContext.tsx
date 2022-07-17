import React from "react";

export type MultilingualContextType = {
	language: string;
	setLanguage: React.Dispatch<React.SetStateAction<string>>;
	isPortuguese: () => boolean;
	isEnglish: () => boolean;
};

export type MultilingualContextProviderType = {
	children: React.ReactNode;
};

export const MultilingualContext = React.createContext<MultilingualContextType | null>(null);

export const MultilingualContextProvider = ({ children }: MultilingualContextProviderType) => {
	const [language, setLanguage] = React.useState<string>(
		localStorage.getItem("BasicamenteLang") || "pt-PT",
	);

	const isPortuguese = (): boolean => {
		return language === "pt-PT";
	};

	const isEnglish = (): boolean => {
		return language === "en-US";
	};

	return (
		<MultilingualContext.Provider value={{ language, setLanguage, isPortuguese, isEnglish }}>
			{children}
		</MultilingualContext.Provider>
	);
};
