import { motion } from 'motion/react';
import { useState } from 'react';
import { Code, Palette, LineChart, Monitor, Rocket, Sparkles, Brush, BookOpen } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Design',
    description: 'UI/UX Design, Branding & Design Systems',
    icon: Palette,
    services: [
      {
        icon: Sparkles,
        title: 'UI/UX Design',
        description:
          'User-centred design for complex digital platforms — from UX audit to high-fidelity prototype ready for development.',
        features: ['UX Research & Audit', 'Wireframing & Prototyping', 'Interaction Design'],
      },
      {
        icon: Brush,
        title: 'Branding & Design Systems',
        description:
          'Cohesive visual identity and a documented, developer-ready design system your team can scale.',
        features: ['Brand Identity', 'Component Libraries', 'Design Tokens & Guidelines'],
      },
    ],
  },
  {
    title: 'Development',
    description: 'Web, SaaS & Digital Platforms',
    icon: Code,
    services: [
      {
        icon: Monitor,
        title: 'Web Development',
        description:
          'Custom web applications built with modern frameworks — fully responsive, accessible and production-ready.',
        features: ['React, Next.js', 'API Integration', 'Performance & Accessibility'],
      },
      {
        icon: Rocket,
        title: 'SaaS Products',
        description:
          'End-to-end SaaS development — from architecture and authentication to launch and iterative improvement.',
        features: ['Cloud Infrastructure', 'Subscription & Auth', 'Analytics & Monitoring'],
      },
    ],
  },
  {
    title: 'Strategy',
    description: 'Product Management & E-Learning',
    icon: LineChart,
    services: [
      {
        icon: LineChart,
        title: 'Product Strategy',
        description:
          'Strategic product planning, roadmap development and positioning for regulated and complex digital markets.',
        features: ['Market Research', 'Roadmapping', 'Agile Planning'],
      },
      {
        icon: BookOpen,
        title: 'Interactive E-Learning',
        description:
          'Engaging educational content that drives measurable learning outcomes at scale.',
        features: ['Gamification', 'Progress Tracking', 'Interactive Modules'],
      },
    ],
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof serviceCategories)[0]['services'][0];
}) {
  const [hovered, setHovered] = useState(false);
  const ServiceIcon = service.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#F8FAFC',
        border: `1px solid ${hovered ? 'rgba(45,107,255,.4)' : '#E2E8F0'}`,
        borderRadius: '12px',
        padding: '28px',
        transition: 'border-color .2s',
        height: '100%',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
        style={{ background: 'rgba(45,107,255,.08)' }}
      >
        <ServiceIcon size={20} style={{ color: '#2D6BFF' }} />
      </div>
      <h4 className="font-semibold mb-2" style={{ fontSize: '1.0625rem', color: '#0F172A' }}>
        {service.title}
      </h4>
      <p className="mb-5" style={{ color: '#64748B', lineHeight: 1.65, fontSize: '.9375rem' }}>
        {service.description}
      </p>
      <div className="space-y-2">
        {service.features.map(feature => (
          <div key={feature} className="flex items-center gap-2" style={{ fontSize: '.875rem', color: '#64748B' }}>
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#2D6BFF' }} />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32" style={{ background: '#ffffff' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-block mb-4"
            style={{
              fontSize: '.75rem',
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#2D6BFF',
            }}
          >
            Services
          </div>
          <h2
            className="mb-5 leading-tight"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-1px',
            }}
          >
            What we do
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#64748B', lineHeight: 1.75 }}>
            From first audit to shipped product — we cover the full design and build cycle for
            complex digital platforms.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIdx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIdx * 0.08 }}
              >
                {/* Category header */}
                <div
                  className="flex items-center gap-4 mb-7"
                  style={{ paddingBottom: '16px', borderBottom: '1px solid #E2E8F0' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(45,107,255,.08)' }}
                  >
                    <CategoryIcon size={18} style={{ color: '#2D6BFF' }} />
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ fontSize: '1.1875rem', color: '#0F172A' }}>
                      {category.title}
                    </h3>
                    <p style={{ fontSize: '.875rem', color: '#64748B' }}>{category.description}</p>
                  </div>
                </div>

                {/* Service cards */}
                <div className="grid md:grid-cols-2 gap-5">
                  {category.services.map((service, serviceIdx) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: serviceIdx * 0.08 }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
