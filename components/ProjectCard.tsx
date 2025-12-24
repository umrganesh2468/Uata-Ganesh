
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

// Fixed: Added ProjectCardProps to the React.FC generic type to properly define expected props.
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/case-study/${project.id}`}
      className="group relative block w-full overflow-hidden rounded-3xl bg-zinc-900 aspect-[4/3]"
    >
      <img 
        src={project.thumbnail} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <div className="flex justify-between items-end">
                <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 border border-blue-600/30">
                        {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {/* Fixed: Removed duplicate x2 and corrected polyline syntax */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
            </div>
        </div>
      </div>
      <div className="absolute inset-0 border border-white/5 rounded-3xl group-hover:border-blue-500/50 transition-colors pointer-events-none"></div>
    </Link>
  );
};

export default ProjectCard;
