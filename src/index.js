import React, {useState} from "react"
import ReactDOM from "react-dom"
import './index.css';
import NavigateBar from "./components/NavigateBar"
import Content from "./components/Content"
import Footer from "./components/Footer"

function Page(){
    const [currentSection, setCurrentSection] = useState('home');

    const handleButtonClick = (section) => {
        setCurrentSection(section);
    };


    return(
        <div className="page-container">
            <NavigateBar onButtonClick={handleButtonClick} section={currentSection}/>
            <Content section={currentSection}/>
            <Footer section={currentSection}/>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))