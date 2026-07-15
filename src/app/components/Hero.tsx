import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

function DeviceMockup() {
  return (
    <div className="relative w-full flex items-end justify-center" style={{ minHeight: '440px' }}>
      {/* Laptop */}
      <div className="relative z-10" style={{ width: '420px' }}>
        {/* Screen bezel */}
        <div style={{
          background: '#111827',
          borderRadius: '10px 10px 0 0',
          padding: '10px 10px 0',
          border: '1px solid rgba(255,255,255,.1)',
          boxShadow: '0 0 80px rgba(45,107,255,.12), 0 40px 80px rgba(0,0,0,.5)',
        }}>
          <div style={{ width: '6px', height: '6px', background: '#374151', borderRadius: '50%', margin: '0 auto 8px' }} />
          {/* Screen */}
          <div style={{
            background: '#0E1830',
            borderRadius: '6px',
            padding: '20px',
            height: '255px',
            overflow: 'hidden',
          }}>
            {/* Top bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              {['#374151', '#374151', '#374151'].map((c, i) => (
                <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
              ))}
              <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.05)', marginLeft: '8px' }} />
              <div style={{ width: '56px', height: '8px', borderRadius: '4px', background: '#2D6BFF', opacity: .7 }} />
            </div>

            {/* KYC form */}
            <div style={{ fontSize: '10px', color: '#8A97B8', marginBottom: '3px', letterSpacing: '.05em' }}>KYC VERIFICATION</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#EAF0FF', marginBottom: '14px' }}>Identity Review</div>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              background: 'rgba(16,185,129,.1)', border: '1px solid rgba(16,185,129,.3)',
              borderRadius: '20px', padding: '3px 10px', marginBottom: '14px',
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: '10px', color: '#10B981', fontWeight: 600 }}>Identity Verified</span>
            </div>

            {/* Fields */}
            {[
              { label: 'Full Name', value: 'Ahmed Ben Ali' },
              { label: 'ID Number', value: '08 ••• 4892' },
              { label: 'Document', value: 'CIN · Valide' },
            ].map(field => (
              <div key={field.label} style={{ marginBottom: '8px' }}>
                <div style={{ fontSize: '8px', color: '#8A97B8', marginBottom: '2px', letterSpacing: '.04em' }}>{field.label}</div>
                <div style={{
                  background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)',
                  borderRadius: '5px', padding: '5px 9px', fontSize: '10px', color: '#EAF0FF',
                }}>{field.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyboard base */}
        <div style={{
          height: '14px', background: '#111827',
          borderRadius: '0 0 6px 6px',
          border: '1px solid rgba(255,255,255,.1)', borderTop: 'none',
          margin: '0 -10px',
        }} />
        <div style={{
          height: '5px', background: '#0D1525',
          borderRadius: '0 0 3px 3px', margin: '0 20px',
        }} />
      </div>

      {/* Phone */}
      <div style={{
        position: 'absolute', right: '10px', top: '0', width: '110px', zIndex: 20,
      }}>
        <div style={{
          background: '#111827', borderRadius: '18px', padding: '7px',
          border: '1px solid rgba(255,255,255,.1)',
          boxShadow: '0 24px 60px rgba(0,0,0,.6)',
        }}>
          <div style={{ width: '36px', height: '4px', background: '#1f2937', borderRadius: '2px', margin: '0 auto 7px' }} />
          <div style={{ background: '#0E1830', borderRadius: '12px', padding: '12px', minHeight: '210px' }}>
            <div style={{ fontSize: '7px', color: '#8A97B8', marginBottom: '8px', letterSpacing: '.04em' }}>DOCUMENT SCAN</div>

            {/* ID card */}
            <div style={{
              background: 'rgba(45,107,255,.1)', border: '1px solid rgba(45,107,255,.25)',
              borderRadius: '7px', padding: '8px', marginBottom: '8px',
            }}>
              <div style={{ width: '28px', height: '18px', background: '#2D6BFF', borderRadius: '3px', marginBottom: '5px', opacity: .8 }} />
              <div style={{ height: '3px', background: 'rgba(255,255,255,.15)', borderRadius: '2px', marginBottom: '3px', width: '65%' }} />
              <div style={{ height: '3px', background: 'rgba(255,255,255,.08)', borderRadius: '2px', width: '45%' }} />
            </div>

            {/* Scan line */}
            <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #2D6BFF, transparent)', marginBottom: '8px', borderRadius: '1px' }} />
            <div style={{ fontSize: '7px', color: '#6E9BFF', textAlign: 'center', marginBottom: '10px' }}>Scanning document…</div>

            {/* Steps */}
            {[
              { label: 'Capture', done: true, active: false },
              { label: 'Verify', done: true, active: false },
              { label: 'Approve', done: false, active: true },
            ].map(step => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <div style={{
                  width: '13px', height: '13px', borderRadius: '50%', flexShrink: 0,
                  background: step.done ? '#10B981' : step.active ? '#2D6BFF' : 'rgba(255,255,255,.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '7px', color: 'white', fontWeight: 700,
                }}>
                  {step.done ? '✓' : step.active ? '→' : '·'}
                </div>
                <span style={{ fontSize: '8px', color: step.done || step.active ? '#EAF0FF' : '#8A97B8' }}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow watermark */}
      <div style={{
        position: 'absolute', bottom: '-16px', right: '0',
        fontSize: '130px', color: 'rgba(45,107,255,.07)',
        fontWeight: 900, lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>→</div>
    </div>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0A1226' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Accent glow */}
      <div className="absolute pointer-events-none" style={{
        width: '600px', height: '600px',
        top: '50%', left: '20%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(45,107,255,.07) 0%, transparent 70%)',
      }} />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-8" style={{
              background: 'rgba(45,107,255,.1)',
              border: '1px solid rgba(45,107,255,.22)',
              borderRadius: '999px',
              padding: '6px 16px',
            }}>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#2D6BFF' }} />
              <span style={{ fontSize: '.8125rem', color: '#6E9BFF', letterSpacing: '.04em' }}>
                Product Design Studio — Tunis · Europe
              </span>
            </div>

            <h1 className="mb-6" style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#EAF0FF',
            }}>
              We design digital products people{' '}
              <span style={{ color: '#6E9BFF' }}>trust.</span>
            </h1>

            <p className="mb-10" style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: '#8A97B8',
              maxWidth: '460px',
            }}>
              Banks, fast-growing platforms and institutions rely on us to turn complex products into experiences users adopt — from UX audit to design system to launch.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() => scrollToSection('audit')}
                style={{
                  background: '#2D6BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '13px 26px',
                  fontSize: '.9375rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background .2s, box-shadow .2s',
                  boxShadow: '0 0 0 0 rgba(45,107,255,0)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#1a56e8';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(45,107,255,.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#2D6BFF';
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(45,107,255,0)';
                }}
              >
                Get a UX Flash Audit <ArrowRight size={17} />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                style={{
                  background: 'transparent',
                  color: '#EAF0FF',
                  border: '1px solid rgba(255,255,255,.14)',
                  borderRadius: '8px',
                  padding: '13px 26px',
                  fontSize: '.9375rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'border-color .2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)')}
              >
                See our work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
              {[
                { value: '20+', label: 'Products shipped' },
                { value: '3', label: 'Regulated industries' },
                { value: '4', label: 'Countries' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                >
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#EAF0FF', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '.8125rem', color: '#8A97B8' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile trust strip — visible below lg where DeviceMockup is hidden */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px', background: 'rgba(255,255,255,.06)',
              borderRadius: '12px', overflow: 'hidden',
            }}>
              {[
                { value: '20+', label: 'Products shipped' },
                { value: '3', label: 'Industries' },
                { value: '4', label: 'Countries' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: '#0E1830', padding: '20px 16px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#EAF0FF', marginBottom: '4px' }}>{stat.value}</div>
                  <div style={{ fontSize: '.75rem', color: '#8A97B8' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Sample vertical status badge */}
            <div style={{
              marginTop: '16px',
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'rgba(16,185,129,.05)',
              border: '1px solid rgba(16,185,129,.15)',
              borderRadius: '10px', padding: '12px 16px',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontSize: '.8125rem', color: '#8A97B8' }}>
                Clients in fintech, banking and regulated platforms
              </span>
            </div>
          </motion.div>

          {/* Right - Device mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:flex items-center justify-center"
            style={{ minHeight: '460px' }}
          >
            <DeviceMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
