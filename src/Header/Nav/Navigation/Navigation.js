import React from "react";
import "./Navigation.scss"
import List from "./List/List";
import ModernEstate from "./ModernEstate/ModernEstate";
import Submit from "./Submit/Submit";


function Navigation() {
    return (
        <div className="navigation">
            <ModernEstate/>
            <List/>
            <Submit/>

        </div>
    );
}

export default Navigation;
