import React from "react"
import './footer.css';
import SocialsButton from "./props/SocialsButton";
import { useSection } from './SectionContext';

export default function Footer({section}){
    const { currentSection } = useSection();
    const of_sections = ["home", "notifications", "messages", "profile"];
    const df_sections = ["df-home", "df-profile", "df-final"];

    const dfa_sections = ["week123", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14"];

    return(
        <div>
            {(currentSection === 'home' || currentSection === 'notifications' || currentSection === 'messages') && (
            <div className="right-bar">
                <div className="socials">
                    <SocialsButton img="./assets/svg/linkedin.svg" color="#0077B5" text="Linkedin" link="https://www.linkedin.com"/>
                    <SocialsButton img="./assets/svg/github.svg" color="#24292d" text="GitHub" link="https://github.com/thvofi"/>
                    <SocialsButton img="./assets/svg/spotify.svg" color="#1db954" text="Spotify" link="https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH?si=6dUCxSlXRdW0duBTLTEhGA"/>
                </div>
                <div className="footer">
                    <span>copyrighted</span>
                </div>
            </div>
            )}

            {(currentSection === 'profile') && (
            <div className="right-bar">
                <div className="socials">
                    <SocialsButton img="./assets/svg/instagram.svg" color="#dd2a7b" text="Instagram" link="https://www.instagram.com/0nitfans"/>
                    <SocialsButton img="./assets/svg/soundcloud.svg" color="#ff5500" text="SoundCloud" link="https://www.soundcloud.com"/>
                    <SocialsButton img="./assets/svg/telegram.svg" color="#24a1de" text="Telegram" link="https://t.me/thv00"/>
                    <SocialsButton img="./assets/svg/linkedin.svg" color="#0077B5" text="Linkedin" link="https://www.linkedin.com"/>
                    <SocialsButton img="./assets/svg/github.svg" color="#24292d" text="GitHub" link="https://github.com/thvofi"/>
                </div>
                <div className="footer">
                    <span>copyrighted</span>
                </div>
            </div>
            )}

            {(df_sections.includes(currentSection) || dfa_sections.includes(currentSection)) && (
            <div className="right-bar">
                <div className="socials">
                    <SocialsButton img="./assets/svg/gitlab.svg" color="#e5543c" text="GitLab" link="https://gitlab.com/thvo-fi"/>
                    <SocialsButton img="./assets/svg/github.svg" color="#24292d" text="GitHub" link="https://github.com/thvofi"/>
                </div>

                <div className="df-links">
                    <header>Useful links</header>
                    <a href="https://aalto.zoom.us/j/69025769608?pwd=ZW5WbHYrbk80S2FCbyt1RGhZZGVSQT09">Local Zoom</a>
                    <a href="https://fabacademy.org/2024/video.html">Global Zoom</a>
                    <a href="https://fabacademy.org/2024/">FabAcademy 2024</a>
                    <a href="https://pub.fabcloud.io/tutorials/index.html">FabAcademy - Tutorials</a>
                    <a href="https://www.youtube.com/@aaltofablab3504/videos">Aalto Fablab Youtube</a>
                    <a href="https://vimeo.com/academany">FabAcademy Vimeo</a>
                </div>
            </div>
            )}
        </div>
    )
}