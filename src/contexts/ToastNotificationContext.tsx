import React from 'react';

export type ToastNotificationContextType = {
	show: boolean;
	setShow: React.Dispatch<any>;
	success: boolean;
	setSuccess: React.Dispatch<any>;
	message: string;
	setMessage: React.Dispatch<any>;
}

export type ToastNotificationContextProviderType = {
	children: React.ReactNode;
}

export const ToastNotificationContext = React.createContext<ToastNotificationContextType | boolean>(false);

export const ToastNotificationContextProvider = ({ children }: ToastNotificationContextProviderType) => {
	const [show, setShow] = React.useState<boolean>(false);
	const [success, setSuccess] = React.useState<boolean>(false);
	const [message, setMessage] = React.useState<string>('');

	return (
		<ToastNotificationContext.Provider value={{ show, setShow, success, setSuccess, message, setMessage }}>
			{children}
		</ToastNotificationContext.Provider>
	);
};
