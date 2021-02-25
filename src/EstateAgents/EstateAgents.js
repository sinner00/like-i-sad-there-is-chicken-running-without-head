import React from "react";
import "./EstateAgents.scss"
import index1 from "../EstateAgentsImage/agency-2.jpg"
import index2 from "../EstateAgentsImage/agency-3.jpg"
import index3 from "../EstateAgentsImage/agency-4.jpg"
import index4 from "../EstateAgentsImage/agency-2.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function EstateAgents() {
    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }
    return (
        <div className="estate-agents ">
            <div className="estate-agents-wrapper container">
            <h2 className="agents-h2">
                Our Real Estate Agents
            </h2>
            <hr className="agents-hr"/>
            <div className="agents-wrapper row">
                <Slider {...settings}>
                    <div className="col-12 slider" >

                           <div className="agents-information">
                               <img src={index1} alt="" width="100px" height="100px" className="agents-faces"/>
                               <div className="agents-items">
                                   <h1 className="agent-name">
                                       Galya Niczajewa
                                   </h1>
                                   <p className="agent-profession">
                                       Listing Agent
                                   </p>
                                   <p className="agent-phone-number">
                                       tel.+380501235682
                                   </p>
                               </div>
                           </div>
                        <p className="agents-resume">
                            She is our leading specialist in everything concerning Real Estate and property management
                        </p>
                        <button className="get-in-touch">Get In Touch</button>
                    </div>

                    <div className="col-12 slider" >

                        <div className="agents-information">
                            <img src={index2} alt="" className="agents-faces"/>
                            <div className="agents-items">
                                <h1 className="agent-name">
                                    Bala Bala
                                </h1>
                                <p className="agent-profession">
                                    Listing Agent
                                </p>
                                <p className="agent-phone-number">
                                    tel.+380501235682
                                </p>
                            </div>
                        </div>
                        <p className="agents-resume">
                            She is our leading specialist in everything concerning Real Estate and property management
                        </p>
                        <button className="get-in-touch">Get In Touch</button>
                    </div>
                    <div className="col-12 slider" >

                        <div className="agents-information">
                            <img src={index3} alt="" className="agents-faces"/>
                            <div className="agents-items">
                                <h1 className="agent-name">
                                    Artur Cheverda
                                </h1>
                                <p className="agent-profession">
                                    Listing Agent
                                </p>
                                <p className="agent-phone-number">
                                    tel.+380501235682
                                </p>
                            </div>
                        </div>
                        <p className="agents-resume">
                            She is our leading specialist in everything concerning Real Estate and property management
                        </p>
                        <button className="get-in-touch">Get In Touch</button>
                    </div>
                    <div className="col-12 slider" >

                        <div className="agents-information">
                            <img src={index4} alt="" className="agents-faces"/>
                            <div className="agents-items">
                                <h1 className="agent-name">
                                    Michuta Michuta
                                </h1>
                                <p className="agent-profession">
                                    Listing Agent
                                </p>
                                <p className="agent-phone-number">
                                    tel.+380501235682
                                </p>
                            </div>
                        </div>
                        <p className="agents-resume">
                            She is our leading specialist in everything concerning Real Estate and property management
                        </p>
                        <button className="get-in-touch">Get In Touch</button>
                    </div>
                    <div className="col-12 slider" >

                        <div className="agents-information">
                            <img src={index2} alt="" className="agents-faces"/>
                            <div className="agents-items">
                                <h1 className="agent-name">
                                    Lolita
                                </h1>
                                <p className="agent-profession">
                                    Listing Agent
                                </p>
                                <p className="agent-phone-number">
                                    tel.+380501235682
                                </p>
                            </div>
                        </div>
                        <p className="agents-resume">
                            She is our leading specialist in everything concerning Real Estate and property management
                        </p>
                        <button className="get-in-touch">Get In Touch</button>
                    </div>
                </Slider>


            </div>
            </div>

        </div>
    );
}

export default EstateAgents;
