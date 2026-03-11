import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Server, Cloud, Database, Shield, Terminal, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Layer */}
      <div className="liquid-mesh-vibrant" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
            {/* Headline Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-none text-foreground mb-8">
                MEGHASHYAM H
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-xl md:text-2xl font-heading text-accent italic">Java Full Stack Developer.</span>
                <div className="h-px w-24 bg-accent/30" />
              </div>
              <div className="mt-8 max-w-2xl">
                <p className="text-xl md:text-2xl font-heading text-foreground/90 leading-snug">
                  Building Scalable Systems. Designing APIs. Enabling Innovation.
                </p>
              </div>
            </motion.div>

            {/* Profile Avatar Selection Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="lg:col-span-4 relative group"
            >
              <div className="relative w-full aspect-square max-w-[450px] mx-auto">
                <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000" />
                <div className="relative h-full w-full rounded-[4rem] overflow-hidden glass-premium p-4">
                  <img
                    src="/image1.jpg"
                    alt="Meghashyam H"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Enterprise Tech */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="glass-premium rounded-[3rem] overflow-hidden p-8 group h-full flex flex-col">
                <div className="relative h-64 rounded-[2.5rem] overflow-hidden mb-8">
                  <img
                    src="/ai-mesh.png"
                    alt="Tech Mesh"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                    <Terminal className="w-3.5 h-3.5 text-white" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">Enterprise Tech</span>
                  </div>
                </div>
                <h3 className="text-3xl font-heading mb-4 leading-tight uppercase tracking-tight text-foreground">
                  Powering <span className="text-accent italic">Enterprise.</span>
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed font-light flex-grow">
                  Specializing in Spring Boot Microservices, Cloud-Native Architecture & Event-Driven Systems to solve complex enterprise challenges.
                </p>
                <Link to="projects" smooth duration={800}>
                  <Button className="w-full bg-accent text-white h-16 rounded-2xl hover:shadow-glow transition-all font-bold uppercase tracking-[0.2em] text-[10px]">
                    Explore projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Middle Card: Core Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="glass-premium rounded-[3rem] p-10 h-full">
                <h3 className="text-sm font-bold uppercase tracking-[0.4em] mb-12 text-accent">
                  Expertise Matrix
                </h3>
                <ul className="space-y-10">
                  {[
                    { icon: Code2, label: 'Java & Spring Boot', desc: 'Microservices & REST APIs' },
                    { icon: Cloud, label: 'Cloud & DevOps', desc: 'AWS, Azure, Docker' },
                    { icon: Database, label: 'Databases', desc: 'PostgreSQL, Redis, Kafka' },
                    { icon: Shield, label: 'Security', desc: 'OAuth2, JWT, RBAC' },
                    { icon: Server, label: 'System Design', desc: 'Scalable Architecture' },
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-heading text-lg text-foreground group-hover:text-accent transition-colors">{skill.label}</p>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">{skill.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Floating Iridescent Blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="lg:col-span-3 flex flex-col justify-center items-center py-12 relative"
            >
              <div className="relative blob-float">
                <img
                  src="/8k_image_premiu_remove_bg.png"
                  alt="Liquid Blob"
                  loading="lazy"
                  decoding="async"
                  className="w-80 h-80 object-contain drop-shadow-[0_0_120px_rgba(var(--accent-rgb),0.4)]"
                />
                <div className="absolute inset-0 bg-accent/5 blur-3xl animate-pulse" />
              </div>
              <div className="mt-12 text-center">
                <p className="text-serif italic text-2xl text-foreground font-light tracking-tight">
                  Seamless <span className="text-accent underline decoration-accent/20 underline-offset-8">Performance.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
