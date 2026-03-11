import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Cloud, Code2, BookOpen, Cpu, Database, Terminal } from 'lucide-react';

const Certifications = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const certifications = [
    {
      title: 'AZ-204: Developing Solutions for Microsoft Azure',
      issuer: 'Microsoft',
      description: 'Validates expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.',
      icon: Cloud,
    },
    {
      title: 'Java Programming and Software Engineering Fundamentals Specialization',
      issuer: 'Coursera',
      description: 'Comprehensive specialization covering Java programming, data structures, algorithms, and software engineering principles.',
      icon: Code2,
    },
    {
      title: 'Spring Framework 6 and Spring Boot 3 Specialization',
      issuer: 'Coursera',
      description: 'In-depth coverage of Spring Framework 6, Spring Boot 3, Spring Security, Spring Data JPA, and microservices.',
      icon: Cpu,
    },
    {
      title: 'AWS Cloud Technical Essentials',
      issuer: 'Coursera',
      description: 'Foundation course covering core AWS services including EC2, RDS, S3, IAM, and cloud best practices.',
      icon: Database,
    },
    {
      title: 'Docker and Kubernetes Essential Training',
      issuer: 'LinkedIn Learning',
      description: 'Practical training on containerization with Docker and orchestration with Kubernetes for cloud-native deployments.',
      icon: Terminal,
    },
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Validation</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            Certifications & <span className="text-accent italic">Credentials</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-accent rounded-full mx-auto" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative h-80 cursor-pointer perspective-2000 group"
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                animate={{ rotateY: flipped === index ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden glass-premium rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden">
                  <div className="relative w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <cert.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground leading-tight tracking-tight">{cert.title}</h3>
                  <p className="text-accent font-bold text-[10px] tracking-widest uppercase">{cert.issuer}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-premium border-accent/30 rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h3 className="font-heading text-xl mb-4 text-accent tracking-tight">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {cert.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center space-x-2 text-accent group-hover:translate-x-1 transition-transform">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Verified Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default Certifications;
