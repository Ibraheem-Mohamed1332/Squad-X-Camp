import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SectionHeading from "../../components/layout/SectionHeading"
import { testemonialsCardData } from "../../constants"
import TestemoinalsCard from "./TestemoinalsCard"

const TestemonialsSection = () => {

    // animations

    useGSAP(() => {

        // heading animation

          gsap.from("#headingContainer3 > *", 
            {
                opacity: 0,
                y: 200,
                filter: "blur(2px)",
                stagger: 0.1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: "#subHeading3",
                    start: "top bottom",
                    once: true,
                },
                ease: "power1.out",
            });


            gsap.from(".testeCard",
                {
                    opacity: 0,
                    y: 300,
                    delay: 0.2,
                    stagger: {
                        amount: 0.2,
                        from: "center"
                    },
                    filter: "blur(2px)",
                    duration: 0.5,
                    ease: "circ.out",
                    scrollTrigger: {
                        trigger: "#testeCard-0",
                        start: "top bottom",
                        once: true,
                        
                        
                    },
                    
                }
            )
    },[])


  return (
    <section className="flex flex-col gap-20 py-14 overflow-hidden"> 
        <SectionHeading
            heading={"What people say"}
            subHeading={"See how we’ve helped others."}
            target={"headingContainer3"}
            trigger={"subHeading3"}
        />
        <div className="flex gap-[2.125rem] justify-center">
            { 
                testemonialsCardData.map(({name,review,img,main},i) => (
                    <div className="w-fit h-fit rounded-3xl testeCard" key={i}>
                        <TestemoinalsCard
                            name={name}
                            review={review}
                            img={img}
                            main={main}
                            i={i}
                        />
                    </div>

                ))
            }
        </div>
    </section>
  )
}
export default TestemonialsSection