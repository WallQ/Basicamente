import React from "react";

const TitleLoadingSkeleton: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="mx-auto flex flex-row items-center justify-center py-12">
				<div className="flex flex-1 flex-col flex-wrap items-center justify-center gap-y-4">
					<div className="h-8 w-full animate-pulse bg-blue-300" />
					<div className="h-8 w-3/4 animate-pulse bg-blue-300" />
					<div className="h-8 w-3/5 animate-pulse bg-blue-300" />
					<div className="h-8 w-full animate-pulse bg-blue-300" />
					<div className="h-8 w-3/4 animate-pulse bg-blue-300" />
					<div className="h-8 w-full animate-pulse bg-blue-300" />
					<div className="h-8 w-4/5 animate-pulse bg-blue-300" />
					<div className="h-8 w-2/5 animate-pulse bg-blue-300" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default TitleLoadingSkeleton;
