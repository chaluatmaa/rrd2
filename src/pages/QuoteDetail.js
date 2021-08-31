import React from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import Highlighted from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";

const DUMMY_QUOTES = [
	{
		id: "q1",
		name: "Maxi Udemy",
		author: "Max",
		text: "Learning React is IDK what for now",
	},
	{ id: "q2", name: "Kiwi", author: "McCullum", text: "Playing Cricket " },
	{
		id: "IDNumber3",
		name: "MSD",
		author: "Mahi Bhai",
		text: "Playing, Cricket now in ARMY ",
	},
];

const QuoteDetail = () => {
	const params = useParams();
	console.log(params.quotesId);
	// path="/quotes/:quotesId"
	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quotesId);

	if (!quote) {
		return <NotFound />;
	}

	return (
		<div>
			<Highlighted name={quote.name} text={quote.text} author={quote.author} />
			<div>
				<Link className="btn--flat" to={`/quotes/${params.quotesId}/comments`}>
					Load Comments
				</Link>
			</div>
			{/* <Route path={`/quotes/${params.quotesId}/comments`}>
				<Comments />
			</Route> */}
			<Route path="/quotes/:quotesId/comments">
				<Comments />
			</Route>
		</div>
	);
};

export default QuoteDetail;
