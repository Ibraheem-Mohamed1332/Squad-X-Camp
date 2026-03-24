import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitText from "gsap-trial/SplitText"
import Navbar from "./components/layout/Navbar"
import HeroSection from "./sections/Hero/HeroSection"
import BenefitsSection from "./sections/Benefits/BenefitsSection"
import AboutUsSection from "./sections/AboutUs/AboutUsSection"
import TestemonialsSection from "./sections/Testemonials/TestemonialsSection"
import CoursesSection from "./sections/courses/CoursesSection"
import Footer from "./sections/Footer/Footer"



gsap.registerPlugin( ScrollTrigger, SplitText )

function App() {



  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <main className="sm:px-4 md:px-8 lg:px-[11.25rem] bg-g-100">
        
        <BenefitsSection />
        <AboutUsSection />
        <TestemonialsSection />

      </main>
      <CoursesSection />
      <Footer />


    </div>


  )
}

export default App
