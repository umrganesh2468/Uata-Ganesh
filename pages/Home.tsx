
import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS, SERVICES } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-height-screen pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Hero Visual */}
          <div className="w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden mb-16 relative">
            <img 
              src="https://picsum.photos/seed/hero-ganesh/1600/900" 
              alt="Ganesh Portfolio Hero" 
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter">
                I’m Ganesh, a <span className="text-blue-500">UI/UX Designer</span> crafting intuitive digital experiences.
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-12 max-w-2xl leading-relaxed">
                I specialise in user-centred web and mobile design, branding systems, and product-driven visuals for modern digital teams.
            </p>

            <div className="flex flex-wrap gap-6">
                <a href="#work" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1">
                    View Portfolio
                </a>
                <a href="#contact" className="px-8 py-4 bg-zinc-900 border border-white/10 text-white font-bold rounded-full hover:bg-zinc-800 transition-all transform hover:-translate-y-1">
                    Contact Me
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section id="work" className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Selected Work" 
            subtitle="Product design, branding, and digital experiences"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / BEHIND THE WORK SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
               <div className="rounded-[2.5rem] overflow-hidden border border-white/5 aspect-square lg:aspect-[4/5]">
                  <img src="https://picsum.photos/seed/portrait/800/1000" alt="Behind the lens" className="w-full h-full object-cover grayscale opacity-80" />
               </div>
            </div>
            <div className="w-full lg:w-1/2">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Behind the work</h2>
                <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed font-normal">
                    <p>
                        With over <span className="text-white font-bold">3+ years of experience</span>, I bridge the gap between creative vision and technical feasibility. My work is rooted in usability, clarity, and scalability.
                    </p>
                    <p>
                        I thrive in collaborative environments, working closely with product owners, marketers, and developers to bring cohesive digital products to life.
                    </p>
                    <p>
                        I'm particularly passionate about <span className="text-white font-bold">AI-assisted workflows</span> and using automation to streamline the design-to-development pipeline.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                    <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-3xl">
                        <div className="text-3xl font-extrabold text-blue-500 mb-2">3+</div>
                        <div className="text-zinc-500 text-sm font-bold uppercase">Years Experience</div>
                    </div>
                    <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-3xl">
                        <div className="text-xl font-bold text-white mb-2 leading-tight">UI/UX • Brand • Marketing</div>
                        <div className="text-zinc-500 text-sm font-bold uppercase">Core Focus</div>
                    </div>
                    <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-3xl sm:col-span-2">
                        <div className="text-lg font-bold text-white mb-2 leading-tight">Figma, Adobe Suite, AI (Midjourney, ChatGPT), n8n</div>
                        <div className="text-zinc-500 text-sm font-bold uppercase">Toolkit</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Services" 
            subtitle="Tailored creative solutions for modern brands"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter">
                Let’s build thoughtful digital products <span className="text-blue-500">together.</span>
            </h2>
            <div className="flex flex-col items-center gap-6 mt-12">
                <a href="mailto:ganesh@example.com" className="text-2xl md:text-4xl font-bold hover:text-blue-500 transition-colors">
                    hello@ganesh.design
                </a>
                <div className="flex gap-8 mt-4">
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors font-medium">LinkedIn</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors font-medium">Behance</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors font-medium">Resume</a>
                </div>
                <div className="mt-12 pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
                    <p>© 2024 Ganesh. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Located in Hyderabad, India</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
