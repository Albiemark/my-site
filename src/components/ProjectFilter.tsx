import React, { useState } from 'react';

import { Project } from '../types';

interface ProjectFilterProps {
  projects: Project[];
  onFilter: (filteredProjects: Project[]) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ projects, onFilter }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const handleFilterClick = (tag: string | null) => {
    setSelectedTag(tag);
    if (tag === null) {
      onFilter(projects);
    } else {
      const filtered = projects.filter(project => project.tags.includes(tag));
      onFilter(filtered);
    }
  };

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => handleFilterClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
          selectedTag === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {allTags.map(tag => (
        <button
          key={tag}
          onClick={() => handleFilterClick(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;