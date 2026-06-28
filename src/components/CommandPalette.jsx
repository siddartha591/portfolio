import { useState, useEffect, useRef } from "react";
import { Search, Globe, FileText, ArrowRight, User, Terminal, Cpu } from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    { name: "Go to About", category: "Navigation", icon: User, action: () => scrollToSection("about") },
    { name: "Go to Skills", category: "Navigation", icon: Cpu, action: () => scrollToSection("skills") },
    { name: "Go to Projects", category: "Navigation", icon: Terminal, action: () => scrollToSection("projects") },
    { name: "Go to Experience", category: "Navigation", icon: Terminal, action: () => scrollToSection("experience") },
    { name: "Go to Contact", category: "Navigation", icon: Globe, action: () => scrollToSection("contact") },
    { 
      name: "Download Resume", 
      category: "Resource", 
      icon: FileText, 
      action: () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Kandula_Siddartha_Resume.pdf";
        link.click();
      }
    },
    { name: "Visit GitHub Profile", category: "External Link", icon: Globe, action: () => window.open("https://github.com/siddartha591", "_blank") },
    { name: "Visit LinkedIn Profile", category: "External Link", icon: Globe, action: () => window.open("https://www.linkedin.com/in/kandula-siddartha/", "_blank") }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Listen to global shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle focus when open
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      // Timeout to focus input cleanly
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Handle keyboard navigation inside list
  const handleListKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) {
    return (
      // Small trigger badge floating at the bottom right next to shortcuts on large devices
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[98] hidden lg:flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800/80 border border-white/5 px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-lg select-none text-[10px] font-mono text-neutral-400 cursor-pointer active:scale-95 transition-all duration-300"
      >
        <span className="text-white font-bold flex items-center gap-1.5">
          <Search size={10} className="text-brand-red" /> Search
        </span>
        <kbd className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white">Ctrl K</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 select-none">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0 z-0" onClick={() => setIsOpen(false)} />

      {/* Modal Container */}
      <div 
        className="w-full max-w-lg bg-[#0e0e0e] border border-white/10 rounded-2.5xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
        onKeyDown={handleListKeyDown}
      >
        {/* Input area */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-neutral-950/40">
          <Search className="text-brand-red w-5 h-5 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands, sections, or external links..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-white text-sm placeholder-neutral-500 font-light"
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[9px] font-mono text-neutral-500 border border-white/10 hover:border-white/20 px-2 py-0.5 rounded uppercase"
          >
            Esc
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-[300px] overflow-y-auto p-2 flex flex-col gap-0.5">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={cmd.name}
                  onClick={() => {
                    cmd.action();
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected 
                      ? "bg-brand-red/10 text-white border border-brand-red/20" 
                      : "text-neutral-400 hover:text-white border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-1.5 rounded-lg border transition-colors ${
                      isSelected ? "bg-brand-red/10 border-brand-red/30 text-brand-red" : "bg-white/5 border-white/5 text-neutral-500"
                    }`}>
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className={`font-bold transition-colors ${isSelected ? "text-white" : "text-neutral-200"}`}>
                        {cmd.name}
                      </div>
                      <div className="text-[9px] font-mono text-neutral-500 mt-0.5 uppercase tracking-widest">
                        {cmd.category}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-brand-red">
                      SELECT <ArrowRight size={10} />
                    </div>
                  )}
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-neutral-500 font-mono uppercase tracking-widest">
              No matching commands found
            </div>
          )}
        </div>

        {/* Footnote indicators */}
        <div className="border-t border-white/5 bg-neutral-950/20 px-5 py-3 flex justify-between items-center text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigation</span>
            <span>↵ Select</span>
          </div>
          <span>Kandula Siddartha // Port v2</span>
        </div>

      </div>
    </div>
  );
}
