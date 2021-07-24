import React, {Suspense} from "react";
import {BrowserRouter, Switch, Redirect} from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import GlobalStyle from "./GlobalStyle"
import {RouteWrapper} from "./routes/RouteWrapper";

const Home = React.lazy(()=> import("./views/Home"));

function App() {
  return (
      <BrowserRouter>
          <GlobalStyle />
          <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                  <RouteWrapper path="/" exact component={Home} layout={BaseLayout} />
              </Suspense>

              <Redirect to='/' />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
