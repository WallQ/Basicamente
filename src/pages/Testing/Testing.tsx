import React from 'react';

interface Props {}

const Testing: React.FunctionComponent<Props> = () => {
	return (
		<>
			<div className="flex h-[34rem] max-h-[34rem] min-h-[34rem] animate-pulse flex-col items-center justify-center bg-gray-400 py-20 lg:py-44">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center gap-y-8">
						<div className="animate-pulse rounded bg-gray-300 px-40 lg:px-80 py-6"></div>
						<div className="animate-pulse rounded bg-gray-300 px-48 lg:px-96 py-12"></div>
						<div className="animate-pulse rounded bg-gray-300 px-12 lg:px-24 py-6"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testing;
