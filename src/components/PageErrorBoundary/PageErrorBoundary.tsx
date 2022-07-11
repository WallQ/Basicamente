import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";

interface Props {
	message: string;
}

const PageErrorBoundary: React.FunctionComponent<Props> = ({ message }) => {
	return (
		<React.Fragment>
			<div className="bg-red-100 p-8">
				<div className="flex flex-col items-center justify-center gap-y-2 text-center">
					<XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
					<h2 className="text-base font-medium text-red-800">
						Something went wrong!
					</h2>
					<h3 className="text-sm font-normal text-red-700">
						{message}
					</h3>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PageErrorBoundary;
