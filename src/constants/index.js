
import navigationIcon from "../assets/navigationIcon.svg";
import businessChipIcon from "../assets/businessChipIcon.svg";
import highlightMouseCursorIcon from "../assets/highlightMouseCursorIcon.svg";
import diversityIcon from "../assets/diversityIcon.svg";

import softwareEngineerImg from "../assets/softwareEngineeringImg.png"
import aiSoftwareImg from "../assets/AiSoftwareImg.png"
import dataScienceImg from "../assets/dataScienceImg.png"
import uxDesignImg from "../assets/uxDesignImg.png"


import profilePic1 from "../assets/profilePic1.png"
import profilePic2 from "../assets/profilePic2.png"
import profilePic3 from "../assets/profilePic3.png"














export const navLinks = [
    "Home",
    "About",
    "Programs",
    "Contact"
]

export const benefitsCardData = [
    { 
        title: "Mentor Guidance",
        subTilte: "Get personalized feedback and support from expert mentors every step of the way." ,
        btnText: "Meet Your Mentors",
        textColor: "text-black",
        bgColor: "bg-white",
        icon: navigationIcon
    },
    { 
        title: "Career-Ready-Skills",
        subTilte: "Build a portfolio that proves your skills to future employers and clients." ,
        btnText: "See Skills You’ll Gain",
        textColor: "text-white",
        bgColor: "bg-gradient",
        icon: businessChipIcon
    },
    { 
        title: "Learn By Doing",
        subTilte: "GMaster tech skills through hands-on projects designed for real-world impact." ,
        btnText: "Start Building Today",
        textColor: "text-white",
        bgColor: "bg-secondary-500",
        icon: highlightMouseCursorIcon
    },
    { 
        title: "Supportive Community",
        subTilte: "Learn alongside motivated peers in a collaborative, camp-style environment." ,
        btnText: "Join The Squad",
        textColor: "text-white",
        bgColor: "bg-black",
        icon: diversityIcon
    },
]



export const aboutUsCardData = [
    { 
        title: "Software Engineering Camp",
        subTitle: "Build tools and products used everyday" ,
        period: "3 monthes",
        img: softwareEngineerImg
    },
    { 
        title: "AI Software Camp",
        subTitle: "Build web apps with integrated AI" ,
        period: "1 year",
        img: aiSoftwareImg
    },
    { 
        title: "Data Science Camp",
        subTitle: "Analyze and visualize data effectively" ,
        period: "6 monthes",
        img: dataScienceImg
    },
    { 
        title: "UX Design Camp",
        subTitle: "Craft intuitive user experiences" ,
        period: "1 year",
        img: uxDesignImg
    },
]

export const testemonialsCardData = [
    { 
        name: "Alex Kim",
        review: "Squad X Camp transformed my skills, making me a collaborative tech team member ready for challenges." ,
        img: profilePic1,
        main: false

    },
    { 
        name: "Sara Lee",
        review: "The hands-on team experience prepared me for real-world tech roles beyond just coding skills." ,
        img: profilePic2,
        main:true
    },
    { 
        name: "Alex Smith",
        review: "Squad X Camp transformed my skills, preparing me for real-world tech challenges with an amazing team experience!" ,
        img: profilePic3,
        main: false
    }

]

