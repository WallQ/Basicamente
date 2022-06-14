import React from 'react';

import TestingC from '../../components/TestingC/TestingC';
import { TEST } from '../../graphql/Queries';

const TestingP: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<TestingC query={TEST} />
			</div>
		</React.Fragment>
	);
};

export default TestingP;
