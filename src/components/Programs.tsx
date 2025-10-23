import React from 'react';
// Removed NavLink import, as it was causing errors without a <Router>
// import { NavLink } from 'react-router-dom'; 

// The main Programs Page component (Simplified for MVP)
export default function Programs() {
  const programsList = [
    {
      title: "Community Outreach",
      description: "Engaging with local communities to provide support, resources, and educational workshops.",
      link: "/programs/community-outreach",
    },
    {
      title: "Youth Education",
      description: "Empowering the next generation with after-school programs, mentorship, and literacy support.",
      link: "/programs/youth-education",
    },
    {
      title: "Health & Wellness",
      description: "Providing access to essential health services, wellness clinics, and mental health resources.",
      link: "/programs/health-wellness",
    },
    {
      title: "Food Security",
      description: "Ensuring families have access to nutritious and sufficient food sources.",
      link: "/programs/food-security",
    },
  ];

  return (
    // Page container with dark background
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our <span className="text-orange-400">Programs</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We are dedicated to making a tangible impact in our community.
          </p>
        </div>

        {/* Simplified List of Programs */}
        <div className="space-y-8">
          {programsList.map((program) => (
            <div 
              key={program.title} 
              className="bg-gray-900 rounded-lg shadow-lg p-6 sm:flex sm:items-center sm:justify-between"
            >
              <div className="mb-4 sm:mb-0">
                <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {program.description}
                </p>
              </div>
              <div className="sm:ml-6 flex-shrink-0">
                {/* FIX: Changed <NavLink> to a standard <a> tag.
                  The error 'useLocation() may be used only in the context of a <Router> component'
                  is because <NavLink> was being used, but your app's entry point 
                  isn't wrapped in a <BrowserRouter>. This <a> tag will stop the crash.
                */}
                <a
                  href={program.link}
                  className="inline-block text-center bg-orange-500 text-black font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-300 hover:bg-orange-400"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}


