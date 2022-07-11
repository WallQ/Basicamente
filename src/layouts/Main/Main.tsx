import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Main: React.FunctionComponent = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
				<ScrollToTop />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Main;
