import React from "react";
import "./OurAdvantages.scss"


function OurAdvantages() {
    return (
        <div className="our-advantages ">
            <div className="our-advantages-wrapper container">
            <h2 className="articles-h2">
                Our Advantages
            </h2>
            <hr className="articles-hr"/>
            <div className="articles-wrapper row">
                <div className="articles col-sm-3">
                    <i className="bi bi-geo-alt"> </i>
                    <h1 className="various-locations"> Various Location</h1>
                    <p className="introduce"> Search by state then by city to find an apartment overlooking the lake in Chicago, within walking distance of the beach in Los Angeles or in the heart of Atlanta.</p>
                </div>
                <div className="articles col-sm-3">
                    <i className="bi bi-camera-fill"> </i>
                    <h1 className="various-locations"> Various Location</h1>
                    <p className="introduce">
                        View apartment listings with photos, HD videos, InsideView virtual tours, 3D floor plans, and more, while also choosing the apartment and community features that you want.                    </p>
                </div>
                <div className="articles col-sm-3">
                    <i className="bi bi-lock-fill"> </i>
                    <h1 className="various-locations"> Privacy and Security</h1>
                    <p className="introduce">
                        Renters insurance helps keep your belongings secure, whether they're on your desk, under your couch, or in some cases, even in your car's glove box                    </p>
                </div>
                <div className="articles col-sm-3">
                    <i className="bi bi-cash"> </i>
                    <h1 className="various-locations">
                        No Commission
                    </h1>
                    <p className="introduce">
                        You will therefore appreciate this opportunity to acquire a high-quality apartment for rent without having to pay any commission to our real estate agency.                    </p>
                </div>

            </div>
            </div>
        </div>
    );
}

export default OurAdvantages;
