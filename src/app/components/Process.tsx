import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'UX Audit',
    duration: '5 days',
    description:
      'We map your product against sector benchmarks, identify friction points and compliance gaps. You receive a prioritised action report with quick wins and structural fixes.',
  },
  {
    number: '02',
    title: 'Strategy & Scoping',
    duration: '1–2 weeks',
    description:
      'We align on goals, define the scope and set measurable success criteria with your team before a single screen is designed.',
  },
  {
    number: '03',
    title: 'Design & System',
    duration: '4–8 weeks',
    description:
      'Full design cycle, from wireframes to production-ready components and a documented design system your team owns and can scale.',
  },
  {
    number: '04',
    title: 'Delivery & Handoff',
    duration: 'Until live',
    description:
      'We work alongside your developers until the product ships. No dropped handoffs. We stay until it is live and validated.',
  },
];

export function Process() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0A1226' }}>
      {/* Grid watermark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em',
            textTransform: 'uppercase', color: '#2D6BFF', marginBottom: '14px',
          }}>
            How we work
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800, color: '#EAF0FF', letterSpacing: '-1px', lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            A clear engagement,<br />start to finish.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#8A97B8', lineHeight: 1.75 }}>
            Every project follows the same rigorous process, so you always know where you stand and what comes next.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{
          background: 'rgba(255,255,255,.06)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{ background: '#0E1830', padding: '32px 28px' }}
            >
              {/* Number + connector line */}
              <div className="flex items-center gap-3 mb-6">
                <span style={{
                  fontSize: '2rem', fontWeight: 800, color: '#2D6BFF',
                  lineHeight: 1, letterSpacing: '-1px', fontVariantNumeric: 'tabular-nums',
                }}>
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px" style={{ background: 'rgba(45,107,255,.2)' }} />
                )}
              </div>

              {/* Duration badge */}
              <div className="inline-flex items-center gap-1.5 mb-4" style={{
                background: 'rgba(45,107,255,.1)',
                border: '1px solid rgba(45,107,255,.2)',
                borderRadius: '999px',
                padding: '3px 10px',
              }}>
                <div className="w-1 h-1 rounded-full" style={{ background: '#2D6BFF' }} />
                <span style={{ fontSize: '.75rem', color: '#6E9BFF', fontWeight: 600 }}>{step.duration}</span>
              </div>

              <h3 style={{
                fontSize: '1.0625rem', fontWeight: 700, color: '#EAF0FF',
                marginBottom: '10px',
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '.875rem', color: '#8A97B8', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-8 text-center"
          style={{ fontSize: '.875rem', color: '#5A6689' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Every engagement starts with the UX Audit. No commitment required beyond that.
        </motion.p>

      </div>
    </section>
  );
}
