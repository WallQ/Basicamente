import React from 'react';

import TestingComponent from '../../components/Testing/TestingComponent';

import { ToastNotificationContextProvider } from '../../contexts/ToastNotificationContext';

const Testing: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<ToastNotificationContextProvider>
				<TestingComponent />
			</ToastNotificationContextProvider>
		</React.Fragment>
	);
};

export default Testing;
