import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path={`/`} render={() => <App />} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
