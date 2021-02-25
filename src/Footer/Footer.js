import React from "react";
import "./Footer.scss"
import modern from "./logo-1.png"

function Footer() {
    return (
        <div className="footer ">
            <div className="footer-wrapper container">
            <div className="footer-wrapper-items row">
                <div className="footer-item col-sm-3">
                    <img src={modern} alt="" width="50px" height="50px" className="modern-estate-footer"/>
                     <p className="sign1">We believe in Simple, Creative & Flexible Design Standards. </p>
                     <p className="sign2">795 Folsom Ave, Suite 600 San Francisco, CA 94107 </p>
                      <div className="footer-phone-number">
                          <p className="phone-footer">
                              Phone
                          </p>
                          <a href="/" className="footer-phone-link">
                          (91)8547632521
                          </a>
                      </div>
                    <div className="footer-phone-number">
                        <p className="phone-footer">
                            Fax
                        </p>
                        <a href="/" className="footer-phone-link">
                            (91)8566632521
                        </a>
                    </div>
                    <div className="footer-phone-number">
                        <p className="phone-footer">
                            Email
                        </p>
                        <a href="/" className="footer-phone-link">
                            info@goga.com
                        </a>
                    </div>
                </div>
                <div className="footer-item col-sm-3">
                   <h1 className="footer-blogRoll">
                       Blogroll
                   </h1>
                    <div className="links-footer-items">
                        <i className="bi bi-chevron-compact-right"> </i>
                        <a href="/" className="links-footer"> Documentation</a>
                    </div>
                    <div className="links-footer-items">
                        <i className="bi bi-chevron-compact-right"> </i>
                        <a href="/" className="links-footer">Feedback</a>
                    </div>
                    <div className="links-footer-items">
                        <i className="bi bi-chevron-compact-right"> </i>
                        <a href="/" className="links-footer"> Plugins </a>
                    </div>
                    <div className="links-footer-items">
                        <i className="bi bi-chevron-compact-right"> </i>
                        <a href="/" className="links-footer">Support Forums </a>
                    </div>
                    <div className="links-footer-items">
                        <i className="bi bi-chevron-compact-right"> </i>
                        <a href="/" className="links-footer">Themes</a>
                    </div>
                    <div className="links-footer-items">
                        <i className="bi bi-chevron-compact-right"> </i>
                        <a href="/" className="links-footer"> WordPress Blog</a>
                    </div>
                    <div className="links-footer-items">
                        <i className="bi bi-chevron-compact-right"> </i>
                        <a href="/" className="links-footer"> WordPress Planet</a>
                    </div>
                </div>
                <div className="footer-item col-sm-3">
                    <h1 className="footer-blogRoll">
                        Recent posts
                    </h1>
                    <div className="december">
                        <a href="/" className="links-footer"> Believe in the Business of Your Dreams </a>
                        <p className="december">
                            December28,2016
                        </p>
                    </div>
                    <div className="december">
                        <a href="/" className="links-footer"> Establishing Your Brand on College Campuses </a>
                        <p className="december">
                            December28,2016
                        </p>
                    </div>
                    <div className="december">
                        <a href="/" className="links-footer"> Beautiful Rumi Quotes that are Worth Reading </a>
                        <p className="december">
                            December28,2016
                        </p>
                    </div>
                </div>
                <div className="footer-item col-sm-3">
                    <h1 className="footer-blogRoll">
                        Newsletter
                    </h1>
                    <p className="enter">
                        Enter your email address to receive all news, updates on new arrivals, special offers and other information.

                    </p>
                    <input type="text" className="footer-input" placeholder="Enter e-mail"/>
                     <div className="button-wrapper">
                         <button className="subscribe">
                             Subscribe
                         </button>
                     </div>
                </div>

            </div>
                <div className="footer-social-media row col-sm-12">
                    <div className="policy">
                          <p className="policy-item">
                              © 2021 All Rights Reserved Terms of Use and Privacy Policy
                          </p>
                    </div>
                    <div className="footer-links">
                        <a href="" className="link-item link-facebook"><i className="bi bi-facebook"> </i></a>
                        <a href="" className="link-item"><i className="bi bi-twitter"> </i></a>
                        <a href="" className="link-item"><i className="bi bi-instagram"> </i></a>
                        <a href="" className="link-item"><i className="bi bi-vkontakte"> </i></a>
                        <a href="" className="link-item"><i className="bi bi-google"> </i></a>
                        <a href="" className="link-item"><i className="bi bi-wifi"> </i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
