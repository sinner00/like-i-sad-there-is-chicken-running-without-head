import React from "react";
import "./Categories.scss"

function Categories() {
    return (
        <div className="categories container">
            <h2 className="categories-h2">Popular categories</h2>
            <hr className="categories-hr"/>
            <div className="categories-chose row ">
                <div className="chose  col-sm-6"> </div>
                <div className="chose col-sm-6"> </div>
                <div className="chose col-sm-6"> </div>
                <div className="chose col-sm-6"> </div>
            </div>
        </div>
    );
}

export default Categories;
