import React from "react"
import './content.css';

export default function Content({section}){
    return(
        <div className="content">
            {(section === 'home') && (
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
                    <button  onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank')}>LEARN MORE</button>
                </div>

                <div className="posts">
                    
                </div>
            </div>
            )}

            {section === 'notifications' && (
            <p>Updates and todos</p>
            )}

            {section === 'messages' && (
            <p>Contacts/email basically</p>
            )}

            {section === 'profile' && (
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
                    <button>RESUME</button>
                </div>

                <div className="posts">
                    
                </div>
            </div>
            )}

            
        </div>
    )
}