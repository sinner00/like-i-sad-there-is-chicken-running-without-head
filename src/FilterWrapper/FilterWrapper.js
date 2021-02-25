import React from "react";
import "./FilterWrapper.scss"
import Filter from "./Filter/Filter";

function FilterWrapper({set,open}) {
    return (
        <div className="filter-wrapper container">
            <Filter set={set} open={open}/>
        </div>
    );
}

export default FilterWrapper;
