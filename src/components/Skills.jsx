import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      code: "FRONTEND",
      desc: "Client-side engineering, responsive frameworks, and fluid motion libraries.",
      skills: [
        {
          name: "React.js",
          color: "group-hover:text-[#61DAFB]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="0" cy="0" r="2.05" fill="currentColor" />
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </svg>
          )
        },
        {
          name: "JavaScript",
          color: "group-hover:text-[#F7DF1E]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0zm20.06 18.93c-.1-.7-.47-1.12-1.2-1.3-.39-.1-.76-.15-1.14-.15-.38 0-.76.05-1.14.15-.45.13-.8.42-1.01.78-.17.29-.25.64-.25 1.01 0 .39.08.74.25 1.03.2.36.55.65 1 .78.38.11.76.17 1.14.17.38 0 .76-.06 1.14-.17.67-.2 1.18-.72 1.35-1.4.08-.34.12-.71.12-1.09 0-.39-.04-.76-.12-1.1zm-6.4 0c-.1-.7-.47-1.12-1.2-1.3-.39-.1-.76-.15-1.14-.15-.38 0-.76.05-1.14.15-.45.13-.8.42-1.01.78-.17.29-.25.64-.25 1.01 0 .39.08.74.25 1.03.2.36.55.65 1 .78.38.11.76.17 1.14.17.38 0 .76-.06 1.14-.17.67-.2 1.18-.72 1.35-1.4.08-.34.12-.71.12-1.09 0-.39-.04-.76-.12-1.1zm-8.31-7.23v8.62H1.78v-8.62c0-1.24-.32-2.22-.97-2.92-.65-.7-1.6-.1.6-2.86-.1h5.18v2.98H1.64c2.16 0 3.79.6 4.88 1.78 1.1 1.19 1.64 2.82 1.64 4.9zm6.85 0v8.62h-3.57v-8.62c0-1.24-.32-2.22-.97-2.92-.65-.7-1.6-.1.6-2.86-.1h5.18v2.98H8.49c2.16 0 3.79.6 4.88 1.78 1.1 1.19 1.64 2.82 1.64 4.9z"/>
            </svg>
          )
        },
        {
          name: "HTML5",
          color: "group-hover:text-[#E34F26]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.9 21.2-8.6 2.8-8.6-2.8L1.5 0zm15.4 6H7.1l.2 2.3h7.9l-.3 3.6-2.9.8-2.9-.8-.2-1.7H6.6l.3 4 5.1 1.4 5.1-1.4.6-6.8.1-1.4z"/>
            </svg>
          )
        },
        {
          name: "CSS3",
          color: "group-hover:text-[#1572B6]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.9 21.2-8.6 2.8-8.6-2.8L1.5 0zm15.4 6H7.1l.2 2.3h7.9l-.3 3.6-2.9.8-2.9-.8-.2-1.7H6.6l.3 4 5.1 1.4 5.1-1.4.6-6.8.1-1.4z" />
            </svg>
          )
        },
        {
          name: "Tailwind CSS",
          color: "group-hover:text-[#06B6D4]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6.086c-2.325 0-3.875 1.162-4.65 3.488 2.325-.775 3.875-.387 4.65 1.162.775 2.325.387 3.875-1.162 4.65 2.325 0 3.875-1.162 4.65-3.488-2.325.775-3.875.387-4.65-1.162-.775-2.325-.387-3.875 1.162-4.65zm-6 6.978c-2.325 0-3.875 1.162-4.65 3.488 2.325-.775 3.875-.387 4.65 1.163.775 2.325.387 3.875-1.162 4.65 2.325 0 3.875-1.162 4.65-3.488-2.325.775-3.875.387-4.65-1.163-.775-2.325-.387-3.875 1.162-4.65z"/>
            </svg>
          )
        },
        {
          name: "Framer Motion",
          color: "group-hover:text-[#FF00BF]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h12v12H0V0zm12 12h12v12H12V12zM0 12h12v12H0V12zm12-12h12v12H12V0z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Backend Development",
      code: "BACKEND",
      desc: "Server architecture, microservices engineering, and secure RESTful structures.",
      skills: [
        {
          name: "Java Language",
          color: "group-hover:text-[#f89820]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
          )
        },
        {
          name: "Node.js",
          color: "group-hover:text-[#339933]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm-1 14.8V7.2l6.2 3.5v3.6L11 16.8zm-1-8.3v6.6l-2.9-1.6V10.1l2.9-1.6z"/>
            </svg>
          )
        },
        {
          name: "Express.js",
          color: "group-hover:text-white",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300 bg-black/40 rounded p-0.5 flex items-center justify-center font-bold tracking-tighter" viewBox="0 0 24 24">
              <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="currentColor" fontSize="13" fontFamily="sans-serif">ex</text>
            </svg>
          )
        },
        {
          name: "REST API",
          color: "group-hover:text-sky-400",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Database Systems",
      code: "DATABASES",
      desc: "Schema layouts, query tuning, and transactional relational mapping.",
      skills: [
        {
          name: "MongoDB",
          color: "group-hover:text-[#47A248]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.5C11.5 1.5 6 7 6 12.5c0 4.1 3 7.8 6 10 3-2.2 6-5.9 6-10C18 7 12.5 1.5 12 1.5zm.5 17.5v-14c1.5 1.3 3.5 4.7 3.5 7.5 0 2.8-2 6.2-3.5 7.5z"/>
            </svg>
          )
        },
        {
          name: "MySQL / SQL",
          color: "group-hover:text-[#4479A1]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7.03 2 3 4.24 3 7v10c0 2.76 4.03 5 9 5s9-2.24 9-5V7c0-2.76-4.03-5-9-5zm0 3c3.87 0 7 1.34 7 3s-3.13 3-7 3-7-1.34-7-3 3.13-3 7-3zm0 14c-3.87 0-7-1.34-7-3v-2.2c1.78 1.1 4.28 1.7 7 1.7s5.22-.6 7-1.7V16c0 1.66-3.13 3-7 3zm0-4.5c-3.87 0-7-1.34-7-3V9.3c1.78 1.1 4.28 1.7 7 1.7s5.22-.6 7-1.7v2.2c0 1.66-3.13 3-7 3z" />
            </svg>
          )
        },
        {
          name: "SQLite",
          color: "group-hover:text-[#003B57]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-5.33 0-8 1.5-8 3v3c0 1.5 2.67 3 8 3s8-1.5 8-3V6c0-1.5-2.67-3-8-3zm0 8c-5.33 0-8 1.5-8 3v3c0 1.5 2.67 3 8 3s8-1.5 8-3v-3c0-1.5-2.67-3-8-3zm4.5 3.5l-4-4 1.5-1.5 4 4-1.5 1.5z"/>
            </svg>
          )
        }
      ]
    },
    {
      title: "Tools & Utilities",
      code: "TOOLS",
      desc: "Version control systems, cloud hosting, and mobile EAS compile helpers.",
      skills: [
        {
          name: "Git VCS",
          color: "group-hover:text-[#F05032]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 15V9a4 4 0 0 0-4-4H9" />
              <line x1="6" y1="9" x2="6" y2="15" />
            </svg>
          )
        },
        {
          name: "GitHub",
          color: "group-hover:text-white",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          )
        },
        {
          name: "Firebase",
          color: "group-hover:text-[#FFCA28]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.89 15.75L2 9.5a.61.61 0 0 1 .95-.66L6.5 11.5M5.61 4.38l.64-.64a.61.61 0 0 1 1 0l7.25 7.26M19.78 15.75l-7.28 7.28a.61.61 0 0 1-.86 0L3.89 15.75c3.21-1.33 6.13-.53 8.61.85 2.48-1.38 5.4-2.18 8.61-.85l-1.33-1.33z" />
            </svg>
          )
        },
        {
          name: "Vite Compiler",
          color: "group-hover:text-[#646CFF]",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 22 22 22" />
              <polygon points="12 13 8 13 13 8 12 13" fill="currentColor" stroke="none" />
            </svg>
          )
        },
        {
          name: "Expo & RN",
          color: "group-hover:text-white",
          icon: (
            <svg className="w-8 h-8 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 4.85l7.98 13.9H4.02L12 6.85z"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="relative w-full min-h-screen bg-[#080808] text-white py-32 select-none overflow-hidden border-b border-white/5"
    >
      {/* Red ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title details */}
        <div className="mb-20 text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner text-xs font-mono tracking-widest uppercase mb-6 text-brand-red font-semibold">
            Capabilities Matrix // Toolkit
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Skill Set &amp; Technologies
          </h2>
          
          <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl leading-relaxed">
            A comprehensive breakdown of my capabilities, listing frontend architectures, backend 
            services, database systems, and development utilities.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.code}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIdx * 0.1 }}
              className="group flex flex-col border border-white/10 hover:border-brand-red/30 rounded-[2.5rem] p-8 bg-neutral-900/35 hover:bg-neutral-900/60 backdrop-blur-sm transition-all duration-500 shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 text-left">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 border-b border-white/5 pb-4 text-left">
                {cat.desc}
              </p>

              {/* Skills Sub-Grid inside each Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-4 p-4 border border-white/5 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  >
                    {/* SVG Frame */}
                    <div className={`text-neutral-500 group-hover/skill:scale-110 transition-all duration-300 ${skill.color}`}>
                      {skill.icon}
                    </div>

                    {/* Skill Meta */}
                    <div className="flex flex-col text-left justify-center">
                      <span className="text-sm font-bold text-white tracking-wide group-hover/skill:text-brand-red transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
