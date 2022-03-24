import React from 'react';

interface Props {
	title: string;
}

const BreakTitle: React.FunctionComponent<Props> = ({ title }) => {
	return (
		<>
			<div className="py-12">
				<h2 className="whitespace-pre-wrap text-center text-2xl font-medium text-primary">
					{title}
				</h2>
			</div>
		</>
	);
};

export default BreakTitle;
