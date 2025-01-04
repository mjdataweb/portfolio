import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../ui/ContactForm';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Envie de collaborer ? N'hésitez pas à me contacter
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}