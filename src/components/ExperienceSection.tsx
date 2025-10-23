import { Check } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Building innovative solutions and mentoring talented developers
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-500 mb-2">Software Development Engineer and Mentor</h3>
                <p className="text-xl text-slate-300 mb-2">Geeks of Gurukul</p>
                <p className="text-slate-400">Bhopal, India</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <span className="bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium">
                  Sept 2024 - June 2025
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Contributed to frontend architecture by developing reusable UI components using React.js & CSS techniques.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                Developed full-stack (MERN) applications with a strong focus on scalable architecture and real-world implementation.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Contributed to 10+ full-stack projects and conducted 20+ code reviews, ensuring code quality and best practices.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                Mentored peers and junior developers, providing guidance on code reviews, project structure, and best practices in full-stack development.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mt-5 mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-500 mb-2">Technical Instructor</h3>
                <p className="text-xl text-slate-300 mb-2">NxtWave</p>
                <p className="text-slate-400">Hyderabad, India</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <span className="bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium">
                  August 2025 
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                Built full stack AI-driven applications integrating LLMs and automation workflows using n8n, Node.js, Express, React, and MongoDB.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                Developed multi-agent systems, AI interview assistants, and other Generative AI-based web solutions for practical, real-world use cases.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">
                Designed backend architectures and workflow pipelines combining AI APIs, webhooks, and scalable automation logic.
                </p>
              </div>
              
              
               
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}