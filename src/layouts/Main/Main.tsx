import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Scroll from '../../components/Scroll/Scroll';

const Main: React.FunctionComponent = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className='font-poppins'>
				<Outlet />
				<Scroll />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Main;
