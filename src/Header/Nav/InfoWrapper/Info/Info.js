import React from "react";
import './Info.scss';
import Login from "./Login/Login";
import Address from "./Address/Address";
import SocialLinks from "./SocialLinks/SocialLinks";


function Info() {
    return (
        <div className="info">
         <Login/>
         <Address/>
         <SocialLinks/>
        </div>
    );
}

export default Info;
