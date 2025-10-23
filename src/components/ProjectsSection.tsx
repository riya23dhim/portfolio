import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Task Management",
      description: "Intelligent task management application with AI-driven insights, priority suggestions, and automated workflow optimization. Features real-time collaboration and smart notifications.",
      image: "task.png",
      technologies: ["React.js", "Express.js", "MongoDB", "JWT", "AI"],
      badge: "Full-Stack",
      badgeColor: "bg-primary-500",
      liveDemo: "https://685059f09958da187680968a--gregarious-taiyaki-61794c.netlify.app/",
      github: "https://github.com/riya23dhim/task-management-ai"
    },

    {
      title: "React Admin Dashboard",
      description: "Developed a responsive admin dashboard using React 19, React Router DOM, Tailwind CSS, and Material UI with JWT authentication.",
      image: "d.png",
      technologies: ["React.js", "Express.js", "MongoDB", "JWT","Nodejs" ,"Tailwind"],
      badge: "Full-Stack",
      badgeColor: "bg-primary-500",
      liveDemo: "https://dashboard7733.netlify.app/ecommerce",
      github: "https://github.com/riya23dhim/Dashboard"
    },

    {
      title: "Railway Management System",
      description: "Developed a comprehensive web application for managing railway reservations with user authentication, train search, real-time seat availability, and seamless booking functionality.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Express.js", "SQLite", "Bootstrap", "JWT"],
      badge: "Full-Stack",
      badgeColor: "bg-blue-500",
      liveDemo: "#",
      github: "https://github.com/riya23dhim/Railway_Management"
    },
    {
      title: "React-based Frontend Developed from Figma Design",
      description: "Recreated a provided Figma UI using React.js, focusing on responsive layouts, component reusability, and pixel-perfect design translation.",
      image: "unt.png",
      technologies: ["React.js","Tailwind"],
      badge: "UI",
      badgeColor: "bg-blue-500",
      liveDemo: "https://vayuzassesmentriya.netlify.app/",
      github: "https://github.com/riya23dhim/Vayuz_assesment"
    },
    {
      title: "E-commerce Product Explorer",
      description: "A modern e-commerce product listing page built with React, featuring responsive design and dynamic filters based on product type and price range. Users can easily explore and sort products through an intuitive, clean UI.",
      image: "ecom.png",
      technologies: ["React.js","Tailwind","CSS"],
      badge: "UI",
      badgeColor: "bg-blue-500",
      liveDemo: "https://ecomriya.netlify.app/",
      github: "https://github.com/riya23dhim/Ecom"
    },
   
    {
      title: "Pipeline Visualization Tool",
      description: "Developed an interactive pipeline visualization tool using React Flow and FastAPI, enabling users to create and validate complex workflow diagrams with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["React 19", "React Flow", "FastAPI", "Zustand", "Tailwind"],
      badge: "ReactFlow",
      badgeColor: "bg-purple-500",
      liveDemo: "#",
      github: "https://github.com/riya23dhim/pipeline-workflow-frontend-"
    }
    
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work in frontend and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-200 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`${project.badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {project.badge}
                  </span>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-primary-500 to-blue-500 text-white py-2 px-4 rounded-lg text-center hover:shadow-lg transition-all duration-200"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-primary-500/30 text-primary-500 py-2 px-4 rounded-lg text-center hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}