import './TeamCard.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, } from 'react';
import Tilt from 'react-parallax-tilt';
import ReactDOM from 'react-dom';



gsap.registerPlugin(ScrollTrigger);

export default function TeamCard(props){

    //hover text animation
    const cardRef = useRef(null);
    const teamsCardRef = useRef(null);
    const twitterTween = useRef(null);

    useEffect(() => {
        
        let tl = gsap.timeline();

        if(window.innerWidth> 480){
            tl.fromTo(teamsCardRef.current,{
                opacity:0,
                xPercent:140,
                scale: 0.3,
            },{
                scale:1,
                opacity: 1,
                xPercent: 0,
                delay: 1.6,
                duration: 1.5,
                ease: "power3.inOut",
                
            })
        }else{
            tl.fromTo(teamsCardRef.current,{
                opacity:0,
                xPercent:140,
                scale: 0.3,
            },{
                scale:1,
                opacity: 1,
                ease: "back.out(1.7)",
                xPercent: 0,
                delay: 1,
                duration: 1.5,
                ease: "circ.out",
            })
            if(window.innerHeight<750){
                gsap.to('.fixed-headings',{
                    y: -100
                })
                gsap.to(teamsCardRef.current,{
                    scale: 0.5
                })
            }
        }

        
    }, []);

    // const mouseEnterEvent = () => {
    //     twitterTween.current.play();
    // };
    // const mouseLeaveEvent = () => {
    //     twitterTween.current.reverse();
    // };


    let name = props.name;
    let image = props.img;
    let IQ = props.IQ;
    let humour = props.humour;
    let cuteness = props.cuteness;
    let anger = props.anger;
    let ig = props.ig;
    let info = props.info;
    let finesse = props.fun;
    let ln = props.ln;
    console.log(ln);


    return(
        <div className='teams-card-wrapper' id={props.id}><Tilt>
            <div ref={teamsCardRef} className='teams-card'  >
                <div>
                    <h1 className='member-name'>{name}</h1>
                </div>
                
                <div className='member-image-container'>
                    <img loading="lazy" src={props.img} className='member-image'></img>
                </div>

                <p ref={cardRef} className='team-card-info'>
                        {info}
                </p>

                <div className='team-card-icons'>
                    <a href={ig} className='member-insta-container' target="_blank">
                        <i className="fa-brands fa-instagram member-insta"></i>
                    </a>

                    <a href={ln} className='member-linkedin-container' target="_blank">
                    <i className="fa-brands fa-linkedin member-linkedin"></i>
                    </a>
                </div>

                

                <div className='hoverCard'>    
                    <div className='stats-section'>                        
                        
                        <div className='metrics'>
                            <span>Humour: </span>
                            <span>Cuteness: </span>
                            <span>Anger: </span>
                            <span>IQ: </span>
                            <span>Finesse: </span>
                        </div>

                        <div className='scores'>
                            <div className='humourStat' style={{width:`${humour}%`}}></div>
                            <div className='cutenessStat' style={{width:`${cuteness}%`}}></div>
                            <div className='angerStat' style={{width:`${anger}%`}}></div>
                            <div className='IQStat' style={{width:`${IQ}%`}}></div>
                            <div className='funStat' style={{width:`${finesse}%`}}></div>
                        </div>
                        
                    </div>
                        
                </div>
            </div></Tilt>
            
            
        </div>
    )
}