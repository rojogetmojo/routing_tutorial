import { Fragment } from "react";

import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";

const Dummy_quotes = [
  { id: "1", author: "joe", text: "learing" },
  { id: "2", author: "ken", text: "wts up" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = Dummy_quotes.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
