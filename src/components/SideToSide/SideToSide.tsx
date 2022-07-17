import React from "react";

interface Props {
	children: React.ReactNode;
}

const SideToSide: React.FunctionComponent<Props> = ({ children }) => {
	return (
		<React.Fragment>
			<div className="grid grid-cols-1 gap-y-8 py-12 lg:grid-cols-2 lg:gap-x-8">
				{children}
			</div>
		</React.Fragment>
	);
};

export default SideToSide;
