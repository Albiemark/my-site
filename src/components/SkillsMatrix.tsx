import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "AI/ML Tools",
    skills: ["Claude", "Anthropic", "Grok", "Gemini", "TensorFlow", "Amazon SageMaker", "SAS Viya", "ChatGPT", "Perplexity"],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS (EC2, S3, Lambda)", "Azure AI Services", "GCP"],
  },
  {
    category: "Compliance",
    skills: ["CISO", "NIST", "HIPAA", "GDPR", "PIPEDA", "ISO 27001/27002"],
  },
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "RPG", "C++", "MS Visual C++", "MSVB 6.0", "HTML", "XML", "CGI", "PERL", "MS Interdev ASP/JSP", "VB.NET", "ASP.NET", "PHP", "Java"],
  },
  {
    category: "Applications",
    skills: ["AMDOCS BSS", "Oracle ESB", "Salesforce", "Jira", "Confluence", "MS Project", "VPN", "Fortinet/SD-WAN", "Firewall Configuration", "CI/CD", "AI Development", "NCR Terra Data", "NCR Switchmark", "NCR Branchview NT", "NCR Internet Banking", "Diebold", "SSDS", "JBA System21", "ARIBA", "JDE", "Cognos", "WebMethods", "APACHE", "Klone", "ATM", "Switch", "Mainframe", "Tellering applications", "Web Applications", "E-Procurement", "Software Development", "Facilities Management", "Payment Systems", "ADS based Membership System", "Administration", "Policy Administration", "Savings/Time Deposit", "System Architecture", "Teller System", "Transaction Delivery", "WebSphere", "IIS", ".NET", "Adobe PageMaker ver 6.5", "Adobe Photoshop 4.0", "Dreamweaver", "Enterprise Architect (UML)", "Icon Author 7", "IMPACTXP", "JDesignerPro", "Lifekeeper", "Macromedia Director 5.0 6.0", "MS Access", "MS FrontPage 98/2000", "Timekeeper", "Topend", "MS Office", "MS VISIO", "MS outlook", "MS Site Server Commerce 4.0", "Net Objects Fusion 2.02/3.0/4.0/5.0", "Paintbox", "Randomnoise Coda", "Eclipse", "Netbeans7"],
  },
  {
    category: "Platforms",
    skills: ["IBMAS/400", "Windows NT", "UNIX", "LINUX", "PALM OS", "DOS", "WINDOWS 95/98/NT/2000/XP/CE/7", "SYMBIAN", "HP Unix"],
  },
  {
    category: "Databases/DB Utilities",
    skills: ["DB2", "MSSQL", "ORACLE", "MySQL", "IMS DB/DBRC", "MSSQL 7.0 OLAP", "Developer 2000"],
  },
  {
    category: "Networking",
    skills: ["ETHERNET", "IPX/SPX", "TCP/IP", "TOKEN RING", "IPC"],
  },
  {
    category: "Testing Tools",
    skills: ["TESTCOMPLETE"],
  },
  {
    category: "Methodologies",
    skills: ["TeamMembers (NCR)", "TeamMethods (UNISYS)", "CMMi", "PMBOK", "ISO 9002"],
  },
];

const SkillsMatrix: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white text-center border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-8">Skills Matrix</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-2">{category.category}</h3>
            <ul className="list-disc list-inside">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-800">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;