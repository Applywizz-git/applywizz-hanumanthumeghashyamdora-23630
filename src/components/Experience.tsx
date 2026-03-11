import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "HCA Healthcare",
      location: "Kansas City, MO",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Led the redesign of patient scheduling and intake workflows into Spring Boot microservices using Spring Cloud Gateway, reducing appointment processing time by 35% across multiple facilities.",
        "Built FHIR R4 compliant REST APIs with Spring MVC and secured them through Spring Security using OAuth2 and JWT, enabling reliable EHR and payer integrations while meeting HIPAA data protection requirements.",
        "Coordinated with billing and pharmacy teams to implement Kafka-based asynchronous communication between core services, increasing peak-hour transaction throughput by 40% and preventing processing backlogs.",
        "Reworked the Angular 12 patient and provider portal using TypeScript and REST integrations, improving online appointment bookings by 28% and lowering front-desk administrative effort.",
        "Improved backend performance by tuning PostgreSQL queries, refining Hibernate entity mappings, and introducing Redis caching, cutting API response times by 38% under concurrent clinical workloads.",
        "Partnered with DevOps engineers to containerize applications using Docker and automate CI/CD pipelines through GitHub Actions and Azure DevOps, reducing deployment errors and ensuring consistent releases.",
        "Enhanced application security by configuring RBAC and multi-factor authentication in Spring Security, aligning access controls with internal audit standards and reducing unauthorized access risks.",
        "Collaborated with infrastructure teams to implement centralized logging and monitoring through ELK Stack and Splunk dashboards, shortening incident diagnosis time by 25%.",
      ],
      technologies: [
        "Java", "Spring Boot", "Spring Cloud Gateway", "Angular 12", "TypeScript", "Kafka", "PostgreSQL", "Redis", "Docker", "OAuth2", "JWT", "ELK Stack"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "PNC Bank",
      location: "Chicago, IL",
      period: "May 2021 - Aug 2023",
      responsibilities: [
        "Re-architected the digital loan origination system into Spring Boot microservices using Spring Data JPA and REST APIs, stabilizing high-volume transaction flows and maintaining 99.9% uptime across online banking channels.",
        "Integrated external fraud detection and credit bureau platforms through OAuth2-secured REST clients, reducing manual underwriting effort by 22% and speeding up approval cycles.",
        "Built Angular 10 dashboards with TypeScript and reactive forms to support real-time loan tracking and account visibility, increasing customer self-service adoption by 30%.",
        "Introduced Kafka-based asynchronous settlement and reconciliation processing, improving end-of-day transaction throughput by 35% and reducing processing bottlenecks.",
        "Strengthened financial data protection by configuring Spring Security with JWT, RBAC, and multi-factor authentication, ensuring alignment with internal audit controls and federal banking regulations.",
        "Improved PostgreSQL performance by optimizing indexes and refactoring complex Hibernate queries, lowering transaction response latency by 32% during concurrent user activity.",
        "Containerized backend services using Docker and automated deployments to AWS EC2 and RDS via Jenkins CI/CD pipelines, increasing release frequency by 40%.",
        "Collaborated with product owners, QA engineers, and enterprise architects in Agile sprints to translate compliance and business requirements into scalable full stack solutions.",
      ],
      technologies: [
        "Java", "Spring Boot", "Angular 10", "TypeScript", "Kafka", "PostgreSQL", "Hibernate", "Docker", "AWS EC2", "AWS RDS", "Jenkins", "OAuth2", "JWT"
      ]
    },
    {
      title: "Software Engineer",
      company: "Best Buy",
      location: "Richfield, MN",
      period: "Jun 2019 - May 2021",
      responsibilities: [
        "Designed and implemented Spring Boot services for order orchestration and inventory validation using Spring Data JPA, increasing checkout completion rates by 18% during peak holiday traffic.",
        "Partnered with UX designers and product managers to build ReactJS and Angular components integrated with REST APIs, reducing frontend production defects by 20% and improving cart-to-purchase flow.",
        "Improved product discovery by introducing GraphQL endpoints alongside existing REST services, decreasing page load times by 25% during major promotional events.",
        "Refactored legacy Java modules into Spring Cloud microservices behind an API Gateway, reducing deployment downtime by 30% and enabling independent service scaling.",
        "Collaborated with inventory and supply chain teams to implement Kafka-based event streaming for catalog and order synchronization, improving cross-channel stock accuracy and reducing overselling incidents.",
        "Secured customer-facing APIs using Spring Security with JWT-based RBAC controls, protecting payment and account data in alignment with internal security standards.",
        "Automated build and release workflows using Maven and Jenkins for Dockerized deployments, lowering rollback incidents by 35% and improving release reliability.",
        "Analyzed production logs and optimized PostgreSQL queries and Hibernate mappings to resolve recurring system issues, reducing critical incident recurrence by 28%.",
      ],
      technologies: [
        "Java", "Spring Boot", "Spring Cloud", "ReactJS", "Angular", "GraphQL", "Kafka", "PostgreSQL", "Hibernate", "Docker", "Jenkins", "Maven", "JWT"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Interactive Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.03),transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">Journey</span>
          <h2 className="text-5xl md:text-6xl font-heading mb-6 text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary/10 mx-auto rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-primary rounded-full mx-auto" />
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          {/* Central Timeline Line - Liquid Effect */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-1 bg-primary/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ height: "100%", originY: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
            />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <div className="glass group-hover:bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10 hover:border-primary/30 transition-all shadow-xl group-hover:shadow-primary/5">
                    <div className="flex flex-col mb-8">
                      <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{exp.period}</span>
                      <h3 className="text-3xl font-heading text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">{exp.title}</h3>
                      <p className="text-xl font-medium text-muted-foreground/80">{exp.company} — {exp.location}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm font-light">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-xl glass bg-primary/5 border border-primary/10 text-xs font-medium text-foreground uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-[-11px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center z-10 group-hover:border-primary transition-colors shadow-glow">
                    <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform duration-500 shadow-glow" />
                  </div>
                </div>

                {/* Empty Side Placeholder for desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
