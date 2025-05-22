import { Container } from "../shared/Container";
import { Paragraphs } from "../shared/Paragraphs";
import logo from '../../assets/icon.png';
import logo2 from '../../assets/icon_2.png';
import logo3 from '../../assets/icon_3.png';


export const Hero = () => {
    return (
        <section className="relative pt-32 lg:pt-36">
            
            <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                
                </div>
                {/* Floating Icon di atas konten
                <img
                    src={logo}
                    alt="Floating Icon"
                    className="absolute flex flex-col items-center w-24 h-24 opacity-100 z-100 pointer-events-none icon-float left-1/5 top-40"
                /> */}
                <div className="title-animation relative flex flex-col items-center text-center lg:text-lef lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
                        Bringing Ideas to Life Through
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#122C4C] to-[#2B4970] ml-2">Code and Creativity</span>
                    </h1>
                    
                    <Paragraphs className="mt-8 paragraph-animation">
                        I'm a software engineer with experience in web, mobile android, and desktop development. I work with React, 
                        TailwindCSS, Laravel, Node.js, Flutter, and SQL to build practical, user-focused applications. 
                        I try to write code that's as clean and maintainable as I can, and I'm always learning how to improve. 
                        Whether it's creating a responsive UI, setting up backend services, or building cross-platform apps, 
                        I enjoy solving problems and making things work reliably.
                    </Paragraphs>

                </div>
            </Container>
            <Container className="paragraph-animation flex flex-col lg:flex-row gap-20 lg:gap-12">
                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <div className="flex gap-20 w-full h-20 bg-[#2B4970]/20 rounded-md flex items-center justify-center">
                        {/* Logo Aplikasi */}
                        <img src={logo} alt="Portfolio Website" className="w-12 h-12 object-cover"/>
                        <img src={logo2} alt="Portfolio Website" className="w-12 h-12 object-cover"/>
                        <img src={logo3} alt="Portfolio Website" className="w-20 h-12 object-cover"/>
                        
                    </div>
                </div>
            </Container>
        </section>
    );
};