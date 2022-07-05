import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Layout from './layouts/Main/Main';

// Pages
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Testing from './pages/Testing/Testing';

// Contexts
import { MultilingualContextProvider } from './contexts/MultilingualContext';
import { ToastNotificationContextProvider } from './contexts/ToastNotificationContext';

const App: React.FunctionComponent = () => {
	return (
		<MultilingualContextProvider>
			<ToastNotificationContextProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route path="/test" element={<Testing />} />
							<Route index element={<Homepage />} />
							<Route path="/services">
								<Route path="digital-commerce" element={<h1>/services/digital-commerce</h1>} />
								<Route path="marketing-digital-performance" element={<h1>/services/marketing-digital-performance</h1>} />
								<Route path="uiux-design" element={<h1>/services/uiux-design</h1>} />
								<Route path="websites-workplaces-digitals" element={<h1>/services/websites-workplaces-digitals</h1>} />
								<Route path="web-development" element={<h1>/services/web-development</h1>} />
							</Route>
							<Route path="/portfolio">
								<Route path="websites" element={<h1>/portfolio/websites</h1>} />
								<Route path="e-commerce" element={<h1>/portfolio/e-commerce</h1>} />
								<Route path="web-development" element={<h1>/portfolio/web-development</h1>} />
								<Route path="marketing-digital-performance" element={<h1>/portfolio/marketing-digital-performance</h1>} />
							</Route>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
							<Route path="get-quote" element={<h1>/get-quote</h1>} />
							<Route path="terms-conditions" element={<h1>/terms-conditions</h1>} />
							<Route path="dispute-resolution" element={<h1>/dispute-resolution</h1>} />
							<Route path="*" element={<h1>Error 404!</h1>} />
						</Route>
					</Routes>
				</Router>
			</ToastNotificationContextProvider>
		</MultilingualContextProvider>
	);
};

export default App;
