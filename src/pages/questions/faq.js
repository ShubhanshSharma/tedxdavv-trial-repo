import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import faq from "./FAQs.png";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Breakpoint, BreakpointProvider } from "react-socks";
import StickyScroll2 from "./mobile/faq-mobile";
import gif from "./FAQ.gif";
import { TypeAnimation } from "react-type-animation";
// import TypePara from "../../2025-Components/TypePara/TypePara";

const StickyScroll = ({ content }) => {
    gsap.registerPlugin(ScrollTrigger);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [boldQuestionIndex, setBoldQuestionIndex] = useState(null);
    const [scrollTriggeredIndex, setScrollTriggeredIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const redflowerRef = useRef(null);

    const handleButtonClick = (index) => {
        setSelectedQuestionIndex(index);
        setBoldQuestionIndex(index);
        const divName = "yes" + index;
    };

    useEffect(() => {
        const questions = document.querySelectorAll(`.Question button`);
        const buttons = Array.from(questions);

        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                setScrollTriggeredIndex(index);
            });
        });
    }, []);

    useEffect(() => {
        const tween2 = gsap.to("#faq", {
            opacity: 1,
            x: "10vw",
            duration: 1,
            delay: 1,
            scrollTrigger: "#yes5",
            ease: Power1.easeOut, // pause the animation initially
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(
            "#fgif",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 3,
                ease: Power1.easeOut,
                scrollTrigger: {
                    trigger: "#faq", // pause the animation initially
                },
            }
        );
    });

    useEffect(() => {
        const tween = gsap.to("#answers", {
            x: "10vw",
            opacity: 1,
            duration: 1,
            delay: 1.5,
            ease: Power1.easeOut,
            scrollTrigger: {
                trigger: "#faq", // pause the animation initially
            },
        });
    }, []);

    useEffect(() => {
        // Animate buttons one by one
        const tween = gsap.to("#yes1", {
            y: 0,
            duration: 1,
            opacity: 1,
            delay: 0.5,
            scrollTrigger: "#faq", // Adjust this value for the stagger effect
            ease: "power3.out", // Adjust ease as needed
        });
        handleButtonClick(0);
    }, [content]);
    useEffect(() => {
        // Animate buttons one by one
        const tween = gsap.to("#yes2", {
            y: 0,
            duration: 1,
            opacity: 1,
            delay: 0.8,
            scrollTrigger: "#faq", // Adjust this value for the stagger effect
            ease: "power3.out", // Adjust ease as needed
        });
    }, [content]);

    useEffect(() => {
        // Animate buttons one by one
        const tween = gsap.to("#yes3", {
            y: 0,
            duration: 1,
            opacity: 1,
            delay: 1.1,
            scrollTrigger: "#faq", // Adjust this value for the stagger effect
            ease: "power3.out", // Adjust ease as needed
        });
    }, [content]);

    useEffect(() => {
        // Animate buttons one by one
        const tween = gsap.to("#yes4", {
            y: 0,
            duration: 1,
            opacity: 1,
            delay: 1.4,
            scrollTrigger: "#faq", // Adjust this value for the stagger effect
            ease: "power3.out", // Adjust ease as needed
        });
    }, [content]);

    useEffect(() => {
        // Animate buttons one by one
        const tween = gsap.to("#yes5", {
            y: 0,
            duration: 1,
            opacity: 1,
            delay: 1.7,
            scrollTrigger: "#faq", // Adjust this value for the stagger effect
            ease: "power3.out", // Adjust ease as needed
        });
    }, [content]);

    useEffect(() => {
        // Animate buttons one by one
        const tween = gsap.to("#yes6", {
            y: 0,
            duration: 1,
            opacity: 1,
            delay: 2.0,
            scrollTrigger: "#faq", // Adjust this value for the stagger effect
            ease: "power3.out", // Adjust ease as needed
        });
    }, [content]);

    return (
        <BreakpointProvider>
            <Breakpoint medium up>
                <div className="samarth">
                    <div>
                        <div id="Page" className="hero">
                            <div className="left">
                                <div className="trigger absolute z-50 w-3 h-1"></div>
                                <div
                                    id="fgif"
                                    className="flex flex-col items-center py-24"
                                >
                                    <div className="topBGif"></div>
                                    <img
                                        src={gif}
                                        alt="GIF.."
                                        className="gif"
                                    />
                                </div>

                                <div id="answers" className="Answers">
                                    {selectedQuestionIndex !== null && (
                                        <h3 className="faq-answers">
                                            {
                                                // content[selectedQuestionIndex]
                                                // .description

                                            }
                                                <TypeAnimation
                                                    key={selectedQuestionIndex}
                                                    sequence={[content[selectedQuestionIndex].description]}
                                                    wrapper="span"
                                                    speed={80}
                                                    style={{
                                                        whiteSpace: "pre-line",
                                                        display: "inline-block",
                                                        textAlign: "justify",
                                                    }}
                                                    repeat={0}
                                                    cursor={false}
                                                />
                                                
                                            
                                        </h3>
                                    )}
                                </div>
                                <div id="faq" className="faq">
                                    <img
                                        src={faq}
                                        alt="FAQs"
                                        className="w-[25vw]"
                                    />
                                </div>
                                {/* <div
                                    id="lastelem"
                                    className="w-10 h-10  translate-y-52 absolute z-40"
                                ></div> */}
                            </div>
                            <div className="right">
                                <div>
                                    <div key={0} id="yes1" className="Question">
                                        <button
                                            onClick={() => handleButtonClick(0)}
                                            style={{
                                                fontWeight:
                                                    boldQuestionIndex === 0
                                                        ? "bold"
                                                        : "normal",
                                            }}
                                        >
                                            {content[0].title}
                                        </button>
                                    </div>

                                    <div key={1} id="yes2" className="Question">
                                        <button
                                            onClick={() => handleButtonClick(1)}
                                            style={{
                                                fontWeight:
                                                    boldQuestionIndex === 1
                                                        ? "bold"
                                                        : "normal",
                                            }}
                                        >
                                            {content[1].title}
                                        </button>
                                    </div>

                                    <div key={2} id="yes3" className="Question">
                                        <button
                                            onClick={() => handleButtonClick(2)}
                                            style={{
                                                fontWeight:
                                                    boldQuestionIndex === 2
                                                        ? "bold"
                                                        : "normal",
                                            }}
                                        >
                                            {content[2].title}
                                        </button>
                                    </div>

                                    <div key={3} id="yes4" className="Question">
                                        <button
                                            onClick={() => handleButtonClick(3)}
                                            style={{
                                                fontWeight:
                                                    boldQuestionIndex === 3
                                                        ? "bold"
                                                        : "normal",
                                            }}
                                        >
                                            {content[3].title}
                                        </button>
                                    </div>

                                    <div key={4} id="yes5" className="Question">
                                        <button
                                            onClick={() => handleButtonClick(4)}
                                            style={{
                                                fontWeight:
                                                    boldQuestionIndex === 4
                                                        ? "bold"
                                                        : "normal",
                                            }}
                                        >
                                            {content[4].title}
                                        </button>
                                    </div>

                                    <div key={5} id="yes6" className="Question">
                                        <button
                                            onClick={() => handleButtonClick(5)}
                                            style={{
                                                fontWeight:
                                                    boldQuestionIndex === 5
                                                        ? "bold"
                                                        : "normal",
                                            }}
                                        >
                                            {content[5].title}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Breakpoint>
            <Breakpoint small down>
                <StickyScroll2 content={content} />
            </Breakpoint>
        </BreakpointProvider>
    );
};

export default StickyScroll;
