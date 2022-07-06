import React from 'react';

const PageLoading: React.FunctionComponent = () => {
	const [show, setShow] = React.useState<boolean>(false);

	React.useEffect(() => {
		const timeout = setTimeout(() => setShow(true), 1500);
		return () => clearTimeout(timeout);
	}, []);

	return show ? (
		<React.Fragment>
			<div className="mx-auto flex h-screen flex-col items-center justify-center">
				<svg className="h-32 w-32 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
					<path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
				</svg>
			</div>
		</React.Fragment>
	) : null;
};

export default PageLoading;
