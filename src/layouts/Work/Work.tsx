import React from 'react';
import { Outlet } from 'react-router-dom';

const Work: React.FunctionComponent = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Work;
