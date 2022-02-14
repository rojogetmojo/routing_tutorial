import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path="/welcome/hello">
        <h1>fuck you!!</h1>
      </Route>
    </section>
  );
};

export default Welcome;
