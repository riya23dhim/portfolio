import { Trophy, Star, Medal } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Achievements & <span className="text-gradient">Recognition</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Milestones that reflect dedication to excellence and continuous learning
          </p>
        </div>
        
        {/* Academic Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 text-center" data-aos="fade-up">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-500">JAM 2022</h3>
            <p className="text-slate-300">Secured AIR 1900 in Joint Admission Exam for Masters</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-500">Academic Excellence</h3>
            <p className="text-slate-300">Secured distinction in Bachelor's degree with CGPA 9.23</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Medal className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-500">State Board Excellence</h3>
            <p className="text-slate-300">Achieved 10th position in 10th Himachal Pradesh State Board</p>
          </div>
        </div>
        

      </div>
    </section>
  );
}