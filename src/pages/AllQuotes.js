import { Link } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";

const Dummy_quotes = [
  { id: "1", author: "joe", text: "learing" },
  { id: "2", author: "ken", text: "wts up" },
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={Dummy_quotes} />
    // <section>
    //   <h1>Quotes Page</h1>
    //   <ul>
    //     <li>
    //       <Link to="/quotes/q1">quotes1</Link>
    //     </li>
    //     <li>
    //       <Link to="/quotes/q2">quotes10</Link>
    //     </li>
    //     <li>
    //       <Link to="/quotes/q2">quotes15</Link>
    //     </li>
    //   </ul>
    // </section>
  );
};

export default AllQuotes;
