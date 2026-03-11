// import { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { Menu, X, Moon, Sun } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   const navLinks = [
//     { name: 'Home', to: 'hero' },
//     { name: 'About', to: 'about' },
//     { name: 'Experience', to: 'experience' },
//     { name: 'Projects', to: 'projects' },
//     { name: 'Skills', to: 'skills' },
//     { name: 'Certifications', to: 'certifications' },
//     { name: 'Education', to: 'education' },
//     { name: 'Contact', to: 'contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//           isScrolled ? 'glass shadow-lg' : 'bg-transparent'
//         }`}
//       >
//         <nav className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <Link to="hero" smooth duration={500} className="cursor-pointer">
//               <motion.h1
//                 whileHover={{ scale: 1.05 }}
//                 className="text-2xl font-heading text-gradient"
//               >
//                 SS
//               </motion.h1>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.to}
//                   smooth
//                   duration={500}
//                   spy
//                   offset={-80}
//                   className="relative cursor-pointer text-sm font-medium text-foreground transition-colors hover:text-primary group"
//                 >
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
//                 </Link>
//               ))}

//               {/* Theme Toggle */}
//               <button
//                 onClick={() => setIsDark(!isDark)}
//                 className="p-2 rounded-lg bg-card hover:bg-muted transition-colors"
//                 aria-label="Toggle theme"
//               >
//                 {isDark ? (
//                   <Sun className="w-5 h-5 text-foreground" />
//                 ) : (
//                   <Moon className="w-5 h-5 text-foreground" />
//                 )}
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex md:hidden items-center space-x-4">
//               <button
//                 onClick={() => setIsDark(!isDark)}
//                 className="p-2 rounded-lg bg-card hover:bg-muted transition-colors"
//                 aria-label="Toggle theme"
//               >
//                 {isDark ? (
//                   <Sun className="w-5 h-5 text-foreground" />
//                 ) : (
//                   <Moon className="w-5 h-5 text-foreground" />
//                 )}
//               </button>
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-foreground"
//                 aria-label="Toggle menu"
//               >
//                 {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '100%' }}
//             className="fixed inset-0 z-50 bg-background md:hidden"
//           >
//             <div className="flex flex-col items-center justify-center h-full space-y-8">
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="absolute top-6 right-6 text-foreground"
//                 aria-label="Close menu"
//               >
//                 <X className="w-8 h-8" />
//               </button>

//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Link
//                     to={link.to}
//                     smooth
//                     duration={500}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="text-3xl font-heading text-foreground hover:text-primary transition-colors cursor-pointer"
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;

























import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Set the default theme to dark

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="nav-capsule">
          {/* Brand Logo */}
          <Link to="hero" smooth duration={800} className="cursor-pointer group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <span className="text-primary-foreground font-serif font-bold text-2xl">M</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={800}
                spy
                offset={-80}
                activeClass="text-accent"
                className="relative cursor-pointer text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2.5 rounded-full glass-premium flex items-center gap-2 hover:scale-105 transition-all duration-300 group shadow-glow-sm"
            >
              <Download className="w-4 h-4 text-accent group-hover:animate-bounce" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">Resume</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full glass-premium flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-foreground"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-heading text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-3xl font-heading text-accent hover:text-primary transition-colors cursor-pointer"
                >
                  <Download className="w-8 h-8" />
                  DOWNLOAD RESUME
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
