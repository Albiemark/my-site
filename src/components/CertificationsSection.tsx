import React from 'react';

interface Certification {
  name: string;
  year?: number;
}

const certificationsData: Certification[] = [
  { name: "AWS Certified Solutions Architect", year: 2023 },
  { name: "Certified Information Systems Security Professional (CISSP)" },
  { name: "Project Management Professional (PMP)" },
];

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#f7f6f3] text-center border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-8">Certifications & Education</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <ul className="list-none p-0">
          {certificationsData.map((cert, index) => (
            <li key={index} className="text-lg text-gray-800 mb-2">
              <span className="font-medium">{cert.name}</span>
              {cert.year && <span className="text-gray-600 ml-2">({cert.year})</span>}
            </li>
          ))}
        </ul>
        {/* Add education background and ongoing learning here if available in consolidated resume */}
        <p className="text-gray-700 mt-4">
          Further education and ongoing learning details can be added here.
        </p>
      </div>
    </section>
  );
};

export default CertificationsSection;