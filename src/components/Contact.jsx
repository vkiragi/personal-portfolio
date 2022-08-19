import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#173e43] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/4beeaf46-a6e3-4598-a531-fe2c36a606ef"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-emerald-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Send me a message below!</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-emerald-500 hover:border-emerald-500 hover:duration-300 px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
