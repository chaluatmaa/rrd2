import React from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
	const history = useHistory();
	const id = "q1";
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
		history.push(`/quotes`);
	};

	return (
		<div>
			<h1>New Quote page</h1>
			<QuoteForm id={id} onAddQuote={addQuoteHandler} />
		</div>
	);
};

export default NewQuote;
