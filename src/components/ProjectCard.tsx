import React from 'react';

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  tags: string[];
  imageUrl?: string;
  outcomeMetrics?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, tags, imageUrl, outcomeMetrics }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex-1 min-w-[280px] max-w-sm">
      {imageUrl && (
        <div className="mb-4">
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            width={400}
            height={200}
            layout="responsive"
            className="rounded-md"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">
        <a href={githubLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      {outcomeMetrics && outcomeMetrics.length > 0 && (
        <div className="text-sm text-gray-600">
          <h4 className="font-semibold mb-1">Key Outcomes:</h4>
          <ul className="list-disc list-inside">
            {outcomeMetrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;