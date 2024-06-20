"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../components/ui/background-beams";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-i3m-dark text-white">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white font-rem">
          Contact <span className="text-i3m-pink font-rem font-extrabold">Us</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          We'd love to hear from you! Whether you have questions, feedback, or just want to chat about I3M, feel free to reach out.
        </p>
      </div>
      <div className="relative z-10 max-w-2xl mx-auto mt-10">
        {submitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-i3m-purple font-rem">Thank you for your message!</h3>
            <p className="mt-4 text-lg text-gray-300">We will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full bg-i3m-dark border border-gray-700 rounded-md shadow-sm py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-i3m-pink focus:border-i3m-pink sm:text-sm"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full bg-i3m-dark border border-gray-700 rounded-md shadow-sm py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-i3m-pink focus:border-i3m-pink sm:text-sm"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full bg-i3m-dark border border-gray-700 rounded-md shadow-sm py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-i3m-pink focus:border-i3m-pink sm:text-sm"
                placeholder="Your message"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
