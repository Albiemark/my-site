
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-[#f7f6f3] to-white border-b border-gray-200">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">Ready to architect your next big idea?</h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">Hi, I’m <span className="font-semibold">Mark Salvador</span> — Solutions Architect & Technology Leader. I help organizations design, build, and scale secure, high-performance systems that solve real business problems.</p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="https://github.com/Albiemark" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://huggingface.co/Albiemark" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition" target="_blank" rel="noopener noreferrer">Hugging Face</a>
          <a href="/docs/Mark%20Salvador_CV2.pdf" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition" target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
        <Image
          src="https://avatars.githubusercontent.com/u/152335716?v=4"
          alt="Mark Salvador GitHub Avatar"
          width={120}
          height={120}
          className="rounded-full border-4 border-white shadow-lg mt-4"
        />
      </section>

      {/* About / Skills Section */}
      <section className="py-16 px-4 bg-[#f7f6f3] text-center border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">Innovative Solutions Architect with 15+ years of experience designing, building, and leading enterprise software solutions. Expert in cloud architecture, distributed systems, and cross-functional team leadership. Passionate about leveraging technology to solve complex business challenges and deliver scalable, secure, and high-performance systems.</p>
        <h3 className="text-xl font-bold mt-8 mb-4">Core Skills</h3>
        <ul className="flex flex-wrap justify-center gap-4 text-base text-gray-800 mb-4">
          <li className="bg-white rounded px-3 py-1 shadow">Cloud Architecture (AWS, Azure, GCP)</li>
          <li className="bg-white rounded px-3 py-1 shadow">Distributed Systems</li>
          <li className="bg-white rounded px-3 py-1 shadow">DevOps & CI/CD</li>
          <li className="bg-white rounded px-3 py-1 shadow">API & Microservices Design</li>
          <li className="bg-white rounded px-3 py-1 shadow">AI/ML Integration</li>
          <li className="bg-white rounded px-3 py-1 shadow">Security & Compliance</li>
          <li className="bg-white rounded px-3 py-1 shadow">Team Leadership & Mentoring</li>
          <li className="bg-white rounded px-3 py-1 shadow">Agile & Scrum</li>
        </ul>
      </section>

      {/* Personal Statement / Testimonial Section */}
      <section className="py-12 px-4 text-center bg-white border-b border-gray-200">
        <blockquote className="italic max-w-2xl mx-auto text-xl text-gray-700 mb-4">“Mark’s architectural vision and technical leadership transformed our cloud migration project. He brings clarity, innovation, and a collaborative spirit to every challenge.”</blockquote>
        <p className="text-gray-600">— CTO, Enterprise Client</p>
      </section>

      {/* About / Skills Section */}
      <section className="py-8 px-4 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto mb-4">As a Solutions Architect, I specialize in designing robust, scalable, and secure systems for organizations across diverse industries. My expertise spans cloud-native architectures (AWS, Azure, GCP), microservices, DevOps, and AI/ML integration. I thrive in collaborative environments, guiding teams from concept to deployment, and ensuring alignment with business goals.</p>
        <h3 className="text-xl font-bold mt-8 mb-2">Core Skills</h3>
        <ul className="flex flex-wrap justify-center gap-4 text-base text-gray-800 mb-4">
          <li className="bg-gray-100 rounded px-3 py-1">Cloud Architecture (AWS, Azure, GCP)</li>
          <li className="bg-gray-100 rounded px-3 py-1">Distributed Systems</li>
          <li className="bg-gray-100 rounded px-3 py-1">DevOps & CI/CD</li>
          <li className="bg-gray-100 rounded px-3 py-1">API & Microservices Design</li>
          <li className="bg-gray-100 rounded px-3 py-1">AI/ML Integration</li>
          <li className="bg-gray-100 rounded px-3 py-1">Security & Compliance</li>
          <li className="bg-gray-100 rounded px-3 py-1">Team Leadership & Mentoring</li>
          <li className="bg-gray-100 rounded px-3 py-1">Agile & Scrum</li>
        </ul>
        <div className="mt-4">
          <a href="/docs/Mark%20Salvador_CV2.pdf" className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">Download Full CV (PDF)</a>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 px-4 bg-[#f7f6f3] text-center border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
        <h3 className="text-xl font-bold mb-2">Matlock - Canadian Immigration and Refugee Law Model</h3>
        <p className="max-w-2xl mx-auto mb-4">As Solutions Architect, I led the design and deployment of Matlock (legal-mistral-immigration-v2), an advanced AI model for analyzing and explaining Canadian immigration and refugee law. This project integrates legal data sources, leverages Mistral 7B, and demonstrates expertise in secure, scalable AI/ML system architecture.</p>
        <div className="bg-white rounded-lg shadow p-4 max-w-xl mx-auto mb-4 text-left">
          <pre className="overflow-x-auto text-xs"><code>{`from transformers import AutoTokenizer, AutoModelForCausalLM\n\nmodel = AutoModelForCausalLM.from_pretrained(\"Albiemark/matlock-canadian-law\")\ntokenizer = AutoTokenizer.from_pretrained(\"Albiemark/matlock-canadian-law\")\n\nquery = \"What is the definition of a Convention refugee in Canadian law?\"\ninputs = tokenizer(query, return_tensors=\"pt\")\noutputs = model.generate(**inputs)\nresponse = tokenizer.decode(outputs[0])`}</code></pre>
        </div>
        <p className="mb-2 text-sm text-gray-700">Provides legal information, not legal advice. <a href="https://huggingface.co/Albiemark/matlock-canadian-law" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View on Hugging Face</a></p>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-8">Portfolio Highlights</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-bold mb-2"><a href="https://github.com/Albiemark/trello-clone" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Trello Clone</a></h3>
            <p className="mb-2">Architected and developed a scalable Kanban-style project management app using TypeScript and modern web technologies.</p>
          </div>
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-bold mb-2"><a href="https://github.com/Albiemark/dbx-mcp-server" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Dropbox MCP Server</a></h3>
            <p className="mb-2">Designed a robust Dropbox MCP server for cursor .47, focusing on API integration, security, and reliability (TypeScript).</p>
          </div>
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-bold mb-2"><a href="https://github.com/Albiemark/VeeMatch" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">VeeMatch</a></h3>
            <p className="mb-2">Led the architecture and implementation of a spiritual connection app, enabling secure user engagement and scalable features (TypeScript).</p>
          </div>
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-bold mb-2"><a href="https://github.com/Albiemark/LLM-Trainer" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">LLM-Trainer</a></h3>
            <p className="mb-2">Built a flexible Python-based platform for training and evaluating large language models, supporting custom workflows and automation.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-gray-500 bg-white border-t mt-auto">
        <div className="mb-2">© {new Date().getFullYear()} Albiemark</div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/Albiemark" className="underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://huggingface.co/Albiemark" className="underline" target="_blank" rel="noopener noreferrer">Hugging Face</a>
          <a href="https://huggingface.co/Albiemark/matlock-canadian-law" className="underline" target="_blank" rel="noopener noreferrer">Matlock Model</a>
        </div>
      </footer>
    </div>
  );
}
