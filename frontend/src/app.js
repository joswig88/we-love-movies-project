import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesList from "./MoviesList";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/movies">
            <MoviesList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;