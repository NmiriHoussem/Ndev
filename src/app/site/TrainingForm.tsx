import React, { useEffect, useState } from 'react';
import { TRAININGS } from './trainings';
import { useContactForm, FormStatus } from './contactForm';

type Session = { label: string };
const NEXT = 'Next available date (notify me)';

type Format = 'team' | 'public' | 'custom';

const FORMATS: { id: Format; label: string }[] = [
  { id: 'public', label: 'Public session' },
  { id: 'team', label: 'For my team' },
  { id: 'custom', label: 'Custom programme' },
];
const OTHER = 'Not sure yet / custom programme';
const OPTIONS = [...TRAININGS.map((t) => t.title), OTHER];

const input: React.CSSProperties = {
  fontFamily: 'inherit', fontSize: '15px', minHeight: '46px', padding: '0 14px', borderRadius: '8px',
  border: '1px solid #D6CEC2', background: '#FFFFFF', color: '#0F172A', boxSizing: 'border-box', width: '100%',
};
const label: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontWeight: 500, color: '#334155' };

/**
 * Training request form shown at the bottom of the Academy and training pages.
 * Any link to #training-request scrolls here; a data-format attribute on the
 * link ("team" | "public" | "custom") preselects the format.
 */
export function TrainingForm({ training = '', format = 'public', sessions = [] }: { training?: string; format?: Format; sessions?: Session[] }) {
  const [fmt, setFmt] = useState<Format>(format);
  const isPublic = fmt === 'public';
  const showSessions = isPublic && sessions.length > 0;
  const form = useContactForm(
    { training, session: '', name: '', email: '', company: '', participants: '', message: '' },
    (v) => ({
      name: v.name,
      email: v.email,
      company: v.company,
      projectType: ['Training', v.training, FORMATS.find((f) => f.id === fmt)?.label, fmt === 'public' && v.session ? v.session : ''].filter(Boolean).join(' · '),
      message: [fmt === 'public' && v.session ? `Session: ${v.session}` : '', fmt !== 'public' && v.participants ? `Participants: ${v.participants}` : '', v.message].filter(Boolean).join('\n\n') || '(no message)',
    }),
  );

  // Keep the selected training in sync when moving between training pages
  useEffect(() => {
    form.change({ target: { name: 'training', value: training } } as React.ChangeEvent<HTMLSelectElement>);
    form.change({ target: { name: 'session', value: '' } } as React.ChangeEvent<HTMLSelectElement>);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [training]);

  // Links to #training-request: smooth scroll + preselect the format
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href="#training-request"]') as HTMLAnchorElement | null;
      if (!a) return;
      e.preventDefault();
      const f = a.dataset.format as Format | undefined;
      if (f && FORMATS.some((x) => x.id === f)) setFmt(f);
      if (a.dataset.session) form.change({ target: { name: 'session', value: a.dataset.session } } as React.ChangeEvent<HTMLSelectElement>);
      document.getElementById('training-request')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, '', window.location.pathname + '#training-request');
      window.setTimeout(() => (document.getElementById('tr-training') as HTMLSelectElement | null)?.focus({ preventScroll: true }), 600);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <section id="training-request" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#0F172A', background: '#F4EFE6', borderTop: '1px solid #E4DCCF', padding: '104px 24px', scrollMarginTop: '16px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 340px', minWidth: 0 }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#B45309', marginBottom: '14px' }}>Request a training</div>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 'clamp(30px, 4vw, 42px)', lineHeight: 1.1, letterSpacing: '-.9px', color: '#1B1F2A', margin: '0 0 18px' }}>Join a session, or train your team.</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A5160', margin: '0 0 24px', maxWidth: '420px' }}>Pick a public session to enrol on your own, or ask for a private session for your team. We reply within one business day.</p>
          <p style={{ fontSize: '15px', color: '#4A5160', margin: 0 }}>Prefer email? <a href="mailto:contact@ndev.digital" style={{ color: '#B45309', fontWeight: 600 }}>contact@ndev.digital</a></p>
        </div>
        <form onSubmit={form.submit} style={{ flex: '1 1 560px', minWidth: 0, background: '#FFFFFF', border: '1px solid #E4DCCF', borderRadius: '20px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '22px', boxSizing: 'border-box' }}>
          <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
            <legend style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px', padding: 0 }}>Format</legend>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {FORMATS.map((f) => {
                const on = f.id === fmt;
                return (
                  <button key={f.id} type="button" aria-pressed={on} onClick={() => setFmt(f.id)}
                    style={{ fontFamily: 'inherit', fontSize: '14px', fontWeight: on ? 600 : 500, minHeight: '44px', padding: '0 16px', borderRadius: '999px', border: `1px solid ${on ? '#1B1F2A' : '#D6CEC2'}`, background: on ? '#1B1F2A' : '#FFFFFF', color: on ? '#FFFFFF' : '#334155', cursor: 'pointer' }}>
                    {f.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <label style={label}>Training *
            <select id="tr-training" name="training" required value={form.values.training} onChange={form.change} style={{ ...input, padding: '0 12px' }}>
              <option value="" disabled>Choose a training</option>
              {OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>
          {showSessions && (
            <label style={label}>Session *
              <select name="session" required value={form.values.session} onChange={form.change} style={{ ...input, padding: '0 12px' }}>
                <option value="" disabled>Choose a date</option>
                {sessions.map((x) => <option key={x.label} value={x.label}>{x.label}</option>)}
                <option value={NEXT}>{NEXT}</option>
              </select>
            </label>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <label style={label}>Full name *<input type="text" name="name" required value={form.values.name} onChange={form.change} style={input} /></label>
            <label style={label}>{isPublic ? 'Email *' : 'Work email *'}<input type="email" name="email" required value={form.values.email} onChange={form.change} style={input} /></label>
            <label style={label}>{isPublic ? 'Company (optional)' : 'Company *'}<input type="text" name="company" required={!isPublic} value={form.values.company} onChange={form.change} style={input} /></label>
            {!isPublic && <label style={label}>Number of participants<input type="text" inputMode="numeric" name="participants" value={form.values.participants} onChange={form.change} style={input} /></label>}
          </div>
          <label style={label}>Anything we should know?
            <textarea name="message" rows={4} value={form.values.message} onChange={form.change} style={{ fontFamily: 'inherit', fontSize: '15px', padding: '12px 14px', borderRadius: '8px', border: '1px solid #D6CEC2', background: '#FFFFFF', resize: 'vertical' }} />
          </label>
          <button type="submit" disabled={form.sending} style={{ fontFamily: 'inherit', fontSize: '15px', fontWeight: 600, minHeight: '52px', border: 'none', borderRadius: '10px', background: '#F59E0B', color: '#1B1F2A', cursor: 'pointer' }}>
            {form.sending ? 'Sending…' : isPublic ? 'Request my seat' : 'Send request'}
          </button>
          <FormStatus status={form.status} />
        </form>
      </div>
    </section>
  );
}
