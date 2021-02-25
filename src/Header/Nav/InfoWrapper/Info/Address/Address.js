import React from "react";
import "./Address.scss"




function Address() {
    const li = [
        {id:1, address: <span className="span-address"> 1-800-1234-567 </span> , icon:<i className="bi bi-telephone"> </i> },
        {id:2, address:<span className="span-address"> info@demolink.org </span> , icon:<i className="bi bi-envelope-open"> </i>},
        {id:3, address:<span className="span-address"> 795 Folsom Ave, Suite 600 San Francisco, CA 94107 </span>, icon:<i className="bi bi-geo-alt-fill"> </i>}
    ]


    const list = li.map((item)=>
        <li className="address-list-items" key={item.id}>
            {item.icon}
            {item.address}
        </li>
    )
    return (
        <div className="address">
                 <ul className="address-list-wrapper">
                     {list}
                 </ul>
            <div className="div address-wrapper-items"> </div>
        </div>
    );
}

export default Address;
