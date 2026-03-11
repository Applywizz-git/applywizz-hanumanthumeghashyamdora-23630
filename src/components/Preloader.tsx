import { motion } from 'framer-motion';

const Preloader = () => {
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex space-x-2">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            className="text-4xl font-heading text-primary"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
