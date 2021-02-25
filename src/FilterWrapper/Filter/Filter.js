import React from "react";
import "./Filter.scss"

function Filter({set, open}) {

    return (
        <div className="filter">
            <h3 className="filter-h3">
                Find Your Home
            </h3>

            <form action="" className="filter-form">
                <div className="form-wrapper-items">
                    <div className="select col-3 margin-0">
                        <label htmlFor="lk" className="form-label-items">
                           Keyword
                        </label>
                        <input className="select-form-items" placeholder="Any"/>

                    </div>
                    <div className="select col-3 margin-0">
                        <label htmlFor="" className="form-label-items">
                            Location
                        </label>
                        <select name="  "     className="select-form-items">
                            <option>Any</option>
                            <option>New York</option>
                            <option>Orlando</option>
                            <option>Chicago</option>
                            <option>Missuri</option>
                            <option>Minesota</option>
                            <option>Gold Shire</option>
                            <option>Storm wind</option>
                            <option>Ogrimmar</option>
                        </select>
                    </div>
                    <div className="select col-3 margin-0">
                        <label htmlFor="" className="form-label-items">
                      Property status
                        </label>
                        <select name="  "     className="select-form-items">
                            <option>Any</option>
                            <option>Homeless</option>
                            <option> Idiots</option>
                            <option>Scumbags</option>
                            <option>Scunks</option>
                            <option>Junks</option>
                            <option>Motherfuckers</option>
                            <option>Storm wind</option>
                            <option>Ogrimmar</option>
                        </select>
                    </div>
                    <div className="select col-3 margin-0">
                        <label htmlFor="" className="form-label-items">
                          Property type
                        </label>
                        <select name="  "     className="select-form-items" >
                            <option value="1" className="find-your-home-option">Any</option>
                            <option value="2" className="find-your-home-option">Under Construction</option>
                            <option value="3" className="find-your-home-option">Ready to Move</option>
                        </select>
                    </div>

                </div>
                <div className="wrapper-search">
                    <div className="second-row">
                   <div className="price">
                       <label htmlFor="">
                           Price(USD)
                       </label>
                       <div className="price-item">
                           <div className="input-second-row col-sm-6">
                               <input type="text" placeholder="600" />
                           </div>
                           <div className="input-second-row col-sm-6">
                               <input type="text" placeholder="600" />
                           </div>
                       </div>
                   </div>
                        <div className="second-row">
                            <div className="price">
                                <label htmlFor="" className="label">
                                    Area
                                </label>
                                <div className="price-item col-sm-12">
                                    <div className="input-second-row col-sm-6">
                                        <input type="text" placeholder="600" />
                                    </div>
                                    <div className="input-second-row col-sm-6">
                                        <input type="text" placeholder="1500" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="input-second-row col-sm-3">
                            <label htmlFor="" className="row-label">
                                Min Baths
                            </label>
                            <div className="wrapper-selects  col-sm-12">
                                <select name="" id="" className="select-second-row col-sm-6" >
                                    <option value="" className="select-option">Any</option>
                                    <option value="" className="select-option">1</option>
                                    <option value="" className="select-option">2</option>
                                    <option value="" className="select-option">3</option>
                                    <option value="" className="select-option">4</option>
                                    <option value="" className="select-option">5</option>
                                    <option value="" className="select-option">6</option>
                                </select>
                                <select name="" id="" className="select-second-row col-sm-6">
                                    <option value="" className="select-option">Any</option>
                                    <option value="" className="select-option">1</option>
                                    <option value="" className="select-option">2</option>
                                    <option value="" className="select-option">3</option>
                                    <option value="" className="select-option">4</option>
                                    <option value="" className="select-option">5</option>
                                    <option value="" className="select-option">6</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <button className="search" type="button">Search</button>
                </div>
                <div className="range">
                    <input type="range" max="15" min="0" step="1"  className="input-range"  />
                    <input type="range" max="15" min="0" step="1"  className="input-range" />
                </div>
                <div className="main-plus" onClick={set}>
                    <div className="wrapper-plus">
                        <div className="vertical-plus" style={open?{display:"none"}:{display:"block"}}> </div>
                        <div className="horizontal-plus"> </div>
                    </div>
                    <span className="sign-plus"> Look for certain features </span>
                </div>

            </form>
        </div>
    );
}

export default Filter;
