import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Contexts
import { MultilingualContextProvider } from "./contexts/MultilingualContext";
import { ToastNotificationContextProvider } from "./contexts/ToastNotificationContext";

// Layouts
import Layout from "./layouts/Main/Main";

// Components
import PageLoading from "./components/PageLoading/PageLoading";

// Pages
const Testing = React.lazy(() => import("./pages/Testing/Testing"));

const Home = React.lazy(() => import("./pages/Home/Home"));
const DigitalCommerce = React.lazy(() => import("./pages/Services/DigitalCommerce"));
const MarketingDigitalPerformanceS = React.lazy(() => import("./pages/Services/MarketingDigitalPerformance"));
const UiUxDesign = React.lazy(() => import("./pages/Services/UiUxDesign"));
const WebDevelopmentS = React.lazy(() => import("./pages/Services/WebDevelopment"));
const WebsitesDigitalWorkplaces = React.lazy(() => import("./pages/Services/WebsitesDigitalWorkplaces"));
const Ecommerce = React.lazy(() => import("./pages/Portfolio/Ecommerce"));
const MarketingDigitalPerformanceP = React.lazy(() => import("./pages/Portfolio/MarketingDigitalPerformance"));
const WebDevelopmentP = React.lazy(() => import("./pages/Portfolio/WebDevelopment"));
const Websites = React.lazy(() => import("./pages/Portfolio/Websites"));
const About = React.lazy(() => import("./pages/About/About"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const RequestProposal = React.lazy(() => import("./pages/RequestProposal/RequestProposal"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions/TermsConditions"));
const DisputeResolution = React.lazy(() => import("./pages/DisputeResolution/DisputeResolution"));
const Error404 = React.lazy(() => import("./pages/Error404/Error404"));

const App: React.FunctionComponent = () => {
	return (
		<React.Suspense fallback={<PageLoading />}>
			<MultilingualContextProvider>
				<ToastNotificationContextProvider>
					<Router>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route path="/test" element={<Testing />} />
								<Route index element={<Home />} />
								<Route path="/services">
									<Route path="digital-commerce" element={<DigitalCommerce />} />
									<Route path="marketing-digital-performance" element={<MarketingDigitalPerformanceS />} />
									<Route path="uiux-design" element={<UiUxDesign />} />
									<Route path="web-development" element={<WebDevelopmentS />} />
									<Route path="websites-digital-workplaces" element={<WebsitesDigitalWorkplaces />} />
								</Route>
								<Route path="/portfolio">
									<Route path="e-commerce" element={<Ecommerce />} />
									<Route path="marketing-digital-performance" element={<MarketingDigitalPerformanceP />} />
									<Route path="web-development" element={<WebDevelopmentP />} />
									<Route path="websites" element={<Websites />} />
								</Route>
								<Route path="about" element={<About />} />
								<Route path="contact" element={<Contact />} />
								<Route path="request-proposal" element={<RequestProposal />} />
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
