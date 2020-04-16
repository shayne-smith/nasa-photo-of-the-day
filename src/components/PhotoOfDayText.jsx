import React from "react";

const PhotoOfDayText = (props) => {
    return (
        <div className="photo-of-the-day-text">
            <p>
                {props.explanation}
            </p>
        </div>
    )
}

export default PhotoOfDayText