// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home";

// Components
import Navbar from "./components/common/NavbarComponent";
import Footer from "./components/common/FooterComponent";

// Assets
import "./assets/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
