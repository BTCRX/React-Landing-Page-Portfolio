import { Layout } from "./components/Layout"
import { AboutUs } from "./components/sections/AboutUs";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";
import { NeuralBackground } from "./components/NeuralBackground";

gsap.registerPlugin(ScrollTrigger);


function App() {
  useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".title-animation", {
            scrollTrigger: {
                trigger: ".title-animation",
                start: "top 80%", // saat 80% viewport, animasi mulai
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 3,
            });

            gsap.from(".paragraph-animation", {
            scrollTrigger: {
                trigger: ".paragraph-animation",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 3,
            delay: 0.3
            });
        });

        return () => ctx.revert(); // Bersihkan animasi saat komponen unmount
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      <NeuralBackground />
      <Layout title="D-Project Portfolio">
        <Hero />
        <Services />
        <AboutUs />
        <Pricing />
        <CTA />
      </Layout>
    </div>
  );
}

export default App
