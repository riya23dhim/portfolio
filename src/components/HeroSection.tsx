
export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-500 text-sm font-medium mb-6">
              Frontend & Full-Stack Developer
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm <span className="text-gradient">Riya Dhiman</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed">
              A passionate Software Development Engineer specializing in frontend and full-stack development. 
              I excel in React.js, Node.js, and modern web technologies, with experience creating scalable and user-centric applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-primary-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-center"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="glass-card text-slate-100 px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-center border border-primary-500/30 hover:border-primary-500"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-dark-900 p-2 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-600/20 flex items-center justify-center text-slate-400">
                  <img 
                    src='/profile-photo.jpeg' 
                    className=" w-full h-full rounded-full object-cover"
                  />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}