import { useState } from 'react';
import { ChevronDown, ChevronUp, Twitter, Github, Linkedin } from 'lucide-react';

const Index = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({...prev, [section]: !prev[section]}));
  };

  return (
    <div className="min-h-screen bg-[#F2D2BD]">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-[#8B4513] text-white">
        <h1 className="text-5xl font-bold mb-4">Invest in the Future of AI</h1>
        <p className="text-xl mb-8">Building AGI in Europe: The Next Big Thing or Just Another Tech Dream?</p>
        <div className="flex justify-center space-x-4">
          <a href="#about" className="bg-[#D2691E] hover:bg-[#A0522D] text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
          <a href="#invest" className="bg-[#CD853F] hover:bg-[#DEB887] text-white font-bold py-2 px-4 rounded">
            Invest Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#DEB887]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#8B4513]">About the Founder</h2>
          <p className="text-lg mb-4">
            Our founder is a visionary in the field of Artificial General Intelligence (AGI). With a background at CERN and Sana Labs, and experience leading top YC companies, they're at the forefront of AI innovation in Europe.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] hover:text-[#A0522D]">
              <Twitter size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] hover:text-[#A0522D]">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] hover:text-[#A0522D]">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Pros and Cons Section */}
      <section id="pros-cons" className="py-16 px-4 bg-[#F4A460]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#8B4513]">Pros and Cons of Investing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFDAB9] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#8B4513]">Pros</h3>
              <ul className="list-disc list-inside">
                <li>Cutting-edge AGI technology</li>
                <li>Experienced founder with impressive background</li>
                <li>Growing open-source community</li>
                <li>Potential for revolutionary AI breakthroughs</li>
                <li>European-based, tapping into a growing tech ecosystem</li>
              </ul>
            </div>
            <div className="bg-[#FFDAB9] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#8B4513]">Cons</h3>
              <ul className="list-disc list-inside">
                <li>High-risk, high-reward investment</li>
                <li>AGI development timeline uncertainties</li>
                <li>Potential regulatory challenges in AI</li>
                <li>Intense competition from tech giants</li>
                <li>Ethical considerations in AGI development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-[#D2691E] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Notable Projects</h2>
          <div className="space-y-6">
            {[
              { 
                name: "GPT-Engineer", 
                description: "An AI-powered tool that generates entire codebases from a single prompt, revolutionizing the software development process.",
                details: "GPT-Engineer has gained significant traction with over 38,500 GitHub stars and 2,500+ confirmed working codebases generated. It's continuously improving and now learns from each new prompt it attempts."
              },
              { 
                name: "GPT-Engineer App", 
                description: "A user-friendly application that allows anyone to build and deploy web apps using plain English instructions.",
                details: "The app connects to frontend codebases, integrates with backend APIs, and provides instant previews. It's designed to reduce barriers to building software and has received overwhelmingly positive reception."
              },
              { 
                name: "AI + UX Experiments", 
                description: "Ongoing research and development in combining artificial intelligence with user experience design.",
                details: "These experiments aim to push the boundaries of how AI can enhance and personalize user interactions, potentially leading to more intuitive and adaptive interfaces."
              }
            ].map((project, index) => (
              <div key={index} className="bg-[#8B4513] p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-2">{project.description}</p>
                <button 
                  onClick={() => toggleSection(`project-${index}`)} 
                  className="flex items-center text-[#F4A460] hover:text-[#FFDAB9]"
                >
                  {expandedSections[`project-${index}`] ? 'Less Details' : 'More Details'}
                  {expandedSections[`project-${index}`] ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                </button>
                {expandedSections[`project-${index}`] && (
                  <p className="mt-2 text-sm">{project.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goofy Section */}
      <section className="py-16 px-4 bg-[#CD853F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why So Serious?</h2>
          <p className="text-xl mb-6">We're building AGI, but we're not robots (yet)! Here's a joke to prove it:</p>
          <p className="text-2xl font-bold mb-8">Why don't scientists trust atoms? Because they make up everything!</p>
          <img src="/placeholder.svg" alt="Funny robot cartoon" className="mx-auto object-cover w-64 h-64 rounded-full" />
        </div>
      </section>

      {/* Call to Action */}
      <section id="invest" className="py-20 px-4 text-center bg-[#8B4513] text-white">
        <h2 className="text-4xl font-bold mb-8">Ready to Invest in the Future?</h2>
        <p className="text-xl mb-8">Join us in shaping the future of AI and potentially reaping the rewards of groundbreaking technology.</p>
        <a href="#" className="bg-[#F4A460] hover:bg-[#FFDAB9] text-[#8B4513] font-bold py-3 px-6 rounded-lg text-lg">
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#A0522D] text-white text-center">
        <p>&copy; 2024 AGI Innovations Europe. All rights reserved.</p>
        <p className="mt-2">Disclaimer: Investing in startups carries high risks. Please consult with a financial advisor before making any investment decisions.</p>
      </footer>
    </div>
  );
};

export default Index;
