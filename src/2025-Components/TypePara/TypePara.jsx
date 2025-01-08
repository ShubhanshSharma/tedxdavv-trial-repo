import './TypePara.css';
import { TypeAnimation } from 'react-type-animation';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TypePara = (props) => {
    const typeParaRef = useRef(null);
    const [hasParaPlayed, setHasParaPlayed] = useState(false);

    useEffect(() => {
        if (!hasParaPlayed) {
            const animation = gsap.fromTo(
                typeParaRef.current,
                {
                    opacity: 1,
                },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: typeParaRef.current,
                        start: 'top 35%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none', // Ensure it plays only once
                        onEnter: () => setHasParaPlayed(true), // Mark as played on enter
                    },
                }
            );

            // Cleanup the ScrollTrigger instance on component unmount
            return () => {
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
            };
        }
    }, [hasParaPlayed]);

    return (
        <span className='typing_text_para' ref={typeParaRef}  >
            {hasParaPlayed && (
                <TypeAnimation
                    sequence={[props.para]}
                    wrapper="span"
                    speed={80}
                    style={{whiteSpace: 'pre-line', display: 'inline-block', textAlign: 'justify' }}
                    repeat={0}
                    cursor={false}
                />
            )}
        </span>
    );
};

export default TypePara;
