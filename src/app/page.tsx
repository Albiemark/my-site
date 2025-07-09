'use client';
import Image from "next/image";
import ExperienceTimeline from "../components/ExperienceTimeline";
import CertificationsSection from "../components/CertificationsSection";
import SkillsMatrix from "../components/SkillsMatrix";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import PhotoGallery from "../components/PhotoGallery";
import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { Project } from "../types";

export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visit', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setVisitCount(data.count);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
    
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-[#f7f6f3] to-white border-b border-gray-200">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">Ready to architect your next big idea?</h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">Hi, I’m <span className="font-semibold">Albie Mark Salvador</span> — Solutions Architect & Technology Leader. I help organizations design, build, and scale secure, high-performance systems that solve real business problems.</p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="https://github.com/Albiemark" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://huggingface.co/Albiemark" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition" target="_blank" rel="noopener noreferrer">Hugging Face</a>
          <a href="/Mark Salvador_CV Delivery Project Manager.pdf" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition" target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
        <Image
          src="/me.jpg"
          alt="Mark Salvador Professional Headshot"
          width={150}
          height={150}
          className="rounded-full border-4 border-white shadow-lg mt-4 object-cover"
        />
      </section>

      {/* Profile Summary Section */}
      <section className="py-16 px-4 bg-[#f7f6f3] text-center border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Profile Summary</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">An experienced IT professional with decades of IT experience, from solutions architecture, software development, network administration, systems design and security assessment. Proven ability to scale solutions and lead enterprise-wide transformations. Collaborative and curious, I excel in rigorous agile delivery, robust solutioning, data security, and operational excellence. I believe that AI will change the world, but it is the human connections that will make it a better place.</p>
        <p className="max-w-2xl mx-auto mb-6 text-lg">Mr. Salvador is a technical architecture consultant and his experience includes project management, system analysis and design, programming, testing, implementation, deployment, and production support. He can work independently or as a team member, and takes pride in completing work on schedule and minimal rework. He has extensive experience in OSX, UNIX, NT, Win7/82k and other MS products. His ability to quickly learn and absorb foreign languages has helped him in numerous job postings overseas, such as in Hong Kong, Singapore, Malaysia, Australia, Thailand and France. He is fluent in the various dialects of the mother tongue, and English. He is conversant in the Thai language and in French.</p>
      </section>

      {/* Experience Timeline Section */}
      <ExperienceTimeline />

      {/* Skills Matrix Section */}
      <SkillsMatrix />

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


      {/* Product Demo Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Demo: Contract Maker</h2>
        <p className="max-w-2xl mx-auto mb-8">Watch a brief demonstration of the Contract Maker web app in action.</p>
        <div className="max-w-xl mx-auto">
          <video
            src="/compressed_video_small.mp4"
            controls
            muted
            loop
            playsInline
            className="rounded-lg shadow-xl"
            style={{ width: '33%' }}
          />
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Portfolio Section */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-8">Portfolio Highlights</h2>
        {/* Project data */}
        <ProjectFilter projects={projects} onFilter={setFilteredProjects} />
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-gray-500 bg-white border-t mt-auto">
        <div className="mb-2">© {new Date().getFullYear()} Albiemark</div>
        {visitCount !== null && (
          <div className="mt-2 text-xs">
            <p>Total Visits: {visitCount}</p>
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="https://github.com/Albiemark" className="underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://huggingface.co/Albiemark" className="underline" target="_blank" rel="noopener noreferrer">Hugging Face</a>
          <a href="https://huggingface.co/Albiemark/matlock-canadian-law" className="underline" target="_blank" rel="noopener noreferrer">Matlock Model</a>
        </div>
      </footer>
    </div>
  );
}
