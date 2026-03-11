import { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const topSkills = [
    { name: 'Java & Spring Boot', level: 95, color: 'hsl(var(--accent))' },
    { name: 'Microservices & System Design', level: 92, color: 'hsl(var(--accent-secondary))' },
    { name: 'Cloud & DevOps (AWS/Azure/Docker)', level: 88, color: 'hsl(var(--accent))' },
    { name: 'ReactJS & Angular', level: 85, color: 'hsl(var(--accent-secondary))' },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java (8/11/17)', 'TypeScript', 'JavaScript (ES6+)', 'SQL'],
    },
    {
      title: 'Backend Development',
      skills: ['Spring Boot 3.x', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'RESTful API Development', 'Microservices Architecture', 'API Gateway', 'Distributed Systems', 'System Design', 'Performance Tuning'],
    },
    {
      title: 'Frontend Development',
      skills: ['ReactJS', 'Angular 10/12', 'HTML5', 'CSS3', 'Responsive Web Design'],
    },
    {
      title: 'Cloud & Containerization',
      skills: ['AWS (EC2, RDS)', 'Azure App Services', 'Docker', 'Cloud-Native Architecture'],
    },
    {
      title: 'Messaging & Streaming',
      skills: ['Apache Kafka', 'Event-Driven Architecture'],
    },
    {
      title: 'Databases & Caching',
      skills: ['PostgreSQL', 'MySQL', 'Oracle', 'Redis'],
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['Jenkins', 'GitHub Actions', 'Maven', 'CI/CD Automation'],
    },
    {
      title: 'Security',
      skills: ['Spring Security', 'OAuth2', 'JWT', 'RBAC', 'Multi-Factor Authentication'],
    },
    {
      title: 'Monitoring & Observability',
      skills: ['ELK Stack', 'Splunk'],
    },
    {
      title: 'Methodologies',
      skills: ['Agile/Scrum', 'SOLID Principles', 'Scalable System Design'],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Capabilities</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            Skills & <span className="text-accent italic">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-accent rounded-full mx-auto" />
          </div>
        </motion.div>

        {/* Top Skills - Liquid Bars */}
        <div className="max-w-5xl mx-auto mb-32 space-y-16">
          {topSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-heading text-foreground tracking-tight">{skill.name}</h3>
                <span className="text-accent font-bold text-xl">{skill.level}%</span>
              </div>
              <div className="h-4 w-full bg-foreground/5 rounded-full overflow-hidden glass-premium relative border-none shadow-none">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  style={{ backgroundColor: skill.color }}
                  className="absolute inset-y-0 left-0 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                >
                  <div className="w-full h-full absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-premium p-10 rounded-[3rem] hover:border-accent/40 transition-all group"
            >
              <h3 className="text-xl font-heading mb-8 text-accent group-hover:translate-x-1 transition-transform tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    whileHover={{ scale: 1.05, y: -2 }}
                    onMouseEnter={() => setHoveredSkill(`${catIndex}-${sIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${hoveredSkill === `${catIndex}-${sIndex}`
                      ? "bg-accent text-white shadow-lg"
                      : "bg-foreground/5 text-muted-foreground border border-foreground/5"
                      }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
