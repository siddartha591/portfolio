import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Adjust navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-black/60 backdrop-blur-md border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center text-2xl font-black tracking-tight text-white select-none">
            Siddartha
            <span className="w-2 h-2 rounded-full bg-brand-red ml-0.5 inline-block animate-pulse"></span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {menuItems.map((item, idx) => (
              <li
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={item.href}
                  className="text-sm font-medium tracking-wider text-white/70 hover:text-white uppercase transition-colors duration-300"
                >
                  {item.name}
                </a>
                {/* Growing underline effect */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ${
                    hoveredIndex === idx ? "w-full" : "w-0"
                  }`}
                />
              </li>
            ))}
          </ul>



          {/* Mobile Hamburguer Icon */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white hover:text-brand-red transition-colors focus:outline-none z-[1001]"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-down Red Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 w-full h-screen bg-brand-red z-[1000] flex flex-col justify-between p-8 md:hidden"
          >
            {/* Header placeholder to push down content */}
            <div className="h-16"></div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 my-auto">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  className="overflow-hidden"
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-4xl font-extrabold tracking-tight text-white uppercase hover:text-black transition-colors duration-300 block py-2"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Area inside panel */}
            <motion.div
              variants={menuItemVariants}
              className="border-t border-white/20 pt-6 flex flex-col gap-4"
            >

              <div className="flex justify-between items-center text-xs text-white/60 font-mono tracking-widest uppercase mt-2">
                <span>Based Worldwide</span>
                <span>© 2026 SIDDARTHA</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
