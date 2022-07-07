import React from "react";
import { Link } from "react-router-dom";

const Error404: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="mx-auto flex flex-col items-center justify-center py-24">
				<div className="flex flex-col items-center justify-center gap-y-4">
					<h1 className="text-9xl font-bold text-primary">404</h1>
					<h5 className="text-2xl font-bold text-gray-900">
						Oops! Esta página não foi encontrada!
					</h5>
					<p className="text-sm font-normal text-gray-600">
						Algo de errado aconteceu ou a página não existe mais.
					</p>
					<Link to={"/"} className={"inline-flex h-12 items-center justify-center rounded-none border border-transparent bg-primary px-4 text-base font-medium text-white shadow-sm hover:opacity-80"}>
						Homepage
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Error404;

// h1 9xl
// h2 8xl
// h3 7xl
// h4 6xl
// h5 5xl
// h6 4xl
