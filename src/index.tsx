import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const httpLink = new HttpLink({
	uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
	if (networkError) console.error(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
	link: from([errorLink, httpLink]),
	cache: new InMemoryCache(),
	connectToDevTools: process.env.NODE_ENV === "development" ? true : false,
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);



root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
