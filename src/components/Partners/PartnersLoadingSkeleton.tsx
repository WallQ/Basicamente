import React from "react";

interface Props {
	quantity: number;
}

const PartnersLoadingSkeleton: React.FunctionComponent<Props> = ({ quantity }) => {
	return (
		<React.Fragment>
			<div className="grid grid-cols-1 items-start justify-items-center gap-8 py-12 md:grid-cols-3 lg:grid-cols-3">
				{Array.from({ length: quantity }, (_, index) => (
					<React.Fragment key={`Partners-${index}`}>
						<div className="flex w-full animate-pulse flex-col gap-y-4 bg-blue-200">
							<div className="h-24 w-full animate-pulse bg-blue-300" />
						</div>
					</React.Fragment>
				))}
			</div>
		</React.Fragment>
	);
};

export default PartnersLoadingSkeleton;
