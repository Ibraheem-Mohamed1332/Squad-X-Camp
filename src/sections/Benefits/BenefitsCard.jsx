
import rightArrowWhite from "../../assets/rightArrowWhite.svg"
import rightArrowBlack from "../../assets/rightArrowBlack.svg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



const BenefitsCard = ({ title,textColor,subTilte,btnText,bgColor,icon,isHovered, className, i,id}) => {



    useGSAP(() => {


        if (isHovered === i) {
            gsap.to(
                `#arrow-${i}`,
                {
                    x: 8,
                    duration: 0.3,
                    ease: "power1.out"
                }
            )
        } else {
            gsap.to(
                `#arrow-${i}`,
                {
                    x: 0,
                    duration: 0.3,
                    ease: "power1.out"
                }
            )
        }


        if ( isHovered === i) {
            gsap.to(
                `#card-${i}`,
                {
                    boxShadow: "0px 0px 82.4px rgba(18, 6, 0, 0.2)",
                    duration: 0.3,
                    ease: "power1.out"
                }
            )
        } else {
            gsap.to(
                `#card-${i}`,
                {
                    boxShadow: "none",
                    duration: 0.3,
                    ease: "power1.out"
                }
            )
        }



    },[isHovered,i])


    return (
    <div  className={` flex flex-col gap-16 items-center px-6 py-8 rounded-3xl  ${className} ${textColor} ${bgColor}`} id={`card-${i}`}>
        <img src={icon} alt="" />
        <div className="flex flex-col gap-2">
            <h4 className={`text-h4 text-center`}>{title}</h4>
            <p className="text-body-base text-center w-[17rem]">{subTilte}</p>
        </div>
        <div className="flex gap-2">
            <span>{btnText}</span>
            <img src={ bgColor === "bg-white" ? rightArrowBlack : rightArrowWhite} id={`arrow-${i}`} alt="" />
        </div>
    </div>
    )
}


export default BenefitsCard

