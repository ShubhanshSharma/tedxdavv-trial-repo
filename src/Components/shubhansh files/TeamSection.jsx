import './TeamSection.css';
import Teams from './Teams';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';
import teamData from '../../teamData.json';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';




export default function TeamSection(){    

    
   

    
    //fetching data
    // let data_core = teamData[2024]['Core Team'];
    // let data_web = teamData[2024]['Web-Dev Team'];
    // console.log(data_core);
    // Object.keys(teamData).forEach(element => {
    //     Object.keys(element).forEach(e =>{
    //         console.log(element);
    //         console.log(e);
    //     })
    // });

    const [year, setYear] = useState(2024);
    const [len, setLen] = useState(null);
    const navigate = useNavigate();

    function yearHandler(val){
        setYear(val);

        scrollToTop();

        setTimeout(() => {
            year === 2024 ? navigate('/teams-2023'): navigate('/teams-2024');
        }, 800);
    }
    
    // Current page
    const pathname = window.location.pathname;
    // console.log('pathname teams --', pathname);

    // useEffect(() => {
    //     scrollToTop();

    //     setTimeout(() => {
    //         year === 2024 ? navigate('/teams-2024'): navigate('/teams-2023');
    //       }, 800);
    
    //   }, [year, navigate]);


    
        const [isVisible, setIsVisible] = useState(false);
      
        useEffect(() => {
            
          const toggleVisibility = () => {
            if (window.pageYOffset > 1700) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
      
          window.addEventListener('scroll', toggleVisibility);
      
          // Clean up the event listener
          return () => window.removeEventListener('scroll', toggleVisibility);
          
        }, []);

        useEffect(() =>{
            if(isVisible){
                gsap.fromTo('.up-container',{
                    opacity: 0,
                    scale: 0.4,
                    x: 0,
    
                },{
                    opacity: 1,
                    scale: 1,
                    x: -100,
                    duration: 1,
                    ease: "power3.out"
                })
            }
            else{
                gsap.fromTo('.up-container',{
                    opacity: 1,
                    scale: 1,
                    x: -100,
    
                },{
                    opacity: 0,
                    scale: 0.1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out"
                })
            }
        }, [isVisible])
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };

 
    return(
        <div className="teams-section">\

            <div className='teams-section-bg'></div>
            
            <Header />
            

            <div className='dropdown-wrapper' >

                <select className='dropdown'  onChange={yearHandler}>
                    
                    <option value="2024" >2024</option>

                    <option value="2023" >2023</option>

                </select>
            </div>

            <div>
                {
                    
                    pathname == '/teams-2024'
                    ?
                    Object.keys(teamData[2024]).map(team =>{
                        //console.log(teamData[2023][team].length);
                        return(
                            <div key={team}>
                                <Teams team_2024={teamData[2024][team]} nm={team}/>
                            </div>
                        )
                    })
                    :
                    Object.keys(teamData[2023]).map(team =>{
                        //console.log(teamData[2024][team]);
                        return(
                            <div key={team}>
                                <Teams team_2024={teamData[2023][team]} nm={team}/>
                            </div>
                        )
                    })
                }
                
            </div>

            <div className='up-container' onClick={scrollToTop} >
                <i class="fa-solid fa-angles-up up_arrow"></i>
            </div>

        </div>
    )
}