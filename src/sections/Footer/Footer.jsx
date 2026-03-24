import logo from "../../assets/logo.svg"
import fb from "../../assets/facebookIcon.svg"
import ig from "../../assets/instagramIcon.svg"
import tt from "../../assets/tiktokIcon.svg"
import x from "../../assets/xIcon.svg"
import Button from "../../components/ui/button"
import rightArrowWhite from "../../assets/rightArrowWhite.svg"
import fromRightArrowBlack from "../../assets/formRightArrowBlack.svg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Footer = () => {

    const date = new Date


    // form handling

    const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);
    const email = formData.get("email");

    try {
        const response = await fetch("http://localhost:3000/api/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
        });

        if (!response.ok) {
        throw new Error("Server error");

        }

        const result = await response.json();
        console.log("massege:", result);
    } catch (err) {
        console.error("Submission error:", err);
    }
    finally {
        e.target.reset()
    }
    };


    // animations

    useGSAP(() => {
        gsap.from('#content > *',
            {
                opacity: 0,
                y: 200,
                stagger: 0.3,
                filter: "blur(2px)",
                duration: 0.5,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: "#top",
                    start: "top bottom",
                    once: true
                } 
                
            }
        )
        gsap.from('#top > *',
            {
                opacity: 0,
                y: 200,
                stagger: 0.2,
                filter: "blur(2px)",
                duration: 0.5,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: "#top",
                    start: "top bottom",
                    once: true
                } 
                
            }
        )
    })

  return (
    <div className="  felx overflow-hidden">
        <section id="content" className="flex flex-col gap-12 px-10 pt-10 pb-[1.625rem] max-w-[85rem] justify-self-center overflow-hidden">
            {/* top */}
            <div id="top" className="flex flex-col gap-24 px-10 py-9 overflow-hidden">
                {/* row 1 */}
                <div className="flex gap-4">
                    <div className="w-full">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-6 w-[13.3125rem]">
                            <span className="text-body-base gray-700 opacity-60 w-fit">Menu</span>
                            <div className="flex flex-col gap-1">
                                <span className="text-body-large gray-700 hover:underline w-fit cursor-pointer">Home</span>
                                <span className="text-body-large gray-700 hover:underline w-fit cursor-pointer">Contact</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 w-[13.3125rem]">
                            <span className="text-body-base gray-700 opacity-60 w-fit">Information</span>
                            <div className="flex flex-col gap-1">
                                <span className="text-body-large gray-700 hover:underline w-fit cursor-pointer">About us</span>
                                <span className="text-body-large gray-700 hover:underline w-fit cursor-pointer">Programs</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-end w-full">
                        <Button
                        
                            text={"Enroll Now"}
                            img={rightArrowWhite}
                            className={"bg-black text-white px-8 py-2 cursor-pointer"}
                        
                        />
                        <div className="flex flex-col items-end">
                            <span className="gray-700 text-body-large">+1234567890</span>
                            <span className="gray-700 text-body-large">info@squadcamptech.com</span>
                        </div>
                    </div>
                </div>
                {/* row 2 */}
                <div className="flex gap-4">
                    <div className="flex gap-4 w-[51.375rem]">
                        <img src={fb} className="cursor-pointer" alt="" />
                        <img src={ig} className="cursor-pointer" alt="" />
                        <img src={tt} className="cursor-pointer" alt="" />
                        <img src={x}  className="cursor-pointer"alt="" />
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="text-end">
                            <p className="w-[9.8125rem] text-body-base gray-700">30 B, Asmaa Fahmy St. Nasr City, Cairo</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* middle */}
            <div id="middle" className="flex gap-[12.875rem] items-center overflow-hidden">
                <div className="min-w-[37rem] max-w-[47.5rem]">
                    <h1 className="text-h1 footer-text">If you didn’t find the services you are interested in or have questions?</h1>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-full ">
                    <label htmlFor="email" className="text-body-base">Just send us your contact email and we will contact you.</label>
                    <div className="flex justify-between items-center py-4 pr-6 pl-4 rounded-[12px] border border-gray ">
                        <input 
                            id="email" 
                            type="email"
                            placeholder="Your email"
                            className="placeholder:text-body-base placeholder:opacity-50 border-none outline-none w-full h-full"
                            name="email"
                        />
                        <button type="submit">
                            <img src={fromRightArrowBlack} alt="" />
                        </button>
                    </div>

                </form>
            </div>
            {/* bottom */}
            <div id="bottom" className="flex gap-[70rem] overflow-hidden">
                <p className="text-[0.625rem] w-2xl">© {date.getFullYear()} — All rights reserved.</p>
                <p className="text-[0.625rem] w-fit">Privacy</p>
            </div>
        </section>
    </div>

  )
}
export default Footer