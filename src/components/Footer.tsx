import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Riya Dhiman</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Software Development Engineer passionate about creating innovative web solutions 
              and building scalable applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/riya23dhim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/riya-dhiman-632634285/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="driyanjali@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-slate-300 hover:text-primary-500 transition-colors duration-200 capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-300">
              <p>riadhiman73@gmail.com</p>
              <p>Available for remote/onsite work</p>
              <p>Open to new opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Riya Dhiman. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}