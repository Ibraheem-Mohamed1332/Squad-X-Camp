import Button from "../../components/ui/button"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap-trial/SplitText"
import { useMediaQuery } from "react-responsive"

// assets imports

import rightArrowWhite from "../../assets/rightArrowWhite.svg"
import heroImg from "../../assets/heroImg.png"
import heroIcon1 from "../../assets/heroIcon1.svg"
import heroIcon2 from "../../assets/heroIcon2.svg"
import ratingStar from "../../assets/ratingStar.svg"





const HeroSection = () => {


    // hooks

    const [isHovered, setIsHovered] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const mobile = useMediaQuery({ query: '(min-width: 375px)' })
    const btnRef = useRef(null)






    useGSAP(() => {

        // button gradient animation

        if (isHovered && !isMobile) {
            gsap.to(
                btnRef.current,
                {
                    backgroundImage: "linear-gradient(to bottom, #FF4D00, #FF4D00)",
                    duration: 0.3,
                    ease: "power1"
                }
            )
        }
        else {
            gsap.to(
                btnRef.current,
                {
                    backgroundImage: "linear-gradient(to bottom, #ff4d00, #ff7133)" ,
                    duration: 0.3,
                    ease: "power1"
                }
            )
        }


        // timeLine components revealing animation



    },[isHovered])


    useGSAP(() => {

        const heroText = new SplitText("#hero-text", { type: 'words'})
        const heroPargraph = new SplitText("#hero-parg", { type: 'lines'})

        const tl = gsap.timeline({ defaults: { ease: "circ", duration: 0.4 } })





        if (heroText.words && heroPargraph.lines && !isMobile) {



            tl.from(heroText.words, {
            y: 50,
            opacity: 0,
            stagger: 0.09,
            filter: "blur(4px)" ,
            delay: 0.8
        })
            .from(heroPargraph.lines, {
                y: 50,
                opacity: 0,
                stagger: 0.09,
                filter: "blur(4px)",
                delay: -0.3
            })
            .from(btnRef.current, {
                y: 50,
                opacity: 0,
                stagger: 0.09,
                filter: "blur(4px)",
                delay: -0.3
            })
            .from("#heroImg", {
                y: 50,
                opacity: 0,
                filter: "blur(4px)",
                delay: -0.3
            })

        }

        // cleaning DOM with reverting the text

            return () => {
                heroText.revert()
                heroPargraph.revert()
            }
    }, [])


    useGSAP(() => {
            gsap.from("#card1", {
                x: -100,
                opacity: 0,
                filter: "blur(4px)",
                ease: 'circ.out',
                delay: 1.7
            })
            gsap.from("#card2", {
                x: 100,
                opacity: 0,
                filter: "blur(4px)",
                ease: 'circ.out',
                delay: 1.8
            })


            // moving cards animation

            // gsap.to("#card1", {
            //     x: () => -gsap.utils.random(30,50),
            //     y: () => -gsap.utils.random(10,20),
            //     ease: 'power1',
            //     repeat: -1,
            //     yoyo: true,
            //     duration: 10,
            //     delay: 2
            // })
            // gsap.to("#card2", {
            //     x: () => gsap.utils.random(30,50) ,
            //     y: () => gsap.utils.random(10,20),
            //     repeat: -1,
            //     yoyo: true,
            //     ease: 'power1',
            //     duration: 10,
            //     delay: 2
            // })



    },[])


return (
    <section id="hero-main-container" className="flex justify-center z-[1] py-[5.0625rem] sm:px-4 md:px-8 lg:px-[11.25rem] h-[100vh] ">
    <div className="flex gap-[131px] items-center flex-col md:flex-row  lg:flex-row max-h-[567px]">
            {/* left side */}
        <div className="flex flex-col gap-8 items-center md:items-start">
            <div className="hero-text-container flex flex-col gap-4 max-w-[25.3125rem] line-100  text-h1 text-center md:text-left items-center md:items-start">
                <h1 id="hero-text"><span className="text-primary-500">Launch</span> your tech career today.</h1>
                <p id="hero-parg" className="text-body-large font-medium gray-700">Join practical camps with real mentors, build projects, and explore camps designed to grow your tech career.</p>
            </div>
            <div className="rounded-[50px]" onMouseEnter={ () => setIsHovered(true)} onMouseLeave={ () => setIsHovered(false)}>
            <Button 
                text={"Explore Camps Now"}
                img={rightArrowWhite}
                className={`bg-gradient px-4 text-white cursor-pointer button-shadow text-button`}
                ref={btnRef}
            />
            </div>

            
        </div>

        {/* right side */}
        <div className="relative">
            <img src={heroImg} alt="" id="heroImg"/>
            <div className={`absolute top-[-30px] left-[-26px] `} >
                <div className="p-4 bg-white gray-700 rounded-2xl text-body-base w-fit hero-card-shadow relative" id="card1">
                    <p className="w-[15rem]">In partnership with MasteryHub ITS, empowering learners across Egypt, UAE, KSA, and Europe.</p>
                    <img src={heroIcon2} alt="" className="absolute top-[-22px] left-[-7px]" />
                </div>
            </div>
            <div className="absolute bottom-[-17px] right-[-67px] " id="card2">
                <div className=" flex flex-col gap-2 p-4 bg-white gray-700 rounded-2xl text-body-base w-fit hero-card-shadow relative">
                    <img src={heroIcon1} alt="" className="absolute top-[-22px] left-[-7px]" />
                    <div className="flex gap-2">
                        {[1,2,3,4,5].map(( _, i ) => (
                            <img src={ratingStar} key={i} alt="" />
                        ))}
                    </div>
                    <p className="w-[16rem] text-black">Squad X Camp transformed my skills, preparing me for real-world tech challenges with an amazing team experience!</p>
                    <span className="text-body-base gray-700">Alex Smith</span>
                </div>
            </div>

        </div>
    </div>
    </section>
  )
}

export default HeroSection