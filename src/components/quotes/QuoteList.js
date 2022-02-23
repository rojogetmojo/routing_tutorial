import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryparams = new URLSearchParams(location.search);

  console.log(queryparams.get("sort") === "asc");
  const isSortingAsceding = queryparams.get("sort") === "asc";

  const changeSortingHandler = () => {
    history.push("/quotes?sort=" + (isSortingAsceding ? "desc" : "asc"));
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          sort {isSortingAsceding ? "ascending" : "desending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
