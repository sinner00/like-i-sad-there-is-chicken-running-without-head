import React from "react";
import "./Nav.scss"
import InfoWrapper from "./InfoWrapper/InfoWrapper";
import Navigation from "./Navigation/Navigation";


function Nav() {
    return (
        <div className="nav">
            <InfoWrapper/>
            <Navigation/>
        </div>
    );
}

export default Nav;
