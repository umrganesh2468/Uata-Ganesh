
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-blue-500/30 transition-all group">
      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.name}</h3>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-300 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
