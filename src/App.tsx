import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './layouts/Main/Main';
import SolucoesLayout from './layouts/Solucoes/Solucoes';
import WorkLayout from './layouts/Work/Work';

// Pages
import Homepage from './pages/Homepage/Homepage';
import Sobre from './pages/Sobre/Sobre';
import Contactos from './pages/Contactos/Contactos';
import Testing from './pages/Testing/Testing';

// Context
import { MultilingualContext } from './contexts/LanguageContext';
import { languages } from './utils/languages';

const App: React.FunctionComponent = () => {
	return (		
		<MultilingualContext.Provider value={languages.portuguese}>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/test" element={<Testing />} />
						<Route index element={<Homepage />} />
						<Route path="/solucoes" element={<SolucoesLayout />}>
							<Route path="comercio-digital" element={<h1>/solucoes/comercio-digital</h1>} />
							<Route path="marketing-digital-performance" element={<h1>/solucoes/marketing-digital-performance</h1>} />
							<Route path="uiux-design" element={<h1>/solucoes/uiux-design</h1>} />
							<Route path="websites-workplaces-digitais" element={<h1>/solucoes/websites-workplaces-digitais</h1>} />
							<Route path="web-development" element={<h1>/solucoes/web-development</h1>} />
						</Route>
						<Route path="/work" element={<WorkLayout />}>
							<Route path="websites" element={<h1>/work/websites</h1>} />
							<Route path="e-commerce" element={<h1>/work/e-commerce</h1>} />
							<Route path="web-development" element={<h1>/work/web-development</h1>} />
							<Route path="marketing-digital-performance" element={<h1>/work/marketing-digital-performance</h1>} />
						</Route>
						<Route path="sobre-a-basicamente" element={<Sobre />} />
						<Route path="contactos" element={<Contactos />} />
						<Route path="pedir-proposta" element={<h1>/pedir-proposta</h1>} />
						<Route path="termos-e-condicoes" element={<h1>/termos-e-condicoes</h1>} />
						<Route path="resolucao-litigios" element={<h1>/resolucao-litigios</h1>} />
						<Route path="*" element={<h1>Error 404!</h1>} />
					</Route>
				</Routes>
			</Router>
		</MultilingualContext.Provider>
	);
};

export default App;
