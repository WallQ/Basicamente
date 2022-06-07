import React from 'react';

interface Props {
	title: string;
}

const BreakTitle: React.FunctionComponent<Props> = ({ title }) => {
	return (
		<React.Fragment>
			<div className="py-12">
				<h2 className="text-center text-2xl font-medium text-primary">
					{title}
				</h2>
			</div>
		</React.Fragment>
	);
};

export default BreakTitle;
