import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogCard from '../ui/BlogCard';
import { blogPosts } from '../../data/blog';

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Articles et réflexions sur le développement web et les nouvelles technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}