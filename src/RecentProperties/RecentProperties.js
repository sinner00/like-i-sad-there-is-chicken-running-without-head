import React from "react";
import "./RecentProperties.scss"
import RecentCategories from "./RecentCategories/RecentCategories";

function RecentProperties() {
    return (
        <div className="recent-properties container">
          <RecentCategories/>
        </div>
    );
}

export default RecentProperties;
