import React from "react";
import logo from "../Assets/nasaLogo.png";

const NasaLogo = (props) => {
    return (
        <div className="nasa-logo">
            <img alt="Nasa logo" src={logo} />
        </div>
    )
}

export default NasaLogo