import React from "react";
import "./style.css"

function Hero(props) {
    return (
        <div>
        <div className="hero text-center">
            {props.children}
        </div>
        </div>
    );
}

export default Hero;
