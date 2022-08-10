import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // HashRouter as Router,
  // BrowserHistory
} from "react-router-dom";
import Counter from './Counter'
import Test from './Test'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/may">Home</Link>
          </li>
          <li>
            <Link to="/">test</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* <Switch> */}
            <Route path="/" component={About}>
              <Switch>
                <Route exact path="/may" component={Test} />
              </Switch>
            </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function About(props) {
  console.log(props)
  return (
    <div>
      <h2>1</h2>
      {props.location.pathname}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
