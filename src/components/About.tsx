import React from 'react';
// import { BsLinkedin, BsInstagram } from 'react-icons/bs';

const About = () => {
  return (
    // Main container set to dark theme
    <div className="bg-black text-white min-h-screen">
      {/*
        SECTION 1: PAGE HEADER
        - Matched to the dark theme with orange accent
      */}
      <section>
        <div className="bg-gray-900 justify-center py-16">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold text-center">
            About <span className="text-orange-400">The Sun</span>
          </h1>
        </div>
      </section>
      
      {/* Hero Image Section
        - Using a placeholder image 
      */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-12">
          <img 
            src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg" 
            alt="Community" 
            className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/*
        SECTION 2: ABOUT / MISSION
        - Set text colors to white/gray-300
        - Responsive 3-col layout
      */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">ABOUT US</h2>
            <p className="text-gray-300">
              The Sun is a community-focused organization dedicated to shedding light on vital issues and empowering individuals. We believe that just as the sun provides warmth and energy, our programs can nurture growth and illuminate paths to a brighter future.
            </p>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">OUR VISION</h2>
            <p className="text-gray-300">
              We envision a world where every individual has access to the resources, education, and support they need to reach their full potential. A future where communities are interconnected, resilient, and thriving in positivity and shared success.
            </p>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">OUR MISSION</h2>
            <p className="text-gray-300">
              Our mission is to provide accessible educational workshops, mentorship, and community support programs. We strive to be a reliable source of guidance and assistance, fostering an environment of collaboration, learning, and mutual respect.
            </p>
          </div>
        </div>
      </section>

      {/*
        SECTION 3: OUR STORY
        - Set text colors to white/gray-300
        - Using a placeholder image
      */}
      <section className="bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our <span className="text-orange-400">Story</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-4 text-gray-300">
            <p>
              Founded in 2023, "The Sun" began as a small passion project by a group of friends who saw a need for greater support in their local community. We started by hosting small, informal workshops in a borrowed room, driven by a simple desire to share knowledge and uplift those around us.
            </p>
            <p>
              As word spread, so did our impact. What started as a flicker of an idea has grown into a steady ray of hope. Today, we are a registered non-profit organization serving hundreds, but our core belief remains the same: everyone deserves a place to grow and shine.
            </p>
          </div>
          <img
            src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
            alt="Our story"
            className="w--auto max-w-lg mx-auto mt-12 rounded-lg shadow-md"
          />
        </div>
      </section>

      {/*
        SECTION 4: SERVICES
        - Set card backgrounds to bg-gray-900
        - Set text colors to white/gray-300
      */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Our <span className="text-orange-400">Programs</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-300">
              We focus on practical, hands-on programs designed to make a real difference in people's lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <img
                src="/milos-lopusina-wn4ZVTeS9Cg-unsplash.jpg"
                alt="Service 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center text-white">
                  Educational Workshops
                </h3>
                <p className="text-gray-300 text-sm">
                  From digital literacy to financial planning, our workshops provide essential skills for the modern world.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <img
                src="/shahriar-sumodro-hv8zsjKDZTI-unsplash.jpg"
                alt="Service 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center text-white">
                  Mentorship Program
                </h3>
                <p className="text-gray-300 text-sm">
                  We connect experienced professionals with aspiring individuals to offer guidance, support, and career advice.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <img
                src="/hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
                alt="Service 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center text-white">
                  Community Support
                </h3>
                <p className="text-gray-300 text-sm">
                  Our outreach initiatives provide resources and support to local families and individuals facing challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        SECTION 5: MEET THE TEAM
        - Set text colors to white/gray-300
        - Set icon hover colors to orange-400
      */}
      <section className="bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Meet the <span className="text-orange-400">Team</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-300">
              We are a small but dedicated team of volunteers and professionals passionate about making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="/adetola-afolabi-x0A7wgQmmdk-unsplash.jpg"
                alt="Felix Sisk"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-white">Felix Sisk</h3>
              <p className="text-gray-300 text-sm mt-2">
                Founder & Executive Director
              </p>
              <div className="flex justify-center gap-x-4 mt-4 text-xl text-gray-400">
                <a href="#" className="hover:text-orange-400">
                  {/* <BsLinkedin /> */}
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="hover:text-orange-400">
                  {/* <BsInstagram /> */}
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
                alt="Team Member"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-white">Jane Doe</h3>
              <p className="text-gray-300 text-sm mt-2">
                Program Coordinator
              </p>
              <div className="flex justify-center gap-x-4 mt-4 text-xl text-gray-400">
                <a href="#" className="hover:text-orange-400">
                  {/* <BsLinkedin /> */}
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="hover:text-orange-400">
                  {/* <BsInstagram /> */}
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="/zahir-namane-hwc7eIQiTCE-unsplash.jpg"
                alt="Team Member"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-white">John Smith</h3>
              <p className="text-gray-300 text-sm mt-2">
                Community Outreach Lead
              </p>
              <div className="flex justify-center gap-x-4 mt-4 text-xl text-gray-400">
                <a href="#" className="hover:text-orange-400">
                  {/* <BsLinkedin /> */}
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="hover:text-orange-400">
                  {/* <BsInstagram /> */}
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

