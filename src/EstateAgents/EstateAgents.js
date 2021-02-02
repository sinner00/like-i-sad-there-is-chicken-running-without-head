import React from "react";
import "./EstateAgents.scss"


function EstateAgents() {
    return (
        <div className="estate-agents ">
            <div className="estate-agents-wrapper container">
            <h2 className="agents-h2">
                Our Real Estate Agents
            </h2>
            <hr className="agents-hr"/>
            <div className="agents-wrapper row">
                <div className="agents col-sm-4"> </div>
                <div className="agents col-sm-4"> </div>
                <div className="agents col-sm-4"> </div>


            </div>
            </div>
        </div>
    );
}

export default EstateAgents;
