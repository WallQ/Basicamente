import React from 'react';

interface Props {}

const TestingComponent: React.FunctionComponent<Props> = () => {
	return (
		<React.Fragment>
			<div className="mx-auto flex flex-row items-center justify-center py-12">
				<div className="h-8 w-1/5 animate-pulse bg-blue-300" />
			</div>
		</React.Fragment>
	);
};

export default TestingComponent;
