import Image from "next/image";
import React from 'react';

interface ExperienceEntry {
  title: string;
  company: string;
  duration: string;
  description: string[];
  imageUrl?: string; // Optional image for the timeline entry
}

const experienceData: ExperienceEntry[] = [
  {
    title: "IT Consultant",
    company: "Duque Immigration Consulting, Winnipeg, Canada",
    duration: "March 2024 - Present",
    description: [
      "Developing a Next.js leads management full stack web application to streamline client acquisition and improve lead tracking efficiency by 30%.",
      "Enabling future growth and scalability by migrating the webspace from WordPress to a customized web application.",
      "Modernizing productivity tools using AI capabilities.",
      "Curated and fine-tuned an open-source LLM using public datasets on immigration law and procedures to enable quick lookup and provide strategic insights.",
      "Developed the back-end data architecture using ChromaDB to enable self-learning through experience and aggregation of new datasets.",
      "Developed an in-house local chat-bot for simple data housekeeping, scheduling, and task automation.",
    ],
    imageUrl: "/suit.jpg", // Using an existing image
  },
  {
    title: "Security Architect/Solution Architect",
    company: "RRC Project Space, Winnipeg, Canada",
    duration: "Jan 2024 – May 2024",
    description: [
      "Spearheaded architectural design for a Life Science Research Management Platform, implementing AI-driven anomaly detection systems that reduced security risks by 20% through real-time data monitoring, with estimated valuation of $1M.",
      "Developed ethical AI governance framework for research data handling, while ensuring compliance with Canadian PIPEDA and EU GDPR standards through granular access controls.",
      "Provided advice and coaching to a cross-functional team of 5 developers in Scrum methodologies, accelerating deployment cycles by 15% through CI/CD pipeline optimization.",
      "Built a Workflow Automation RAG agent.",
    ],
    imageUrl: "/skul.jpg", // Using an existing image
  },
  {
    title: "Solutions Architect",
    company: "Globe Telecom, Philippines",
    duration: "2015–2023",
    description: [
      "Implemented an AI chatbot (Amdocs) and leveraged machine learning to enhance CRM and service delivery for wireless and wireline products.",
      "Created interim solutions using UiPath RPA for business process automation, integrating user experience across legacy and modern billing systems.",
      "Led $5M B2B Enterprise Modernization Program, integrating AWS machine learning services for predictive maintenance, reducing network downtime by 22% annually.",
      "Architected the country's first ever prepaid LTE@home solution using Python-based analytics, capturing 350K subscribers in Q1 2022 through targeted AI/ML customer segmentation.",
      "Directed cloud migration of legacy Oracle/Salesforce systems, achieving 99.95% uptime SLA through Kubernetes orchestration and automated failover protocols.",
    ],
    imageUrl: "/globe.jpg", // Using an existing image
  },
  {
    title: "IT Project Manager",
    company: "Huawei Technologies, Philippines",
    duration: "2011–2014",
    description: [
      "Delivered SMART Telecom's VAS Transformation Project 3 weeks ahead of schedule using critical path analysis, generating $1.2M in incremental quarterly revenue.",
      "Designed fraud detection algorithms reducing prepaid credit leakage by 18% through real-time usage pattern analysis.",
    ],
    imageUrl: "/broadband.jpg", // Using an existing image
  },
  {
    title: "Tramigo T20",
    company: "Tramigo Ltd., Finland",
    duration: "2006-2011",
    description: [
      "Development of a complete application suite used for fleet management. Led a large team of IT professionals, organized Dev team structure, handled operations and logistics.",
    ],
  },
  {
    title: "Faciliworks.NET",
    company: "Cyberware Inc./Cybermetrics AZ",
    duration: "2003-2006",
    description: [
      "Development of a complete application suite used for managing facilities. Led a large team of IT professionals, organized Dev team structure, and handled day-to-day office activities.",
    ],
  },
  {
    title: "FaciliWorks 6i (Web)/FaciliWorks 6 (Desktop)/ FSW7 Denso (FaciliWorks 7i .Net version)",
    company: "Cyberware Inc./Cybermetrics AZ",
    duration: "2003-2006",
    description: [
      "Client-Server and Web based facilities management software. Led a team of 24 IT professionals.",
    ],
  },
  {
    title: "VRT Vessel Reporting Tool",
    company: "Devco Philippines",
    duration: "2001-2003",
    description: [
      "Internet Based Application for the Maritime Industry. Handled a team of 16 Consultants/Analysts/Programmers. Developed a complete reporting suite including desktop application, X500 based membership system, Web based report viewing tool, and a Data Warehouse application handling vessel reports.",
    ],
  },
  {
    title: "E-PROC",
    company: "Devco Philippines",
    duration: "2001-2003",
    description: [
      "E-procurement for the Shipping Industry. Handled a team of 6 Consultants/Analysts/Programmers. Headed a team tasked to develop a centralized e-procurement system catering multiple types of ERP applications (E-Commerce B2B/B2C) using WebMethods as a central middleware and transaction server. Helped develop the applications security architecture using Microsoft PKI technology. Migrated old procurements system using ARENA into new Web based e-procurements system, catering to vessel ordering via satellite networks.",
    ],
  },
  {
    title: "SSS BRP/BRC Project (SSS 2nd node, Luzon)",
    company: "Unisys Philippines",
    duration: "2000-2001",
    description: [
      "Project manager/technical consultant, helped implement ongoing backup recovery project for SSS, managed a team of ten software engineers.",
    ],
  },
  {
    title: "NSO CRS Project (National Statistics Office Civil Registration System)",
    company: "Unisys Philippines",
    duration: "2000-2001",
    description: [
      "Technical consultant, helped define the initial technical architecture of the NSO civil registration system covering the three major islands and each province. Developed the technical section of the FSD (Functional Specifications Detail) and helped in the initial development environment design including schematic design of a data warehouse using MSSQL 7.0 OLAP services.",
    ],
  },
  {
    title: "EDS ISCweb Helpdesk Web based helpdesk for EDSBKK ISC (International Support Center) EDS (Thailand) Ltd.",
    company: "EDS Bangkok ISC (International Support Center)",
    duration: "1999-2000",
    description: [
      "Designed, developed and implemented the ISC web helpdesk. Designed Internet/Extranet Architecture. Designed and developed MSSQL Database. Lead a five-man team consisting of 2 analysts and 3 programmers. Team conducted extensive JBA System21 ERP module customization running on AS400. Team also handled data transformation for import and export to different ERP applications like ARIBA, JDEdwards and SAP.",
    ],
  },
  {
    title: "RBANK/NCR Switchmark project",
    company: "NCR-NCR Software Group ASPAC (Asia Pacific)",
    duration: "1996-1999",
    description: [
      "Switch Installation, Implementation, Development, and Testing for Robinson’s Savings Bank. Developed Host interfaces with an Interchange, installation (roll out of product), UAT (user acceptance testing), maintained a 7x24x365 system. OS Platform: NCR UNIX, Windows, and Windows NT.",
    ],
  },
  {
    title: "RBANK SSDS Development ATM Application Design/Development, Testing",
    company: "NCR-NCR Software Group ASPAC (Asia Pacific)",
    duration: "1996-1999",
    description: [
      "For Robinson’s Savings Bank, NCR Singapore (Chai Chee Office). Developed transactions for the ATM including supervisor functions. OS Platform: OS/2 Warp.",
    ],
  },
  {
    title: "NCR FSG Road show (Serving the Invisible Customer)",
    company: "NCR-NCR Software Group ASPAC (Asia Pacific)",
    duration: "1996-1999",
    description: [
      "Financial Solutions Group Product demonstration Asia Pacific Tour (SwitchMark, Branch Automation, Call Center, Internet Banking) Manila Philippines, KL Malaysia, Sydney Australia.",
    ],
  },
  {
    title: "Bahn Hin Lee BranchView NT Customization project",
    company: "NCR-NCR Software Group ASPAC (Asia Pacific)",
    duration: "1996-1999",
    description: [
      "Branch Automation customization project for Bahn Hin Lee Bank, KL Malaysia. Customized transactions for tellering applications. OS Platform: Windows NT Server/Workstation.",
    ],
  },
  {
    title: "Digikard online phonecard shopping (http://Digikard.com.ph)",
    company: "Digital Farm ",
    duration: "1995-1996",
    description: [
      "Design and Development for Digitel Communications Inc. OS Platform: HP UNIX, Windows 95.",
    ],
  },
  {
    title: "WorldRoom (Manila)",
    company: "I-Quest Corporation (Hong Kong) Ltd.",
    duration: "1995-1996",
    description: [
      "Product Consultant (Design, and Development) for I-Quest Corporation (HK) Ltd.",
    ],
  },
  {
    title: "PICC (Philippine International Convention Center)",
    company: "Intellimedia Corp.",
    duration: "1994-1995",
    description: [
      "Production Consultant for Multimedia Information Kiosk Design, Development and Maintenance.",
    ],
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white text-center border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-8">Experience Timeline</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experienceData.map((entry, index) => (
          <div key={index} className="text-left relative pl-8 border-l-2 border-gray-300">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{entry.title}</h3>
            <p className="text-lg text-gray-700">{entry.company}</p>
            <p className="text-sm text-gray-500 mb-2">{entry.duration}</p>
            <ul className="list-disc list-inside text-gray-800">
              {entry.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {entry.imageUrl && (
              <div className="mt-4">
                <Image
                  src={entry.imageUrl}
                  alt={`${entry.title} image`}
                  width={300}
                  height={150}
                  className="rounded-md object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;