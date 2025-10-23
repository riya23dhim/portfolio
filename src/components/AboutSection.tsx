import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Dedicated to creating innovative solutions and building scalable web applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-200">
              <h3 className="text-2xl font-semibold mb-4 text-primary-500">Background</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm a Software Development Engineer with expertise in frontend architecture using React.js and full-stack MERN development. 
                With a Master's degree in Physics from IIT Hyderabad and hands-on experience in modern web technologies, 
                I bring both analytical thinking and practical development skills to create innovative solutions.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-200">
              <h3 className="text-2xl font-semibold mb-4 text-primary-500">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm passionate about building scalable web applications and developing innovative frontend solutions. I've contributed to 10+ full-stack projects, 
                conducted 20+ code reviews, and delivered technical presentations to 200+ participants, always focusing on modern development practices 
                and performance optimization.
              </p>
            </div>
          </div>
          
          {/* Education */}
          <div className="space-y-6" data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-6">Education</h3>
            
            <div className="glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-primary-500">Master of Science</h4>
                  <p className="text-slate-300">Indian Institute of Technology Hyderabad</p>
                  <p className="text-sm text-slate-400">2022 - 2024 | CGPA: 8.11</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-purple-500">'O' Level Course</h4>
                  <p className="text-slate-300">NIELIT</p>
                  <p className="text-sm text-slate-400">2021-2022 | Grade: S</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-blue-500">Bachelor of Science </h4>
                  <p className="text-slate-300">G.G.D.S.D College (HPU)</p>
                  <p className="text-sm text-slate-400">2018 - 2021 | CGPA: 9.23 </p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}