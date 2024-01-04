import React from "react"

export default function NavButton(props) {

    return (
        <div>
            <button onClick={() => props.handleButtonClick(props.currentSection)}><img src={props.img} className="nav-icon" alt=""/> <span className="nav-text">{props.text}</span></button>
        </div>
    )
}