import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
	{ id: "q1", author: "Max", text: "Learning React is IDK what for now" },
	{ id: "q2", author: "McCullum", text: "Playing Cricket " },
	{
		id: "IDNumber3",
		author: "Maahi Bhai",
		text: "Playing Cricket now in ARMY ",
	},
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
