import { Paragraphs } from "../shared/Paragraphs";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div
      className="flex-col p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden flex justify-center items-center">
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative flex justify-center items-center flex-col">
        {" "}
        {icon}{" "}
      </div>
      <div className="mt-6 space-y-4 relative flex justify-center items-center flex-col">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2 flex">
          {" "}
          {title}
        </h2>
        <Paragraphs className="text-center"> {description}</Paragraphs>
      </div>
    </div>
  );
};