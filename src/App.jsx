import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Service from "./Service.jsx";
import "./index.css";
import Footer from "./Footer.jsx";

import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Navabar';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
                <Home />
            </Switch>
            <Footer/>
        </>
    )
};

export default App;