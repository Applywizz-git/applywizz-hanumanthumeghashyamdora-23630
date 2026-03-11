import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud-Native Healthcare Interoperability Platform',
      subtitle: 'FHIR R4 & Spring WebFlux',
      image: '/AI_Chatbot_RAG & Fine-Tuning.png',
      description: 'Designed a canonical FHIR resource mapping layer using Spring Boot and Spring WebFlux to transform heterogeneous clinical data formats into standardized FHIR R4 structures, enabling consistent interoperability across multi-provider systems.',
      technologies: ['Spring Boot', 'Spring WebFlux', 'Kafka', 'Docker', 'Azure', 'GitHub Actions'],
    },
    {
      title: 'Event-Driven Digital Banking Platform',
      subtitle: 'Distributed Transactions & Kafka',
      image: '/Stock_Market.png',
      description: 'Architected distributed transaction workflows using Spring Cloud components and API Gateway routing to separate payment authorization, settlement, and reconciliation services for better fault isolation.',
      technologies: ['Spring Cloud', 'API Gateway', 'Kafka', 'PostgreSQL', 'JWT', 'Docker'],
    },
    {
      title: 'Retail E-Commerce Microservices Modernization',
      subtitle: 'ReactJS & Redis Caching',
      image: '/AI-Powered.png',
      description: 'Modeled domain-specific microservices for catalog, cart, and order domains using Spring Boot and REST principles, reducing tight coupling and enabling independent service scaling during demand surges.',
      technologies: ['Spring Boot', 'ReactJS', 'Redux', 'Redis', 'Kafka', 'PostgreSQL'],
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Portfolio</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            Featured <span className="text-accent italic">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-accent rounded-full mx-auto" />
          </div>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-20 !px-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[600px] rounded-[3rem] overflow-hidden glass-premium hover:border-accent/40 transition-all cursor-pointer shadow-2xl"
                >
                  {/* Image Layer with Zoom */}
                  <div className="h-2/3 overflow-hidden rounded-[2.5rem] m-4 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="p-8 pt-2">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-heading mb-4 text-foreground leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-light line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-[9px] font-bold uppercase tracking-tight text-accent/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(var(--foreground));
          background: rgba(var(--background), 0.5);
          backdrop-filter: blur(20px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px border rgba(var(--foreground), 0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: hsl(var(--foreground));
          color: hsl(var(--background));
          transform: scale(1.1);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: 900;
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
