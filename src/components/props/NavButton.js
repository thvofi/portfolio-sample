import React from "react"

export default function NavButton(props) {
    const handleButtonClick = () => {
        // Check if the onButtonClick prop is a function before calling it
        if (typeof props.onButtonClick === 'function') {
            props.onButtonClick(props.section);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}><img src={props.img} className="nav-icon" alt=""/> <span className="nav-text">{props.text}</span></button>
        </div>
    )
}