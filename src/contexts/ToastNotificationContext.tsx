import React from "react";

export type ToastNotificationContextType = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	success: boolean;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	message: string;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export type ToastNotificationContextProviderType = {
	children: React.ReactNode;
};

export const ToastNotificationContext = React.createContext<ToastNotificationContextType | boolean>(false);

export const ToastNotificationContextProvider = ({ children }: ToastNotificationContextProviderType) => {
	const [show, setShow] = React.useState<boolean>(false);
	const [success, setSuccess] = React.useState<boolean>(false);
	const [title, setTitle] = React.useState<string>("");
	const [message, setMessage] = React.useState<string>("");

	return (
		<ToastNotificationContext.Provider value={{ show, setShow, success, setSuccess, title, setTitle, message, setMessage }}>
			{children}
		</ToastNotificationContext.Provider>
	);
};
