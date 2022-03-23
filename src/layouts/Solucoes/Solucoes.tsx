import React from 'react';
import { Outlet } from 'react-router-dom';

const Solucoes: React.FunctionComponent = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Solucoes;
