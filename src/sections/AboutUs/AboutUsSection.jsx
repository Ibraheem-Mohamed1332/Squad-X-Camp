import { useState } from "react";
import gsap from "gsap";
import AboutUsCard from "./AboutUsCard";
import { aboutUsCardData } from "../../constants";
import { useGSAP } from "@gsap/react";
import SectionHeading from "../../components/layout/SectionHeading";

const AboutUsSection = () => {
    // hooks

    const [isHovered, setIsHovered] = useState(false);

  // animations

    useGSAP(() => {
        // header animation

        gsap.from("#headingContainer2 > *", {
            opacity: 0,
            y: 200,
            filter: "blur(2px)",
            stagger: 0.1,
            duration: 0.5,
            scrollTrigger: {
                trigger: "#subHeading2",
                start: "top bottom",
                once: true,
            },
            ease: "power1.out",
        });

        // cards animation

        gsap.from("#cardsContainer > #crd-0, #cardsContainer > #crd-1", {
            opacity: 0,
            y: 200,
            delay: 0.2,
            stagger: 0.1,
            filter: "blur(2px)",
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "#card--0",
                start: "top bottom",
                once: true,
            },
        });
        gsap.from("#cardsContainer > #crd-2, #cardsContainer > #crd-3", {
            opacity: 0,
            y: 200,
            delay: 0.2,
            stagger: 0.1,
            filter: "blur(2px)",
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "#card--2",
                start: "top bottom",
                once: true,
            },
        });
    }, []);

    return (
        <section className="flex flex-col gap-20 justify-center bg-g-100 py-14  overflow-hidden">
            <SectionHeading
                heading={"Start Your Tech Career Here"}
                subHeading={"Explore Camps and Enroll Now"}
                target={"headingContainer2"}
                trigger={"subHeading2"}
            />
        <div
            id="cardsContainer"
            className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 w-fit gap-x-8 place-self-center gap-y-8 "
        >
            {aboutUsCardData.map(({ title, subTitle, period, img }, i) => (
                <div
                    onMouseEnter={() => setIsHovered(i)}
                    onMouseLeave={() => setIsHovered(null)}
                    key={i}
                    className="w-fit h-fit"
                    id={`crd-${i}`}
                >
                    <AboutUsCard
                        title={title}
                        subTitle={subTitle}
                        period={period}
                        img={img}
                        i={i}
                        isHovered={isHovered}
                    />
                </div>
            ))}
        </div>
        </section>
    );
};
export default AboutUsSection;
