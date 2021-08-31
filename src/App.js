import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div style={{ textAlign: "center" }}>
			<Layout>
				<Switch>
					<Route exact path="/">
						<Redirect to="/quotes" />
					</Route>
					<Route exact path="/quotes">
						<AllQuotes />
					</Route>
					<Route path="/quotes/:quotesId">
						<QuoteDetail />
					</Route>
					<Route path="/new-quote">
						<NewQuote />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
