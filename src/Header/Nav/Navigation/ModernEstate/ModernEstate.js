import React from "react";
import "./ModernEstate.scss"
import modern from "./logo-1.png"
function ModernEstate() {
    return (
        <div className="modern-estate">
            <a href="/" className="modern-link">
              <img className="modern-img" src={modern} width="197" height="42" alt="йобана"/>
            </a>
        </div>
    );
}

export default ModernEstate;
