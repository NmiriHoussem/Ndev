import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const reasons = [
  {
    title: 'Domain fluency',
    description:
      'We speak banking, compliance and KYC. Less onboarding, faster decisions, designs that pass review.',
  },
  {
    title: 'Design systems, not just screens',
    description:
      'Every project ships with a documented, developer-ready system your team can build on.',
  },
  {
    title: 'Senior attention',
    description:
      "Your product is designed by the people you talked to, not handed down a chain.",
  },
  {
    title: 'Built to ship',
    description:
      "We work hand-in-hand with your developers until it's live, not until the handoff file.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32" style={{ background: '#F8FAFC' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                Why us
              </div>

              <h2
                className="mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  letterSpacing: '-1px',
                }}
              >
                Why teams with high-stakes products{' '}
                <span style={{ color: '#2D6BFF' }}>choose us</span>
              </h2>

              <p style={{ fontSize: '1.0625rem', color: '#64748B', lineHeight: 1.75 }}>
                We have deep expertise in regulated, complex digital products — the kind where UX
                mistakes have real consequences.
              </p>
            </motion.div>

            {/* Right — bullet points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {reasons.map((reason, idx) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div
                    className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(45,107,255,.1)' }}
                  >
                    <Check size={13} style={{ color: '#2D6BFF' }} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ fontSize: '1rem', color: '#0F172A' }}
                    >
                      {reason.title}
                    </h3>
                    <p style={{ color: '#64748B', lineHeight: 1.65, fontSize: '.9375rem' }}>
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
