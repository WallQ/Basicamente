import React from "react";

import { ChevronUpIcon } from "@heroicons/react/solid";

const Scroll: React.FunctionComponent = () => {
	const [isVisible, setIsVisible] = React.useState<boolean>(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) return setIsVisible(true);
		return setIsVisible(false);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	React.useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="fixed bottom-2 right-2">
				<button
					type="button"
					onClick={scrollToTop}
					className={`bg-primary p-2 text-white shadow-sm duration-500 ease-linear ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}>
					<ChevronUpIcon className="h-6 w-6" />
				</button>
			</div>
		</React.Fragment>
	);
};

export default React.memo(Scroll);
