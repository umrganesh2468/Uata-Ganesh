
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-zinc-500 text-lg font-medium">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
