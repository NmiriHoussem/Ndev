import React, { useState } from 'react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

type Status = 'idle' | 'success' | 'error';

/**
 * Shared form state + submission to the existing Supabase contact function
 * (same endpoint and payload shape as the previous site's contact form).
 */
export function useContactForm<T extends Record<string, string>>(
  initial: T,
  toPayload: (values: T) => { name: string; email: string; company: string; projectType: string; message: string },
) {
  const [values, setValues] = useState<T>(initial);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus('idle');
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${publicAnonKey}` },
        body: JSON.stringify(toPayload(values)),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus('success');
        setValues(initial);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return { values, change, submit, sending, status };
}

export function FormStatus({ status, dark = false }: { status: Status; dark?: boolean }) {
  if (status === 'idle') return null;
  const ok = status === 'success';
  return (
    <p
      role="status"
      style={{
        gridColumn: '1 / -1',
        margin: 0,
        fontSize: '14px',
        lineHeight: 1.6,
        color: ok ? (dark ? '#6EE7B7' : '#047857') : dark ? '#FCA5A5' : '#B91C1C',
      }}
    >
      {ok
        ? 'Thank you. Your message was sent and we will reply within one business day.'
        : 'Your message could not be sent. Please email us at contact@ndev.digital or call +216 54 882 779.'}
    </p>
  );
}
