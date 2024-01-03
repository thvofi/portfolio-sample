import React from "react"
import './footer.css';
import SocialsButton from "./props/SocialsButton";

export default function Footer({section}){
    return(
        <div>
            {(section === 'home' || section === 'notifications' || section === 'messages') && (
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

            {(section === 'profile') && (
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

            {(section === 'df-home' || section === 'df-assignments' || section === 'df-profile' || section === 'df-final') && (
            <div className="right-bar">
                <div className="socials">
                    <SocialsButton img="./assets/svg/gitlab.svg" color="#e5543c" text="GitLab" link="https://gitlab.com/thvo-fi"/>
                    <SocialsButton img="./assets/svg/github.svg" color="#24292d" text="GitHub" link="https://github.com/thvofi"/>
                </div>

                <div className="df-links">
                    <header>Useful links</header>
                    <span>youtube.com</span>
                </div>

                <div className="footer">
                    <span>copyrighted</span>
                </div>
            </div>
            )}
        </div>
    )
}