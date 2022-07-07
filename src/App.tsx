import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Contexts
import { MultilingualContextProvider } from './contexts/MultilingualContext';
import { ToastNotificationContextProvider } from './contexts/ToastNotificationContext';

// Layouts
import Layout from './layouts/Main/Main';

// Components
import PageLoading from './components/PageLoading/PageLoading';

// Pages
const Homepage = React.lazy(() => import('./pages/Homepage/Homepage'));
const About = React.lazy(() => import('./pages/About/About'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Testing = React.lazy(() => import('./pages/Testing/Testing'));

const TermsConditions = React.lazy(() => import('./pages/TermsConditions/TermsConditions'));
const DisputeResolution = React.lazy(() => import('./pages/DisputeResolution/DisputeResolution'));
const Error404 = React.lazy(() => import('./pages/Error404/Error404'));

const App: React.FunctionComponent = () => {
	return (
		<React.Suspense fallback={<PageLoading />}>
			<MultilingualContextProvider>
				<ToastNotificationContextProvider>
					<Router>
						<Routes>
							<Route path="/" element={<Layout />}>
								{/* Remove after dev */}
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
								<Route path="terms-conditions" element={<TermsConditions />} />
								<Route path="dispute-resolution" element={<DisputeResolution />} />
								<Route path="*" element={<Error404 />} />
							</Route>
						</Routes>
					</Router>
				</ToastNotificationContextProvider>
			</MultilingualContextProvider>
		</React.Suspense>
	);
};

export default App;
