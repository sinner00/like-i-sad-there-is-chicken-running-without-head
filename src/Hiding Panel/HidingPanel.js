import React from "react";
import "./HidingPanel.scss"


function HidingPanel({open}) {
    return (

        <div className=" hiding-panel container" style={open?{transform:"translateY(30%)" , transition:" transform 500ms , height 500ms" , height:"100px"}:{transform:"translateY(0)", transition:" 500ms", height:"0"} } >

                <div className="checkbox-wrapper-items"  style={open?{visibility:"visible"}:{visibility:"hidden",  transition:"200ms"}}  >
                    <div className="input-wrapper">
                        <input type="checkbox" id="checkbox" className="hiding-input"/>
                        <label htmlFor="checkbox" className="label-checkbox">Central Heat</label>
                        <input type="checkbox" id="checkbox2" className="hiding-input"/>
                        <label htmlFor="checkbox2" className="label-checkbox">Radiators</label>
                        <input type="checkbox" id="checkbox3" className="hiding-input"/>
                        <label htmlFor="checkbox3" className="label-checkbox">Boiler</label>
                        <input type="checkbox" id="checkbox4" className="hiding-input"/>
                        <label htmlFor="checkbox4" className="label-checkbox">Hot Air Maker</label>
                        <input type="checkbox" id="checkbox5" className="hiding-input"/>
                        <label htmlFor="checkbox5" className="label-checkbox">Dryer</label>
                        <input type="checkbox" id="checkbox6" className="hiding-input"/>
                        <label htmlFor="checkbox6" className="label-checkbox">Gala</label>
                    </div>
                    <div className="input-wrapper2">
                        <input type="checkbox" id="checkbox7" className="hiding-input"/>
                        <label htmlFor="checkbox7" className="label-checkbox">Alarm System</label>
                    </div>
                </div>






        </div>
    );
}

export default HidingPanel;