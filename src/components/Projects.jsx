import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Smartphone, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight,
  Code,
  Layers,
  CheckCircle,
  AlertTriangle,
  FileText,
  Eye,
  MapPin,
  TrendingUp
} from "lucide-react";

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  
  // State for the interactive phone mockup theme (inside FinanceFlow card)
  const [phoneDark, setPhoneDark] = useState(true);

  const filters = ["All", "React", "Mobile", "AI", "Full Stack"];

  const projects = [
    {
      id: 1,
      title: "Smart Career Assistance System",
      category: "AI Recruitment Platform // Machine Learning & NLP",
      tech: ["Python", "Streamlit", "Machine Learning", "NLP", "BERT", "SQLite"],
      filterTags: ["AI"],
      overview: "An AI-powered recruitment platform designed to simplify the hiring process by automating resume screening, candidate matching, and placement prediction.",
      icon: Brain,
      color: "from-blue-500/20 to-purple-600/20",
      github: "https://github.com/siddartha591/Smart-Career-Assistance-System",
      demo: "#",
      metrics: ["✓ 92% Match Accuracy", "✓ 5+ ML Models Tested", "✓ 20+ NLP Routines", "✓ 3 Major Modules"],
      problem: "HR departments spend thousands of hours manually filtering resumes. Generic keyword matching misses high-potential candidates who use different synonyms or phrasing, leading to high recruitment costs and sub-optimal hires.",
      solution: "Developed an intelligent NLP pipeline that parses resumes, maps semantic meanings using BERT embeddings, compares them to job descriptions, predicts candidate placement success, and prepares them with customized interview modules.",
      research: "Analyzed CV structures from 100+ candidates across different disciplines. Found that traditional ATS software missed 40% of qualified candidates due to simple keyword mismatches (e.g., 'React' vs 'ReactJS').",
      wireframes: "Created a linear candidate journey mapping CV Upload -> Semantic Parsing -> Matching Score Matrix -> Structured Skill Gaps -> Automated Q&A Preparation.",
      lessons: "Learned that custom tokenizer weights are essential when working with highly specialized software roles, and BERT embeddings dramatically outperform standard TF-IDF models in mapping synonyms.",
      architecture: [
        "Resume Upload -> Extraction of text layers via PyPDF2 / PDFMiner.",
        "NLP Synonyms parsing -> Standardizing skill tokens.",
        "BERT Transformer model -> Vectorizing resume and job descriptions for semantic distance mapping.",
        "Cosine Similarity Scoring -> Ranking candidate matches.",
        "Random Forest Classifier -> Predicting placement probability."
      ],
      challenges: [
        "Handling diverse, multi-column PDF layouts which scrambled raw text output. Solved by integrating structured layout parsers.",
        "Eliminating bias in ML models trained on high CGPA parameters. Tuned training weights to emphasize project portfolios."
      ],
      results: [
        "Ranked candidate resumes with 92% semantic accuracy.",
        "Reduced initial screening overheads for recruiters by 70%.",
        "Successfully integrated a mock preparation module that matches custom company-wise questions."
      ]
    },
    {
      id: 2,
      title: "FinanceFlow – Money Manager App",
      category: "Mobile Expense Management // Personal Finance",
      tech: ["React Native", "Expo Go", "EAS Build", "Firebase", "Vector Icons"],
      filterTags: ["Mobile", "React"],
      status: "Published on the Google Play Store",
      overview: "A mobile expense management application that helps users track their spending habits, manage budgets, and gain financial insights.",
      icon: Smartphone,
      color: "from-emerald-500/20 to-teal-600/20",
      github: "https://github.com/siddartha591/FinanceFlow-App",
      demo: "https://play.google.com/store/apps/details?id=com.siddartha12.financeflow&hl=en_IN",
      metrics: ["✓ 15+ Screens", "✓ 30+ Core Components", "✓ Google Play Published", "✓ Offline-First Mode"],
      problem: "Users struggle to keep track of micro-expenses, leading to monthly overspending. Most financial apps are bloated with ads, require bank integrations, and lack quick, user-friendly mobile logs.",
      solution: "Created a minimalist, lightning-fast offline-first mobile app using React Native, featuring instant expense entry, automatic categorization, target monthly budgets, and clean analytics visual graphs.",
      research: "Interviewed 25 active users regarding financial budgeting habits. 80% reported abandoning expense trackers because they required manual syncs or were too slow to log purchases on the go.",
      wireframes: "Designed a clean tab-based navigation flow: Dashboard view with balance progress circles -> Quick Add Overlay button -> Transaction History list -> Category Breakdown reports page.",
      lessons: "Offline-first databases require robust offline-to-cloud caching architectures. Using native driver animations is mandatory to maintain 60fps renders on older Android platforms.",
      architecture: [
        "React Native Mobile App -> Fluid cross-platform layout.",
        "Expo Runtime -> Facilitating device sensor linkages and storage APIs.",
        "Local Secure Store -> Storing private credentials.",
        "Firebase Backend -> Synchronizing transaction ledgers securely in real-time.",
        "Custom Visual Canvas -> Rendering visual budget rings and category expense bars."
      ],
      challenges: [
        "Ensuring smooth animations on low-spec Android devices. Resolved by offloading graph rendering to native UI threads.",
        "Structuring local-to-cloud database syncing to handle intermittent offline connectivity without data loss."
      ],
      results: [
        "Successfully published on the Google Play Store.",
        "Achieved a 4.8 star average rating from beta testers.",
        "Helped users reduce discretionary spending by an average of 18%."
      ]
    },
    {
      id: 3,
      title: "Full-Stack MERN Blog Platform",
      category: "Web Application // Content Management System",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
      filterTags: ["Full Stack", "React"],
      overview: "A secure web application that allows users to create, manage, and share blog content with secure authentication and role-based access control.",
      icon: Globe,
      color: "from-red-500/20 to-orange-600/20",
      github: "https://github.com/siddartha591/Blog-Platform",
      demo: "#",
      metrics: ["✓ 12+ API Endpoints", "✓ 6+ Admin Views", "✓ HttpOnly Cookie Auth", "✓ Markdown Editor"],
      problem: "Traditional blogging platforms sell user data, lack simple custom styling control, and are vulnerable to comment spam. Developers need structured full-stack boilerplate systems with secure authentication templates.",
      solution: "Engineered a custom MERN platform utilizing JSON Web Tokens, secure cookies, rich markdown editors, automated spam-filtering middlewares, and complete administrator dashboards for article governance.",
      research: "Reviewed 10 open-source blog platforms to identify common architectural issues. Found that 90% stored JWT tokens in localStorage, leaving them vulnerable to Cross-Site Scripting (XSS) leaks.",
      wireframes: "Mocked up client routing states: Login/Signup -> Dynamic Feed (Public) -> Article Detail Page -> Admin Dashboard editor (Protected under session cookies).",
      lessons: "Always use sanitization libraries for rendering custom markup blocks to block XSS hooks, and set HttpOnly flags on JWT cookies to block token read operations.",
      architecture: [
        "React SPA Front -> Styled with dark glassmorphic Tailwind CSS sheets.",
        "Node / Express Server -> Serving REST API routes securely.",
        "JWT Security -> Storing session tokens in HttpOnly secure cookies.",
        "RBAC Middleware -> Filtering admin routes (Create/Delete) from standard reader accounts.",
        "MongoDB / Mongoose ODM -> Relational schemes mapping posts, users, comments, and tags."
      ],
      challenges: [
        "Preventing Cross-Site Scripting (XSS) in articles edited via custom Rich Text editors. Solved by integrating sanitization hooks.",
        "Managing global login state seamlessly on client side. Implemented custom React context hooks to synchronize cookies."
      ],
      results: [
        "Established a secure, production-ready MERN boiler system.",
        "Achieved a sub-200ms API response time using MongoDB indexes.",
        "Zero token leakage incidents recorded during vulnerability scanner checks."
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter projects list
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.filterTags.includes(activeFilter);
  });

  return (
    <section 
      id="projects" 
      className="relative w-full bg-[#080808] text-white py-32 overflow-hidden border-b border-white/5"
    >
      {/* Dark Ambient Glowing Rings */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-left mb-16 select-none">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-inner text-xs font-mono tracking-widest uppercase mb-6 text-brand-red font-semibold">
            Selected Work // Showcase
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-none uppercase mb-6">
            Case <span className="text-stroke-white">Studies</span>
          </h2>
          
          <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl leading-relaxed">
            A deep dive into structural layouts, technical challenges solved, and architectural workflows. 
            Click on any project to expand its case study and interactive diagrams.
          </p>
        </div>

        {/* Workflow Timeline Section */}
        <div className="mb-20 bg-neutral-900/35 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-sm text-left">
          <span className="text-[10px] font-mono tracking-[0.3em] text-brand-red uppercase mb-4 block font-bold">
            // DEVELOPMENT PROCESS &amp; WORKFLOW
          </span>
          <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-tight">
            How I Build Software
          </h3>
          
          {/* Workflow Sequence */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center select-none">
            {[
              { step: "01", name: "Idea", desc: "Define goals" },
              { step: "02", name: "Research", desc: "Analyze stack" },
              { step: "03", name: "Design", desc: "UI wireframes" },
              { step: "04", name: "Development", desc: "Write clean code" },
              { step: "05", name: "Testing", desc: "Bug checks" },
              { step: "06", name: "Deployment", desc: "Build release" }
            ].map((node, i) => (
              <div key={node.name} className="flex flex-col items-center relative group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 group-hover:border-brand-red/40 group-hover:bg-brand-red/5 flex items-center justify-center font-mono font-bold text-brand-red text-sm transition-all duration-300 shadow-inner">
                  {node.step}
                </div>
                <div className="text-xs font-bold text-white uppercase mt-3">{node.name}</div>
                <div className="text-[9px] font-mono text-neutral-500 uppercase mt-0.5 tracking-wider">{node.desc}</div>
                {i < 5 && (
                  <div className="hidden md:block absolute top-6 left-[70%] w-[60%] h-[1px] bg-neutral-800 z-0 pointer-events-none group-hover:bg-brand-red/30 transition-colors" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Switcher Panel */}
        <div className="flex flex-wrap items-center gap-2 mb-10 select-none">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mr-4">// Filter Stack:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setExpandedId(null);
              }}
              className={`px-4.5 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-brand-red border-brand-red text-white shadow-lg scale-102"
                  : "bg-white/5 border-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              const isExpanded = expandedId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className={`border rounded-[2.5rem] p-6 md:p-10 bg-neutral-900/30 backdrop-blur-md transition-all duration-500 relative overflow-hidden ${
                    isExpanded 
                      ? "border-brand-red/45 shadow-[0_20px_50px_rgba(255,42,42,0.12)]" 
                      : "border-white/10 hover:border-brand-red/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.06)]"
                  }`}
                >
                  {/* Visual gradient stripe at top */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.color}`} />

                  {/* Card Top Row (Always visible) */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    
                    {/* Left block: Icon and summary */}
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red shrink-0 shadow-inner">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                      </div>

                      <div className="flex flex-col text-left">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-xs font-mono tracking-widest text-brand-red font-bold uppercase">
                            {project.category}
                          </span>
                          
                          {project.status && (
                            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/20">
                              {project.status}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl md:text-4.5xl font-black tracking-tight text-white mb-3 uppercase">
                          {project.title}
                        </h3>

                        <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed max-w-3xl">
                          {project.overview}
                        </p>

                        {/* Metric indicators preview */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 select-none">
                          {project.metrics.slice(0, 3).map((metric) => (
                            <span key={metric} className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right block: Tech Pills & Action trigger */}
                    <div className="flex flex-col items-start lg:items-end gap-6 shrink-0 lg:w-72">
                      <div className="flex flex-wrap gap-1.5 lg:justify-end">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-neutral-300 uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="w-full lg:w-auto px-6 py-3 rounded-full border border-white/10 hover:border-brand-red hover:bg-brand-red/10 text-xs font-mono uppercase tracking-wider text-white flex items-center justify-center gap-2 group transition-all duration-300 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Hide Case Study
                            <ChevronUp size={14} className="text-brand-red" />
                          </>
                        ) : (
                          <>
                            View Case Study
                            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Detailed Case Study Section */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden mt-8 pt-8 border-t border-white/10"
                      >
                        {/* Grid: Details (Left) + Interactive Visuals (Right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
                          
                          {/* Left Side: Editorial case study text */}
                          <div className="lg:col-span-7 flex flex-col gap-8">
                            
                            {/* Project Statistics Badges */}
                            <div>
                              <div className="flex items-center gap-2 text-brand-red mb-3">
                                <TrendingUp size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">Key Project Metrics</h4>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {project.metrics.map((metric) => (
                                  <div key={metric} className="p-3 border border-white/5 bg-white/5 rounded-xl font-bold text-xs text-white uppercase font-mono tracking-wider shadow-inner">
                                    {metric}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Problem Section */}
                            <div>
                              <div className="flex items-center gap-2 text-brand-red mb-3">
                                <AlertTriangle size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">The Problem</h4>
                              </div>
                              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                {project.problem}
                              </p>
                            </div>

                            {/* Research Section */}
                            <div>
                              <div className="flex items-center gap-2 text-brand-red mb-3">
                                <Eye size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">Analysis &amp; Research</h4>
                              </div>
                              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                {project.research}
                              </p>
                            </div>

                            {/* Wireframes / Flow Section */}
                            <div>
                              <div className="flex items-center gap-2 text-brand-red mb-3">
                                <MapPin size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">Wireframes &amp; User Flow</h4>
                              </div>
                              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                {project.wireframes}
                              </p>
                            </div>

                            {/* Solution Section */}
                            <div>
                              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                <CheckCircle size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">The Solution</h4>
                              </div>
                              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                {project.solution}
                              </p>
                            </div>

                            {/* Key Technical Challenges */}
                            <div>
                              <div className="flex items-center gap-2 text-brand-red mb-3">
                                <Code size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">Technical Challenges</h4>
                              </div>
                              <ul className="flex flex-col gap-2.5">
                                {project.challenges.map((challenge, idx) => (
                                  <li key={idx} className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed flex items-start gap-2">
                                    <span className="text-brand-red font-mono shrink-0 select-none">//</span>
                                    <span>{challenge}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Outcomes & Results */}
                            <div>
                              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                <Layers size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">Measurable Results</h4>
                              </div>
                              <ul className="flex flex-col gap-2.5">
                                {project.results.map((result, idx) => (
                                  <li key={idx} className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed flex items-start gap-2">
                                    <span className="text-emerald-400 font-mono shrink-0 select-none">•</span>
                                    <span>{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Lessons Learned Section */}
                            <div>
                              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                <FileText size={16} />
                                <h4 className="text-xs font-mono tracking-widest uppercase font-bold">Lessons Learned</h4>
                              </div>
                              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                {project.lessons}
                              </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/5">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-md active:scale-95 cursor-pointer"
                              >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                GitHub Repository
                              </a>
                              {project.demo !== "#" && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                                >
                                  Live Demo / Store
                                  <ArrowUpRight size={14} />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Right Side: Responsive Visual Diagrams & Mockups */}
                          <div className="lg:col-span-5 flex flex-col justify-start items-center">
                            
                            {/* Case Study Indicator */}
                            <div className="w-full text-center lg:text-left mb-6">
                              <span className="text-[9px] font-mono tracking-[0.25em] text-white/30 uppercase">
                                // INTERACTIVE DIAGRAMS // ARCHITECTURE
                              </span>
                            </div>

                            {/* Project 1: Smart Career Assist Flowchart */}
                            {project.id === 1 && (
                              <div className="w-full max-w-sm flex flex-col gap-4 bg-neutral-950/60 p-6 rounded-3xl border border-white/5 shadow-inner">
                                
                                {/* Node 1: Resume */}
                                <div className="border border-white/10 bg-neutral-900 p-3 rounded-xl text-center shadow">
                                  <div className="text-[9px] font-mono text-brand-red uppercase font-semibold">Step 01 // Upload</div>
                                  <div className="text-xs font-bold text-white uppercase mt-0.5">Resume PDF / DOCX</div>
                                </div>

                                <div className="flex justify-center text-brand-red animate-pulse">↓</div>

                                {/* Node 2: NLP Parser */}
                                <div className="border border-white/10 bg-neutral-900 p-3 rounded-xl text-center shadow">
                                  <div className="text-[9px] font-mono text-brand-red uppercase font-semibold">Step 02 // Extraction</div>
                                  <div className="text-xs font-bold text-white uppercase mt-0.5">NLP Synonyms &amp; Text Parsing</div>
                                </div>

                                <div className="flex justify-center text-brand-red animate-pulse">↓</div>

                                {/* Node 3: BERT Model */}
                                <div className="border border-brand-red/30 bg-neutral-900 p-3 rounded-xl text-center shadow-[0_0_15px_rgba(255,42,42,0.1)]">
                                  <div className="text-[9px] font-mono text-brand-red uppercase font-bold">Step 03 // Semantic Vector</div>
                                  <div className="text-xs font-bold text-emerald-400 uppercase mt-0.5">BERT Vector Embeddings</div>
                                </div>

                                <div className="flex justify-center text-brand-red animate-pulse">↓</div>

                                {/* Node 4: Match Scoring */}
                                <div className="border border-white/10 bg-neutral-900 p-3 rounded-xl text-center shadow">
                                  <div className="text-[9px] font-mono text-brand-red uppercase font-semibold">Step 04 // Alignment</div>
                                  <div className="text-xs font-bold text-white uppercase mt-0.5">Cosine Similarity Match</div>
                                </div>

                                <div className="flex justify-center text-brand-red animate-pulse">↓</div>

                                {/* Node 5: Output */}
                                <div className="border border-emerald-500/20 bg-emerald-950/20 p-3 rounded-xl text-center shadow-[0_0_15px_rgba(16,185,129,0.08)]">
                                  <div className="text-[9px] font-mono text-emerald-400 uppercase font-bold">Step 05 // Recommendation</div>
                                  <div className="text-xs font-bold text-white uppercase mt-0.5">Interview Q&amp;A Prep Modules</div>
                                </div>

                              </div>
                            )}

                            {/* Project 2: FinanceFlow Mobile Phone Mockup */}
                            {project.id === 2 && (
                              <div className="relative">
                                {/* Phone Container */}
                                <div className="w-60 h-[460px] bg-neutral-950 border-[6px] border-neutral-800 rounded-[2.5rem] relative shadow-2xl overflow-hidden mx-auto flex flex-col justify-between border-t-[10px] border-b-[10px]">
                                  
                                  {/* Phone Screen wrapper */}
                                  <div className={`w-full h-full flex flex-col justify-between p-4 transition-colors duration-500 ${
                                    phoneDark ? "bg-neutral-900 text-white" : "bg-neutral-50 text-neutral-900"
                                  }`}>
                                    
                                    {/* Mobile Screen Header */}
                                    <div className="flex items-center justify-between border-b pb-2 mb-2 border-neutral-700/20">
                                      <div className="text-[10px] font-mono tracking-widest font-bold">FinanceFlow</div>
                                      
                                      {/* Simulated Theme Toggler inside mockup */}
                                      <button 
                                        onClick={() => setPhoneDark(!phoneDark)}
                                        className={`px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider border transition-all ${
                                          phoneDark 
                                            ? "bg-white text-black border-white" 
                                            : "bg-neutral-900 text-white border-neutral-900"
                                        }`}
                                      >
                                        {phoneDark ? "Light" : "Dark"}
                                      </button>
                                    </div>

                                    {/* Mobile Balance Details */}
                                    <div className="text-left mt-2">
                                      <div className={`text-[8px] font-mono uppercase tracking-wider ${phoneDark ? "text-white/40" : "text-neutral-500"}`}>
                                        Total Balance
                                      </div>
                                      <div className="text-2xl font-black tracking-tight mt-0.5">$2,450.00</div>
                                    </div>

                                    {/* Income & Expense Ring Blocks */}
                                    <div className="grid grid-cols-2 gap-2 my-2 text-left">
                                      <div className={`p-2 rounded-xl ${phoneDark ? "bg-white/5 border border-white/5" : "bg-neutral-250 border border-neutral-200"}`}>
                                        <div className={`text-[6px] font-mono uppercase tracking-wider ${phoneDark ? "text-white/40" : "text-neutral-500"}`}>Income</div>
                                        <div className="text-xs font-bold text-emerald-500">+$4,800</div>
                                      </div>
                                      <div className={`p-2 rounded-xl ${phoneDark ? "bg-white/5 border border-white/5" : "bg-neutral-250 border border-neutral-200"}`}>
                                        <div className={`text-[6px] font-mono uppercase tracking-wider ${phoneDark ? "text-white/40" : "text-neutral-500"}`}>Expenses</div>
                                        <div className="text-xs font-bold text-rose-500">-$2,350</div>
                                      </div>
                                    </div>

                                    {/* Interactive Progress Bar */}
                                    <div className="text-left">
                                      <div className="flex justify-between text-[7px] font-mono uppercase text-neutral-400">
                                        <span>Food Budget</span>
                                        <span>72% Spent</span>
                                      </div>
                                      <div className="w-full h-1.5 bg-neutral-700/30 rounded-full mt-1 overflow-hidden">
                                        <div className="w-[72%] h-full bg-amber-500 rounded-full" />
                                      </div>
                                    </div>

                                    {/* Transaction List */}
                                    <div className="flex-1 flex flex-col gap-1.5 mt-4 text-left">
                                      <span className={`text-[7px] font-mono uppercase tracking-wider mb-1 ${phoneDark ? "text-white/40" : "text-neutral-500"}`}>
                                        Transactions
                                      </span>

                                      {/* Item 1 */}
                                      <div className="flex justify-between items-center text-[10px] pb-1 border-b border-neutral-700/10">
                                        <div>
                                          <div className="font-bold">Starbucks Coffee</div>
                                          <div className="text-[7px] text-neutral-400">Food &amp; Drinks</div>
                                        </div>
                                        <span className="font-mono font-bold text-rose-500">-$5.20</span>
                                      </div>

                                      {/* Item 2 */}
                                      <div className="flex justify-between items-center text-[10px] pb-1 border-b border-neutral-700/10">
                                        <div>
                                          <div className="font-bold">Uber Ride</div>
                                          <div className="text-[7px] text-neutral-400">Transport</div>
                                        </div>
                                        <span className="font-mono font-bold text-rose-500">-$14.50</span>
                                      </div>

                                      {/* Item 3 */}
                                      <div className="flex justify-between items-center text-[10px]">
                                        <div>
                                          <div className="font-bold">Salary Deposit</div>
                                          <div className="text-[7px] text-neutral-400">Payroll</div>
                                        </div>
                                        <span className="font-mono font-bold text-emerald-500">+$2,400.00</span>
                                      </div>
                                    </div>

                                    {/* Bottom bar indicator */}
                                    <div className="w-full flex justify-center mt-2 border-t pt-2 border-neutral-700/20">
                                      <div className="w-16 h-1 bg-neutral-600 rounded-full" />
                                    </div>

                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Project 3: MERN Blog Auth Flow Diagram */}
                            {project.id === 3 && (
                              <div className="w-full max-w-sm flex flex-col gap-4 bg-neutral-950/60 p-6 rounded-3xl border border-white/5 shadow-inner">
                                
                                {/* Step 1: Request */}
                                <div className="flex gap-3 items-center border border-white/10 bg-neutral-900 p-3 rounded-xl shadow">
                                  <div className="w-6 h-6 rounded bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-xs font-mono font-bold">01</div>
                                  <div className="text-left">
                                    <div className="text-[9px] font-mono text-brand-red uppercase font-semibold">User Credentials</div>
                                    <div className="text-xs font-bold text-white uppercase mt-0.5">Post login request</div>
                                  </div>
                                </div>

                                <div className="h-4 w-[2px] bg-brand-red/35 ml-6" />

                                {/* Step 2: JWT signed */}
                                <div className="flex gap-3 items-center border border-white/10 bg-neutral-900 p-3 rounded-xl shadow">
                                  <div className="w-6 h-6 rounded bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-xs font-mono font-bold">02</div>
                                  <div className="text-left">
                                    <div className="text-[9px] font-mono text-brand-red uppercase font-semibold">JWT Generation</div>
                                    <div className="text-xs font-bold text-emerald-400 uppercase mt-0.5">Sign JWT &amp; set Secure Cookie</div>
                                  </div>
                                </div>

                                <div className="h-4 w-[2px] bg-brand-red/35 ml-6" />

                                {/* Step 3: Protected Gates */}
                                <div className="flex gap-3 items-center border border-brand-red/30 bg-neutral-900 p-3 rounded-xl shadow-[0_0_15px_rgba(255,42,42,0.1)]">
                                  <div className="w-6 h-6 rounded bg-brand-red/20 border border-brand-red/50 flex items-center justify-center text-brand-red text-xs font-mono font-bold">03</div>
                                  <div className="text-left">
                                    <div className="text-[9px] font-mono text-brand-red uppercase font-bold">Route Middlewares</div>
                                    <div className="text-xs font-bold text-white uppercase mt-0.5">Verify JWT Cookie payload</div>
                                  </div>
                                </div>

                                <div className="h-4 w-[2px] bg-brand-red/35 ml-6" />

                                {/* Step 4: RBAC Roles */}
                                <div className="flex gap-3 items-center border border-white/10 bg-neutral-900 p-3 rounded-xl shadow">
                                  <div className="w-6 h-6 rounded bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-xs font-mono font-bold">04</div>
                                  <div className="text-left">
                                    <div className="text-[9px] font-mono text-brand-red uppercase font-semibold">RBAC Authorization</div>
                                    <div className="text-xs font-bold text-white uppercase mt-0.5">Confirm Admin Role privileges</div>
                                  </div>
                                </div>

                                <div className="h-4 w-[2px] bg-brand-red/35 ml-6" />

                                {/* Step 5: DB collects */}
                                <div className="flex gap-3 items-center border border-emerald-500/20 bg-emerald-950/20 p-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.08)]">
                                  <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold">05</div>
                                  <div className="text-left">
                                    <div className="text-[9px] font-mono text-emerald-400 uppercase font-bold">Database Queries</div>
                                    <div className="text-xs font-bold text-white uppercase mt-0.5">Mongoose collection access</div>
                                  </div>
                                </div>

                              </div>
                            )}

                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
