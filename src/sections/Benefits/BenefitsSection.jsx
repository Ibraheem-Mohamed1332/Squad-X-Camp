import orangeBlurEffect from "../../assets/orangeBlurEffect.svg"
import benefits from "../../assets/benefits.png"
import { benefitsCardData } from "../../constants"
import BenefitsCard from "./BenefitsCard"
import {  useRef, useState } from "react"
import { useGSAP } from "@gsap/react"

import gsap from "gsap"



const BenefitsSection = () => {



    // hooks

    const [isHovered, setIsHovered] = useState(null)
    const scrollRef = useRef(null)
    



    // animations 


useGSAP(() => {


  // Blur effect animation
  
  gsap.from("#blurEffect", {
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: "#blurEffect",
      start: "bottom 120%",
      once: true,
    },
    ease: "power1",
  });

  // Header animation

  gsap.from("#header > *", 
    {
      opacity: 0,
      y: 200,
      filter: "blur(2px)",
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#subTitle",
        start: "top bottom",
        once: true,
    },
    ease: "power1.out",
  });



  // Each card animation

    gsap.from(
        "#cards > *",
        {
            opacity: 0,
            y: 200,
            delay: 0.2,
            stagger: 0.15,
            filter: "blur(2px)",
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "#card-0",
                start: "top bottom",
                once: true,
            }
        }
    )






  gsap.from(
        '#img',
        {
            opacity: 0,
            y: 200,
            filter: 'blur(2px)',
            scrollTrigger: {
                trigger: '#img',
                start: 'top bottom',
                once: true
            }
        }
  )

}, []);





return (
    <section className="flex flex-col gap-20 justify-center bg-g-100 py-14 relative overflow-hidden ">
        <img id="blurEffect" src={orangeBlurEffect} alt="" className="absolute top-[-300px] right-[50%] translate-x-[50%]  z-0" />
        <div id="header" className="flex flex-col gap-4 items-center overflow-hidden relative">
            <span id="subTitle" className="text-body-large text-primary-300">Explore what’s included</span>
            <h1 id="headerText" className="text-h1">Ready to <span className="bg-primary-300 px-2">land</span> that tech job?</h1>
        </div>
        <div className=" flex gap-8 justify-center">
            <img id="img" src={benefits} className="z-[1] benfefits-card-shadow rounded-3xl" alt="" />
            <div className="grid grid-cols-2 grid-rows-1 gap-x-8 gap-y-4" id="cards" ref={scrollRef}>
                {benefitsCardData.map(({ title,subTilte,btnText,textColor,bgColor,icon },i) => (
                    <div key={i} id={title} className="z-[1] rounded-3xl cursor-pointer" onMouseEnter={() => setIsHovered(i)} onMouseLeave={() => setIsHovered(null)}>
                        <BenefitsCard 
                            title={title}
                            subTilte={subTilte}
                            btnText={btnText}
                            textColor={textColor}
                            bgColor={bgColor}
                            icon={icon}
                            isHovered={isHovered}
                            i={i}
                            id={i}
                            
                            
                        />
                        
                    </div>
                ))}
            </div>
            
        </div>
    </section>
  )
}
export default BenefitsSection