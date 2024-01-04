import React from "react"
import './nav.css';
import NavButton from "./props/NavButton";
import DropdownButton from "./props/DropdownButton";
import { useSection } from './SectionContext';

export default function NavigateBar(){
    const { handleButtonClick, currentSection } = useSection();
    const of_sections = ["home", "notifications", "messages", "profile"];
    const df_sections = ["df-home", "df-profile", "df-final"];

    const dfa_sections = ["week123", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14"];
    const dfa_headlines = ["1.2.3. Documentation & VCS", "4. CAD", "5. CCC", "6. Embedded Programming", "7. 3D Printing",
    "8. Electronics Design", "9. CNC", "10. Electronics Production", "11. Output Devices", "12. Machine Building", "13. Input Devices", "14. Molding and Casting"];
    
    return(
        <header>
            {of_sections.includes(currentSection) && (
            <nav className="nav">
                <img src="./assets/0nitFans_Logo.png" className="nav-logo" alt=""/>
                <NavButton img="./assets/svg/home.svg" 
                text="Home" 
                currentSection="home" handleButtonClick={handleButtonClick}/>
                <NavButton img="./assets/svg/notifications.svg" 
                text="Notifications" 
                currentSection="notifications" handleButtonClick={handleButtonClick}/>
                <NavButton img="./assets/svg/messages.svg" 
                text="Messages" 
                currentSection="messages" handleButtonClick={handleButtonClick}/>
                <NavButton img="./assets/svg/user.svg" 
                text="My profile" 
                currentSection="profile" handleButtonClick={handleButtonClick}/>

                <button className="projects" onClick={() => handleButtonClick('df-home')}><img src="./assets/DF.png" className="project-icon" alt=""/> <span className="nav-text">Digital Fabrication</span></button>
            </nav>
            )}

            {(df_sections.includes(currentSection) || dfa_sections.includes(currentSection)) && (
            <nav className="nav">
                <img src="./assets/DigiFab.png" className="nav-logo" alt=""/>
                <NavButton img="./assets/svg/home.svg" 
                text="Home" 
                currentSection="df-home" handleButtonClick={handleButtonClick}/>
                
                <DropdownButton img="./assets/svg/assignments.svg" 
                text="Assignments" 
                headlines={dfa_headlines} sections={dfa_sections} handleButtonClick={handleButtonClick}/>

                <NavButton img="./assets/svg/hammer.svg" 
                text="Final project" 
                currentSection="df-final" handleButtonClick={handleButtonClick}/>
                <NavButton img="./assets/svg/user.svg" 
                text="About me" 
                currentSection="df-profile" handleButtonClick={handleButtonClick}/>

                <button className="projects" onClick={() => handleButtonClick('home')}><img src="./assets/0nitFans_icon.png" className="project-icon" alt=""/> <span className="nav-text">0nitFans</span></button>
            </nav>
            )}

        </header>
    )
}

