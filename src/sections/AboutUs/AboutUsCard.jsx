import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import rightArrowBlack from "../../assets/rightArrowBlack.svg";
import rightArrowWhite from "../../assets/rightArrowWhite.svg";
import { useState } from "react";

const AboutUsCard = ({ title, subTitle, period, img, isHovered, i }) => {
  // hooks

  const [btnHovered, setBtnHovered] = useState(false);

  // animations

  useGSAP(() => {
    if (isHovered === i) {
      gsap.to(`#card--${i}`, {
        boxShadow: "0px 0px 82.4px rgba(18, 6, 0, 0.2)",
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(
        `#cardImg-${i}`,
        {
            scale: 1.2,
            duration: 0.3,
            ease: 'circ'
        }
      )
    } else {
      gsap.to(`#card--${i}`, {
        boxShadow: "none",
        duration: 0.3,
        ease: "power1.out",
      });
      
      gsap.to(
        `#cardImg-${i}`,
        {
            scale: 1,
            duration: 0.3,
            ease: 'circ'
        }
      )
    }
  }, [isHovered]);


  return (
    <div
      id={`card--${i}`}
      className=" cursor-pointer  rounded-3xl bg-white overflow-hidden min-w-[26rem] relative min-h-[27rem] justify-self-center place-self-center"
    >

      <div className="flex flex-col absolute top-0 left-0 gap-8 px-6 py-8 w-full bg-white z-10">
        <span className="text-body-large">{period}</span>
        <div>
          <h3 className="text-h3">{title}</h3>
          <p className="text-body-large font-medium gray-700">{subTitle}</p>
        </div>
        <button
          id="button"
          className="flex gap-2 items-center px-4 py-3 border border-gray  text-button outline-none rounded-[50px] max-w-[10.1875rem] cursor-pointer hover:bg-black hover:text-white transition"
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          <span>Explore Camp</span>
          <img src={!btnHovered ? rightArrowBlack : rightArrowWhite} alt="" />
        </button>
      </div>


      <img src={img} className=" absolute left-0 bottom-0 z-0" id={`cardImg-${i}`} alt="" />
    </div>
  );
};
export default AboutUsCard;
