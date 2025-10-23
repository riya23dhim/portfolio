import { Code, Layers, Database, Zap, ChevronRight } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-primary-500 to-blue-500",
      dotColor: "bg-primary-500",
      skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      gradient: "from-blue-500 to-purple-500",
      dotColor: "bg-blue-500",
      skills: ["React.js", "Redux", "Express.js", "Node.js", "Tailwind CSS", "React Flow", "Zustand", "Redux Thunk"]
    },
    {
      title: "Technologies & Databases",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      dotColor: "bg-purple-500",
      skills: ["MongoDB", "MySQL", "REST APIs", "SQLite", "CI/CD","n8n"]
    },
    {
      title: "Tools & Platforms",
      icon: Zap,
      gradient: "from-pink-500 to-red-500",
      dotColor: "bg-pink-500",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-200 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className="flex items-center space-x-3 group/skill">
                    <div className={`w-2 h-2 ${category.dotColor} rounded-full group-hover/skill:scale-125 transition-transform duration-200`}></div>
                    <span className="text-slate-300 group-hover/skill:text-white transition-colors duration-200">{skill}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}