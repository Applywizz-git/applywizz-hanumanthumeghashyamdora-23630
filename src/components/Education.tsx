import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Masters in Computer & Information Systems',
      institution: 'Saint Louis University',
      location: 'St. Louis, MO',
      period: 'Completed',
      icon: GraduationCap,
      color: 'hsl(var(--primary))',
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">Foundations</span>
          <h2 className="text-5xl md:text-6xl font-heading mb-6 text-foreground">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="group relative"
            >
              <div className="glass p-10 md:p-12 rounded-[3rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-3xl hover:shadow-primary/5 flex flex-col md:flex-row items-center gap-10">

                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-[2rem] bg-primary/5 flex items-center justify-center relative z-10 group-hover:rotate-6 transition-transform duration-500">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-heading text-foreground group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold bg-primary/5 px-4 py-1 rounded-full text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground font-light italic">
                    {item.institution}
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground/60 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    {item.location}
                  </div>
                </div>
              </div>

              {/* Background Number */}
              <div className="absolute -top-10 -left-10 text-[10rem] font-bold text-primary/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
