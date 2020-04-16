import React from "react";


const LandingPhoto = (props) => {
    return (
        <div className="landing-photo">
            <img alt="Clear night sky." src={props.url} />
        </div>
    )
}

export default LandingPhoto