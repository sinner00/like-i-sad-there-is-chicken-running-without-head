import React from "react";
import "./Gallery.scss"






function Gallery() {

    return (


                <li className="li-items">
                    <span className="li-item-name">
                        <i className="bi bi-chevron-down"> </i>
                        <span>Gallery</span>
                    </span>
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

export default Gallery;
