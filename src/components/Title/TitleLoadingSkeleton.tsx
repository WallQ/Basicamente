import React from "react";

const TitleLoadingSkeleton: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="mx-auto flex flex-row items-center justify-center">
				<div className="h-8 w-1/5 animate-pulse bg-blue-300" />
			</div>
		</React.Fragment>
	);
};

export default TitleLoadingSkeleton;
