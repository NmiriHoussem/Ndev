import { motion } from 'motion/react';
import { Users, Target, Award, Zap, TrendingUp, Heart, Shield, Rocket, Star, Coffee, Code2, Smile } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Dream Team',
    description: 'Talented developers, designers, and strategists who eat, sleep, and breathe digital.',
    gradient: 'from-blue-500 to-cyan-500',
    rotation: 0,
  },
  {
    icon: Target,
    title: 'Your Vision',
    description: 'We don\'t just build what you ask for—we bring your wildest ideas to life.',
    gradient: 'from-purple-500 to-pink-500',
    rotation: 45,
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Every pixel, every line of code—crafted with obsessive attention to detail.',
    gradient: 'from-yellow-500 to-orange-500',
    rotation: 90,
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Quick turnaround times because we know your time is precious.',
    gradient: 'from-green-500 to-emerald-500',
    rotation: 135,
  },
];

const stats = [
  { icon: Coffee, value: '∞', label: 'Cups of Coffee', gradient: 'from-amber-500 to-orange-600' },
  { icon: Code2, value: '1M+', label: 'Lines of Code', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Smile, value: '100%', label: 'Fun Guaranteed', gradient: 'from-pink-500 to-rose-500' },
  { icon: Star, value: '5★', label: 'Average Rating', gradient: 'from-purple-500 to-indigo-500' },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ultra creative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15), transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59,130,246,0.15), transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15), transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 border-4 border-purple-200/40 rounded-full"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-2 border-white shadow-xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="text-pink-600" size={24} />
              </motion.div>
              <span className="text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                About Us
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            We're Not Your{' '}
            <span className="relative inline-block">
              <motion.span
                className="absolute -inset-3 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              ></motion.span>
              <span className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Average Agency
              </span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a crew of passionate creators who love turning crazy ideas into digital reality
          </p>
        </motion.div>

        {/* Feature Cards - Creative orbit layout */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ 
                    y: -15, 
                    rotate: feature.rotation / 10,
                    scale: 1.05,
                  }}
                >
                  <div className="relative h-full group">
                    {/* Glow */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity`}
                    ></motion.div>

                    {/* Card */}
                    <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-white shadow-xl">
                      {/* Icon */}
                      <motion.div
                        className="mb-6 inline-block"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="text-white" size={36} />
                        </div>
                      </motion.div>

                      <h3 className="text-2xl mb-3 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                      {/* Decorative corner */}
                      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${feature.gradient}`}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats - Creative ticker style */}
        <motion.div
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
                >
                  <div className="relative overflow-hidden rounded-3xl group">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    ></motion.div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 p-8 text-white">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <StatIcon className="mb-4 opacity-90" size={36} />
                      </motion.div>
                      <div className="text-5xl mb-2">{stat.value}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Company story - Creative asymmetric layout */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Background card with tilt effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 rounded-[3rem] transform rotate-2"
              whileHover={{ rotate: -1 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            {/* Main card */}
            <div className="relative bg-white/90 backdrop-blur-2xl rounded-[3rem] p-12 md:p-16 border-2 border-white shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Icon grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-4 lg:w-1/3"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {[Rocket, Star, Heart, Zap].map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-white" size={40} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h3 className="text-4xl md:text-5xl mb-6">
                      <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                        Making Apps and Games
                      </span>
                    </h3>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Hey there! We're <strong className="text-purple-600">NdevDigital</strong>, 
                        and we've been creating digital magic since 2020.
                      </p>
                      <p>
                        Whether you need a <span className="text-blue-600">stunning website</span>, 
                        a <span className="text-purple-600">powerful SaaS platform</span>, 
                        <span className="text-pink-600"> engaging e-learning content</span>, or 
                        an <span className="text-cyan-600">immersive game</span>—we've got you covered!
                      </p>
                      <p>
                        We don't just code and design—we create <strong>experiences that users love</strong>. 
                        Let's build something awesome together!
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}