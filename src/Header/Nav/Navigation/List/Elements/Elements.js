import React from "react";
import "./Elements.scss"






function Elements() {

    return (


                <li className="li-items"  >
                    <div className="li-item-name">
                        <i className="bi bi-chevron-down"> </i>
                        <span className="lo" >Elements</span>
                    </div>

                        <ul className="drop-down-ul">
                            <li className="drop-down-items">Tabs & Accordions</li>
                            <li className="drop-down-items">Typography</li>
                            <li className="drop-down-items">Forms</li>
                            <li className="drop-down-items">Buttons</li>
                            <li className="drop-down-items">Grid</li>
                            <li className="drop-down-items">Icons</li>
                            <li className="drop-down-items">Tables</li>
                            <li className="drop-down-items">Progress bars</li>
                        </ul>


                </li>
    )
}

export default Elements;
