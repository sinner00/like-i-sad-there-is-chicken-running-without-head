import React from "react";
import "./Testimonials.scss"


function Testimonials() {
    return (
        <div className=" testimonials ">
            <div className="testimonials-wrapper container">
            <h2 className="testimonials-h2">
                Testimonials
            </h2>
            <hr className="testimonials-hr"/>
            <div className="testimonials-wrapper-items row">
                <div className="testimonials-item col-sm-6"> </div>
                <div className="testimonials-item col-sm-6"> </div>
                <div className="testimonials-item col-sm-6"> </div>
                <div className="testimonials-item col-sm-6"> </div>
            </div>
            </div>
        </div>
    );
}

export default Testimonials;
