import React from "react";
import "./style.css"

function Hero(props) {
    return (
        <div>
        <div className="hero text-center">{props.children}</div>
        <div className="firstLine"></div>
        <div className="secondLine"></div>
        <div className="thirdLine"></div>
        </div>
    );
}

export default Hero;
