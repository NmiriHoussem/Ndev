import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Folder } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projectId = "mdauklijxlvxpcooytai";
const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXVrbGlqeGx2eHBjb295dGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODY1MzIsImV4cCI6MjA4MzU2MjUzMn0.cvk8mjS0e-iGlYXTiEbjLJrecnDTWAOR2Pr2RbIUSqI";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const slug = project.slug || generateSlug(project.title);
    window.history.pushState({}, '', `/project/${slug}`);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div
        style={{
          background: '#ffffff',
          border: `1px solid ${hovered ? 'rgba(45,107,255,.35)' : '#E2E8F0'}`,
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'border-color .2s, box-shadow .2s',
          boxShadow: hovered ? '0 8px 30px rgba(45,107,255,.08)' : '0 1px 4px rgba(0,0,0,.04)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#F1F5F9' }}>
          <motion.div
            style={{ width: '100%', height: '100%' }}
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dark overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.1) 60%, transparent 100%)',
          }} />

          {/* Category tag */}
          <div style={{
            position: 'absolute', bottom: '12px', left: '12px',
            background: 'rgba(45,107,255,.9)',
            color: '#fff',
            fontSize: '.7rem',
            fontWeight: 700,
            letterSpacing: '.06em',
            textTransform: 'uppercase',
            borderRadius: '4px',
            padding: '3px 10px',
          }}>
            {project.category}
          </div>

          {/* Arrow on hover */}
          <motion.div
            style={{
              position: 'absolute', top: '12px', right: '12px',
              width: '34px', height: '34px', borderRadius: '50%',
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
        <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontSize: '1.0625rem', fontWeight: 700, color: '#0F172A',
            marginBottom: '8px', lineHeight: 1.3,
          }}>
            {project.title}
          </h3>
          <p style={{
            fontSize: '.875rem', color: '#64748B', lineHeight: 1.6,
            marginBottom: '16px', flex: 1,
          }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {(project.tags || []).slice(0, 4).map((tag: string) => (
              <span key={tag} style={{
                fontSize: '.75rem', color: '#64748B',
                border: '1px solid #E2E8F0',
                borderRadius: '4px', padding: '2px 8px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio({ onViewAll }: { onViewAll?: () => void }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE}/projects`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` },
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
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
            }}>
              Work
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800, color: '#0F172A', letterSpacing: '-1px',
              lineHeight: 1.1,
            }}>
              Selected projects
            </h2>
          </div>

          {!loading && projects.length > 0 && (
            <button
              onClick={() => window.location.href = '/portfolio'}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent',
                color: '#2D6BFF',
                border: '1px solid rgba(45,107,255,.3)',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '.875rem', fontWeight: 600,
                cursor: 'pointer',
                transition: 'background .2s, border-color .2s',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(45,107,255,.06)';
                e.currentTarget.style.borderColor = '#2D6BFF';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(45,107,255,.3)';
              }}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
