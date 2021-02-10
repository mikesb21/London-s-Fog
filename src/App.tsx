// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home";
import WhatsOnYourMind from "./views/WhatsOnYourMind";

// Components
import Navbar from "./components/common/NavbarComponent";
import Footer from "./components/common/FooterComponent";

// Assets
import "./assets/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App primary-background app-pad">
        <Switch>
          <Route path="/whats-on-your-mind">
            <WhatsOnYourMind />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
