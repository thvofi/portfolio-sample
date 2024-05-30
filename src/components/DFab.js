import React from "react"
import DFHomeButton from "./props/DFHomeButton";
import { useSection } from './SectionContext';
import DFimg from "./props/DFimg";
import ImgModal from "./props/ImgModal";
import UpButton from "./UpButton";
import SectionNav from "./SectionNav";
import P5Wrapper from './P5Wrapper';
import sketch from './p5-sketch/sketch';
import kris from "./p5-sketch/kris";

export default function DFab({currentSection}){
    const dfa_sections = ["week123", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14", "week15", "week16", "week17", "week18"];
    const dfa_headlines = ["1.2.3. Documentation & VCS", "4. CAD", "5. CCC", "6. Electronics Production", "7. 3D Printing",
    "8. Embedded Programming", "9. CNC", "10. Electronics Design", "11. Output Devices", "12. Midterm", "13. Input Devices", "14. Molding and Casting",
    "15. Networking and Communications", "16. Interface and Application", "17. Wildcard Week", "18. System Integration"];
    const { handleButtonClick } = useSection();

    // Select a random wallpaper
    const wallpapers = ["am", "thesmile", "radiohead", "tlsp"];
    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    const randomWallpaper = "./assets/wall/" + wallpapers[randomIndex] + ".png";
    
    return(
        <div>
            {(currentSection === 'df-home') && (
                <div className="df-home">
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
                        <DFHomeButton img="./assets/df/9/thumb.png" 
                        text={dfa_headlines[6]} 
                        currentSection={dfa_sections[6]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/10/thumb.png" 
                        text={dfa_headlines[7]} 
                        currentSection={dfa_sections[7]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/11/thumb.png" 
                        text={dfa_headlines[8]} 
                        currentSection={dfa_sections[8]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/12/thumb.gif" 
                        text={dfa_headlines[9]} 
                        currentSection={dfa_sections[9]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/13/thumb.png" 
                        text={dfa_headlines[10]} 
                        currentSection={dfa_sections[10]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/14/thumb.png" 
                        text={dfa_headlines[11]} 
                        currentSection={dfa_sections[11]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/15/thumb.png" 
                        text={dfa_headlines[12]} 
                        currentSection={dfa_sections[12]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/16/thumb.png" 
                        text={dfa_headlines[13]} 
                        currentSection={dfa_sections[13]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/17/thumb.png" 
                        text={dfa_headlines[14]} 
                        currentSection={dfa_sections[14]} handleButtonClick={handleButtonClick}/>
                        <DFHomeButton img="./assets/df/18/thumb.png" 
                        text={dfa_headlines[15]} 
                        currentSection={dfa_sections[15]} handleButtonClick={handleButtonClick}/>
                    </div>
                    
                </div>
            )}

            {(currentSection === 'df-final') && (
                <div className="df-final df-docs">
                    <h1>Final project</h1>
                    <img src="./assets/df/final/final.png" className="df-thumb"/>
                    <h2>Multi-fx digital guitar pedal</h2>

                    <h3>Plan</h3>
                    <p>
                        To have a functional live pedal that provide the <u>platform</u> for me to learn, develope, deploy guitar effects processing. It's been on my mind as a cooler Zoom
                        MS-50G as I quite like its experience design but a month ago, Zoom released an upgraded stompbox (after 11 years) called MS-50G+, so it'll be interesting to learn from them.
                        <ImgModal img="./assets/df/final/img0.png"/>
                    </p>
                    <h3>Stage 1: Hardware rabit holes</h3>
                    <p>
                        I have some surface level ideas for what's coming next, but not enough to form a concrete plan, the purpose of this stage is to research.<br/>
                        In a nutshell, I'm alternating the guitar signal digitally, so at the heart of the project, there is a DSP (Digital Signal Processing).<br/>
                        <ImgModal img="./assets/df/final/img1.png"/>
                        In the Input Stage of the DSP, the signal must be converted to digital, so there's an ADC (Analog-Digital Converter); and before being converted,
                        the signal is required to be amplified so I'll place an op-amp before the ADC.<br/>
                        <ImgModal img="./assets/df/final/img2.png"/>
                        For the Output Stage of the DSP, surely it must play sound, and digitally, there are different methods for that. Luxuriously, I'd place a DAC and
                        work with PCM output to inject to the DAC and receive analog signal; without a DAC, digital signal can be output with PWM or PDM. At the end of the
                        signal chain, the output is amplified (and filtered for noise if necessary) so I'll have another op-amp there.<br/>
                        <ImgModal img="./assets/df/final/img3.png"/>
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
                    <h3>Stage 2: DSP Platform and Prototyping (to be continued)</h3>
                    <h3>Stage 3: Electronics Design (late April 2024 updates)</h3>
                    <p>
                        <ImgModal img="./assets/df/final/img5.png"/>
                    </p>
                    <h4>Design considerations</h4>
                    <p>
                        An effect pedal consists of a few key ingredients that support the heart of DSP powering its purpose. In my process of PCB designing, I divided it into 3 catergories:
                        <ul>
                            <li>Main board</li>
                            <li>Interface</li>
                            <li>Peripherals</li>
                        </ul>
                        <ImgModal img="./assets/df/final/img6.png"/>
                        <li>The main board is where the DSP and the audio processing happens, including the microcontroller and its i/os required complementary circuits, including Audio Input/Output buffering, Signal bypass.</li>
                        <li>The interface includes user interacting elements of the pedal, offering choices to control: enable, disable the effects, and adjust the parameters of the effects. Interface inputs can be anything and traditionally are potentiometers, rotary encoders, switches.</li>
                        <li>The peripherals are the extra components that support the main board, in my case, ports of the pedal - Audio/MIDI/Power jack.</li>
                        While main board mostly focus on the technical aspect of the pedal's circuitry, and the peripherals are universally the same (with some cautious choice), the interface is the user-facing side of the pedal, and this is my main focus of design considerations as traditionally,
                        analog pedals have their interfaces tied to their required parameter controls but digital implementations (with microcontrollers) control the parameters digitally, making their interface extremely flexible and versatile, hence as the designer, I have to make sure the interface is intuitive.<br/>
                        <b>Big words I used there, but functionally, I just chose how many knobs I want (6).</b>
                        <ul>
                            <li>My first consideration is the use of a display. The pros of a display is to me, like putting steroids on pedals. It's the focus of attention, very intuitive and offer visual changes with minimum effort. Its main drawback is adding a level of complexity to my programming skill (working the display library, implement the graphical interface..), taking up at least 4 I/O (common display connection like I2C takes 4, SPI takes 5), and invading real estate of a compact enclosure.<br/>
                            Alternatively, I thought and tried out another visual signaling system that I design with LED rings around the knobs. When a knob is turned, the ring lights accordingly to the parameter values, creating a lighting feast. However, a) the system here can only applied to a set of rotary encoders as pots (with limited rotation) already display its positional values effortlessly compared to the LEDs;
                            b) as I'm designing a multi-fx pedal with versatility placed as the priority, displaying variable type of effects required RBG LEDs in combination with a cryptic lighting combination system to distinct and not to mention, increasing physical complexity of LEDs, LED drivers per knob. </li>
                        </ul>   
                        <ImgModal img="./assets/df/final/img7.png"/>
                        <ul>
                            <li>Potentiometers vs Rotary encoders: Initially, I opted to use rotary encoders as I was referencing the design of a Zoom MS-50G with RE knobs and expected having RE would reduce half the pots I wanted for their flexibility; and with their ability to rotate freely, in combination with a digital implementation, controling different parameters on a same knob is somewhat more intuitive (with pots, after setting the first parameter, the second parameter is affected with the knob's state of the first and usually start from there).<br/>
                            However, such inconvenience is not a deal breaker and it's handled digitally. The drawback of RE is how much physical input that it takes, as it requires at least 2 data input and 2 power input (with another input for a switch), making scaling multiples RE a nightmare, comparing to pots that only require 2 power input and 1 data input. The digital implementation of RE also requires a lot more coding and debugging than pots.
                            </li>
                        </ul>
                        <ImgModal img="./assets/df/final/img8.png"/>
                        <ul>
                            <li>Switches, buttons: Switches (stateful) are commonly used on analog pedal to enable different states of the fx, while buttons (stateless switch) are more of a digital luxury. My previous PCB build (the Terrarium, designed by PedalPCB) used 4 switches that can controll either 4 parameters x 2 state (8 total states) or 4 switch ^ 2 states (= 16 combination). While this implementation is faithful to its analog inspiration, I don't like them switches and prefer a stateless alternative.<br/>
                            While buttons is cool and everything, I decided to go for a rotary encoder as the main control function of the digital pedal (inspired by the Apple design team). The Kontrol Knob here will cycle between pages (of options and settings) and its builtin switches make controling fast and easy.</li>
                        </ul>
                        <ImgModal img="./assets/df/final/img9.png"/>
                        Overally, I decided to go with:
                        <ul>
                            <li>An OLED display: intuitive UI.</li>
                            <li>6 potentiometers: common limit of knobs that pedals usually go with, especially when I wanted a digital implementation of pedals like EHX Deluxe Memory Man or Roland Space Echo. Depending on the fitting of enclosure, I would go 3 concentric pots to enable full 6 inputs or 3 normal pots and handle inputs in software.</li>
                            <li>Kontrol Knob Rotary Encoder: supreme mastercontroller, cycles options smoothly. May added LED ring for eye candy.</li>
                        </ul>
                        <ImgModal img="./assets/df/final/img10.png"/>
                    </p>
                    <h4>`Building` on the shoulders of giants</h4>
                    <p>
                        As the name suggested, I'm not the first person to design a digital multi-fx pedal, in fact I am quite a beginner myself (as stated repeatitively above). Prior to beginning of the project, I've been lurking on the internet for at least a year and found a few projects that I can learn from and build upon. Below is a list of references that I educationally stole ideas from:
                        <ul>
                            <li><a href="https://github.com/bkshepherd/DaisySeedProjects">bkshepherd's Daisy Seed Project</a>: Open source hardware design of a Daisy pedal that literally checks all of my boxes. Keith's design is fundamentally how I learn the vital components of a pedal, how they're implemented and where I based and expand my design upon.</li>
                            <li><a href="https://electro-smith.com/pages/legacy?_pos=1&_sid=792f811b3&_ss=r">Electrosmith's Daisy Petal</a>: (Deprecated) official pedal from the maker of Daisy Seed and it's the (somewhat) standard for a Seed based pedal design.</li>
                            <li><a href="https://diyelectromusic.wordpress.com/">diyelectromusic (Kevin)</a>: A range of projects that span music, electronics, microcontrollers. Great resource for a variety of audio module (like <a href="https://diyelectromusic.wordpress.com/2023/04/14/xiao-midi-proto-pcb/">MIDI board</a>) implementations to microcontrollers.</li>
                            <li>Various tutorials found online of pedal design, audio buffering, bypass circuit... to name a few:
                                <ul>
                                    <li><a href="https://barbarach.com/using-relays-in-pedals/">Using Relays in Pedals</a></li>
                                    <li><a href="http://beavisaudio.com/techpages/buffers/">Buffers</a></li>
                                    <li><a href="https://effectpedalkits.com/blog/effect-pedal-circuits-the-buffer/">Effect pedal circuits: the Buffer (currently down)</a></li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <h4>Schematics/How they work? (Under construction May 2024)</h4>
                    <p>
                        Bypass
                        <ImgModal img="./assets/df/final/img11.png"/>
                        Audio Buffering
                        <ImgModal img="./assets/df/final/img12.png"/>
                        Encoder
                        <ImgModal img="./assets/df/final/img13.png"/>
                        MIDI
                        <ImgModal img="./assets/df/final/img14.png"/>
                        Power handling
                        <ImgModal img="./assets/df/final/img15.png"/>
                    </p>
                    <h4>Breaking into modules</h4>
                    <p>
                        Traditionally (yes I use traditionally a lot), at least with analog pedals I've built, it's a single PCB that contains most of the components of the pedal, conveniently with the pots are mounted on the backplate of the PCB. Keith essentially did the same with his Daisy Seed project, but I wanted to improve upon the design and make it modular, breaking the interface and peripheral
                        into pieces that connect to the main board via thin connectors (referencing from keyboard designs I've seen and guts from commercial pedals online). This way, I can design the main board to be very compact while making the controls and ports to be easily accessible and replaceable.
                        <ImgModal img="./assets/df/final/img16.png"/>
                        <ImgModal img="./assets/df/final/img16-2.png"/>
                        <ul>
                            <li>Display module</li>
                            <li>Rotary encoder + LEDs driver module</li>
                            <li>Control potentiometers module</li>
                            <li>Footswitch</li>
                            <li>Various jacks (Panel mounted jack is desirable in this case since quite long and thic 6.35mm TRS metal connector is in and out multiple times and dealing with wear and tear of the jack may burst up PCB solder joints)</li>
                        </ul>
                    </p>
                    <h4>Software and creative liberties</h4>
                    <p>
                        Skipping forward->.......During week 15 and 16 of DF Studio (mainly week 16: Interface and Application), I learned about the frameworks for creative coding that to me, ties in with Networking and Communications as an great extension, exploring user input parameter indirectly from a host machine. Kris's example explored a web based p5.js implementation that control a vibration motor via a web interface.
                        Immediately, I saw this as a brilliant expantion to my pedal interface, having a web interface that control the pedal's parameters, providing easy access and visual feedback of the pedal's settings. I've reconsidered to alter the PCB design to include an ESP32 module that connect to the Seed via I2C, while pushing the control interface to the ESP32 to both reduce interuptions for the Seed, and have web control working with physical control.<br/>
                        The plan at the moment is to figure out a) how to parse data from REST API to ESP32 to Seed through I2C b) how to design a web interface that control the parameters of the pedal.
                        <ImgModal img="./assets/df/final/img17.png"/>
                    </p>
                    <h4>An use of a multiplexer and DIP switches (V2+) (May 15 updates)</h4>
                    <p>
                        <ImgModal img="./assets/df/final/img18.png"/>
                        <ImgModal img="./assets/df/final/img19.png"/>
                    </p>
                    <h4>PCB design</h4>
                    <p>
                        <ImgModal img="./assets/df/final/img20.png"/>
                    </p>
                    <h3>Final Project Upcoming plans:</h3>
                    <p>
                        <ul>
                            <li>May 8-9: Design choices, V1 schematics deadline</li>
                            <li>May 15-16: PCB deadline, ordering, BOM; Enclosure design (folding Aluminium sheet, 3D modeling) </li>
                            <li>May 22-23: System integration, software and basic DSP</li>
                            <li>May 29-30: Appearance and finalization</li>
                            <li><b>June 5-6: Presentation Week</b></li>
                        </ul>
                    </p>
                    <h2>Side projects that benefit from assignments</h2>
                    <UpButton />
                </div>
            )}

            {(currentSection === 'df-profile') && (
                <div className="df-profile profile">
                    <div className="avatar">
                        <img src="./assets/brand.png" className="front" alt="avatar-front"/>
                        <img src="./assets/avatar.png" className="back" alt="avatar-back"/>
                    </div>
                    
                    <img src={randomWallpaper} className="wallpaper" alt="wallpaper"/>

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
                <div className="week123 df-docs">
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
                    <ImgModal img="./assets/df/123/img1.png"/>
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
                        <ImgModal img="./assets/df/123/img2.png"/>
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
                        <ImgModal img="./assets/df/123/img3.png"/>
                    </p>
                    <h3>Watermarking</h3>
                    <p>
                        Now, as an amateur optimizer and a semi-professional parodist, I wanted to capture the soul of the multimedia hosted on this page, so now, I try to add my watermark to necessary images and videos.<br/>
                        <ImgModal img="./assets/watermark.png"/>
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
                <div className="week4 df-docs">
                    <h1>Computer Aided Design</h1>
                    <img src="./assets/df/4/thumb.png" className="df-thumb"/>
                    <h2>Illustrator</h2>
                    <p>
                        I've been using Illustrator for a while, mainly for vector graphics and logo design. I'm not a professional, but I can get around with the pen tool and the shape tool. For the task at hand, I used Illustrator to create an engraving face plate for my pedal project.
                        <ImgModal img="./assets/df/4/pedal-face.png"/>
                    </p>
                    <h2>Photoshop</h2>
                    <p>
                        I'm no stranger to Photoshop, one of my finest work can be found in my <u>About me</u> page. Below is a quick demonstration of my workflow working with screenshots for the documentation.
                        <ImgModal img="./assets/df/4/pts.png"/>
                        Like every image editing tool, 5 most basic tools are: selection, crop, move, text and brush. I mainly enjoy using red brush and text to annotate my images. One feature of Photoshop that it is layer based, so it's easy to manage an image component and editing process can be non-destructive. Photoshop also features a handy resize tool, which can be found in the Image > Image Size menu, here I can resize the image to a desired dimension and resolution.
                    </p>
                    <h2>Fusion360</h2>
                    <p>
                        I started with an outline sketch using the dimension tool to quickly match the width and height of the shell.
                        <ImgModal img="./assets/df/4/img1.png"/>
                        Then I extruded the sketch to the desired z-height and used shell tool to hollow the shell with 5mm thickness.
                        <ImgModal img="./assets/df/4/img2.png"/>
                        I needed to make more sketch on the top of the shell to add holes for the potentiometers and switches. At that point, I realized since I'm making it parametric, I added my user parameters to the sketch, in this case, the potentiometer's dimensions.
                        <ImgModal img="./assets/df/4/img3.png"/>
                        I added construction lines and used dimension tool to align the holes center accordingly. The distance between the top edge to the first row of holes should be large enough to fit the potentiometers so I defined the distance as the potentiometer's radius.
                        <ImgModal img="./assets/df/4/img4.png"/>
                        Between 2 rows of holes, I defined the distance as the potentiometer's height; and the distance between the side holes and the side edges is also the potentiometer's radius.
                        <ImgModal img="./assets/df/4/img5.png"/>
                        <ImgModal img="./assets/df/4/img6.png"/>
                        After getting all the intersections, I added the holes sketcch with circle tool. Here I also defined the diameter to match the potentiometer's shaft parameter.
                        <ImgModal img="./assets/df/4/img7.png"/>
                        At this moment, I forgot to take account of the shell thickness, so I added the thickness parameter and modified the construction line to add thickness to spacing. I used measure tool to check the distance between 2 pots to confirm the pots weren't overlapping whick they weren't (18mm > 17mm).
                        <ImgModal img="./assets/df/4/img8.png"/>
                        <ImgModal img="./assets/df/4/img9.png"/>
                        To further be reminded of the shell thickness, I used the offset tool to create a thickness contruction outline inside the shape.
                        <ImgModal img="./assets/df/4/img10.png"/>
                        <ImgModal img="./assets/df/4/img12.png"/>
                        I continue with the foot switch, I added the switch's parameters and sketch its outline as contruction. I made the hole with the center point then mirrored it to the other side.
                        <ImgModal img="./assets/df/4/img13.png"/>
                        <ImgModal img="./assets/df/4/img14.png"/>
                        <ImgModal img="./assets/df/4/img15.png"/>
                        I also added a screen to the lower half of the pedal and added a rectangle accordingly to the screen's dimensions.
                        <ImgModal img="./assets/df/4/img16.png"/>
                        <ImgModal img="./assets/df/4/img17.png"/>
                        Finally, I added the LED holes and the sketch is ready to be extrude.
                        <ImgModal img="./assets/df/4/img18.png"/>
                        I selected all the holes and extrude them to the shell's thickness, with opertation set to cut.
                        <ImgModal img="./assets/df/4/img19.png"/>
                        Here is the final result of the shell.
                        <ImgModal img="./assets/df/4/img20.png"/>
                        Since it's a software week, I wanted to try out the rendering feature of Fusion360, so I experimented with a few materials and rendered the shell.
                        <ImgModal img="./assets/df/4/img21.png"/>
                        <ImgModal img="./assets/df/4/img22.png"/>
                        <ImgModal img="./assets/df/4/img23.png"/>
                        Quick 75% quality render of the pedal shell:
                        <ImgModal img="./assets/df/4/img11.png"/>
                        After modeling the shell, I realized I accidentally messed up the shell thickness from 2mm to 5mm, so unintentionally, I had the perfect demonstration of one of the benefits of parametric modeling: I only needed to change the thickness parameter and the whole model magically updated accordingly.
                        <ImgModal img="./assets/df/4/img24.png"/>
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/4/vid1.mp4'} type="video/mp4" controls/>
                    </p>
                </div>
            )}

            {(currentSection === 'week5') && (
                <div className="week5 df-docs">
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
                        <ImgModal img="./assets/df/5/img1.png"/>
                        <ImgModal img="./assets/df/5/img2.png"/>
                        <ImgModal img="./assets/df/5/img3.png"/>
                        <ImgModal img="./assets/df/5/img4.png"/>
                        <ImgModal img="./assets/df/5/img5.png"/>
                        Parameters:
                        <ImgModal img="./assets/df/5/img6.png"/>
                        Press-fit joint thickness:
                        <ImgModal img="./assets/df/5/img7.png"/>
                        Offset joint with kerf:
                        <ImgModal img="./assets/df/5/img8.png"/>
                        Export 2D sketch to DXF:
                        <ImgModal img="./assets/df/5/img9.png"/>
                    </p>
                    <h2>Cutting</h2>
                    <p>
                        Mika's documentation page can be found <a href="https://mikajarvi.gitlab.io/digital-fabrication/laser-cutting.html">here</a>.<br/>
                        20x20mm squares to calculate kerf:
                        <ImgModal img="./assets/df/5/img10.png"/>
                        kerf = (100 - 99.2)/5 = 0.16mm
                        <ImgModal img="./assets/df/5/img11.png"/>
                        Cutting (sorry, no video, I forgot to take one):
                        <ImgModal img="./assets/df/5/img12.png"/>
                        Result:
                        <ImgModal img="./assets/df/5/img13.png"/>
                    </p>
                </div>
            )}

            {(currentSection === 'week6') && (
                <div className="week6 df-docs">
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
                        <ImgModal img="./assets/df/6/img1.png"/>
                        Soldered:
                        <ImgModal img="./assets/df/6/img2.png"/>
                        I was careful enough to test the board continuity after soldering, hence the code worked fine on the first try.
                        <video width="560" src={process.env.PUBLIC_URL + '/assets/df/6/vid1.mp4'} type="video/mp4" controls/>
                    </p>
                </div>
            )}

            {(currentSection === 'week7') && (
                <div className="week7 df-docs">
                    <h1>3D Scanning and Printing</h1>
                    <img src="./assets/df/7/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>
                    <p>
                        Last semester I got my ears 3D scanned and I've been planning to make custom IEMs for myself using a SLA printer. Honestly, I'm quite clueless on working and modeling scanned mesh, so to start
                        small, I wanted to reshell a pair of cheap IEMs that I have. Introducing: the Moondrop Chu 2.  
                        <ImgModal img="./assets/df/7/img1.png"/>
                        It's a pair of $20 IEMs that sound good for the price and had a really simple construction: single dynamic driver, 2-pin connector, and a simple shell. I disassembled it, took some measurements and started modeling.
                        <ImgModal img="./assets/df/7/img2.png"/>
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
                    <ImgModal img="./assets/df/7/img3.png"/>
                    <h3>5. Smooth and offset</h3>
                    <p>
                        After getting the rough shape, I first needed to invert the mesh as the original scan was open, not closed mesh; when the fill mesh applied after cutting, the mesh was inside out.
                        I smoothen the nozzle and slightly offset the body outwards to fit snugly. I then printed the model to test the fit and figure out components position.
                    </p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/5.1 Smooth Nozzle.mp4'} type="video/mp4" controls muted/>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/7/5.2 Smooth Offset.mp4'} type="video/mp4" controls muted/>
                    <ImgModal img="./assets/df/7/img4.png"/>
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
                    <ImgModal img="./assets/df/7/img5.png"/>
                    <p>
                        My next step/approach would be to rework on the extrusion to make the shape slimmer and more natural, I'd only extrude the connector and have its position tilted.
                        Then I can add the connector to the model, hollow it out then print it out again to start assembling.
                    </p>
                    <h2>3D Scanning</h2>
                </div>
            )}
            {(currentSection === 'week8') && (
                <div className="week8 df-docs">
                    <h1>Embedded Programming</h1>
                    <img src="./assets/df/8/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>
                </div>
            )}

            {(currentSection === 'week9') && (
                <div className="week9 df-docs">
                    <h1>Computer Controlled Machining</h1>
                    <img src="./assets/df/9/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

            {(currentSection === 'week10') && (
                <div className="week10 df-docs">
                    <h1>Electronics Design</h1>
                    <img src="./assets/df/10/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

            {(currentSection === 'week11') && (
                <div className="week11 df-docs">
                    <h1>Output Devices</h1>
                    <img src="./assets/df/11/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>
                    
                </div>
            )}

            {(currentSection === 'week12') && (
                <div className="week12 df-docs">
                    <h1>Midterm</h1>
                    <ImgModal img="./assets/df/12/thumb.gif"/>
                </div>
            )}

            {(currentSection === 'week13') && (
                <div className="week13 df-docs">
                    <h1>Input Devices</h1>
                    <img src="./assets/df/13/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>

                </div>
            )}

            {(currentSection === 'week14') && (
                <div className="week14 df-docs">
                    <h1>Molding and Casting</h1>
                    <img src="./assets/df/14/thumb.png" className="df-thumb"/>
                    <h2>Group Assignment</h2>
                    <h4>(Special thanks to Saskia for being the instructor)</h4>
                    <h5>Sorry Mikko, until I figure out how to properly fix my codes, you might have to redirect to the whole website as the group assignment</h5>
                    <p>
                        For the final week of Digital Fabrication II, we are introduced to Molding and Casting.<br/> We start by entering the special molding and casting area, where you navigate around to find materials and tools below:
                        <ImgModal img="./assets/df/14/img1.png"/>
                    </p>
                    <h3>Materials</h3>
                    <p>
                        We have 3 materials from the manufacturer <a href="https://www.smooth-on.com">Smooth-On</a> to work with:
                        <ul>
                            <li><b>Mold Star 15</b>: Silicone Rubber</li>
                            <li><b>Sorta-Clear 37</b>: Food safe Silicone Rubber</li>
                            <li><b>Smooth-Cast 305</b>: Liquid Plastic</li>
                        </ul>
                        By looking at the boxes' tags, we can find the materials' names to look up for more information on Smooth-On website, while roughly anticipate their properties and usage.
                        <ImgModal img="./assets/df/14/umb_mold.png"/>
                        <ImgModal img="./assets/df/14/umb_food.png"/>
                        <ImgModal img="./assets/df/14/umb_plastic.png"/>
                        <b>Pot Life:</b> the time from mixing the two packs together to the point at which the mixed paint is no longer useable<br/><b>Cure Time:</b> the time it takes for the material to fully cure after being poured into the mold.
                    </p>
                    <h4>Datasheets</h4>
                    <p>
                    Reading the materials' datasheets is absolutely crucial to understand the materials' properties and how to work with them. Smooth-On offers a lot of information on their website, including datasheets, technical bulletins, and instructional videos; while including 2 copies of the datasheets in the box, one highly detailed safety datasheet and one more user-friendly datasheet.<br/>
                    Here I've included le user-friendlie datasheets for the materials we are working with. We can grasp good overview on the material, its technical properties, and how to work with it; pay special attention to <b>Safety First!</b> red headline to notice the material safety precautions. 
                        <ImgModal img="./assets/df/14/mold_star.png"/>
                        Mold Star silicone rubber is the material we use to make our molds. The mixing ratio is 1A:1B by volume or weight. We're using "Mold Star 15-SLOW", which has 50 minutes of pot life, and 4 hours of curing time. The cured end result is a soft, strong rubber. It can be used to cast materials up to 232 degrees celcius.<br/>
                        When handling the material we must wear gloves. Operations should be done in room temperature.
                        <ImgModal img="./assets/df/14/food_safe.png"/>
                        Sorta-Clear FOOD SAFE silicone rubber is a translucent material used to make molds, mainly used for applications where it is important to see the cast material inside the mold. Works similary as Mold Star, but its special quirk is being Food Safe. We're using "Sorta-Clear 37", which has 25 minutes of pot life, and 4 hours of curing time. It has a mixing ratio of 1A:1B by volume<br/>
                        When handling the material we must wear gloves. Operations should be done in room temperature. 
                        <ImgModal img="./assets/df/14/plastic.png"/>
                        Smooth-Cast liquid plastic is the material which we use to cast. It produces a bright, white, hard plastic when cured. We are using "SmoothCast 305", which has 7 minutes of pot life, and 30 minutes of curing time. It has a mixing ratio of 1A:1B by volume, or 100A:90B by weight.<br/>
                        When handling the material we must wear gloves. Operations should be done in room temperature. 
                    </p>
                    <h3>Safety</h3>
                    <p>
                        By reading Safety Datasheets, we can understand the materials' hazards and how to work with them safely. While our Silicone Rubber materials are relatively safe, Liquid Plastic is a hazardous material and should be handled with care. I'll link the detailed datasheets below:
                        <ul>
                            <li><a href="https://www.smooth-on.com/msds/files/BD_DS_Eco_Equ_EZB_EZS_Psy_MS_OOMOO_Reb_ST_SS_Soma_Sol_Sorta.pdf">Mold Star 15 and Sorta-Clear 37</a></li>
                            <li><a href="https://www.smooth-on.com/msds/files/Smooth-Cast_305_310.pdf">Smooth-Cast 305</a></li>
                        </ul>
                        Now it's time to glove up, coat on and start working.
                    </p>

                    <h3>Process</h3>
                    <p>
                        The process of molding and casting is relatively simple, but it requires precision and care. We start by preparing the model, then making the mold, and finally casting the material.<br/>
                        First step is to unbox the mold mixtures. All of the materials are 2 parts mold, so we need to mix them by ratio. We start by 'warming up' each part by stirring them, as it's necessary to get our liquid fluid.<br/>
                    </p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/14/Vid2.mp4'} type="video/mp4" controls loop muted/>
                    <p>
                    We then measure the parts by weight or volume, depending on the material, and mix them together. 
                    </p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/14/Vid3.mp4'} type="video/mp4" controls muted/>
                    <p>
                    We stir the mixture for a few minutes to ensure the material is mixed properly (please imagine the bottle is the mixture cup)
                    </p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/14/Vid1.mp4'} type="video/mp4" controls loop muted/>
                    <p>
                    The mixture is then put in to a vacuum chamber to remove any air bubbles. This is important as air bubbles can cause defects in the mold. 
                    After turning on the pump and closed the valve, we let the mixture sit as the negative pressure will pull the bubbles from our mixture; we closely monitor the pressure reader, slowly release the valve when the pressure hits 400mbar mark then close the valve again, rinse and repeat until bubbles are clear from the muxture surface.
                    <ImgModal img="./assets/df/14/pressure.png"/>
                    </p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/14/Vid4.mp4'} type="video/mp4" controls muted/>
                    <p>
                        Then, we pour the mixture into the mold box, and let it cure for the specified time. The key to a bubble free pouring job is to pour it from a height, keeping stream as a tiny string or tiny droplets.
                        <ImgModal img="./assets/df/14/mold.png"/>
                        After we have our silicone mold, we repeat the same process with the liquid plastic. For a 2 sided plastic mold, after filling 2 parts of the mold, we let the plastic cured for half the cured time, then we close the mold and let it cure for the rest of the time with a weight placed on top to tighly shut.
                    </p>
                    <video width="560" src={process.env.PUBLIC_URL + '/assets/df/14/Vid5.mp4'} type="video/mp4" controls muted/>
                </div>
            )}

            {(currentSection === 'week15') && (
                <div className="week15 df-docs">
                    <h1>Networking</h1>
                    <img src="./assets/df/15/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>
                    
                </div>
            )}

            {(currentSection === 'week16') && (
                <div className="week16 df-docs">
                    <h1>Interface and Application Programming</h1>
                    <img src="./assets/df/16/thumb.png" className="df-thumb"/>
                    <h2>Demonstration</h2>
                    <h5>(Special thanks to ChatGPT for not taking over the planet)</h5>
                    <P5Wrapper sketch={sketch} />
                    <h2>Anatomy of Kris p5.js example</h2>
 
                    <h2>Implementation</h2>
                    <h3>p5.js</h3>

                    <h3>REST API</h3>

                    <h2>React and p5.js</h2>

                    <h3>p5 Wrapper</h3>

                    <h3>js components</h3>
                </div>
            )}

            {(currentSection === 'week17') && (
                <div className="week17 df-docs">
                    <h1>Wildcard</h1>
                    <img src="./assets/df/17/thumb.png" className="df-thumb"/>
                    <h2>Plan</h2>
                    
                </div>
            )}

            {(currentSection === 'week18') && (
                <div className="week18 df-docs">
                    <h1>System Integration</h1>
                    <img src="./assets/df/18/thumb.png" className="df-thumb"/>
                    <h2>PCB Design</h2>
                    <h3>Components/Footprint selection</h3>
                    <p>
                        <ImgModal img="./assets/df/18/img1.png"/>
                    </p>
                    <h4>Custom footprint for potentiometer</h4>
                    <h3>PCB Manufacturing preperation</h3>
                    <p>
                        <ImgModal img="./assets/df/18/img2.png"/>
                        <ImgModal img="./assets/df/18/img3.png"/>
                        <ImgModal img="./assets/df/18/dfront.png"/>
                        <ImgModal img="./assets/df/18/dback.png"/>
                    </p>
                    <h3>PCB Ordering and pricing</h3>
                    <h4>JLCPCB (board and stencil)</h4>
                    <p>
                        <ImgModal img="./assets/df/18/img4.png"/>
                        <ImgModal img="./assets/df/18/img5.png"/>
                    </p>
                    <h4>JLCPCB (preassembled)</h4>
                    <p>
                        <ImgModal img="./assets/df/18/img6.png"/>
                        <ImgModal img="./assets/df/18/img7.png"/>
                        <ImgModal img="./assets/df/18/img8.png"/>
                    </p>
                    <h4>My choice: PCBWay (board) + LCSC (components)</h4>
                    <p>
                        <ImgModal img="./assets/df/18/img10.png"/>
                        <ImgModal img="./assets/df/18/img9.png"/>
                        <ImgModal img="./assets/df/18/img11.png"/>
                    </p>
                    <h3>3D Model</h3>
                    <h3>Enclosure</h3>
                </div>
            )}

        </div>
    )

}