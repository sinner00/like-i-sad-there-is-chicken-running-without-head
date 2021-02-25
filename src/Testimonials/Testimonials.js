import React from "react";
import "./Testimonials.scss"
import index1 from "../TestimonialsImage/client-1.jpg"
import index2 from "../TestimonialsImage/index-16.jpg"
import index3 from "../TestimonialsImage/index-17.jpg"
import index4 from "../TestimonialsImage/index-18.jpg"
function Testimonials() {
    return (
        <div className=" testimonials ">
            <div className="testimonials-wrapper container">
            <h2 className="testimonials-h2">
                Testimonials
            </h2>
            <hr className="testimonials-hr"/>
            <div className="testimonials-wrapper-items row">
                <div className="testimonials-item col-sm-6">
                    <div className="testimonials-wrapper-item">
                        <img src={index1} alt="" width="100px" height="100px" className="testimonials-img"/>
                        <div className="testimonials-name">
                            <h1 className="item-name">
                                Laura Russell
                            </h1>
                            <p className="testimonials-profession">
                                Journalist, San Diego
                            </p>
                        </div>
                    </div>
                    <p className="testimonials-reviews">
                        Thank you for your prompt response and the help that you gave me. You always have a quick solution to any problem. What an excellent level of customer service!
                    </p>
                </div>
                <div className="testimonials-item col-sm-6">
                    <div className="testimonials-wrapper-item">
                        <img src={index2} alt="" width="100px" height="100px" className="testimonials-img"/>
                        <div className="testimonials-name">
                            <h1 className="item-name">
                                Bala Bala
                            </h1>
                            <p className="testimonials-profession">
                               Tyco Electronics
                            </p>
                        </div>
                    </div>
                    <p className="testimonials-reviews">
                      It was big pleasure had deal with your team ! When somebody have any kind deal concerning to buy properties
                        you will be first who i advise.
                    </p>
                </div>
                <div className="testimonials-item col-sm-6">
                    <div className="testimonials-wrapper-item">
                        <img src={index1} alt="" width="100px" height="100px" className="testimonials-img"/>
                        <div className="testimonials-name">
                            <h1 className="item-name">
                                Kruliv Oleg
                            </h1>
                            <p className="testimonials-profession">
                               pracovnik RAMONDIS
                            </p>
                        </div>
                    </div>
                    <p className="testimonials-reviews">
                        Fuck you!! BAck to your hole old bitch ! You're the worst company i saw !!
                        My   lowest rating to your company
                     </p>
                </div>
                <div className="testimonials-item col-sm-6">
                    <div className="testimonials-wrapper-item">
                        <img src={index3} alt="" width="100px" height="100px" className="testimonials-img"/>
                        <div className="testimonials-name">
                            <h1 className="item-name">
                                Dmitriy  Special forces

                            </h1>
                            <p className="testimonials-profession">
                                ranker
                            </p>
                        </div>
                    </div>
                    <p className="testimonials-reviews">
                        now I don't sleep on pallets !!
                      </p>
                </div>
            </div>
                <div className="read-wrapper">
                    <button className="read-more">
                        Read more Testimonials
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Testimonials;
