import React from 'react';

import TestingComponent from '../../components/Testing/TestingComponent';

const Testing: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="bg-green-500 p-96">
				<TestingComponent />
			</div>
		</React.Fragment>
	);
};

export default Testing;
