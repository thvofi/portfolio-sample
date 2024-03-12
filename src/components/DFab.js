import React from "react"
import DFHomeButton from "./props/DFHomeButton";
import { useSection } from './SectionContext';
import DFimg from "./props/DFimg";

export default function DFab({currentSection}){
    const dfa_sections = ["week123", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14"];
    const dfa_headlines = ["1.2.3. Documentation & VCS", "4. CAD", "5. CCC", "6. Electronics Production", "7. 3D Printing",
    "8. Embedded Programming", "9. CNC", "10. Electronics Design", "11. Output Devices", "12. Machine Building", "13. Input Devices", "14. Molding and Casting"];
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
                        <DFHomeButton img="./assets/df/8/thumb.png" 
                        text={dfa_headlines[5]} 
                        currentSection={dfa_sections[5]} handleButtonClick={handleButtonClick}/>
                    </div>
                    
                </div>
            )}

            {(currentSection === 'df-final') && (
                <div className="df-docs">
                    <h1>Final project</h1>
                    <img src="./assets/df/final/final.png" className="df-thumb"/>
                    <h2>Multi-fx digital guitar pedal</h2>

                    <h3>Plan</h3>
                    <p>
                        To have a functional live pedal that provide the <u>platform</u> for me to learn, develope, deploy guitar effects processing. It's been on my mind as a cooler Zoom
                        MS-50G as I quite like its experience design but a month ago, Zoom released an upgraded stompbox (after 11 years) called MS-50G+, so it'll be interesting to learn from them.
                        <img src="./assets/df/final/img0.png" className="df-img"/>
                    </p>
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
                        <ul>
                            <li><a href="https://www.electrosmash.com/pedal-pi">Electrosmash's Pedal Pi</a></li>
                            <li><a href="https://github.com/GuitarML/NeuralPi">GuitarML's Neural Pi</a></li>
                            <li><a href="https://blokas.io/modep/">MODEP</a></li>
                        </ul>
                    </p>
                    <h4>Electrosmith Daisy Seed</h4>
                    <p>
                        <ul>
                            <li><a href="https://github.com/bkshepherd/DaisySeedProjects">bkshepherd's DS Pedals</a></li>   
                            <li><a href="https://github.com/GuitarML/DaisySeedProjects/releases/tag/v1.1">GuitarML's Modules</a></li>
                        </ul>
                    </p>
                    <h4>Updates (March 2024)</h4>
                    <p>
                        Roughly 2 months have passed since my last write-up of the final project, and what's new? 
                        <ul>
                            <li>I've finished my first digital (or virtual analog) modeling of an effect pedal (MXR phase 100) in MATLAB as a course project. I've been working on the next step of implemeting my algorithm in realtime interchangeably with Juce framework and with C++ in DaisySP library to learn about optimizing resources in realtime processing.</li>
                            <li>I digged wider and was exposed to the wonderful world of Machine Learning for VA modeling. I got on the hype train for NeuralDSP, ToneX, NAM and now, I am obliged to take a minor in Data Science.</li>
                            <li>Initially, I wanted the Raspberry Pi SBC to be the core of my pedal, as I imagined deploying effects on it would be as simple as drag-and-drop VST. Now I'm even deeper in r/diypedal rabbit hole, I narrowed down my options further:
                                <ul>
                                    <li><b>Electrosmith Daisy Seed</b>: This is my selected option, as for me it's in the first difficulty of working with a module, not having to deal much with circuitry design, while being powerful, widely popular and having great community support. I'm starting by deploying my own digital model as a traditional way of VA DSP, but the platform is so
                                        great that when I'm ready, I can dip into the world of Machine Learning with the work of GuitarML and few people who have done it before me.
                                    </li>
                                    <li><b>Spin FV-1</b>: This is the oldest and the DIY standard programmable DSP IC, especially inside digital delay/reverb pedals. I'd like to explore the chipset as a standalone side project in the second difficulty of reading datasheet, designing PCB and programming.</li>
                                    <li><b>STM32</b>: Funny enough, STM32 is featured on the Daisy Seed module as its brain and rightfully so, it is a very capable chip, and like Neil once said (paraphrased with bad grammar): <i>With any pin increasement, make it exponentially more difficult to work with.</i> It's not impossible, and I'm motivated by many videos from <a href="https://www.youtube.com/channel/UCVryWqJ4cSlbTSETBHpBUWw/videos">Phil's Lab</a>, 
                                    but I need to sharpen a lot more to start making complicated modules. I'll place it as the final boss of the project.</li>
                                </ul>
                            </li>
                            <li>My priority at the moment is focusing on the software as the 2nd stage of the project, as I'm armed with guidance and resources from my Audio Signal Processing course to further develop my DSP knowledge and skills (not related but I also need to pass that course.)</li>
                        </ul>
                    </p>
                    <h3>Stage 2: DSP Platform and Prototyping</h3>

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
                        I enjoy working with electronics and digital tools, no matter the complexity. I learned little skills at mediocre level that I can't remember or list and until 
                        impostor syndrome kicks in, I'm feeling okay.
                    </p>
                    <div className="separator">
                        <DFimg img="./assets/df/tom.png" 
                        text={<p>It's close to midnight, and something evil's lurking in the dark,<br/>Under the moonlight, you see a sight that almost stops your heart.</p>}/>
                    </div>
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
                        I <s>hate</s> don't enjoy coding and <s>hate</s> don't enjoy talking about it even more, but to summarize my experience: Build js modules from the root/homepage like a tree and strategically classify every 
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
                        After making all that, I came to realization that packing the page into functions is a good and a handy way to organize it, but solving the CSS madness I faced previously could have been
                        done way easier by (not learning React) just labeling the elements with proper organized class names, which indeed I did manually hand-styled all of the page. So that's a solid advice for anyone who wants to
                        take on vanilla css: classify your elements and style them with a class system.
                        <img src="./assets/df/123/img2.png" className="df-img"/>
                        I intentionally didn't include any details of the coding process here, since using React is irrelevant and unnecessary for documentation, 
                        but recreating the page exactly with vanilla html/css is definitely achiveable and should be done before jumping on the React train.<br/>
                        At this point, the page is roughly hand styled, not accounting for:
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
                        jsx (js that includes html) and needed to be transformed into regular js and delivered to the browser. React documentation was pretty minimal about setting up and only suggested 
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
                        There is also git pull to pull/update local repo and surely occationally you want to switch branches or jump from GitHub to GitLab, but I can't write it better than Git's <a href="https://git-scm.com/docs/gittutorial">documentation</a>. 
                    </p>
                    <h2>Media optimization</h2>
                    <h3>ImageMagick</h3>
                    <p>
                        For photos, I use ImageMagick that is recommended by Kris. Mainly it's for unifying the image format to png as that's my preferred option (jpeg is optimized for space, but my images are usually light enough to keep at my preferred quality [secret: 
                        I work on multiple devices so I stack up screenshots or media through Telegram which already featured a handy image compressor that I can just drop in and use the images anyway]) <br/>
                        <code>magick image_name.jpg image_name.png</code>
                        Resizing and compressing:
                        <code>magick convert input.png -resize 1920x -strip -quality 85 output.png</code>
                        <ul>
                            <li><b>-resize 1920x</b> resizes the image to a width of 1920 pixels. The height will be adjusted automatically to maintain the aspect ratio.</li>
                            <li><b>-strip</b> removes any metadata from the image.</li>
                            <li><b>-quality 85</b> sets the compression level. 100 is the highest quality (least compression), and 0 is the lowest quality (most compression). 85 is a good balance between file size and image quality.</li>
                        </ul>
                    </p>
                    <h3>FFmpeg</h3>
                    <p>
                        For video optimization, I've been a fond user of ffmpeg, both directly or through Handbrake. Now size optimization for videos is slightly more important than images,
                        to control the video quality and size, I adjust the Constant Rate Factor -crf 23 with 23 being the default/balance number. I opt for -c:v libx264 (video codec H.264) as H.265 or HEVC is proprietary and not widely supported.
                        <code>ffmpeg -i input.mp4 -c:v libx264 -crf 23 output.mp4</code>
                        For audio workflow, depending on the situation, I'd find myself using the -an (mute audio) parameter or -c:a libopus -b:a 320k (audio codec opus and 320kbps bitrate)
                        <code>ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a libopus -b:a 320k output.mp4</code>
                        Just for demonstration, last year I did an experiment playing around with the crf and here are the results:
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/123/test_video.mp4'} type="video/mp4" controls muted>Test</video>
                        Original video ^ | height 720 6.42MB 1455kbps
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/123/test_video_720_crf28.mp4'} type="video/mp4" controls muted/>
                        crf 28 ^ | width 720 1.38MB 206kbps
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/123/test_video_720_crf30.mp4'} type="video/mp4" controls muted/>
                        crf 30 ^ | width 720 1.21MB 163kbps
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/123/test_video_720_crf32.mp4'} type="video/mp4" controls muted/>
                        crf 32 ^ | width 720 1.07MB 129kbps<br/>
                    </p>
                    <h3>Handbrake</h3>
                    <p>
                        Usually when I batch process videos, I'd use Handbrake as it's more user-friendly and has a better UI for batch processing. I found the Very Fast 720p30 preset to be a good balance between quality and size. Depending on the video, I'd adjust the crf from 23 to 28.
                        <img src="./assets/df/123/img3.png" className="df-img"/>
                    </p>
                    <h3>Watermarking</h3>
                    <p>
                        Now, as an amateur optimizer and a semi-professional parodist, I wanted to capture the soul of the multimedia hosted on this page, so now, I try to add my watermark to necessary images and videos.<br/>
                        <img src="./assets/watermark.png" className="df-img"/>
                        I looked up a few ways to do it, a few trials and errors later and I settle with these 2 commands:
                        <code>magick composite -gravity southeast -geometry 20%x20%+10+10 watermark.png input.png output.png</code>
                        <code>ffmpeg -i input.mp4 -i watermark.png -filter_complex "[1][0]scale2ref=w=oh*mdar:h=ih*0.05[logo][video];[video][logo]overlay=W-w-10:H-h-10" -c:a copy output.mp4</code>
                        Here is an example video of something I did last year with added watermark:
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/123/vid1.mp4'} type="video/mp4" controls/>
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
                        <li><a href="https://developer.mozilla.org/en-US/docs/Learn">MDN web docs</a></li>
                        <li><a href="https://git-scm.com/docs/gittutorial">Git</a></li>
                        <li><a href="https://ffmpeg.org/ffmpeg.html">ffmpeg</a></li>
                        <li><a href="https://imagemagick.org/script/magick.php">ImageMagick</a></li>
                    </ul>
                </div>
            )}

            {(currentSection === 'week4') && (
                <div className="df-docs">
                    <h1>Computer Aided Design</h1>
                    <img src="./assets/df/4/thumb.png" className="df-thumb"/>
                    <h2>Illustrator</h2>

                    <h2>Photoshop</h2>
                    <p>
                        I'm no stranger to Photoshop, one of my finest work can be found in my <u>About me</u> page. Below is a quick demonstration of my workflow working with screenshots for the documentation.

                    </p>
                    <h2>Fusion360</h2>
                    <p>
                        I started with an outline sketch using the dimension tool to quickly match the width and height of the shell.
                        <img src="./assets/df/4/img1.png" className="df-img"/>
                        Then I extruded the sketch to the desired z-height and used shell tool to hollow the shell with 5mm thickness.
                        <img src="./assets/df/4/img2.png" className="df-img"/>
                        I needed to make more sketch on the top of the shell to add holes for the potentiometers and switches. At that point, I realized since I'm making it parametric, I added my user parameters to the sketch, in this case, the potentiometer's dimensions.
                        <img src="./assets/df/4/img3.png" className="df-img"/>
                        I added construction lines and used dimension tool to align the holes center accordingly. The distance between the top edge to the first row of holes should be large enough to fit the potentiometers so I defined the distance as the potentiometer's radius.
                        <img src="./assets/df/4/img4.png" className="df-img"/>
                        Between 2 rows of holes, I defined the distance as the potentiometer's height; and the distance between the side holes and the side edges is also the potentiometer's radius.
                        <img src="./assets/df/4/img5.png" className="df-img"/>
                        <img src="./assets/df/4/img6.png" className="df-img"/>
                        After getting all the intersections, I added the holes sketcch with circle tool. Here I also defined the diameter to match the potentiometer's shaft parameter.
                        <img src="./assets/df/4/img7.png" className="df-img"/>
                        At this moment, I forgot to take account of the shell thickness, so I added the thickness parameter and modified the construction line to add thickness to spacing. I used measure tool to check the distance between 2 pots to confirm the pots weren't overlapping whick they weren't (18mm > 17mm).
                        <img src="./assets/df/4/img8.png" className="df-img"/>
                        <img src="./assets/df/4/img9.png" className="df-img"/>
                        To further be reminded of the shell thickness, I used the offset tool to create a thickness contruction outline inside the shape.
                        <img src="./assets/df/4/img10.png" className="df-img"/>
                        <img src="./assets/df/4/img12.png" className="df-img"/>
                        I continue with the foot switch, I added the switch's parameters and sketch its outline as contruction. I made the hole with the center point then mirrored it to the other side.
                        <img src="./assets/df/4/img13.png" className="df-img"/>
                        <img src="./assets/df/4/img14.png" className="df-img"/>
                        <img src="./assets/df/4/img15.png" className="df-img"/>
                        I also added a screen to the lower half of the pedal and added a rectangle accordingly to the screen's dimensions.
                        <img src="./assets/df/4/img16.png" className="df-img"/>
                        <img src="./assets/df/4/img17.png" className="df-img"/>
                        Finally, I added the LED holes and the sketch is ready to be extrude.
                        <img src="./assets/df/4/img18.png" className="df-img"/>
                        I selected all the holes and extrude them to the shell's thickness, with opertation set to cut.
                        <img src="./assets/df/4/img19.png" className="df-img"/>
                        Here is the final result of the shell.
                        <img src="./assets/df/4/img20.png" className="df-img"/>
                        Since it's a software week, I wanted to try out the rendering feature of Fusion360, so I experimented with a few materials and rendered the shell.
                        <img src="./assets/df/4/img21.png" className="df-img"/>
                        <img src="./assets/df/4/img22.png" className="df-img"/>
                        <img src="./assets/df/4/img23.png" className="df-img"/>
                        Quick 75% quality render of the pedal shell:
                        <img src="./assets/df/4/img11.png" className="df-img"/>
                        After modeling the shell, I realized I accidentally messed up the shell thickness from 2mm to 5mm, so unintentionally, I had the perfect demonstration of one of the benefits of parametric modeling: I only needed to change the thickness parameter and the whole model magically updated accordingly.
                        <img src="./assets/df/4/img24.png" className="df-img"/>
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/4/vid1.mp4'} type="video/mp4" controls/>
                    </p>
                </div>
            )}

            {(currentSection === 'week5') && (
                <div className="df-docs">
                    <h1>Computer-Controlled Cutting</h1>
                    <img src="./assets/df/5/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>
                    <p>
                        Initially, my plan was to make this week thumbnail: the cardboard model of the album Tranquility Base Hotel and Casino from the Arctic Monkeys, but the assignment requirements
                        are to make a press-fit construction kit, so I had to think of something else. I spent quite some time thinking about what to make, but a lot of my ideas are way over my CAD skill. <br/>
                        So when the deadline hit, I decided to start tiny and make the most basic press-fit box for my Aeropress coffee maker. I've been using it for a while and always wanted to have a box to store it and my coffee stuff.    
                    </p>
                    <h2>Design</h2>
                    <p>
                        <img src="./assets/df/5/img1.png" className="df-img"/>
                        <img src="./assets/df/5/img2.png" className="df-img"/>
                        <img src="./assets/df/5/img3.png" className="df-img"/>
                        <img src="./assets/df/5/img4.png" className="df-img"/>
                        <img src="./assets/df/5/img5.png" className="df-img"/>
                        Parameters:
                        <img src="./assets/df/5/img6.png" className="df-img"/>
                        Press-fit joint thickness:
                        <img src="./assets/df/5/img7.png" className="df-img"/>
                        Offset joint with kerf:
                        <img src="./assets/df/5/img8.png" className="df-img"/>
                        Export 2D sketch to DXF:
                        <img src="./assets/df/5/img9.png" className="df-img"/>
                    </p>
                    <h2>Cutting</h2>
                    <p>
                        Mika's documentation page can be found <a href="https://mikajarvi.gitlab.io/digital-fabrication/laser-cutting.html">here</a>.<br/>
                        20x20mm squares to calculate kerf:
                        <img src="./assets/df/5/img10.png" className="df-img"/>
                        kerf = (100 - 99.2)/5 = 0.16mm
                        <img src="./assets/df/5/img11.png" className="df-img"/>
                        Cutting (sorry, no video, I forgot to take one):
                        <img src="./assets/df/5/img12.png" className="df-img"/>
                        Result:
                        <img src="./assets/df/5/img13.png" className="df-img"/>
                    </p>
                </div>
            )}

            {(currentSection === 'week6') && (
                <div className="df-docs">
                    <h1>Electronics Production</h1>
                    <img src="./assets/df/6/thumb.png" className="df-thumb"/>
                    <h2>Preparing</h2>
                    <p>The group documentation can be found here: <a href="https://digital-fabrication-portfolio-miro-keimioniemi-a2f2c11a6e705b8f.gitlab.io/p/electronics-production/#group-assignment">Miro's DF</a>. You outdid it again Miro, thanks for the detailed tutorial. Now every person that comes across my documentation will have a nice time contrasting your Pulitzer winning article with my Reddit comment (credits to John Mulaney for the joke.)<br/>
                    Since Miro did all the heavy lifting, I've spent time splitting Kris's CopperCAM tutorial into small segments that to me are complementary to Miro's effort.</p>
                    <h3>1. Importing gerbers</h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/1.Import.mp4'} type="video/mp4" controls/>
                    <h3>2. Importing drills</h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/2.Drill.mp4'} type="video/mp4" controls/>
                    <h3>3. Bits and tools</h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/3.1.Bits.mp4'} type="video/mp4" controls/>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/3.2.Tool.mp4'} type="video/mp4" controls/>
                    <h3>4. Calculating contours/tool paths</h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/4.Path.mp4'} type="video/mp4" controls/>
                    <h3>5. Exporting </h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/5.Export.mp4'} type="video/mp4" controls/>
                    <h2>Making the Tarantino board</h2>
                    <p>
                        Engraving took 10 minutes, cutting took 2 minutes. For the sake of demonstration, here are the 5x sped up videos of the process:
                    </p>
                    <h3>Engraving</h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/Engrave.mp4'} type="video/mp4" controls muted/>
                    <h3>Cutting</h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/Cut.mp4'} type="video/mp4" controls muted/>
                    <p>
                        During my first attempt, I noticed the text engrave was too big while traces were too small, which were strange as Burak's intruction was using 4 passes and I used 3. I tried making a second board and this time, it turned out fine. My suspicion is that when setting the z-axis, for the paper calibration of the MDX-40, I punctured the paper too hard and the z-axis was deeper than it should be.<br/>
                        Before and after:
                        <img src="./assets/df/6/img1.png" className="df-img"/>
                        Soldered:
                        <img src="./assets/df/6/img2.png" className="df-img"/>
                        I was careful enough to test the board continuity after soldering, hence the code worked fine on the first try.
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/vid1.mp4'} type="video/mp4" controls/>
                    </p>
                </div>
            )}

            {(currentSection === 'week7') && (
                <div className="df-docs">
                    <h1>3D Scanning and Printing</h1>
                    <img src="./assets/df/7/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>
                    <p>
                        Last semester I got my ears 3D scanned and I've been planning to make custom IEMs for myself using a SLA printer. Honestly, I'm quite clueless on working and modeling scanned mesh, so to start
                        small, I wanted to reshell a pair of cheap IEMs that I have. Introducing: the Moondrop Chu 2.  
                        <img src="./assets/df/7/img1.png" className="df-img"/>
                        It's a pair of $20 IEMs that sound good for the price and had a really simple construction: single dynamic driver, 2-pin connector, and a simple shell. I disassembled it, took some measurements and started modeling.
                        <img src="./assets/df/7/img2.png" className="df-img"/>
                    </p>
                    <h2>Mesh working</h2>
                    <p>
                        Before I started, I tried some mesh working programs and decided to use Meshmixer as for me it has the most intuitive UI. Blender would works wonderfully here in the hands of a skilled designer, but I'm not one of them.

                    </p>
                    <h3>1. Clean up concha</h3>
                    <p>First thing I did was to clean up the mesh file. The IEM fit only in the concha part of the ear, so I roughly remove the unnecessary outer ear to get a better visualization of my concha's shape.</p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/1 Clean Concha.mp4'} type="video/mp4" controls muted/>
                    <h3>2. Rotate/orient</h3>
                    <p>I needed to make an opening to the shell by using plane cut for a good flat surface. I judged by eye and rotate the model to find an optimal orientation to get a nice cut. It took me 2 trials.</p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/2.1 Orient For Cut.mp4'} type="video/mp4" controls muted/>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/2.2 Orient.mp4'} type="video/mp4" controls muted/>
                    <h3>3. Plane cut</h3>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/3 Plane Cut.mp4'} type="video/mp4" controls muted/>

                    <h3>4. Nozzle cut</h3>
                    <p>It's important for me to cut the nozzle closest to the measured length since it's the only acoustical reference I have and I don't plan to mess with the driver. I used the measuring tool in Meshmixer to get the 5mm dimension and tried my best to align for an optimal cut.</p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/4 Nozzle Cut.mp4'} type="video/mp4" controls muted/>
                    <img src="./assets/df/7/img3.png" className="df-img"/>
                    <h3>5. Smooth and offset</h3>
                    <p>
                        After getting the rough shape, I first needed to invert the mesh as the original scan was open, not closed mesh; when the fill mesh applied after cutting, the mesh was inside out.
                        I smoothen the nozzle and slightly offset the body outwards to fit snugly. I then printed the model to test the fit and figure out components position.
                    </p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/5.1 Smooth Nozzle.mp4'} type="video/mp4" controls muted/>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/5.2 Smooth Offset.mp4'} type="video/mp4" controls muted/>
                    <img src="./assets/df/7/img4.png" className="df-img"/>
                    <p>The model fit very well as expected, although there are needed improvements to it: the top and bottom can be reduced to have more rounded edges and also improve the overall shape and stability.</p>
                    <h3>6. Remesh</h3>
                    <p>The model's remeshed to a finer 'resolution' so that it's a little easier to select and sculpt.</p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/6 Remesh Smooth.mp4'} type="video/mp4" controls muted/>
                    <h3>7. Sculpt</h3>
                    <p>Following my plan to reduce the edges, I abused the smooth tool in meshmixer to sculpt a comfortable overall shape.</p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/7.1 Sculp Features.mp4'} type="video/mp4" controls muted/>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/7.2 Sculpt Tail.mp4'} type="video/mp4" controls muted/>
                    <h3>8. Extrude</h3>
                    <p>I selected a big chunk of of the top surface to extrude as I needed depth to fit the 2-pin connector and would plan to use it as the opening of the shell.</p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/8 Extrude.mp4'} type="video/mp4" controls muted/>
                    <h3>9. Sculpt more</h3>
                    <p>I tried my best to futher sculpt the shell to an usable, more 'organic' shape then printed it out to check the fit again.</p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/9 More Work.mp4'} type="video/mp4" controls muted/>
                    <h3>Rework</h3>
                    <p>
                        As far as it goes right now, the shape doesn't look horrible, but I noticed a) the extrusion surface I selected looked very janky and in a weird shape, b) I couldn't sculpt the transition of the extrusion correctly, as
                        it's looking very blocky and unnatural.
                    </p>
                    <img src="./assets/df/7/img5.png" className="df-img"/>
                    <p>
                        My next step/approach would be to rework on the extrusion to make the shape slimmer and more natural, I'd only extrude the connector and have its position tilted.
                        Then I can add the connector to the model, hollow it out then print it out again to start assembling.
                    </p>
                    <h2>3D Scanning</h2>
                </div>
            )}
            {(currentSection === 'week8') && (
                <div className="df-docs">
                    <h1>Embedded Programming</h1>
                    <img src="./assets/df/8/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

        </div>
    )

}