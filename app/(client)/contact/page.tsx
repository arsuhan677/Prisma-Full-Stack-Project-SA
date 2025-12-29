'use client'

import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl grid lg:grid-cols-3 gap-10">
        
        {/* ===== Contact Info ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for your interest in getting in touch. I’m always open to
            discussing new ideas, freelance projects, or full-time opportunities.
            Feel free to contact me using the details below or by filling out the
            contact form.
          </p>

          <div className="space-y-4 text-gray-700 text-sm">
            <p>
              📍 <span className="font-medium">Location:</span> Habiganj, Bangladesh
            </p>
            <p>
              📧 <span className="font-medium">Email:</span> example@email.com
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span> +880 1XXXXXXXXX
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              What You Can Contact Me For
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>Website & Web App Development</li>
              <li>Frontend (React / Next.js / Vue.js)</li>
              <li>UI Design with Tailwind CSS</li>
              <li>Bug fixing & performance optimization</li>
              <li>Long-term project collaboration</li>
            </ul>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Send Me a Message
          </h2>
          <p className="text-gray-600 mb-8">
            Please fill out the form below with your details and message.
            I will respond as quickly as possible.
          </p>

          <form className="grid md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Message subject"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone (Optional)
              </label>
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                // rows="6"
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
