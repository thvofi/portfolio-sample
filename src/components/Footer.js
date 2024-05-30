import React from "react"
import './footer.css';
import SocialsButton from "./props/SocialsButton";
import { useSection } from './SectionContext';
import SectionNav from "./SectionNav";

export default function Footer({section}){
    const { currentSection } = useSection();
    const of_sections = ["home", "notifications", "messages", "profile"];
    const df_sections = ["df-home", "df-profile", "df-final"];

    const dfa_sections = ["week123", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14", "week15", "week16", "week17", "week18"];

    return(
        <div>
            {(currentSection === 'home' || currentSection === 'notifications' || currentSection === 'messages') && (
            <div className="right-bar">
                <div className="socials">
                    <SocialsButton img="./assets/svg/linkedin.svg" color="#0077B5" text="Linkedin" link="https://www.rickastley.co.uk"/>
                    <SocialsButton img="./assets/svg/github.svg" color="#24292d" text="GitHub" link="https://github.com/thvofi"/>
                    <SocialsButton img="./assets/svg/spotify.svg" color="#1db954" text="Spotify" link="https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=f196b86e5e444022"/>
                </div>
                <div className="footer">
                    <span>&copy; 0nitFans.com</span>
                </div>
            </div>
            )}

            {(currentSection === 'profile') && (
            <div className="right-bar">
                <div className="socials">
                    <SocialsButton img="./assets/svg/instagram.svg" color="#dd2a7b" text="Instagram" link="https://www.instagram.com/0nitfans"/>
                    <SocialsButton img="./assets/svg/soundcloud.svg" color="#ff5500" text="SoundCloud" link="https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4"/>
                    <SocialsButton img="./assets/svg/telegram.svg" color="#24a1de" text="Telegram" link="https://t.me/thv00"/>
                    <SocialsButton img="./assets/svg/linkedin.svg" color="#0077B5" text="Linkedin" link="https://www.rickastley.co.uk"/>
                    <SocialsButton img="./assets/svg/github.svg" color="#24292d" text="GitHub" link="https://github.com/thvofi"/>
                </div>
                <div className="footer">
                    <span>&copy; 0nitFans.com</span>
                </div>
            </div>
            )}

            {(df_sections.includes(currentSection) || dfa_sections.includes(currentSection)) && (
            <div className="right-bar">
                <div className="socials">
                    <SocialsButton img="./assets/svg/gitlab.svg" color="#e5543c" text="GitLab" link="https://gitlab.com/thvo-fi"/>
                    <SocialsButton img="./assets/svg/github.svg" color="#24292d" text="GitHub" link="https://github.com/thvofi"/>
                </div>
                <SectionNav currentSection={currentSection}/>
                <div className="df-links">
                    <h3>Useful links</h3>
                    <ul>
                        <li><a href="https://aalto.zoom.us/j/69025769608?pwd=ZW5WbHYrbk80S2FCbyt1RGhZZGVSQT09">🐈 Local Zoom 🐈</a></li>
                        <li><a href="https://fabacademy.org/2024/video.html">🌐 Global Zoom 🌐</a></li>
                        <li><a href="https://fabacademy.org/2024/">🔨 FabAcademy 2024 🔧</a></li>
                        <li><a href="https://pub.fabcloud.io/tutorials/index.html">🔧 FabAcademy - Tutorials 🔨</a></li>
                        <li><a href="https://wiki.aalto.fi/collector/pages.action?key=AF">🅰❗ Wiki.Aalto.Fablab 🅰❓</a></li>
                        <li><a href="https://www.youtube.com/@aaltofablab3504/videos">📺 Aalto Fablab Youtube 📺</a></li>
                        <li><a href="https://vimeo.com/academany">🎥 FabAcademy Vimeo 🎥</a></li>
                        <li><a href="https://gitlab.com/aaltofablab/digital-fabrication-2024">🔥 Check my classmates out! 🔥</a></li>
                    </ul>
                </div>
                
            </div>
            )}
        </div>
    )
}