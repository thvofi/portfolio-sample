import React, { useState } from "react";

export default function DropdownButton(props) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleHeadlineClick = (headline, index) => {
        const section = props.sections[index];
        props.onButtonClick(section);
    
        setShowDropdown(false);
    };

    return (
        <div className="dropdown-button">
        <button onClick={toggleDropdown}>
            <img src={props.img} className="nav-icon" alt="" />
            <span className="nav-text">{props.text}</span>
        </button>
        {showDropdown && (
            <div className="dropdown">
            {props.headlines.map((headline, index) => (
                <button key={index} onClick={() => handleHeadlineClick(headline, index)}>
                    {headline}
                </button>
            ))}
            </div>
        )}
        </div>
    );
}
