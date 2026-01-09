import { motion, useMotionValue, useTransform } from 'motion/react';
import { Badge } from './ui/badge';
import { ExternalLink, Star, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online store with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1676799910963-3932099f67e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY2OTY4NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'Stripe'],
    gradient: 'from-blue-500 to-cyan-500',
    metrics: { users: '10k+', rating: '4.9', growth: '+250%' },
  },
  {
    title: 'Healthcare SaaS',
    category: 'SaaS Products',
    description: 'Patient management system for healthcare providers with telemedicine features.',
    image: 'https://images.unsplash.com/photo-1742997734865-71d10c491be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzAzMTgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['SaaS', 'Cloud', 'Security'],
    gradient: 'from-purple-500 to-pink-500',
    metrics: { users: '5k+', rating: '5.0', growth: '+180%' },
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure banking app with biometric authentication and real-time transactions.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjY5NTI2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Security', 'API'],
    gradient: 'from-green-500 to-emerald-500',
    metrics: { users: '50k+', rating: '4.8', growth: '+320%' },
  },
  {
    title: 'Brand Identity Design',
    category: 'Branding & Design',
    description: 'Complete brand identity including logo, colors, and design system.',
    image: 'https://images.unsplash.com/photo-1634671495197-fb9ec3230ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2Njk2MTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Branding', 'UI/UX', 'Design System'],
    gradient: 'from-yellow-500 to-orange-500',
    metrics: { users: '2k+', rating: '5.0', growth: '+200%' },
  },
  {
    title: 'Interactive Learning Platform',
    category: 'E-Learning',
    description: 'Engaging educational platform with gamification and progress tracking.',
    image: 'https://images.unsplash.com/photo-1565688695721-2b6f5a880a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVhcm5pbmclMjBvbmxpbmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3MDMxODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Education', 'Interactive', 'Analytics'],
    gradient: 'from-indigo-500 to-purple-500',
    metrics: { users: '15k+', rating: '4.9', growth: '+280%' },
  },
  {
    title: 'Adventure RPG Game',
    category: 'Game Development',
    description: 'Cross-platform adventure game with stunning graphics and immersive gameplay.',
    image: 'https://images.unsplash.com/photo-1611138290962-2c550ffd4002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyfGVufDF8fHx8MTc2Njk2NTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Unity', 'Multiplayer', '3D'],
    gradient: 'from-red-500 to-pink-500',
    metrics: { users: '100k+', rating: '4.7', growth: '+400%' },
  },
];

function ProjectCard({ project, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.03, z: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Massive glow on hover */}
        <motion.div
          className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity`}
        ></motion.div>

        <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 group-hover:border-transparent transition-all">
          {/* Image with parallax effect */}
          <div className="relative h-72 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Overlay gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}></div>

            {/* Floating metrics */}
            <motion.div
              className="absolute top-4 left-4 right-4 flex gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-1 bg-white/20 backdrop-blur-xl rounded-xl p-3 border border-white/40">
                <div className="flex items-center gap-2 text-white">
                  <Users size={16} />
                  <span className="text-sm">{project.metrics.users}</span>
                </div>
              </div>
              <div className="flex-1 bg-white/20 backdrop-blur-xl rounded-xl p-3 border border-white/40">
                <div className="flex items-center gap-2 text-white">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{project.metrics.rating}</span>
                </div>
              </div>
              <div className="flex-1 bg-white/20 backdrop-blur-xl rounded-xl p-3 border border-white/40">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp size={16} />
                  <span className="text-sm">{project.metrics.growth}</span>
                </div>
              </div>
            </motion.div>

            {/* Category badge at bottom of image */}
            <div className="absolute bottom-4 left-4">
              <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg px-4 py-2 text-sm`}>
                {project.category}
              </Badge>
            </div>

            {/* External link icon */}
            <motion.div
              className="absolute top-4 right-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isHovered ? 1 : 0, 
                rotate: isHovered ? 0 : -180 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl`}>
                <ExternalLink className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} size={20} />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {project.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, idx: number) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Badge 
                    variant="outline" 
                    className="border-gray-300 text-gray-700 hover:border-purple-300 hover:bg-purple-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated bottom accent */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      {/* Large decorative gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Creative header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-50"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              ></motion.div>
              <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-2 border-white shadow-xl">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
                <span className="text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Our Masterpieces
                </span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Projects We're{' '}
            <span className="relative inline-block">
              <motion.span
                className="absolute -inset-3 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              ></motion.span>
              <span className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Proud Of
              </span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Real projects, real results, real happy clients
          </p>
        </motion.div>

        {/* Projects grid - Creative masonry-style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* CTA with creative design */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block relative">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            ></motion.div>

            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready for Your Own Success Story?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Let's create something amazing together. Your project could be our next masterpiece!
              </p>
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-lg flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Project Now
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}