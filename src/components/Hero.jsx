import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ChevronDown } from "lucide-react";
import heroVideo from "../assets/video.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Handle Play/Pause Toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // If the video has ended, reset it to the beginning
        if (videoRef.current.ended || videoRef.current.currentTime >= videoRef.current.duration - 0.1) {
          videoRef.current.currentTime = 0;
        }
        // Ensure sound plays when manually playing
        videoRef.current.muted = false;
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Play failed", err);
            setIsPlaying(false);
          });
      }
    }
  };

  // Track mouse coordinates for interactive Canvas particles
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Autoplay video after 2 seconds delay (matches preloader reveal)
  useEffect(() => {
    let playTimer;
    
    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Ensure it starts from the absolute beginning
        videoRef.current.muted = false; // Attempt to play unmuted by default
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Clean up the global click listener on successful play
            document.removeEventListener("click", attemptPlay);
          })
          .catch((err) => {
            console.log("Unmuted autoplay blocked by browser policy. Registering interaction trigger:", err);
            setIsPlaying(false);
            // Register interaction listener: plays unmuted on user's first click
            document.addEventListener("click", attemptPlay, { once: true });
          });
      }
    };

    playTimer = setTimeout(attemptPlay, 2000);

    return () => {
      clearTimeout(playTimer);
      document.removeEventListener("click", attemptPlay);
    };
  }, []);

  // HTML5 Canvas Fallback Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create particles
    const particleCount = 70;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        color: Math.random() > 0.6 ? "rgba(255, 42, 42, 0.45)" : "rgba(255, 255, 255, 0.2)",
      });
    }

    const draw = () => {
      // Clear transparently so it never blocks the video
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((p) => {
        const mouse = mouseRef.current;
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * 0.3;
          p.y -= Math.sin(angle) * 0.3;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary bounce
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Framer Motion Animation Settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2.3, // Wait for Preloader shutter
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const zoomInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-black flex items-center justify-between overflow-hidden"
    >
      {/* Background canvas for interactive particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        playsInline
        onEnded={() => {
          setIsPlaying(false);
          if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reset to beginning for next replay
          }
        }}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-75 transition-opacity duration-1000"
        src={heroVideo}
      />

      {/* Dark Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45 z-[2] pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pt-16">
        
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col justify-center h-full max-w-2xl select-none"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-brand-red text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3 leading-[0.95]"
          >
            Kandula Siddartha
          </motion.h1>

          <motion.h3
            variants={fadeUpVariants}
            className="text-xl md:text-3xl font-extrabold text-stroke-white uppercase tracking-wider mb-6"
          >
            Frontend Software Engineer
          </motion.h3>

          <motion.p
            variants={fadeUpVariants}
            className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-light shadow-black/40 text-shadow-sm"
          >
            I build modern, responsive, and scalable web applications using React, Java, and modern web technologies.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 hover:bg-neutral-200 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-95 text-sm uppercase tracking-wider font-semibold"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Kandula_Siddartha_Resume.pdf"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95 text-sm uppercase tracking-wider font-semibold"
            >
              Download Resume
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/siddartha591"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-brand-red hover:border-brand-red/50 hover:bg-brand-red/10 transition-all duration-300 active:scale-90"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kandula-siddartha/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-brand-red hover:border-brand-red/50 hover:bg-brand-red/10 transition-all duration-300 active:scale-90"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div 
            variants={fadeUpVariants} 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">6 Months</div>
              <div className="text-xs font-mono uppercase text-white/40 tracking-wider mt-1">Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">3+</div>
              <div className="text-xs font-mono uppercase text-white/40 tracking-wider mt-1">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">15+</div>
              <div className="text-xs font-mono uppercase text-white/40 tracking-wider mt-1">Technologies</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold text-emerald-400 tracking-tight">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                Open
              </div>
              <div className="text-xs font-mono uppercase text-white/40 tracking-wider mt-1">To Work</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Large Play Reel Button */}
        <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
          <motion.div
            variants={zoomInVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={togglePlay}
              className="group relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-110 hover:border-brand-red hover:shadow-[0_0_35px_rgba(255,42,42,0.4)] active:scale-95 focus:outline-none"
              aria-label={isPlaying ? "Pause Reel" : "Play Reel"}
            >
              {/* Pulsing Outer Border */}
              <span className="absolute inset-0 rounded-full border border-brand-red/30 scale-100 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Toggling Icon */}
              {isPlaying ? (
                <Pause className="text-white w-10 h-10 transition-transform group-hover:scale-110" />
              ) : (
                <Play className="text-white fill-white w-10 h-10 translate-x-1 transition-transform group-hover:scale-110" />
              )}
            </button>
            <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase select-none mt-2">
              {isPlaying ? "PAUSE" : "PLAY REEL"}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Center Scroll Indicator (Desktop Only) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <a href="#about" className="group flex flex-col items-center text-white/40 hover:text-white transition-colors duration-300">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase mb-1">
              SCROLL DOWN
            </span>
            <ChevronDown size={18} className="group-hover:text-brand-red transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
