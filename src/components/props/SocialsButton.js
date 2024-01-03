import React, {useState} from "react"

export default function SocialsButton(props) {
    //const handleButtonClick = () => {
    //    window.open(props.link, "_blank");
    //};

    const [buttonText, setButtonText] = useState(props.text);
    
    const handleButtonClick = () => {
        const tempInput = document.createElement('input');
        tempInput.value = props.link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        setButtonText("Copied to Clipboard");
        setTimeout(() => {
            setButtonText(props.text);
        }, 1000);
    };

    return (
        <div>
            <button onClick={handleButtonClick} style={{backgroundColor:props.color,}}><img src={props.img} className="socials-icon" alt=""/> <span className="socials-text">{buttonText}</span></button>
        </div>
    )
}