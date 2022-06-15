import React from 'react';

const HeaderLoadingSkeleton: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="flex animate-pulse flex-col items-center justify-center bg-blue-200 py-24 lg:py-48">
				<div className="flex w-2/3 flex-col items-center gap-y-8 text-center text-white lg:w-1/2">
					<div className="h-12 w-full animate-pulse bg-blue-300" />
					<div className="h-24 w-full animate-pulse bg-blue-300" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeaderLoadingSkeleton;
