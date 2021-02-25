import React from "react";
import "./Service.scss"


function Service() {
    return (
        <div className="service">
            <div className="service-wrapper-items">
                <select name="" id="" className="service-menu">
                    <option value="" className="first" defaultValue="75 $">
                        75 $
                    </option>
                    <option value="" className="second">
                        Пішли нахер
                    </option>
                    <option value="" className="third">
                        Брат ти шо землі не чуєш
                    </option>
                </select>
                <select name="" id="" className="service-menu">
                    <option value="" className="first" defaultValue="75 $">
                        Popular Service
                    </option>
                    <option value="" className="second">
                        Пішли нахер
                    </option>
                </select>
            </div>
            <div className="service-wrapper-items">
                <button className="button-service-hide">
                    <i className="bi bi-heart"> </i>
                </button>

                <button className="button-service-hide">
                    <i className="bi bi-chevron-up"> </i>
                </button>

            </div>
        </div>
    );
}

export default Service;
