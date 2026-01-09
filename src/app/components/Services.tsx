import { motion } from 'motion/react';
import { Code, Palette, Rocket, Monitor, Brush, BookOpen, Gamepad2, LineChart, Sparkles, Zap, Crown } from 'lucide-react';
import { useState } from 'react';

const serviceCategories = [
  {
    title: 'Development',
    description: 'Build powerful, scalable digital solutions',
    icon: Code,
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
    color: 'blue',
    services: [
      {
        icon: Monitor,
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies and best practices.',
        features: ['React & Next.js', 'API Integration', 'Responsive Design'],
      },
      {
        icon: Rocket,
        title: 'SaaS Products',
        description: 'End-to-end SaaS development from concept to deployment and scaling.',
        features: ['Cloud Infrastructure', 'Subscription Models', 'Analytics'],
      },
      {
        icon: Gamepad2,
        title: 'Game Development',
        description: 'Engaging games for web, mobile, and desktop platforms.',
        features: ['Unity & Unreal', 'Multiplayer', '2D & 3D'],
      },
    ],
  },
  {
    title: 'Design',
    description: 'Create stunning visual experiences',
    icon: Palette,
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    color: 'purple',
    services: [
      {
        icon: Sparkles,
        title: 'UI/UX Design',
        description: 'User-centered design that delights and converts.',
        features: ['User Research', 'Wireframing', 'Prototyping'],
      },
      {
        icon: Brush,
        title: 'Branding & Design',
        description: 'Cohesive brand identities that make you stand out.',
        features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
      },
    ],
  },
  {
    title: 'Strategy & Innovation',
    description: 'Guide your product to success',
    icon: LineChart,
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    color: 'green',
    services: [
      {
        icon: LineChart,
        title: 'Product Management',
        description: 'Strategic product planning and roadmap development.',
        features: ['Market Research', 'Roadmapping', 'Agile Planning'],
      },
      {
        icon: BookOpen,
        title: 'Interactive E-Learning',
        description: 'Engaging educational content that drives learning outcomes.',
        features: ['Gamification', 'Progress Tracking', 'Interactive Content'],
      },
    ],
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Creative background with diagonal stripes */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #8b5cf6 0px, #8b5cf6 2px, transparent 2px, transparent 20px)',
        }}></div>
      </div>

      {/* Large decorative elements */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
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
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              ></motion.div>
              <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-2 border-white shadow-xl">
                <Crown className="text-purple-600" size={24} />
                <span className="text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Our Superpowers
                </span>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Services That Make{' '}
            <span className="relative inline-block">
              <motion.span
                className="absolute -inset-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              ></motion.span>
              <span className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Magic Happen
              </span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we've got everything you need to dominate the digital world
          </p>
        </motion.div>

        {/* Service Categories - Creative bento grid layout */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIdx) => {
            const CategoryIcon = category.icon;
            const isEven = categoryIdx % 2 === 0;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIdx * 0.2 }}
              >
                {/* Category header with creative design */}
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 mb-12`}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-3xl blur-xl opacity-50`}></div>
                    <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-2xl`}>
                      <CategoryIcon className="text-white" size={56} />
                    </div>
                  </motion.div>

                  <div className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center`}>
                    <h3 className="text-4xl md:text-5xl mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                    <p className="text-xl text-gray-600">{category.description}</p>
                  </div>
                </div>

                {/* Service cards - Creative asymmetric grid */}
                <div className={`grid md:grid-cols-2 ${category.services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
                  {category.services.map((service, serviceIdx) => {
                    const ServiceIcon = service.icon;
                    const serviceKey = `${category.title}-${service.title}`;
                    const isHovered = hoveredService === serviceKey;

                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: serviceIdx * 0.15 }}
                        onHoverStart={() => setHoveredService(serviceKey)}
                        onHoverEnd={() => setHoveredService(null)}
                        whileHover={{ y: -12, rotate: isEven ? 2 : -2 }}
                        className="relative group"
                      >
                        {/* Glow effect on hover */}
                        <motion.div
                          className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                        ></motion.div>

                        {/* Card */}
                        <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 group-hover:border-transparent transition-all overflow-hidden">
                          {/* Animated background gradient */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                          ></motion.div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Icon with creative animation */}
                            <motion.div
                              className="mb-6 inline-block"
                              animate={{
                                rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                                <ServiceIcon className="text-white" size={36} />
                              </div>
                            </motion.div>

                            <h4 className="text-2xl md:text-3xl mb-4 text-gray-900">
                              {service.title}
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Features with stagger animation */}
                            <div className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-center gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ 
                                    opacity: isHovered ? 1 : 0.7, 
                                    x: isHovered ? 0 : -20 
                                  }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <motion.div
                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                                    animate={{
                                      scale: isHovered ? [1, 1.5, 1] : 1,
                                    }}
                                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                                  ></motion.div>
                                  <span className="text-sm text-gray-600">{feature}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Sparkle on hover */}
                            <motion.div
                              className="absolute top-6 right-6"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ 
                                opacity: isHovered ? 1 : 0,
                                scale: isHovered ? 1 : 0,
                                rotate: isHovered ? 360 : 0,
                              }}
                              transition={{ duration: 0.4 }}
                            >
                              <Zap className={`text-yellow-500 fill-yellow-500`} size={28} />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}