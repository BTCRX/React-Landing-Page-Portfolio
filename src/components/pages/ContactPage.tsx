import React, { type FormEvent } from "react";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
    // You can add API handling logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xl bg-box-bg px-6 py-12">
            <h1 className="font-bold mb-6 text-heading-1">Contact Us</h1>
            <p className="text-lg mb-8 text-heading-2">
                Got a question or proposal? We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-heading-3">
                <div className="flex flex-wrap -mx-3 mb-4 gap-y-12">
                    <input type="text" className="mt-1 p-3 block w-full border rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-300" placeholder="Name" required />
                    <input type="email" className="mt-1 p-3 block w-full border rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-300" placeholder="Email" required />
                    <textarea className="mt-1 p-3 block w-full border rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-indigo-300" placeholder="Message" required/>
                    <button type="submit" className="bg-[#685FB1] text-white py-2 px-6 rounded-xl hover:bg-[#685FB1]/70 transition"> Send Message</button>
                </div>
            </form>
        </div>
    </div>
    );

};

export default ContactPage;
