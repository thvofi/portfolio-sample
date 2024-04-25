import React, {useState} from "react"
import './content.css';
import DFab from "./DFab";
import { useSection } from './SectionContext';

export default function Content(){
    const { currentSection } = useSection();
    const of_sections = ["home", "notifications", "messages", "profile"];
    const df_sections = ["df-home", "df-profile", "df-final"];

    const dfa_sections = ["week123", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14","week15"];

    return(
        <div className="content">
            {(currentSection === 'home') && (
            <div className="hero">
                <div className="profile">
                    <div className="avatar">
                        <img src="./assets/brand.png" className="back" alt="avatar-back"/>
                        <img src="./assets/avatar.png" className="front" alt="avatar-front"/>
                    </div>
                    
                    <img src="./assets/wall.png" className="wallpaper" alt="wallpaper"/>

                    <div className="profile-stats">
                        <span className="profile-header">Thanh Vo<img src="./assets/svg/verify.svg" className="verified" alt="verified"/></span>
                        <span className="profile-account">@0nit</span>
                    </div>

                    <p className="forewords">
                        Hi there, I'm Thanh - owner of this webpage. <br />
                        Find out what I do on the left, look me up with social media on the right, or stay here to learn more about me.
                    </p>
                
                </div>

                <div className="subcribe">
                    <button onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')}>LEARN MORE</button>
                </div>

                <div className="posts">
                    
                </div>
            </div>
            )}

            {currentSection === 'notifications' && (
            <p>Updates and todos</p>
            )}

            {currentSection === 'messages' && (
            <p>Contacts/email basically</p>
            )}

            {currentSection === 'profile' && (
            <div className="hero">
                <div className="profile">
                    <div className="avatar">
                        <img src="./assets/brand.png" className="front" alt="avatar-front"/>
                        <img src="./assets/avatar.png" className="back" alt="avatar-back"/>
                    </div>
                    
                    <img src="./assets/wall.png" className="wallpaper" alt="wallpaper"/>

                    <div className="profile-stats">
                        <span className="profile-header">Thanh Vo<img src="./assets/svg/verify.svg" className="verified" alt="verified"/></span>
                        <span className="profile-account">@0nit</span>
                    </div>

                    <p className="forewords">
                        Hi there, I'm Thanh - supreme maker of this webpage. <br />
                        Find out what I do on the left, look me up with social media on the right, or find my resume below.
                    </p>
                
                </div>

                <div className="subcribe">
                    <button onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')}>RESUME</button>
                </div>

                <div className="posts">
                    <p>Will be updated</p>
                </div>
            </div>
            )}


            {(df_sections.includes(currentSection) || dfa_sections.includes(currentSection)) && (
                <div className="hero">
                    <DFab currentSection={currentSection}/>
                </div>
            )}

            
        </div>
    )
}