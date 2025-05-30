import { pricingPlans } from "../../utils/PricingPlans";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraphs } from "../shared/Paragraphs";
import { Title } from "../shared/Title";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      {" "}
      <Container className="title-animation text-center">
        <Title>Software Pricing </Title>
        <Paragraphs className="paragraph-animation mt-4">
          Choose the plan that fits your business.
        </Paragraphs>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, key) => (
            <div key={key} className="paragraph-animation relative group h-full">
              <div className="animated-gradient-border transition-transform duration-300 group-hover:scale-105 h-full">
                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                  {plan.bestValue}
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {" "}
                    {plan.title}
                  </h3>
                  <p className="mt-4 text-4xl font-bold text-heading-1">
                    {" "}
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, keyFeatures) => (
                      <li key={keyFeatures} className="flex items-center gap-2">
                        <span className="text-primary">✅ </span>
                        <span>{feature} </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};