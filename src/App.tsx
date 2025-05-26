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

//page and routing

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";
import { Footer } from "./components/elements/Footer";


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
    <Router>
      <div className="relative overflow-hidden">
        <NeuralBackground />
        <Routes>
          {/* Landing Page Route */}
          <Route
            path="/"
            element={
              <Layout title="D-Project Portfolio">
                <Hero />
                <Services />
                <AboutUs />
                {/* <Pricing /> */}
                <CTA />
                <Footer/>
              </Layout>
            }
          />

          {/* Halaman Tambahan */}
          <Route
            path="/projects"
            element={
              <Layout title="Projects">
                <ProjectsPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout title="Contact">
                <ContactPage />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App
