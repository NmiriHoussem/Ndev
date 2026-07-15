import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const projectId = "mdauklijxlvxpcooytai";
const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXVrbGlqeGx2eHBjb295dGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODY1MzIsImV4cCI6MjA4MzU2MjUzMn0.cvk8mjS0e-iGlYXTiEbjLJrecnDTWAOR2Pr2RbIUSqI";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

interface Client {
  id: string;
  name: string;
  logo: string;
}

export function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${API_BASE}/clients`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (data.success && data.clients?.length > 0) {
          setClients(data.clients);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (loading || clients.length === 0) return null;

  // Duplicate enough times so the loop is seamless at any viewport width
  const repeated = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-14 relative overflow-hidden" style={{ background: '#0A1226' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,.07)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,.07)' }} />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-24 pointer-events-none" style={{
        background: 'linear-gradient(90deg, #0A1226, transparent)',
      }} />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-24 pointer-events-none" style={{
        background: 'linear-gradient(270deg, #0A1226, transparent)',
      }} />

      {/* Label */}
      <motion.p
        className="text-center mb-7"
        style={{ fontSize: '.75rem', color: '#5A6689', letterSpacing: '.14em', textTransform: 'uppercase' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Trusted by
      </motion.p>

      {/* Marquee track */}
      <div className="overflow-hidden">
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'nd-marquee 30s linear infinite',
          }}
        >
          {repeated.map((client, idx) => (
            <span
              key={`${client.id}-${idx}`}
              style={{
                display: 'inline-block',
                padding: '0 40px',
                fontSize: '.8125rem',
                fontWeight: 700,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#5A6689',
                whiteSpace: 'nowrap',
                transition: 'color .2s',
                cursor: 'default',
                userSelect: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8A97B8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5A6689')}
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nd-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
