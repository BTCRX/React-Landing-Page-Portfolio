import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraphs } from "../shared/Paragraphs";
import { Title } from "../shared/Title";
import ManImage from "../../assets/Man.png";

export const AboutUs = () => {
  return (
    <section id="about-us">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src={ManImage}
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
            <Title> About Our Freelance </Title>
            <Paragraphs>
                We are committed to helping businesses thrive through modern software solutions. 
                Our team combines deep technical expertise with a passion for innovation, delivering 
                mobile, web, and desktop applications tailored to your goals. Let's build something 
                extraordinary together.
            </Paragraphs>


          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            
              <Info title="Vision" description="To become a trusted tech partner recognized for innovation, efficiency, and transforming ideas into impactful digital products.">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </Info>
            <Info title="Mission" description="To build high-quality software solutions that empower users, optimize performance, and solve real-world problems.">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
              </Info>

          </div>
        </div>
      </Container>
    </section>
  );
};