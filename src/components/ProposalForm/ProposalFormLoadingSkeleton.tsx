import React from 'react';

const ProposalFormLoadingSkeleton: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="animate-pulse bg-blue-200">
				<div className="container mx-auto flex flex-col items-center justify-center gap-y-8 px-4 pt-12 pb-12 sm:px-6 lg:gap-y-12 lg:px-8">
					<div className="flex w-full flex-1 flex-col flex-wrap items-center justify-center gap-y-4">
						<div className="h-8 w-1/2 animate-pulse bg-blue-300" />
						<div className="h-6 w-2/3 animate-pulse bg-blue-300" />
					</div>
					<div className="flex w-full flex-col flex-wrap gap-y-4 xl:w-2/3">
						<div className="flex flex-col gap-x-4 gap-y-4 lg:flex-row">
							<div className="flex flex-1 flex-col">
								<div className="h-5 w-20 animate-pulse bg-blue-300" />
								<div className="mt-1 h-10 w-full animate-pulse bg-blue-300" />
							</div>
							<div className="flex flex-1 flex-col">
								<div className="h-5 w-20 animate-pulse bg-blue-300" />
								<div className="mt-1 h-10 w-full animate-pulse bg-blue-300" />
							</div>
						</div>
						<div className="flex flex-1 flex-col">
							<div className="h-5 w-20 animate-pulse bg-blue-300" />
							<div className="mt-1 h-10 w-full animate-pulse bg-blue-300" />
						</div>
						<div className="flex flex-1 flex-col">
							<div className="h-5 w-20 animate-pulse bg-blue-300" />
							<div className="mt-1 h-10 w-full animate-pulse bg-blue-300" />
						</div>
						<div className="flex flex-1 flex-col">
							<div className="h-5 w-20 animate-pulse bg-blue-300" />
							<div className="mt-1 h-10 w-full animate-pulse bg-blue-300" />
						</div>
						<div className="flex flex-1 flex-col">
							<div className="h-5 w-20 animate-pulse bg-blue-300" />
							<div className="mt-1 h-24 w-full animate-pulse bg-blue-300" />
						</div>
						<div className="mx-auto h-12 w-full animate-pulse bg-blue-300 lg:w-1/4" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProposalFormLoadingSkeleton;
