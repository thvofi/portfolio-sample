import React from "react"
import DFHomeButton from "./props/DFHomeButton";
import { useSection } from './SectionContext';

export default function DFab({currentSection}){
    const dfa_sections = ["week123", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14"];
    const dfa_headlines = ["1.2.3. Documentation & VCS", "4. CAD", "5. CCC", "6. Embedded Programming", "7. 3D Printing",
    "8. Electronics Design", "9. CNC", "10. Electronics Production", "11. Output Devices", "12. Machine Building", "13. Input Devices", "14. Molding and Casting"];
    const { handleButtonClick } = useSection();

    return(
        <div>
            {(currentSection === 'df-home') && (
                <div>
                    <h1>Home</h1>
                    <img src="./assets/df/home.png" className="df-thumb"/>
                    <h2>Hi! I'm Thanh Vo and this is my Digital Fabrication documentation page.</h2>

                    <div className="df-grid">
                        <DFHomeButton img="./assets/df/123/thumb.png" 
                        text={dfa_headlines[0]} 
                        currentSection={dfa_sections[0]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/4/thumb.png" 
                        text={dfa_headlines[1]} 
                        currentSection={dfa_sections[1]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/5/thumb.png" 
                        text={dfa_headlines[2]} 
                        currentSection={dfa_sections[2]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/6/thumb.png" 
                        text={dfa_headlines[3]} 
                        currentSection={dfa_sections[3]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/7/thumb.png" 
                        text={dfa_headlines[4]} 
                        currentSection={dfa_sections[4]} handleButtonClick={handleButtonClick}/>
                    </div>
                    
                </div>
            )}

            {(currentSection === 'df-final') && (
                <div className="df-docs">
                    <h1>Final project</h1>
                    <img src="./assets/df/final/final.png" className="df-thumb"/>
                    <h2>Multi-fx digital guitar pedal</h2>

                    <h3>Plan</h3>

                    <h3>Stage 1: Hardware rabit holes</h3>
                    <p>
                        I have some surface level ideas for what's coming next, but not enough to form a concrete plan, the purpose of this stage is to research.<br/>
                        In a nutshell, I'm alternating the guitar signal digitally, so at the heart of the project, there is a DSP (Digital Signal Processing).<br/>
                        <img src="./assets/df/final/img1.png" className="df-img"/>
                        In the Input Stage of the DSP, the signal must be converted to digital, so there's an ADC (Analog-Digital Converter); and before being converted,
                        the signal is required to be amplified so I'll place an op-amp before the ADC.<br/>
                        <img src="./assets/df/final/img2.png" className="df-img"/>
                        For the Output Stage of the DSP, surely it must play sound, and digitally, there are different methods for that. Luxuriously, I'd place a DAC and
                        work with PCM output to inject to the DAC and receive analog signal; without a DAC, digital signal can be output with PWM or PDM. At the end of the
                        signal chain, the output is amplified (and filtered for noise if necessary) so I'll have another op-amp there.<br/>
                        <img src="./assets/df/final/img3.png" className="df-img"/>
                        That's that on the surface, but I'm really blurry on how DSP works on hardware. I've been lurking on the internet and
                        the choice of hardware ranges from full-fledged Raspberry Pi to tiny RP2040 to custom DSP hardware; in my assumption, custom DSP hardware is designed to be 
                        efficient and only efficient for DSP, while microcontrollers/CPUs are designed to multi-function, including DSP. Doing a quick look on Google, I found a handful
                        of information that helps. Analog Devices has an enormous educational library for DSP that dives in as deep as designing the architechture for hardware DSP.<br/>
                        For now, that's a rabbit hole that <a href="./assets/df/final/img4.png">I don't wanna dive in yet</a>, I'll start with microcontrollers as they seem easier
                        to code and are capable enough. The topic of DSP hardware will be explored later in electronics-focused weeks.
                        <ul>
                            <li><a href="https://www.analog.com/en/design-center/landing-pages/001/beginners-guide-to-dsp.html">Analog Devices Beginner's Guide to DSP</a></li>
                            <li><a href="https://ohdsp.weebly.com">Open Hardware DSP platform</a></li>
                            <li><a href="https://www.dspguide.com/pdfbook.htm">Digital Signal Processing (math) book</a></li>
                        </ul>
                    </p>
                    <h4>Raspberry Pi</h4>
                    <p>
                        
                    </p>
                    <h4>Electro-smith Daisy Seed</h4>

                    <h4>Others</h4>

                    <h3>Stage 2: Breadboard/EE</h3>

                    <h2>Side projects that benefit from assignments</h2>

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
                        I'm a Digital Systems and Design student at Aalto University, minor in Acoustics, professional procrastinator and free time guitar player.<br/>
                        I enjoy working with electronics and digital tools, no matter the complexity. I learned little skills at mediocre level that I can't remember/list and until 
                        impostor syndrome kicks in, I'm feeling okay.
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
                    <img src="./assets/df/123/img1.png" className="df-img"/>
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
                            <li>commit & changelog: <code>git commit -m "changelog here"</code></li>
                            <li>push to repo: <code>git push</code></li>
                        </ul>
                        There is also git pull to pull/update local repo and surely occationally you want to switch branches or jump from GitHub to GitLab, but I'm sure there're more in-depth guides available online. 
                    </p>
                    <h2>Media optimization</h2>
                    <p>
                        For photos, I use ImageMagick that is recommended by Kris. Mainly it's for unifying the image format to png as that's my preferred option (jpeg is optimized for space, but my images are small enough to keep the best quality) <br/>
                        <code>magick image_name.jpg image_name.png</code>
                        For video optimization, I've been a fond user of ffmpeg, both directly or through Handbrake. Now size optimization for videos is slightly more important than images,
                        to control the video quality and size, I adjust the Constant Rate Factor -crf 23 with 23 being the default/balance number. I opt for -c:v libx264 (video codec H.264) as H.265 or HEVC is proprietary and not widely supported.
                        <code>ffmpeg -i input.mp4 -c:v libx264 -crf 23 output.mp4</code>
                        For audio workflow, depending on the situation, I'd find myself using the -an (mute audio) parameter or -c:a libopus -b:a 320k (audio codec opus and 320kbps bitrate)
                        <code>ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a libopus -b:a 320k output.mp4</code>
                    </p>

                    <h2>Afterwords</h2>
                    <p>
                        The webpage still has a lot to be fulfilled with more functions and generally rounded styling.<br/>
                        I find documenting very challenging to balance between technical guidance and documented experience, as well as keeping it professional but personal.
                    </p>

                    <h2>References</h2>
                    <ul>
                        <li><a href="https://react.dev/learn">React</a></li>
                        <li><a href="https://create-react-app.dev/docs/deployment/">React deployment guide</a></li>
                        <li><a href="https://www.youtube.com/watch?v=bMknfKXIFA8">React crash course</a></li>

                    </ul>
                </div>
            )}

            {(currentSection === 'week4') && (
                <div className="df-docs">
                    <h1>Computer Aided Design</h1>
                    <img src="./assets/df/4/thumb.png" className="df-thumb"/>
                    <h2>Meshmixer</h2>

                    <h2>Blender</h2>

                    <h2>Fusion360</h2>

                </div>
            )}

            {(currentSection === 'week5') && (
                <div className="df-docs">
                    <h1>Computer-Controlled Cutting</h1>
                    <img src="./assets/df/5/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

            {(currentSection === 'week6') && (
                <div className="df-docs">
                    <h1>Embedded Programming</h1>
                    <img src="./assets/df/6/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

            {(currentSection === 'week7') && (
                <div className="df-docs">
                    <h1>3D Scanning and Printing</h1>
                    <img src="./assets/df/7/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

        </div>
    )

}