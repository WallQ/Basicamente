import React from "react";

interface Props {
	quantity: number;
}

const ProjectsCardLoadingSkeleton: React.FunctionComponent<Props> = ({ quantity }) => {
	return (
		<React.Fragment>
			<div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center gap-y-4">
					<div className="h-8 w-2/5 animate-pulse bg-blue-300" />
					<div className="h-4 w-3/5 animate-pulse bg-blue-300" />
				</div>
			</div>
			{Array.from({ length: quantity }, (_, index) => (
				<React.Fragment key={`${index}-PortfolioCardLoading`}>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-2">
							<div className="h-96 w-96 animate-pulse bg-blue-300" />
							<div className="flex flex-col flex-wrap justify-center gap-y-4">
								<div className="h-8 w-1/4 animate-pulse bg-blue-300" />
								<br />
								<div className="h-4 w-full animate-pulse bg-blue-300" />
								<div className="h-4 w-1/2 animate-pulse bg-blue-300" />
								<br />
								<div className="h-4 w-1/4 animate-pulse bg-blue-300" />
								<div className="h-4 w-2/5 animate-pulse bg-blue-300" />
								<div className="h-4 w-1/4 animate-pulse bg-blue-300" />
								<br />
								<div className="h-4 w-1/5 animate-pulse bg-blue-300" />
							</div>
						</div>
					</div>
				</React.Fragment>
			))}
		</React.Fragment>
	);
};

export default ProjectsCardLoadingSkeleton;
