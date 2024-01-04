import React from "react"

export default function DFab({currentSection}){
    const dfa_sections = ["week123", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14"];
    return(
        <div>
            {(currentSection === 'df-home') && (
                <div className="profile">
                    <h1>Home</h1>
                    <h2>Hi! I'm Thanh Vo and this is my Digital Fabrication documentation page.</h2>
                    <span>Insert project grid here</span>
                </div>
            )}

            {(currentSection === 'df-final') && (
                <div className="profile">
                    <h1>Final project</h1>
                    <img src="./assets/df/final.png" className="df-thumb"/>
                    <h2>Bachelor final project</h2>

                    <h2>Projects dump that benefits from assignments</h2>

                </div>
            )}

            {(currentSection === 'df-profile') && (
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
                        I'm a Digital Systems and Design student at Aalto University, minor (soon be major) in Acoustics, also a professional procrastinator and a free time guitar player.<br/>
                        I enjoy working with electronics and digital tools, no matter the complexity. I learned little skills that are too mediocre to include and until 
                        impostor syndrome kicks in, I'm feeling good.
                    </p>

                </div>
            )}

            {(currentSection === 'week123') && (
                <div className="df-docs">
                    <h1>Principles and Practices, Project Management</h1>
                    <img src="./assets/df/123/thumb.png" className="df-thumb"/>
                    <h2>Documentation</h2>
                    <p>
                        I created this documentation page using React, with a lot of js(x) and manual css. Before this website was built, my naive self couldn't jump on the bootstrap train,
                        thinking he had to write more code to use a framework that was fundamentally designed to reduce it. Little that he knew, he spent days on styling his first homepage, 
                        just to realize that without proper class system, restyling those reusable elements takes a massive load of time for every html page. This year comes around and for
                        some reasons, this stupid man still doesn't use bootstrap. (Notes for current readers: look up bootstrap documentations before questioning why to use it.) I wanted 
                        to work with tailwind-css and the first video I watched on youtube was this one from Fireship:
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pfaSUYaSgRo?si=Fl7L5hQhpqma4Exn" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>
                        The first thing he stated in his tutorial was he's applying css onto React. At this point, right after Christmas on the 26th, me and my small friend group decided to throw together 
                        a 1-week jam session, which we would spend every in a lab, throwing stuff to finish an individual project in that time span. So I expected fun rapid prototyping but these 
                        fuckers worked digitally and left me with a choice of picking React or tailwind-css to pickup first. Well you know what I picked.<br/>
                        From my limited experience with React, it's not static web designed for static documentation but rather a js app that work in html with css styling as its modules, therefore 
                        making the experience more responsive (by not jumping around html pages) and the modules are highly reusable.<br/>
                        I hate coding and hate talking about it even more, but to summarize my experience: Build js modules from the root/homepage like a tree and strategically classify every 
                        elements to save yourself when styling.
                    </p>
                    <img src="./assets/df/123/img1.jpg" className="df-img"/>
                    <p>
                        I followed my plan and break the Page() down to 3 main components: NavigateBar(), Content(), Footer() which are js functions that can be reused to render
                        <ul>
                            Page()
                            <ul>
                                <li>NavigateBar()</li>
                                <ul>
                                    <li>nav</li>
                                    <ul>
                                        <li>NavButton(),</li>
                                        <li>DropdownButton(),</li>
                                    </ul>
                                </ul>
                                <li>Content()</li>
                                <ul>
                                    <li>hero</li>
                                    <ul>
                                        <li>profile,</li>
                                        <li>posts,</li>
                                    </ul>
                                </ul>
                                <li>Footer()</li>
                                <ul>
                                    <li>SocialsButton(),</li>
                                    <li>links,</li>
                                    <li>footer,</li>
                                </ul>
                            </ul>
                        </ul>
                        At this point, the page is roughly hand styled, not accounting:
                        <ul>
                            <li>overall transitions</li>
                            <li>segments border</li>
                            <li>responsive mobile viewport</li>
                        </ul>
                        that will be implemented really soon.
                    </p>
                    <h2>Deployment</h2>
                    <p>
                        For me, this was where I faced most trouble. It started with initiating a development environment as unlike vanilla html, React codes are written in 
                        jsx (js that includes html) and needed to be complied and host to see result. React documentation was pretty minimal about setting up and only suggested 
                        getting a template from react-scripts and start from there. <br/>
                        Then there is also publishing the page. I couldn't make it worked with GitLab as there is rarely any guidance on configuring the ci.yml for GitLab to deploy,
                        in combination with GitLab's confusing-af UI. Until I figure it out, this is hosted on GitHub Pages, which conveniently has a npm package called gh-pages.
                    </p>
                    <h2>Version Control System</h2>
                    <p>
                        To connect Git to GitHub/GitLab, the quickest way is through SSH
                        <ul>
                            <li>Generate SSH key: <code>$ ssh-keygen -t ed25519 -C "my_email@example.com"</code></li>
                            <li>Import SSH to GitHub/GitLab</li>
                            <li>Profit</li>
                        </ul>
                        In the simplest and most frequent situations, you only need 5 git commands to profit:
                        <ul>
                            <li>start/initiate: <code>git init</code></li>
                            <li>check files, changes: <code>git status</code></li>
                            <li>add all changes to precommit: <code>git add .</code></li>
                            <li>commit & changelog: <code>git commit -m"changelog here"</code></li>
                            <li>push to repo: <code>git push</code></li>
                        </ul>
                        There is also git pull to pull/update local repo and surely occationally you want to switch branches or jump from GitHub to GitLab, but I'm sure there're more in-depth guides available online. 
                    </p>
                    <h2>Media optimization</h2>
                    <p>
                        Depending on the situation, I may need to use an image optimization tool - which I then use Windows PowerToys' resizer for the sake of convenience. <br/>
                        For video optimization, I've been a fond user of ffmpeg, both directly or through Handbrake.
                    </p>

                    <h2>Afterwords</h2>
                    <p>
                        The webpage still has a lot to be fulfilled with more functions and generally rounded styling.<br/>
                        I find documenting very challenging to balance between technical guidance and documented experience.
                    </p>

                    <h2>References</h2>
                    <ul>
                        <li><a href="https://react.dev/learn">React</a></li>
                        <li><a href="https://create-react-app.dev/docs/deployment/">React deployment guide</a></li>
                        <li><a href="https://www.youtube.com/watch?v=bMknfKXIFA8">React course</a></li>

                    </ul>
                </div>
            )}

            {(currentSection === 'week4') && (
                <div className="profile">
                    <h1>Computer Aided Design</h1>
                    <img src="./assets/df/4/thumb.png" className="df-thumb"/>
                    <h2>Meshmixer</h2>

                    <h2>Blender</h2>

                    <h2>Fusion360</h2>

                </div>
            )}

            {(currentSection === 'week5') && (
                <div className="profile">
                    <h1>Computer-Controlled Cutting</h1>
                    <img src="./assets/df/5/thumb.jpg" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

            {(currentSection === 'week6') && (
                <div className="profile">
                    <h1>Embedded Programming</h1>
                    <img src="./assets/df/6/thumb.jpg" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

            {(currentSection === 'week7') && (
                <div className="profile">
                    <h1>3D Scanning and Printing</h1>
                    <img src="./assets/df/7/thumb.jpg" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

        </div>
    )

}