import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom Cursor DOM references
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  // Custom Cursor tracking and scale transitions
  useEffect(() => {
    if (isLoading) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 180, fill: "forwards" });
      }
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest("a, button, select, input, textarea, [role='button']");
      if (cursorOutlineRef.current) {
        if (isInteractive) {
          cursorOutlineRef.current.style.width = "46px";
          cursorOutlineRef.current.style.height = "46px";
          cursorOutlineRef.current.style.borderColor = "#ff2a2a";
          cursorOutlineRef.current.style.backgroundColor = "rgba(255, 42, 42, 0.08)";
        } else {
          cursorOutlineRef.current.style.width = "28px";
          cursorOutlineRef.current.style.height = "28px";
          cursorOutlineRef.current.style.borderColor = "rgba(255, 42, 42, 0.35)";
          cursorOutlineRef.current.style.backgroundColor = "transparent";
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isLoading]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const targetTag = e.target.tagName.toLowerCase();
      if (targetTag === "input" || targetTag === "textarea") return;

      const key = e.key.toLowerCase();
      if (key === "g") {
        window.open("https://github.com/siddartha591", "_blank");
      } else if (key === "r") {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Kandula_Siddartha_Resume.pdf";
        link.click();
      } else if (key === "l") {
        window.open("https://www.linkedin.com/in/kandula-siddartha/", "_blank");
      } else if (key === "p") {
        const sect = document.getElementById("projects");
        if (sect) sect.scrollIntoView({ behavior: "smooth" });
      } else if (key === "c") {
        const sect = document.getElementById("contact");
        if (sect) sect.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-brand-red selection:text-white font-sans overflow-x-hidden antialiased">
      {/* Dynamic Custom Cursor (hidden on coarse touchscreens) */}
      {!isLoading && (
        <>
          <div ref={cursorDotRef} className="custom-cursor-dot" />
          <div ref={cursorOutlineRef} className="custom-cursor-outline" />
        </>
      )}

      {/* Cinematic Luxury Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Sections (revealed after preloader exit) */}
      {!isLoading && (
        <div className="relative w-full">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Footer />

          {/* Keyboard Shortcuts Floating Tip */}
          <div className="fixed bottom-6 left-6 z-[99] hidden lg:block bg-neutral-900/80 border border-white/5 px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-lg select-none text-[10px] font-mono text-neutral-400">
            <span className="text-brand-red font-bold">Keybinds:</span> <kbd className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white">G</kbd> Hub // <kbd className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white">L</kbd> inkedIn // <kbd className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white">R</kbd> esume // <kbd className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white">P</kbd> rojects // <kbd className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-white">C</kbd> ontact
          </div>

          {/* Command Palette search overlay trigger */}
          <CommandPalette />
        </div>
      )}
    </div>
  );
}

export default App;
