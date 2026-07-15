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
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.success && data.clients && data.clients.length > 0) {
          setClients(data.clients);
        } else {
          setClients([]);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
        setClients([]);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (loading || clients.length === 0) return null;

  return (
    <section className="py-14 relative overflow-hidden" style={{ background: '#0A1226' }}>
      {/* top/bottom separators */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,.07)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,.07)' }} />

      <div className="container mx-auto px-4">
        {/* Label */}
        <motion.p
          className="text-center mb-8"
          style={{ fontSize: '.75rem', color: '#5A6689', letterSpacing: '.14em', textTransform: 'uppercase' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by
        </motion.p>

        {/* Client names */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 md:gap-x-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {clients.map((client, idx) => (
            <motion.span
              key={client.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              style={{
                fontSize: '.8125rem',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#5A6689',
                transition: 'color .2s',
                cursor: 'default',
                userSelect: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8A97B8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5A6689')}
            >
              {client.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
