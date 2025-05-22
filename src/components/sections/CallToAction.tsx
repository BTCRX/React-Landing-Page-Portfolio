import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraphs } from "../shared/Paragraphs";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      <Container>
        <div className="title-animation relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Quick Start your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-[#2B4970]">
                Software
              </span>{" "}
              Development Journey
            </h1>
            <Paragraphs className="paragraph-animation pt-10">
              Build high-quality mobile, web, or desktop applications tailored for your business needs.
              Let's bring your ideas to life — fast, scalable, and reliable.
            </Paragraphs>
            <div className="paragraph-animation  mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
