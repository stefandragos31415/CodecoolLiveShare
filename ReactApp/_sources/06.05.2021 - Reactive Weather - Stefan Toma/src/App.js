import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import City from "./pages/city";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
       <Navigation/>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />

                    <Route
                        path="/city/:location"
                        component={City}
                    />
                    <Route
                        render={() =>
                            <div className="
                            d-flex
                            justify-content-center
                            align-items-center
                            flex-column
                            "
                            >
                                <h1
                                    className="not-found"
                                >
                                    404: This is not the page you are looking for
                                </h1>
                                <img
                                    src={process.env.PUBLIC_URL + `/images/not-found.jpg`}
                                    alt="not-found"
                                />
                            </div>
                        }
                    />

                </Switch>
    </Router>
  );
}

export default App;

