import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

// const DUMMY_QUOTES = [
// 	{ id: "q1", author: "Max", text: "Learning React is IDK what for now" },
// 	{ id: "q2", author: "McCullum", text: "Playing Cricket " },
// 	{ id: "q3", author: "Maahi Bhai", text: "Playing Cricket now in ARMY " },
// ];

const QuoteItem = (props) => {
	return (
		<li className={classes.item}>
			<figure>
				<blockquote>
					<p>{props.text}</p>
				</blockquote>
				<figcaption>{props.author}</figcaption>
			</figure>
			<Link className="btn" to={`/quotes/${props.id}`}>
				View Fullscreen
			</Link>
		</li>
	);
};

export default QuoteItem;
