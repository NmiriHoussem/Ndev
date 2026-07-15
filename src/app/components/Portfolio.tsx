import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Folder } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projectId = "mdauklijxlvxpcooytai";
const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXVrbGlqeGx2eHBjb295dGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODY1MzIsImV4cCI6MjA4MzU2MjUzMn0.cvk8mjS0e-iGlYXTiEbjLJrecnDTWAOR2Pr2RbIUSqI";
const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  metrics: { users: string; rating: string; growth: string };
  link?: string;
  featured?: boolean;
  slug?: string;
  order?: number;
}

function navigateToProject(project: Project) {
  const slug = project.slug || generateSlug(project.title);
  window.history.pushState({}, '', `/project/${slug}`);
  window.dispatchEvent(new Event('popstate'));
}

/* ── Featured card (first project, full-width horizontal) ── */
function FeaturedCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="col-span-full lg:col-span-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => navigateToProject(project)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? 'rgba(45,107,255,.4)' : '#E2E8F0'}`,
        borderRadius: '14px',
        overflow: 'hidden',
        transition: 'border-color .2s, box-shadow .2s',
        boxShadow: hovered ? '0 12px 40px rgba(45,107,255,.1)' : '0 1px 4px rgba(0,0,0,.04)',
        display: 'flex',
        flexDirection: 'column' as const,
        height: '100%',
      }}>
        {/* Image */}
        <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: '#F1F5F9', flexShrink: 0 }}>
          <motion.div style={{ width: '100%', height: '100%' }} animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.5 }}>
            <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.65) 0%, rgba(0,0,0,.1) 60%, transparent 100%)' }} />

          {/* Featured label */}
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            background: '#2D6BFF', color: '#fff',
            fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
            borderRadius: '4px', padding: '4px 10px',
          }}>
            Featured
          </div>

          {/* Category */}
          <div style={{
            position: 'absolute', bottom: '14px', left: '14px',
            background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,.25)', color: '#fff',
            fontSize: '.7rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
            borderRadius: '4px', padding: '4px 10px',
          }}>
            {project.category}
          </div>

          <motion.div style={{
            position: 'absolute', top: '14px', right: '14px',
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'rgba(255,255,255,.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={16} style={{ color: '#2D6BFF' }} />
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 26px 26px', flex: 1, display: 'flex', flexDirection: 'column' as const }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px', lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '.9375rem', color: '#64748B', lineHeight: 1.65, marginBottom: '16px', flex: 1 }}>
            {project.description}
          </p>

          {/* Result metric */}
          {project.metrics?.growth && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(16,185,129,.06)', border: '1px solid rgba(16,185,129,.2)',
              borderRadius: '6px', padding: '7px 12px', marginBottom: '16px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontSize: '.8125rem', color: '#0F172A', fontWeight: 500 }}>{project.metrics.growth}</span>
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {(project.tags || []).slice(0, 5).map((tag: string) => (
              <span key={tag} style={{
                fontSize: '.75rem', color: '#64748B',
                border: '1px solid #E2E8F0', borderRadius: '4px', padding: '2px 8px',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Standard card ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => navigateToProject(project)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? 'rgba(45,107,255,.35)' : '#E2E8F0'}`,
        borderRadius: '12px', overflow: 'hidden',
        transition: 'border-color .2s, box-shadow .2s',
        boxShadow: hovered ? '0 8px 30px rgba(45,107,255,.08)' : '0 1px 4px rgba(0,0,0,.04)',
        height: '100%', display: 'flex', flexDirection: 'column' as const,
      }}>
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#F1F5F9' }}>
          <motion.div style={{ width: '100%', height: '100%' }} animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.4 }}>
            <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.05) 60%, transparent 100%)' }} />
          <div style={{
            position: 'absolute', bottom: '10px', left: '10px',
            background: 'rgba(45,107,255,.9)', color: '#fff',
            fontSize: '.68rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
            borderRadius: '4px', padding: '3px 8px',
          }}>{project.category}</div>
          <motion.div style={{
            position: 'absolute', top: '10px', right: '10px',
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'rgba(255,255,255,.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={14} style={{ color: '#2D6BFF' }} />
          </motion.div>
        </div>

        <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' as const }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '7px', lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: '14px', flex: 1 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {(project.tags || []).slice(0, 3).map((tag: string) => (
              <span key={tag} style={{
                fontSize: '.7rem', color: '#64748B',
                border: '1px solid #E2E8F0', borderRadius: '4px', padding: '2px 7px',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ── */
export function Portfolio({ onViewAll }: { onViewAll?: () => void }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE}/projects`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (data.success && data.projects?.length > 0) {
          const list = data.projects
            .filter((p: any) => p?.id && p?.title)
            .sort((a: any, b: any) => (a.order ?? 9999) - (b.order ?? 9999));
          setProjects(list.slice(0, 6));
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const [featured, ...rest] = projects;

  return (
    <section id="portfolio" className="py-32" style={{ background: '#F8FAFC' }}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div style={{
              fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em',
              textTransform: 'uppercase', color: '#2D6BFF', marginBottom: '12px',
            }}>Work</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.1,
            }}>Selected projects</h2>
          </div>

          {!loading && projects.length > 0 && (
            <button
              onClick={() => window.location.href = '/portfolio'}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent', color: '#2D6BFF',
                border: '1px solid rgba(45,107,255,.3)',
                borderRadius: '8px', padding: '10px 20px',
                fontSize: '.875rem', fontWeight: 600, cursor: 'pointer',
                transition: 'background .2s, border-color .2s', whiteSpace: 'nowrap', flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(45,107,255,.06)'; e.currentTarget.style.borderColor = '#2D6BFF'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(45,107,255,.3)'; }}
            >
              View all projects <ArrowRight size={16} />
            </button>
          )}
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <motion.div
              className="w-8 h-8 rounded-full border-2 border-t-transparent"
              style={{ borderColor: 'rgba(45,107,255,.3)', borderTopColor: '#2D6BFF' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ background: 'rgba(45,107,255,.08)' }}>
              <Folder size={24} style={{ color: '#2D6BFF' }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#0F172A' }}>No projects yet</h3>
            <p style={{ color: '#64748B', fontSize: '.9375rem' }}>Projects will appear here once added through the admin panel.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured first project */}
            {featured && <FeaturedCard project={featured} />}

            {/* Second card sits beside featured on desktop */}
            {rest[0] && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <ProjectCard project={rest[0]} index={1} />
              </motion.div>
            )}

            {/* Remaining cards — full 3-col row */}
            {rest.slice(1).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx + 2} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
