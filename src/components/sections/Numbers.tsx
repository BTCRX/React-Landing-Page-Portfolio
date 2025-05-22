import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="title-animation relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div className="paragraph-animation mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-2">
              More Than 2 Years
            </h2>
            <p className="mt-3 text-heading-3">Professional Experience</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-2">
              10+ Projects
            </h2>
            <p className="mt-3 text-heading-3">Web, Mobile & Desktop Applications Delivered</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-2">
              2+ Members
            </h2>
            <p className="mt-3 text-heading-3">Team Members Collaborated</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-2">
              100% Delivery
            </h2>
            <p className="mt-3 text-heading-3">Commitment to Quality and Timely Delivery</p>
          </div>

        </div>
      </Container>
    </section>
  );
};