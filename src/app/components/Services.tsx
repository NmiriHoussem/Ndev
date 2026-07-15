import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'UX Design',
    category: 'Design',
    description:
      'User-centred design for complex digital platforms, from UX audit and research through to high-fidelity prototypes ready for development.',
    tags: ['UX Research & Audit', 'Wireframing', 'Interaction Design', 'Prototyping'],
  },
  {
    number: '02',
    title: 'Branding & Design Systems',
    category: 'Design',
    description:
      'A cohesive visual identity and a fully documented, developer-ready design system your team can own and scale independently.',
    tags: ['Brand Identity', 'Component Libraries', 'Design Tokens', 'Guidelines'],
  },
  {
    number: '03',
    title: 'Web Development',
    category: 'Development',
    description:
      'Custom web applications built with modern frameworks: fully responsive, accessible, and optimised for production.',
    tags: ['React · Next.js', 'API Integration', 'Performance', 'Accessibility'],
  },
  {
    number: '04',
    title: 'SaaS Products',
    category: 'Development',
    description:
      'End-to-end SaaS development, from architecture and authentication to launch, analytics, and iterative improvement.',
    tags: ['Cloud Infrastructure', 'Auth & Billing', 'Analytics', 'Monitoring'],
  },
  {
    number: '05',
    title: 'Product Strategy',
    category: 'Strategy',
    description:
      'Strategic product planning, roadmap development, and positioning for regulated and complex digital markets.',
    tags: ['Market Research', 'Roadmapping', 'Prioritisation', 'Agile'],
  },
  {
    number: '06',
    title: 'Interactive E-Learning',
    category: 'Strategy',
    description:
      'Engaging educational content and platforms that drive measurable learning outcomes at scale.',
    tags: ['Gamification', 'Progress Tracking', 'Interactive Modules', 'LMS'],
  },
];

const categoryColors: Record<string, string> = {
  Design: '#2D6BFF',
  Development: '#7C3AED',
  Strategy: '#0EA5E9',
};

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative',
        borderBottom: '1px solid #E2E8F0',
        cursor: 'default',
      }}
    >
      {/* Left accent bar */}
      <motion.div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '3px', borderRadius: '0 2px 2px 0',
          background: categoryColors[service.category],
          originY: 0,
        }}
        initial={false}
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '56px 1fr auto',
          gap: '0 24px',
          alignItems: 'start',
          padding: '28px 0 28px 16px',
          background: hovered ? 'rgba(45,107,255,.02)' : 'transparent',
          transition: 'background .2s',
        }}
      >
        {/* Number */}
        <span style={{
          fontSize: '1rem', fontWeight: 700,
          color: hovered ? '#2D6BFF' : '#CBD5E1',
          transition: 'color .2s',
          paddingTop: '2px',
          letterSpacing: '-.02em',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {service.number}
        </span>

        {/* Main content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.375rem)',
              fontWeight: 700,
              color: '#0F172A',
              lineHeight: 1.2,
            }}>
              {service.title}
            </h3>
            <span style={{
              fontSize: '.7rem', fontWeight: 700, letterSpacing: '.07em',
              textTransform: 'uppercase',
              color: categoryColors[service.category],
              background: `${categoryColors[service.category]}12`,
              border: `1px solid ${categoryColors[service.category]}30`,
              borderRadius: '4px', padding: '2px 7px',
            }}>
              {service.category}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 12 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.22 }}
                style={{
                  fontSize: '.9375rem', color: '#475569',
                  lineHeight: 1.7, overflow: 'hidden',
                }}
              >
                {service.description}
              </motion.p>
            )}
          </AnimatePresence>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {service.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '.75rem', color: hovered ? '#64748B' : '#94A3B8',
                border: `1px solid ${hovered ? '#CBD5E1' : '#E2E8F0'}`,
                borderRadius: '4px', padding: '2px 8px',
                transition: 'color .2s, border-color .2s',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          style={{
            width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1px solid ${hovered ? '#2D6BFF' : '#E2E8F0'}`,
            background: hovered ? '#2D6BFF' : 'transparent',
            marginTop: '2px',
          }}
          animate={{
            borderColor: hovered ? '#2D6BFF' : '#E2E8F0',
            background: hovered ? '#2D6BFF' : 'transparent',
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={16} style={{ color: hovered ? '#fff' : '#94A3B8', transition: 'color .2s' }} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32" style={{ background: '#ffffff' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div style={{
              fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em',
              textTransform: 'uppercase', color: '#2D6BFF', marginBottom: '12px',
            }}>
              Services
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800, color: '#0F172A',
              letterSpacing: '-1px', lineHeight: 1.1,
            }}>
              What we do
            </h2>
          </div>
          <p style={{
            fontSize: '1.0625rem', color: '#64748B', lineHeight: 1.75,
            maxWidth: '400px',
          }}>
            From first audit to shipped product. The full design and build cycle for complex digital platforms.
          </p>
        </motion.div>

        {/* Service list */}
        <div style={{ borderTop: '1px solid #E2E8F0' }}>
          {services.map((service, idx) => (
            <ServiceRow key={service.number} service={service} index={idx} />
          ))}
        </div>

        {/* Bottom CTA note */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p style={{ fontSize: '.9375rem', color: '#94A3B8' }}>
            Not sure where to start?
          </p>
          <button
            onClick={() => { const el = document.getElementById('audit'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#2D6BFF', color: '#fff',
              border: 'none', borderRadius: '8px', padding: '11px 22px',
              fontSize: '.875rem', fontWeight: 600, cursor: 'pointer',
              transition: 'background .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1a56e8'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2D6BFF'; }}
          >
            Start with a UX Flash Audit <ArrowUpRight size={15} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
