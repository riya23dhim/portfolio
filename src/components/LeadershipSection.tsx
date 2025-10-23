import { Mic, Users } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Leadership & <span className="text-gradient">Speaking</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Empowering teams and sharing knowledge through technical leadership and presentations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300" data-aos="fade-right">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Mic className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-primary-500">Guest Lecture</h4>
                <p className="text-slate-300 leading-relaxed">
                  Delivered a guest lecture at Barkatullah University, Madhya Pradesh, on Web Development and its Integration 
                  with AI to an audience of 200+ enthusiastic participants, covering real-world use cases and applications.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300" data-aos="fade-left">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Users className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-primary-500">Workshop Organization</h4>
                <p className="text-slate-300 leading-relaxed">
                  Managed and helped organize a Blockchain Workshop with 700+ attendees, handling participant engagement, 
                  speaker coordination, promotional activities, and overall event execution from planning to successful completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}