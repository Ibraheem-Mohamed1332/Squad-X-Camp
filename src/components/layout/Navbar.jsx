// assets imports

import logo from "../../assets/logo.svg"
import rightArrow from "../../assets/rightArrow.svg"
import rightArrowWhite from "../../assets/rightArrowWhite.svg"
import burgerMenu from "../../assets/burgerMenu.svg"

// libraries imports

import { useMediaQuery } from "react-responsive"
import gsap from "gsap"


//  hooks imporst

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"


// components && constants && etc... imports

import { navLinks } from "../../constants"
import Button from "../ui/Button"




const Navbar = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [isHovered , setIsHovered] = useState(false)

    



    // animations

    useGSAP(() => {

        !isMobile && (

            gsap.from(
            '.nav > *',
            {
                y: -200,
                opacity: 0,
                delay: 0.3,
                duration: 0.6,

                ease: 'circ.out'
            }
        )

    )



    },[isMobile]) 





    return (
        <nav className={`nav  flex items-center justify-between sticky top-0 z-50 bg-white ${ isMobile && `px-4 py-8`} md:px-8 lg:px-[11.25rem] py-4 z-10`}>
            <img src={logo} alt="squad x camp logo" />
            
            { isMobile ? (
                <img src={burgerMenu} alt="burger menu" />
            )
            : (
            <>     
                <ul className="flex gap-8 items-center">
                    { navLinks.map( link => (
                        <li key={link}>
                            <a href="#">{link}</a>
                        </li>
                    )) }
                </ul>
                
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="rounded-[50px]">
                    <Button 
                        text={"Enroll Now"}
                        img={isHovered ? rightArrowWhite : rightArrow}
                        className="px-8 gradient-border gradient-text cursor-pointer "
                        
                    />
                
                </div>


            </>
            )
        }
        </nav>
    )
}
export default Navbar