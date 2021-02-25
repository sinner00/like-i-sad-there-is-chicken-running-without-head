import React from "react";
import "./RecentCategories.scss"
import index1 from "../../HousesImage/index-6.jpg"
import index2 from "../../HousesImage/index-7.jpg"
import index3 from "../../HousesImage/index-8.jpg"
import index4 from "../../HousesImage/index-9.jpg"
import index5 from "../../HousesImage/index-10.jpg"
import index6 from "../../HousesImage/index-11.jpg"
function RecentCategories() {
    return (
        <div className="  recent-categories row-12">
            <h2 className="categories-h2">Recent Properties</h2>
            <hr className="categories-hr"/>
            <div className="houses-chose  recent-properties-chose row ">
                    <div className=" houses one col-sm-4">
                        <img src={index1} alt="index1"  width="500px" height="500" className="properties-image"/>
                        <h1 className="properties-name"> 1336 N Occidental Blvd</h1>
                        <h2 className="properties-cost"> $4339/month</h2>
                        <div className="advanteges1">
                            <i className="bi bi-house">
                                <p className="quantity"> 1200 sq ft</p>
                            </i>
                            <i className="bi bi-layout-sidebar-reverse">
                                <p className="quantity"> 4 bedrooms</p>
                            </i>
                        </div>
                        <div className="advanteges2">
                            <i className="bi bi-droplet-half">
                                <p className="quantity"> 2 bathrooms</p>
                            </i>
                            <i className="bi bi-truck">
                                <p className="quantity"> 2 garages</p>
                            </i>
                        </div>
                        <p className="introduce">
                            Introducing Brooklyn's most unique and genteel address: 123 on the Park. A stately, one-of-a-kind rental residence directly overlooking Brooklyn's famed Prospect Park.
                        </p>
                    </div>
                <div className=" houses two col-sm-4">
                    <img src={index2} alt="index1"  width="500px" height="500" className="properties-image"/>
                    <h1 className="properties-name"> 225 Maywood Dr, San Francisco, CA 94127</h1>
                    <h2 className="properties-cost"> $2,229.00/ month</h2>
                    <div className="advanteges1">
                        <i className="bi bi-house">
                            <p className="quantity"> 1200 sq ft</p>
                        </i>
                        <i className="bi bi-layout-sidebar-reverse">
                            <p className="quantity"> 4 bedrooms</p>
                        </i>
                    </div>
                    <div className="advanteges2">
                        <i className="bi bi-droplet-half">
                            <p className="quantity"> 2 bathrooms</p>
                        </i>
                        <i className="bi bi-truck">
                            <p className="quantity"> 2 garages</p>
                        </i>
                    </div>
                    <p className="introduce">
                        One of the original homes built at Ocean Beach.
                    </p>
                </div>
                <div className=" houses three col-sm-4">
                    <img src={index3} alt="index1"  width="500px" height="500" className="properties-image"/>
                    <h1 className="properties-name"> 2266 48th Ave</h1>
                    <h2 className="properties-cost"> $1,339.00/ month</h2>
                    <div className="advanteges1">
                        <i className="bi bi-house">
                            <p className="quantity"> 1200 sq ft</p>
                        </i>
                        <i className="bi bi-layout-sidebar-reverse">
                            <p className="quantity"> 4 bedrooms</p>
                        </i>
                    </div>
                    <div className="advanteges2">
                        <i className="bi bi-droplet-half">
                            <p className="quantity"> 2 bathrooms</p>
                        </i>
                        <i className="bi bi-truck">
                            <p className="quantity"> 2 garages</p>
                        </i>
                    </div>
                    <p className="introduce">
                        Classic architectural detail, truly superb floor plan & strong upside potential for the next steward to restore this forever home to greatness.                    </p>
                </div>
                <div className=" houses four col-sm-4">
                    <img src={index4} alt="index1"  width="500px" height="500" className="properties-image"/>
                    <h1 className="properties-name"> Building: 123 on the Park</h1>
                    <h2 className="properties-cost"> $4339/month</h2>
                    <div className="advanteges1">
                        <i className="bi bi-house">
                            <p className="quantity"> 1200 sq ft</p>
                        </i>
                        <i className="bi bi-layout-sidebar-reverse">
                            <p className="quantity"> 4 bedrooms</p>
                        </i>
                    </div>
                    <div className="advanteges2">
                        <i className="bi bi-droplet-half">
                            <p className="quantity"> 2 bathrooms</p>
                        </i>
                        <i className="bi bi-truck">
                            <p className="quantity"> 2 garages</p>
                        </i>
                    </div>
                    <p className="introduce">
                        Located in the heart of Silver Lake, this magnificently re-imagined Spanish bungalow is not to be missed.                    </p>
                </div>
                <div className=" houses five col-sm-4">
                    <img src={index5} alt="index1"  width="500px" height="500" className="properties-image"/>
                    <h1 className="properties-name"> 650 Kelton Ave #201</h1>
                    <h2 className="properties-cost"> $2,229.00/ month</h2>
                    <div className="advanteges1">
                        <i className="bi bi-house">
                            <p className="quantity"> 1200 sq ft</p>
                        </i>
                        <i className="bi bi-layout-sidebar-reverse">
                            <p className="quantity"> 4 bedrooms</p>
                        </i>
                    </div>
                    <div className="advanteges2">
                        <i className="bi bi-droplet-half">
                            <p className="quantity"> 2 bathrooms</p>
                        </i>
                        <i className="bi bi-truck">
                            <p className="quantity"> 2 garages</p>
                        </i>
                    </div>
                    <p className="introduce">
                        Front-facing, single level, well-designed floor plan. Secure building in a highly DESIRABLE location!                    </p>
                </div>
                <div className=" houses six col-sm-4">
                    <img src={index6} alt="index1"  width="500px" height="500" className="properties-image"/>
                    <h1 className="properties-name"> 1735 N Fuller Ave #124</h1>
                    <h2 className="properties-cost"> $1,339.00/ month</h2>
                    <div className="advanteges1">
                        <i className="bi bi-house">
                            <p className="quantity"> 1200 sq ft</p>
                        </i>
                        <i className="bi bi-layout-sidebar-reverse">
                            <p className="quantity"> 4 bedrooms</p>
                        </i>
                    </div>
                    <div className="advanteges2">
                        <i className="bi bi-droplet-half">
                            <p className="quantity"> 2 bathrooms</p>
                        </i>
                        <i className="bi bi-truck">
                            <p className="quantity"> 2 garages</p>
                        </i>
                    </div>
                    <p className="introduce">
                        This charming 2 bed and 2 bath townhome has been beautifully renovated and ready for its next owners.                    </p>
                </div>

            </div>
                <button type="submit" className="category-button">
                  VIEW ALL PROPERTIES
                </button>
        </div>
    );
}

export default RecentCategories;
