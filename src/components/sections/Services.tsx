import { services } from "../../utils/Services-data";
import { Service } from "../cards/Services";
import { Container } from "../shared/Container";
import { Paragraphs } from "../shared/Paragraphs";
import { Title } from "../shared/Title";
import { Numbers } from "./Numbers";
// import ManImage from "../../assets/Man.png";

export const Services = () => {
  return (
    <section id="services">
      {" "}
      <Container className="space-y-10 md:space-y-12">
        <div className="title-animation text-center max-w-3xl mx-auto space-y-4">
          <Title> Our Services</Title>
          <Paragraphs >
            I build web, mobile, and desktop applications using tools like React, TailwindCSS, Laravel, Node.js, Flutter, and SQL. 
            From frontend to backend, I focus on creating clean, reliable, and user-centered solutions.
          </Paragraphs>
        </div>

        <div className="paragraph-animation grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        {/* <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
          <img
            src={ManImage}
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
          />
        </div> */}
      </Container>
      <Numbers />
    </section>
  );
};