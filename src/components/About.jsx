import { motion } from "framer-motion";

export default function About() {
  // SVG Star definition
  const StarIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black pointer-events-none select-none">
      <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
    </svg>
  );

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-brand-red text-white flex flex-col justify-between overflow-hidden pt-24 pb-0"
    >
      {/* Decorative Star 1 */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 left-[10%] z-10 hidden md:block"
      >
        <StarIcon />
      </motion.div>

      {/* Decorative Star 2 */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 0.85, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-32 right-[8%] z-10 hidden md:block"
      >
        <StarIcon />
      </motion.div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 my-auto pb-12">
        {/* Left Column: Suspended ID Badge */}
        <div className="lg:col-span-5 flex flex-col items-center relative min-h-[360px] md:min-h-[600px] justify-start pt-6 md:pt-12">
          
          {/* Lanyard Strap hanging from top of section */}
          <div className="absolute top-0 w-2.5 bg-neutral-950 h-32 md:h-44 shadow-lg rounded-b-sm hidden md:flex items-end justify-center z-20">
            {/* Lanyard Metal Clip / Ring */}
            <div className="w-6 h-6 bg-zinc-400 border border-zinc-500 rounded-full shadow-inner flex items-center justify-center translate-y-3">
              <div className="w-3.5 h-3.5 bg-neutral-950 rounded-full border border-zinc-500" />
            </div>
          </div>

          {/* Metal D-Ring connector */}
          <div className="absolute top-[120px] md:top-[168px] w-8 h-5 border-[3px] border-zinc-400 rounded-b-md z-10 shadow-sm hidden md:block" />

          {/* Hanging ID Badge Card */}
          <motion.div
            initial={{ rotate: -8, y: 50, opacity: 0 }}
            whileInView={{ rotate: -3, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="mt-6 md:mt-48 relative w-64 sm:w-72 md:w-80 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] z-10 flex flex-col justify-between aspect-[3/4] select-none text-left"
          >
            {/* Badge Top Clip Hole Detail */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-black border border-neutral-800 rounded-full shadow-inner" />

            {/* Pass Title */}
            <div className="flex justify-between items-center text-[10px] font-mono text-white/40 tracking-widest uppercase border-b border-white/10 pb-3">
              <span>DEV PASS // 2026</span>
              <span className="text-brand-red font-bold">VIP ACCESS</span>
            </div>

            {/* Profile Avatar Frame */}
            <div className="my-5 bg-neutral-850 border border-neutral-700 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-1 relative shadow-inner">
              {/* Graphic Profile Photo (Vector SVG avatar representing a developer with glasses) */}
              <svg className="w-full h-full text-neutral-600 bg-neutral-800" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="48" fill="#18181b" />
                {/* Developer Shoulders */}
                <path d="M15,90 C15,75 25,65 50,65 C75,65 85,75 85,90 Z" fill="#2d2d30" />
                {/* Neck */}
                <rect x="46" y="55" width="8" height="12" fill="#52525b" />
                {/* Face */}
                <circle cx="50" cy="42" r="18" fill="#71717a" />
                {/* Hair/Beanie */}
                <path d="M32,40 C32,22 68,22 68,40 Z" fill="#09090b" />
                {/* Glasses */}
                <rect x="36" y="38" width="11" height="6" rx="2" fill="none" stroke="#ff2a2a" strokeWidth="2.5" />
                <rect x="53" y="38" width="11" height="6" rx="2" fill="none" stroke="#ff2a2a" strokeWidth="2.5" />
                <line x1="47" y1="41" x2="53" y2="41" stroke="#ff2a2a" strokeWidth="2.5" />
                {/* Laptop reflection light */}
                <path d="M25,85 L75,85 L65,95 L35,95 Z" fill="rgba(255,42,42,0.15)" />
              </svg>

              {/* Holographic Watermark */}
              <div className="absolute bottom-2 right-2 border border-brand-red/30 px-2 py-0.5 rounded text-[8px] font-mono text-brand-red bg-brand-red/10 backdrop-blur-sm tracking-wide">
                LS-99
              </div>
            </div>

            {/* Badge Details */}
            <div className="flex flex-col gap-1.5 text-white/80">
              <div className="text-[10px] font-mono text-white/40 tracking-wider">HOLDER NAME</div>
              <div className="text-xl font-bold tracking-tight text-white uppercase font-sans">
                SIDDARTHA
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-2 border-t border-white/10 pt-3">
                <div>
                  <div className="text-[8px] font-mono text-white/40 tracking-wider">DEPARTMENT</div>
                  <div className="text-xs font-semibold text-white/90">FULL STACK</div>
                </div>
                <div>
                  <div className="text-[8px] font-mono text-white/40 tracking-wider">CLEARANCE</div>
                  <div className="text-xs font-semibold text-brand-red">LEVEL 01</div>
                </div>
              </div>
            </div>

            {/* Barcode at bottom of Badge */}
            <div className="mt-5 pt-3 border-t border-white/10 flex flex-col gap-1 items-center">
              {/* Barcode lines */}
              <div className="w-full h-8 flex items-center bg-white/5 px-2 rounded">
                <div className="h-6 w-full flex justify-between">
                  <div className="w-[3px] bg-white h-full" />
                  <div className="w-[1px] bg-white h-full" />
                  <div className="w-[2px] bg-white h-full" />
                  <div className="w-[4px] bg-white h-full" />
                  <div className="w-[1px] bg-white h-full" />
                  <div className="w-[3px] bg-white h-full" />
                  <div className="w-[2px] bg-white h-full" />
                  <div className="w-[1px] bg-white h-full" />
                  <div className="w-[4px] bg-white h-full" />
                  <div className="w-[1px] bg-white h-full" />
                  <div className="w-[2px] bg-white h-full" />
                  <div className="w-[3px] bg-white h-full" />
                  <div className="w-[1px] bg-white h-full" />
                  <div className="w-[4px] bg-white h-full" />
                </div>
              </div>
              <span className="text-[8px] font-mono text-white/30 tracking-[0.25em]">
                *409-LS-2026*
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bio, Metadata Grid, and Resume */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left select-none">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase mb-6 leading-none"
          >
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-lg leading-relaxed text-red-100 font-light flex flex-col gap-4 max-w-2xl"
          >
            <p>
              I am <span className="font-extrabold text-black text-lg md:text-2xl tracking-tight">SIDDARTHA</span>, a dedicated Frontend and Full Stack Software Developer. I build speed-tuned, highly interactive user experiences that connect seamlessly to robust server infrastructures.
            </p>
            <p>
              I specialize in engineering client-side interfaces using React.js, React Native, and Tailwind CSS. Additionally, I construct structured databases and secure backend RESTful APIs using Node.js, Java, MongoDB, and Express. My focus is on writing clean, scalable code that converts designs into fluid applications.
            </p>
          </motion.div>

          {/* Metadata details grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl"
          >
            {/* Location */}
            <div className="bg-black/10 border border-black/15 p-4 rounded-xl hover:bg-black/15 transition-colors duration-300">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-1 font-semibold">Location</div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">Andhra Pradesh, India</div>
            </div>

            {/* Education */}
            <div className="bg-black/10 border border-black/15 p-4 rounded-xl hover:bg-black/15 transition-colors duration-300">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-1 font-semibold">Education</div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">B.Tech Computer Science</div>
            </div>

            {/* CGPA */}
            <div className="bg-black/10 border border-black/15 p-4 rounded-xl hover:bg-black/15 transition-colors duration-300">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-1 font-semibold">CGPA Metric</div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">8.04 // 10.00</div>
            </div>

            {/* Experience */}
            <div className="bg-black/10 border border-black/15 p-4 rounded-xl hover:bg-black/15 transition-colors duration-300">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-1 font-semibold">Experience</div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">6 Months</div>
            </div>

            {/* Availability */}
            <div className="bg-black/10 border border-black/15 p-4 rounded-xl hover:bg-black/15 transition-colors duration-300 flex flex-col justify-center">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-1 font-semibold">Clearance / Status</div>
              <div className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Available Full-Time
              </div>
            </div>

            {/* Languages */}
            <div className="bg-black/10 border border-black/15 p-4 rounded-xl hover:bg-black/15 transition-colors duration-300">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-1 font-semibold">Languages</div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">English, Telugu, Hindi</div>
            </div>
          </motion.div>

          {/* Now & Why Me Sections */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-2xl"
          >
            {/* Now Section */}
            <div className="bg-black/10 border border-black/15 p-5 rounded-xl hover:bg-black/15 transition-all duration-300">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-3 font-semibold">// Currently (Now)</div>
              <ul className="flex flex-col gap-2.5 text-xs text-red-100 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Building Portfolio V2
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Learning Spring Boot
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Practicing DSA
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Preparing for Interviews
                </li>
              </ul>
            </div>

            {/* Why Me Section */}
            <div className="bg-black/10 border border-black/15 p-5 rounded-xl hover:bg-black/15 transition-all duration-300">
              <div className="text-[10px] font-mono text-black/50 tracking-widest uppercase mb-3 font-semibold">// Why Work With Me?</div>
              <ul className="flex flex-col gap-2.5 text-xs text-white/95 font-semibold">
                <li className="flex items-center gap-2 text-white">
                  <span className="text-white">✔</span> Fast Learner
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="text-white">✔</span> Strong React Fundamentals
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="text-white">✔</span> Published Mobile App
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="text-white">✔</span> Full Stack Development
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="/resume.pdf"
              download="Kandula_Siddartha_Resume.pdf"
              className="inline-block px-8 py-4 bg-black text-white hover:text-brand-red font-bold rounded-full hover:scale-105 hover:bg-zinc-900 transition-all duration-300 shadow-md active:scale-95 text-sm uppercase tracking-wider"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider: Large organic torn-paper SVG transition */}
      <div className="w-full relative bottom-0 left-0 right-0 z-20 pointer-events-none translate-y-1">
        <svg
          className="w-full h-16 md:h-24 fill-white"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C120,20 240,-5 360,15 C480,35 600,0 720,25 C840,48 960,12 1080,20 C1200,28 1320,-5 1440,15 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
