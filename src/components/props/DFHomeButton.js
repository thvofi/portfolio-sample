import React from "react"

export default function DFHomeButton(props) {

    return (
        <div>
            <button onClick={() => props.handleButtonClick(props.currentSection)}><img src={props.img} className="df-grid-icon" alt=""/> <span className="df-grid-text">{props.text}</span></button>
        </div>
    )
}