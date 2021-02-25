import React from "react";
import './Image.scss'
import Face from "./img/environmental-protection-3341942_1920.jpg"
import Earth from "./img/img-vr-tilt-brush-website-hero-shot.jpg"
function Image() {



    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Face} className="d-block w-100" alt=".dfsd.." />
                </div>
                <div className="carousel-item">
                    <img src={Earth} className="d-block w-100" alt=".."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    );
}

export default Image;
