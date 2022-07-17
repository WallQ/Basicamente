import React from "react";

interface Props {
	quantity: number;
}

const SolutionsLoadingSkeleton: React.FunctionComponent<Props> = ({ quantity }) => {
	return (
		<React.Fragment>
			<div className="grid grid-cols-1 gap-y-8 py-12 lg:grid-cols-2 lg:gap-y-16 lg:gap-x-8">
				{Array.from({ length: quantity }, (_, index) => (
					<React.Fragment key={`${index}-SolutionsLoading`}>
						<div className="flex flex-col gap-y-4">
							<div className="h-8 w-96 animate-pulse bg-blue-300" />
							<div className="h-6 w-11/12 animate-pulse bg-blue-300" />
							<div className="h-6 w-10/12 animate-pulse bg-blue-300" />
							<div className="h-6 w-2/4 animate-pulse bg-blue-300" />
						</div>
						<div className="flex flex-col gap-y-4">
							<div className="h-10 w-full animate-pulse bg-blue-300" />
							<div className="h-10 w-full animate-pulse bg-blue-300" />
							<div className="h-10 w-full animate-pulse bg-blue-300" />
							<div className="h-10 w-full animate-pulse bg-blue-300" />
							<div className="h-10 w-full animate-pulse bg-blue-300" />
							<div className="h-10 w-full animate-pulse bg-blue-300" />
						</div>
					</React.Fragment>
				))}
			</div>
		</React.Fragment>
	);
};

export default SolutionsLoadingSkeleton;
