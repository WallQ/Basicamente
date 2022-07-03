import React from 'react';
import ToastNotification from '../ToastNotification/ToastNotification';
import { ToastNotificationContextType, ToastNotificationContext } from '../../contexts/ToastNotificationContext';

interface Props {}

const TestingComponent: React.FunctionComponent<Props> = () => {
	const { setShow, setSuccess, setMessage } = React.useContext(ToastNotificationContext) as ToastNotificationContextType;

	const handleClick = () => {
		setSuccess(true);
		setMessage("We've sent you an email with more details.");
		setShow(true);
		setSuccess(false);
		setMessage("Please try again later.");
		setShow(true);
	};

	return (
		<React.Fragment>
			<button onClick={handleClick}>CLICK ME!</button>
			<ToastNotification />
		</React.Fragment>
	);
};

export default TestingComponent;
