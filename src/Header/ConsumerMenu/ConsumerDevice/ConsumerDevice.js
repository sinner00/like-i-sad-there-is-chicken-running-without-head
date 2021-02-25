import React from "react";
import "./ConsumerDevice.scss"


function ConsumerDevice() {
    return (
        <div className="consumer-device">
            <button className="col-4 consumer-device-items">
                <i className="bi bi-phone m"> </i>
                <span className="mobile-sign s ">
                   Mobile
                </span>
            </button>
            <button className="col-4 consumer-device-items">
                <i className="bi bi-tablet m"> </i>
                <span className="tablet-sign s ">
                   Tablet
                </span>
            </button>
            <button className="col-4 consumer-device-items">
                <i className="bi bi-display m"> </i>
                <span className="desktop-sign s ">
                   Desktop
                </span>
            </button>
        </div>
    );
}

export default ConsumerDevice;
