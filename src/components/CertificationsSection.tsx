import React from 'react';

interface Certification {
  name: string;
  year?: number;
}

const certificationsData: Certification[] = [
  { name: "AWS Certified Solutions Architect", year: 2023 },
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
        <div>
          <h3 className="text-xl font-semibold mt-8 mb-4">Education</h3>
          <div>
            <p className="text-lg text-gray-800 mb-1">
              <span className="font-medium">2023 – 2025</span> Red River College Polytech (Exchange)
            </p>
            <p className="text-md text-gray-600">Advanced Dipoma BIT - Information Security</p>
            <p className="text-lg text-gray-800 mt-4 mb-1">
              <span className="font-medium">1988 - 1994</span> University of the Philippines, Diliman
            </p>
            <p className="text-md text-gray-600">BSPED (Bachelor Special Education)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;