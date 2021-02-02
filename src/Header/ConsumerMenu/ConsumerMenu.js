import React from "react";
import "./ConsumerMenu.scss"
import RealHouse from "./RealHouse/RealHouse";
import ConsumerDevice from "./ConsumerDevice/ConsumerDevice";
import AddToBasket from "./AddToBasket/AddToBasket";
import Service from "./Service/Service";

function ConsumerMenu() {
    return (
        <div className="consumer-menu">
       <RealHouse/>
       <ConsumerDevice/>
       <AddToBasket/>
       <Service/>
        </div>
    );
}

export default ConsumerMenu;
