
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-blue-500 font-bold hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
        >
          {/* Fixed: Removed duplicate x2 and corrected polyline syntax */}
          <svg className="transition-transform group-hover:-translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Portfolio
        </button>

        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-600/30">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 leading-relaxed font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Visual */}
        <div className="w-full rounded-[2.5rem] overflow-hidden mb-24 border border-white/5 shadow-2xl">
          <img src={project.fullImage} alt={project.title} className="w-full object-cover" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              {project.overview}
            </p>
            
            <h2 className="text-3xl font-bold mb-6 text-white">The Problem</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Role</h3>
              <p className="text-zinc-300 font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-zinc-800 rounded-lg text-xs font-medium text-zinc-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 tracking-tight">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.process.map((step, idx) => (
              <div key={idx} className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl">
                <div className="text-blue-500 font-bold mb-4">Step 0{idx + 1}</div>
                <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome Section */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-10 md:p-16 mb-24">
          <h2 className="text-3xl font-bold mb-6 text-white">Outcome & Learnings</h2>
          <p className="text-xl text-zinc-300 leading-relaxed italic">
            "{project.outcome}"
          </p>
        </div>

        {/* Footer Nav */}
        <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/" className="text-zinc-500 hover:text-white font-bold transition-colors">Back Home</Link>
            <a href="mailto:ganesh@example.com" className="text-blue-500 font-bold hover:underline">Request Full Case Study</a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
