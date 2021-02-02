import React from "react";
import "./RecentCategories.scss"


function RecentCategories() {
    return (
        <div className="  recent-categories row-12">
            <h2 className="categories-h2">Recent Properties</h2>
            <hr className="categories-hr"/>
            <div className="houses-chose recent-properties-chose row ">
                    <div className=" houses col-sm-4"> </div>
                    <div className="houses  col-sm-4"> </div>
                    <div className="houses  col-sm-4"> </div>
                    <div className="houses  col-sm-4"> </div>
                    <div className="houses  col-sm-4"> </div>
                    <div className="houses  col-sm-4"> </div>
            </div>
                <button type="submit" className="category-button">
                  VIEW ALL PROPERTIES
                </button>
        </div>
    );
}

export default RecentCategories;
