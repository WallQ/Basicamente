import React from 'react';

import { ChevronUpIcon } from '@heroicons/react/solid';

const Scroll: React.FunctionComponent = () => {
	const [isVisible, setIsVisible] = React.useState<Boolean>(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	React.useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);
	return (
		<div className="fixed bottom-2 right-2">
			<button type="button" onClick={scrollToTop} className={`p-2 rounded-full shadow-sm text-white bg-primary ease-linear duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
				<ChevronUpIcon className="w-6 h-6" />
			</button>
		</div>
	);
};

export default Scroll;
