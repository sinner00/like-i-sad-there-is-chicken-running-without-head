import React from "react";
import "./Header.scss"


import Nav from "./Nav/Nav";
import ConsumerMenu from "./ConsumerMenu/ConsumerMenu";


function Header() {
    return (
        <div className="header">
             <ConsumerMenu/>
             <Nav/>
        </div>
    );
}

export default Header;
