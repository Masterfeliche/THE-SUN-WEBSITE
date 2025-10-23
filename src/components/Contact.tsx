import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react'; // Removed icons as requested

export default function Contact() {
  return (
    // Page container with dark background
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Get In <span className="text-orange-400">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions, comments, or partnership inquiries.
          </p>
        </div>

        {/* Grid layout for info and form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Column 1: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <p className="text-gray-300">
              Fill out the form or use our contact details below.
            </p>
            
            {/* Removed icon and adjusted spacing */}
            <div className="space-y-4">
              <a href="tel:+25575002389408" className="block text-gray-300 hover:text-white transition-colors">
                +255 750 023 894
              </a>
              
              <a href="mailto:infothesun@gmail.com" className="block text-gray-300 hover:text-white transition-colors break-all">
                infothesun@gmail.com
              </a>
              
              <p className="text-gray-300">
                123 Example Street, <br />
                City, State 12345
              </p>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
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

