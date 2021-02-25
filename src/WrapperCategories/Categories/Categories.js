import React from "react";
import "./Categories.scss"
import Interior from "../../image/03_JHID_NW+Hills+House.jpg"
import Interior1 from "../../image/House-interior-design-of-a-breathtaking-lounge-with-a-sea-view.jpg"
import Interior2 from "../../image/c29f320a-890d-4a2c-b561-64e1118f5701-interior-design-ideas-thoroughfares-Abode.jpg"
import Interior3 from "../../image/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg"

function Categories() {
    return (
        <div className="categories container">
            <h2 className="categories-h2">Popular categories</h2>
            <hr className="categories-hr"/>
            <div className="categories-chose row ">
                <div className="chose one col-sm-6" >
                    <div style={{width:"100%"}} className="parent">
                        <img alt="old" src={Interior} width="100%" height="500px" className="old"/>
                        <span className="back">
                         <h2 className="name"> With Swimming Pool</h2>
                            <p className="properties"> 54 properties</p></span>
                    </div>
                </div>
                <div className="chose two col-sm-6" >

                    <div style={{width:"100%"}} className="parent">
                        <img alt="old" src={Interior1} width="100%" height="500px" className="old"/>
                        <span className="back">
                           <h2 className="name"> Studio Apartments</h2>
                            <p className="properties"> 54 properties</p>
                        </span>
                    </div>
                </div>
                <div className="chose three col-sm-6" >
                    <div style={{width:"100%"}} className="parent">
                        <img alt="old" src={Interior2} width="100%" height="500px" className="old"/>
                        <span className="back">
                         <h2 className="name"> Cozy Houses</h2>
                            <p className="properties"> 54 properties</p>
                        </span>
                    </div>
                </div>
                <div className="chose  gla col-sm-6" >
                    <div style={{width:"100%"}} className="parent">
                        <img alt="old" src={Interior3} width="100%" height="400px" className="old"/>
                        <span className="back">
                         <h2 className="name"> Luxury Houses</h2>
                            <p className="properties"> 54 properties</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
