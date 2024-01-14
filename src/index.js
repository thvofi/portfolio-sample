import React, {useState} from "react"
import ReactDOM from "react-dom"
import './index.css';
import NavigateBar from "./components/NavigateBar"
import Content from "./components/Content"
import Footer from "./components/Footer"
import { SectionProvider } from "./components/SectionContext";

function Page(){

    return(
        <SectionProvider>
            <div className="page-container">
                <NavigateBar />
                <div className="right-side">
                    <Content />
                    <Footer />
                </div>
                
            </div>
        </SectionProvider>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))