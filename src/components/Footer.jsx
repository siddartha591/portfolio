import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitors, setVisitors] = useState(1284);

  // Local storage visitor simulator logic
  useEffect(() => {
    const key = "portfolio_visitor_count";
    const current = localStorage.getItem(key);
    if (!current) {
      localStorage.setItem(key, "1284");
      setVisitors(1284);
    } else {
      const incremented = parseInt(current, 10) + 1;
      localStorage.setItem(key, incremented.toString());
      setVisitors(incremented);
    }
  }, []);

  const labelStyle = "text-xs font-mono tracking-[0.25em] text-white/40 uppercase mb-4";
  const itemStyle = "text-sm text-neutral-300 font-light tracking-wide hover:text-white transition-colors duration-300";

  return (
    <footer
      id="contact"
      className="relative w-full min-h-[50vh] bg-[#111111] text-[#F4F4F4] pt-24 pb-12 overflow-hidden flex flex-col justify-between select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between h-full gap-16">
        
        {/* Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-b border-white/5 pb-12">
          
          {/* Left Column: Contact details & response speed */}
          <div className="flex flex-col">
            <h4 className={labelStyle}>Availability Status</h4>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-base font-bold tracking-wide uppercase">Available For Work</span>
            </div>
            
            <ul className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              <li>// Roles: Full-Time / Internship</li>
              <li>// Response Time: Within 24 Hours</li>
              <li>// Location: Andhra Pradesh, India</li>
            </ul>
          </div>

          {/* Center Column: Experience metrics */}
          <div className="flex flex-col">
            <h4 className={labelStyle}>Experience Metrics</h4>
            <p className="text-xl font-bold tracking-tight text-white mb-2 uppercase">
              6 Months of Experience
            </p>
            <a
              href="#projects"
              className="text-sm font-mono tracking-wider text-brand-red hover:text-white uppercase transition-colors inline-flex items-center gap-1.5 group w-fit border-b border-brand-red/30 pb-0.5 hover:border-white transition-all duration-300"
            >
              View Case Studies
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Right Column: Performance scorecard & visitors */}
          <div className="flex flex-col">
            <h4 className={labelStyle}>Performance Audit</h4>
            
            {/* Lighthouse Stats Row */}
            <div className="flex gap-4 items-center mb-3">
              {[
                { name: "Perf", val: 98 },
                { name: "Acc", val: 100 },
                { name: "SEO", val: 100 }
              ].map((badge) => (
                <div key={badge.name} className="flex flex-col font-mono text-center">
                  <div className="text-[14px] font-black text-emerald-400">{badge.val}</div>
                  <div className="text-[7px] text-white/40 tracking-widest uppercase mt-0.5">{badge.name}</div>
                </div>
              ))}
            </div>

            {/* Simulated visitor count */}
            <p className="text-[10px] font-mono text-white/50 tracking-wider">
              PORTFOLIO VISITORS // <span className="text-brand-red font-bold">{visitors.toLocaleString()}</span>
            </p>
          </div>
        </div>

        {/* Center Hero Branding: Massive typography centerpiece */}
        <div className="w-full flex items-center justify-center py-6 overflow-hidden">
          <h1
            className="text-6xl sm:text-7xl lg:text-[9vw] font-black tracking-tighter text-[#222222] hover:text-[#f4f4f4] leading-none select-none cursor-default transition-colors duration-700 font-sans w-full text-center uppercase"
          >
            Siddartha
          </h1>
        </div>

        {/* Bottom Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-end text-xs font-mono text-white/50 tracking-wider pt-6">
          
          {/* Left Column: Credits & Build with stack */}
          <div className="flex flex-col gap-2">
            <span>© {currentYear} SIDDARTHA // ALL RIGHTS RESERVED</span>
            <span className="text-[9px] text-white/30 uppercase tracking-widest leading-relaxed">
              Built with React 19, Tailwind CSS v4, Framer Motion, Vite, and deployed on Vercel.
            </span>
          </div>

          {/* Center Column: Direct Email & Phone CTA */}
          <div className="flex flex-col items-start md:items-center gap-1.5">
            <a
              href="mailto:kandulasiddartha540@gmail.com"
              className="text-base md:text-lg font-bold tracking-tight text-white lowercase hover:text-brand-red transition-colors duration-300 relative group py-0.5 border-b border-white/10 hover:border-brand-red/50"
            >
              kandulasiddartha540@gmail.com
            </a>
            <a
              href="tel:9059895899"
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-300 tracking-widest mt-1"
            >
              +91 90598 95899
            </a>
          </div>

          {/* Right Column: Policies */}
          <div className="flex justify-start md:justify-end gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-300 pb-0.5 border-b border-transparent hover:border-white">
              PRIVACY POLICY
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-300 pb-0.5 border-b border-transparent hover:border-white">
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
