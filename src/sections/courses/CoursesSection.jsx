import { useState } from "react"

import rightArrowWhite from "../../assets/rightArrowWhite.svg"
import rightArrowBlack from "../../assets/rightArrowBlack.svg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const CoursesSection = () => {

    // hooks

    const [btnHovered,setBtnHovered] = useState(false)

    // animations

    useGSAP(() => {
        gsap.from("#mainContent > *",
            {
                opacity: 0,
                y: 200,
                filter: "blur(2px)",
                stagger: 0.15,
                duration: 0.3,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: "#mainContent",
                    start: "top bottom",
                    once: true
                }
            }
        )
        gsap.from("#section > button",
            {
                opacity: 0,
                y: 200,
                filter: "blur(2px)",
                delay: 0.2,
                duration: 0.3,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: "#mainContent",
                    start: "top bottom",
                    once: true
                }
            }
        )
    },[])
    

  return (
    <section id="section" className=" flex-center flex-col gap-8 courses-section-bg w-full h-[278px] z-10">
        <div id="mainContent" className="flex flex-col gap-4  items-center overflow-hidden">
            <span className="text-body-large text-white">Ready to build real skills?</span>
            <h1 className="text-h1 text-white ">Explore our tech camps</h1>
        </div>
            <button 
                className="flex gap-2 items-center px-4 py-4 text-button bg-white hover:bg-black hover:text-white transition-colors rounded-full cursor-pointer"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
            >
                <span>Explore Camps Now</span>
                <img src={!btnHovered ? rightArrowBlack : rightArrowWhite} alt="" />
            </button>
    </section>
  )
}
export default CoursesSection