import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './layouts/Main/Main';

// Pages
import Homepage from './pages/Homepage';

const App: React.FunctionComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
