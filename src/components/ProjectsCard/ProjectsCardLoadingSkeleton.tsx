import React from 'react';

interface Props {
	quantity: number;
}

const ProjectsCardLoadingSkeleton: React.FunctionComponent<Props> = ({ quantity }) => {
	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-3">
				{Array.from({ length: quantity }, (_, index) => (
					<React.Fragment key={`ProjectsCard-${index}`}>
						<div className="flex w-full animate-pulse flex-col gap-y-4 bg-blue-200">
							<div className="h-60 w-full animate-pulse bg-blue-300" />
							<div className="h-7 w-40 animate-pulse bg-blue-300" />
							<div className="h-16 w-full animate-pulse bg-blue-300" />
							<div className="h-7 w-52 animate-pulse bg-blue-300" />
						</div>
					</React.Fragment>
				))}
			</div>
		</React.Fragment>
	);
};

export default ProjectsCardLoadingSkeleton;
