import React from "react"
import './nav.css';
import NavButton from "./props/NavButton";
import DropdownButton from "./props/DropdownButton";

export default function NavigateBar({onButtonClick, section}){
    const of_sections = ["home", "notifications", "messages", "profile"];
    const df_sections = ["df-home", "df-profile", "df-final"];

    const dfa_sections = ["section1", "section2", "section3"];
    const dfa_headlines = ["1. Git", "2. ABC", "3. CUM"];
    
    return(
        <header>
            {of_sections.includes(section) && (
            <nav className="nav">
                <img src="/assets/0nitFans_Logo.png" className="nav-logo" alt=""/>
                <NavButton img="/assets/svg/home.svg" 
                text="Home" 
                section="home" onButtonClick={onButtonClick}/>
                <NavButton img="/assets/svg/notifications.svg" 
                text="Notifications" 
                section="notifications" onButtonClick={onButtonClick}/>
                <NavButton img="/assets/svg/messages.svg" 
                text="Messages" 
                section="messages" onButtonClick={onButtonClick}/>
                <NavButton img="/assets/svg/user.svg" 
                text="My profile" 
                section="profile" onButtonClick={onButtonClick}/>

                <button className="projects" onClick={() => onButtonClick('df-home')}><img src="/assets/DF.png" className="project-icon" alt=""/> <span className="nav-text">Digital Fabrication</span></button>
            </nav>
            )}

            {df_sections.includes(section) && (
            <nav className="nav">
                <img src="/assets/DigiFab.png" className="nav-logo" alt=""/>
                <NavButton img="/assets/svg/home.svg" 
                text="Home" 
                section="df-home" onButtonClick={onButtonClick}/>
                
                <DropdownButton img="/assets/svg/assignments.svg" 
                text="Assignments" 
                headlines={dfa_headlines} sections={dfa_sections} onButtonClick={onButtonClick}/>

                <NavButton img="/assets/svg/hammer.svg" 
                text="Final project" 
                section="df-final" onButtonClick={onButtonClick}/>
                <NavButton img="/assets/svg/user.svg" 
                text="About me" 
                section="df-profile" onButtonClick={onButtonClick}/>

                <button className="projects" onClick={() => onButtonClick('home')}><img src="/assets/0nitFans_icon.png" className="project-icon" alt=""/> <span className="nav-text">0nitFans</span></button>
            </nav>
            )}

        </header>
    )
}

