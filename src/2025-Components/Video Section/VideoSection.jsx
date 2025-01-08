import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import ReactParallaxTilt from 'react-parallax-tilt'
import bg from '../../Images/highlights bg.svg'
import TypeHeading from '../TypeHeading/TypeHeading'
import TypePara from '../TypePara/TypePara'
import TypeSmall from '../Typing Small/TypingSmall'
import gsap from 'gsap'

const VideoSection = () => {

    useEffect(() => {
        gsap.fromTo('.highlightsBG', {
            opacity: 0,
        },{
            opacity: 0,
            scrollTrigger:{
                trigger: '.highlightsBG',
                start: 'top center',
                end: 'top top',
                scrub: true,
                markers: false,
            },
            ease: 'sine.out'
        })

        gsap.fromTo('.highlightsText',{
            xPercent: -100,
        },{
            xPercent: 0,
            scrollTrigger:{
                trigger: '.highlightsText',
                toggleActions: 'play none none reverse',
                start: 'top 50%',
                scrub: false,
                markers: false
            },
            duration: 0.8,
            ease: 'sine.out',
        })
        gsap.fromTo('.withoutSound',{
            opacity: 0,
            xPercent: 100,
        },{
            opacity: 1,
            xPercent: 0,
            scrollTrigger:{
                trigger: '.highlightsText',
                toggleActions: 'play none none reverse',
                start: 'top 50%',
                scrub: false,
                markers: false
            },
            duration: 0.8,
            ease: 'sine.out',
        })
    },[])

  return (
    <div className=' relative flex flex-col-reverse py-[80px] lg:flex-row justify-center gap-[50px] lg:gap-[100px] items-center w-screen min-h-screen bg-black z-20'>
        
        <Marquee autoFill={true} className=' blur-[7px] min-w-[120vw] rotate-12 text-[200px] font-black absolute  bg-gradient-to-b from-purple-500  to-pink-500 '>
            <p className=' mr-20'>HIGHLIGHTS</p>
        </Marquee>

        <ReactParallaxTilt className='withoutSound'>
            
            {/* <h2 className=' absolute uppercase w-fit ml-[200px] leading-[50px] mix-blend-difference z-40 overflow-hidden text-left  font-black text-[60px] max-w-[90vw] text-white '>Reliving the magic</h2> */}
        
            <iframe className=' border-y-0 border-x-[3px] border-x-red-950  relative pointer-events-none z-30 rounded-md md:rounded-3xl'
                width="330" 
                height="590" 
                src="https://www.youtube.com/embed/jZRbOFMqESs?autoplay=1&loop=1&playlist=jZRbOFMqESs&controls=0&modestbranding=1&mute=1&showinfo=0&rel=0" 
                title="YouTube Shorts Video" 
                frameBorder="0" 
                allow="autoplay" 
                allowFullScreen
            ></iframe> 

        </ReactParallaxTilt>

        <span className=' uppercase text-left  text-white font-thin overflow-x-hidden ' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
            <h2 className='highlightsText uppercase w-min overflow-clip leading-[48px] lg:leading-[70px]  z-40 text-left  font-black text-[60px] lg:text-[80px] max-w-[90vw] text-white '>Reliving the magic</h2>


                <p className='highlightsText text-justify hidden md:block leading-8 max-w-[485px]'>
                Last year's event was nothing short of extraordinary—a perfect blend of creativity, passion, and inspiration! Thrilling talks by our incredible speakers sparked ideas and the energy was contagious, the vibe unmatched—relive the magic through our highlights video!
                </p>
        </span>

    </div>
  )
}

export default VideoSection