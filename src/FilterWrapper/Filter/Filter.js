import React from "react";
import "./Filter.scss"

function Filter() {
    return (
        <div className="filter">
            <h3 className="filter-h3">
                Find Your Home
            </h3>

            <form action="" className="filter-form">
                <div className="form-wrapper-items">
                    <div className="select col-3 margin-0">
                        <label htmlFor="" className="form-label-items">

                        </label>
                        <select name="  "     className="select-form-items"> </select>
                    </div>
                    <div className="select col-3 margin-0">
                        <label htmlFor="" className="form-label-items">

                        </label>
                        <select name="  "     className="select-form-items"> </select>
                    </div>
                    <div className="select col-3 margin-0">
                        <label htmlFor="" className="form-label-items">

                        </label>
                        <select name="  "     className="select-form-items"> </select>
                    </div>
                    <div className="select col-3 margin-0">
                        <label htmlFor="" className="form-label-items">

                        </label>
                        <select name="  "     className="select-form-items"> </select>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Filter;
