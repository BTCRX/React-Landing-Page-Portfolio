import React, { type FormEvent } from "react";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
    // You can add API handling logic here
  };

  return (
    <div className="px-6 py-12 max-w-xl mx-auto my-40 bg-box-bg">
      <h1 className="flex flex-col font-bold mb-6 title-animation text-heading-1">Contact Us</h1>
      <p className="text-lg paragraph-animation mb-8 text-heading-2">
        Got a question or proposal? We'd love to hear from you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-heading-3">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="mt-1 block h-10 w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 block h-10 w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            rows={4}
            className="mt-1 block h-20 w-full rounded-xl border-white shadow-sm focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-6 rounded-xl hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
