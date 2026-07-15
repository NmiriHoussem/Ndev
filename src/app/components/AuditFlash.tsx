import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function AuditFlash() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="audit" className="py-24 relative overflow-hidden" style={{ background: '#0A1226' }}>
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(45,107,255,.06), transparent)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-7"
              style={{
                background: 'rgba(45,107,255,.1)',
                border: '1px solid rgba(45,107,255,.22)',
                borderRadius: '999px',
                padding: '6px 16px',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2D6BFF' }} />
              <span style={{ fontSize: '.8125rem', color: '#6E9BFF' }}>UX Flash Audit</span>
            </div>

            <h2
              className="mb-6 leading-tight"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 800,
                color: '#EAF0FF',
                letterSpacing: '-0.5px',
              }}
            >
              Not ready for a full project?
              <br />
              <span style={{ color: '#6E9BFF' }}>Start with a UX Flash Audit.</span>
            </h2>

            <p
              className="mx-auto mb-4"
              style={{
                fontSize: '1.0625rem',
                color: '#8A97B8',
                lineHeight: 1.75,
                maxWidth: '580px',
              }}
            >
              In 5 days, we analyse your product, benchmark it against your sector, and deliver a
              prioritized report of quick wins and structural fixes, presented in a 1-hour session
              with your team.
            </p>

            <p
              className="mb-10"
              style={{ fontSize: '.9375rem', color: '#8A97B8' }}
            >
              Fixed price. No commitment. If you move forward with us afterwards, the audit fee is
              deducted from your project.
            </p>

            <button
              onClick={() => scrollToSection('contact')}
              style={{
                background: '#2D6BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '13px 30px',
                fontSize: '.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background .2s, box-shadow .2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1a56e8';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(45,107,255,.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#2D6BFF';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Book your audit <ArrowRight size={17} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
