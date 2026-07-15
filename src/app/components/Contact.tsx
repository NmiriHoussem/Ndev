import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

const contactInfo = [
  { icon: Mail,   title: 'Email',    value: 'contact@ndev.digital',                        link: 'mailto:contact@ndev.digital' },
  { icon: Phone,  title: 'Phone',    value: '+216 54 882 779',                              link: 'tel:+21654882779' },
  { icon: MapPin, title: 'Location', value: 'Immeuble Tamayouz 1082, Centre Urbain Nord-Tunis', link: null },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', projectType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
        setShowSuccessModal(true);
      } else {
        setError(true);
        const msg = data.error || 'Failed to send message. Please try again.';
        if (msg.includes('Email service not configured') || msg.includes('Failed to send email')) {
          alert('⚠️ Email service is not properly configured.\n\nReach out directly:\n📧 contact@ndev.digital\n📞 +216 54 882 779');
        } else {
          alert(msg);
        }
      }
    } catch {
      setError(true);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldStyle = (field: string) => ({
    borderColor: focusedField === field ? '#2D6BFF' : '#E2E8F0',
    boxShadow: focusedField === field ? '0 0 0 3px rgba(45,107,255,.1)' : 'none',
    transition: 'border-color .15s, box-shadow .15s',
    outline: 'none',
  });

  return (
    <section id="contact" className="py-32" style={{ background: '#ffffff' }}>
      <div className="container mx-auto px-4">

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
            textTransform: 'uppercase', color: '#2D6BFF', marginBottom: '12px',
          }}>
            Contact
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 800, color: '#0F172A', letterSpacing: '-1px',
            lineHeight: 1.1, marginBottom: '16px',
          }}>
            Let's work{' '}
            <span style={{ color: '#2D6BFF' }}>together</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#64748B', lineHeight: 1.7 }}>
            Tell us about your project and we'll get back to you within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              const inner = (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '14px',
                    padding: '20px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '8px',
                    background: 'rgba(45,107,255,.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} style={{ color: '#2D6BFF' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.8125rem', color: '#94A3B8', marginBottom: '3px' }}>{info.title}</div>
                    <div style={{ fontSize: '.9375rem', color: '#0F172A', fontWeight: 500 }}>{info.value}</div>
                  </div>
                </motion.div>
              );
              return info.link
                ? <a key={info.title} href={info.link} style={{ display: 'block', textDecoration: 'none' }}>{inner}</a>
                : <div key={info.title}>{inner}</div>;
            })}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" style={{ fontSize: '.875rem', fontWeight: 500, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                  Name *
                </label>
                <Input
                  id="name" name="name" value={formData.name} onChange={handleChange} required
                  placeholder="Your name"
                  style={fieldStyle('name')}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ fontSize: '.875rem', fontWeight: 500, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                  Email *
                </label>
                <Input
                  id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="your@email.com"
                  style={fieldStyle('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div>
                <label htmlFor="company" style={{ fontSize: '.875rem', fontWeight: 500, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                  Company
                </label>
                <Input
                  id="company" name="company" value={formData.company} onChange={handleChange}
                  placeholder="Your company"
                  style={fieldStyle('company')}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div>
                <label htmlFor="projectType" style={{ fontSize: '.875rem', fontWeight: 500, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    borderRadius: '6px',
                    border: `1px solid ${focusedField === 'projectType' ? '#2D6BFF' : '#E2E8F0'}`,
                    boxShadow: focusedField === 'projectType' ? '0 0 0 3px rgba(45,107,255,.1)' : 'none',
                    padding: '9px 12px',
                    fontSize: '.9375rem',
                    color: formData.projectType ? '#0F172A' : '#94A3B8',
                    background: '#fff',
                    outline: 'none',
                    transition: 'border-color .15s, box-shadow .15s',
                    appearance: 'auto',
                  }}
                  onFocus={() => setFocusedField('projectType')}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="">Select a project type…</option>
                  <option value="New product">New product</option>
                  <option value="Redesign">Redesign</option>
                  <option value="UX Audit">UX Audit</option>
                  <option value="Design system">Design system</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ fontSize: '.875rem', fontWeight: 500, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                  Message *
                </label>
                <Textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required
                  placeholder="Tell us about your project…"
                  rows={5}
                  className="resize-none"
                  style={fieldStyle('message')}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? 'rgba(45,107,255,.6)' : '#2D6BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '13px',
                  fontSize: '.9375rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background .2s',
                }}
                onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = '#1a56e8'; }}
                onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.background = '#2D6BFF'; }}
              >
                {isSubmitting ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending…</>
                ) : (
                  <>Send message <Send size={16} /></>
                )}
              </button>

              {success && (
                <div className="flex items-center gap-2 text-sm" style={{ color: '#10B981' }}>
                  <CheckCircle size={15} /> Message sent. We'll be in touch soon.
                </div>
              )}
              {error && (
                <div className="flex items-center gap-2 text-sm" style={{ color: '#EF4444' }}>
                  <AlertCircle size={15} /> Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,18,38,.6)', backdropFilter: 'blur(4px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Blue top bar */}
            <div style={{ height: '3px', background: '#2D6BFF' }} />

            <div className="p-8 text-center">
              <motion.div
                className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'rgba(16,185,129,.1)' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              >
                <CheckCircle size={28} style={{ color: '#10B981' }} />
              </motion.div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Message sent!
              </h3>
              <p style={{ fontSize: '.9375rem', color: '#64748B', marginBottom: '24px' }}>
                Thank you for reaching out. We'll get back to you within one business day.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                style={{
                  width: '100%', background: '#2D6BFF', color: '#fff',
                  border: 'none', borderRadius: '8px', padding: '11px',
                  fontSize: '.9375rem', fontWeight: 600, cursor: 'pointer',
                }}
              >
                Got it
              </button>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              style={{
                position: 'absolute', top: '14px', right: '14px',
                background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
                color: '#94A3B8',
              }}
            >
              <X size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
