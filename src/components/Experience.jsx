import { motion } from "framer-motion";
import { Briefcase, Smartphone, Award, GraduationCap } from "lucide-react";

export default function Experience() {
  const timelineData = [
    {
      year: "2024 - 2025",
      title: "Web Development Intern",
      subtitle: "Frontend & API Integration",
      desc: "Designed and engineered clean, responsive client interfaces using React.js and Tailwind CSS. Built secure, low-latency RESTful APIs on Express/Node.js environments, integrating structured data aggregation pipelines.",
      icon: Briefcase,
      badge: "Internship"
    },
    {
      year: "Mid 2025",
      title: "FinanceFlow App Launch",
      subtitle: "Google Play Store Publication",
      desc: "Designed and launched FinanceFlow, a personal expense tracker mobile application, on the Google Play Store. Developed using React Native, Expo Go, and Firebase, managing state synchronization and offline local storage.",
      icon: Smartphone,
      badge: "Product Launch"
    },
    {
      year: "Late 2025",
      title: "Android Engineering Intern",
      subtitle: "Native SDK Optimization & Release",
      desc: "Optimized native Android SDK modules and configured automated EAS cloud builds for app release pipelines. Debugged memory leaks, offloaded visual graph calculations to native UI threads, and managed Play Console releases.",
      icon: Award,
      badge: "Internship"
    },
    {
      year: "2026",
      title: "Graduation // B.Tech CS",
      subtitle: "Computer Science & Engineering",
      desc: "Completed B.Tech degree in Computer Science & Engineering with a cumulative CGPA of 8.04. Specialized in machine learning models, natural language processing frameworks, and structured software architecture design patterns.",
      icon: GraduationCap,
      badge: "Academic"
    }
  ];

  return (
    <section 
      id="experience" 
      className="relative w-full bg-[#080808] text-white py-32 overflow-hidden border-b border-white/5 select-none"
    >
      {/* Background ambient red glows */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner text-xs font-mono tracking-widest uppercase mb-6 text-brand-red font-semibold">
            Milestones // Career Path
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Journey
          </h2>
          
          <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl leading-relaxed">
            A chronological timeline of my professional experience, mobile product deployments, 
            and academic highlights.
          </p>
        </div>

        {/* Timeline Grid Wrapper */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Vertical Center Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-[1px] z-0">
            {/* Red active progress line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-brand-red origin-top"
            />
          </div>

          {/* Timeline Milestones list */}
          <div className="flex flex-col gap-16 relative z-10">
            {timelineData.map((item, idx) => {
              const IconComp = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-start relative w-full ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* Timeline Pulse Node dot */}
                  <div className="absolute left-[30px] md:left-1/2 top-8 w-4 h-4 rounded-full bg-neutral-900 border-[3px] border-neutral-700 -translate-x-[9px] flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping absolute"
                    />
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red z-10" />
                  </div>

                  {/* Card Element */}
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      x: idx % 2 === 0 ? -50 : 50 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5 }}
                    className={`relative w-full md:w-[45%] ml-16 md:ml-0 bg-neutral-900/35 hover:bg-neutral-900/60 border border-white/10 hover:border-brand-red/30 backdrop-blur-md rounded-3xl p-6 md:p-8 text-left transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.4)] ${
                      isEven ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/* Header bar of milestone card */}
                    <div className="flex justify-between items-center gap-4 border-b border-white/5 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                          <IconComp size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-widest text-brand-red uppercase font-semibold">
                            {item.badge}
                          </span>
                          <h3 className="text-lg font-bold text-white uppercase mt-0.5 tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-sm font-mono text-white/40 font-semibold uppercase tracking-wider shrink-0 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>

                    {/* Card Body */}
                    <h4 className="text-xs font-mono text-white/55 uppercase tracking-wide mb-2">
                      {item.subtitle}
                    </h4>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
