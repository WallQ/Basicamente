import React from 'react';

interface Props {
	quantity: number;
}

const ServicesCardLoadingSkeleton: React.FunctionComponent<Props> = ({ quantity }) => {
	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: quantity }, (_, index) => (
					<React.Fragment key={`ServicesCard-${index}`}>
						<div className="flex w-full animate-pulse flex-col gap-y-4 bg-blue-200">
							<div className="h-60 w-full animate-pulse bg-blue-300" />
							<div className="h-7 w-32 animate-pulse bg-blue-300" />
							<div className="h-7 w-48 animate-pulse bg-blue-300" />
							<div className="h-16 w-full animate-pulse bg-blue-300" />
							<div className="h-7 w-24 animate-pulse bg-blue-300" />
						</div>
					</React.Fragment>
				))}
			</div>
		</React.Fragment>
	);
};

export default ServicesCardLoadingSkeleton;
