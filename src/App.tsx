// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";

import { NeuralBackground } from "./components/NeuralBackground";
import LegalNotice from "./components/LegalNotice";
import { AppRoutes } from "./components/Routes";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title-animation", {
        scrollTrigger: {
          trigger: ".title-animation",
          start: "top 80%",
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
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 3,
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Router>
      <div className="relative overflow-hidden">
        <NeuralBackground />
        <LegalNotice />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
