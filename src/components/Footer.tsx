import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/megha-shyam-h/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:meghashyam1008@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-24 overflow-hidden">
      {/* Liquid Divider */}
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center space-y-16">
          {/* Brand/Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-heading text-accent italic tracking-tighter"
          >
            MH
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.1 }}
                className="w-16 h-16 rounded-[1.5rem] glass-premium flex items-center justify-center hover:border-accent/40 transition-all shadow-2xl group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-accent transition-colors relative group"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground/40 text-xs tracking-widest uppercase">
            © 2024 Meghashyam H. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary/20 blur-2xl" />
    </footer>
  );
};

export default Footer;
