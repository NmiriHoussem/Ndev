import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Star, TrendingUp, Check, Target, Lightbulb, Zap, Award } from 'lucide-react';
import { Badge } from './ui/badge';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projectId = "mdauklijxlvxpcooytai";
const publicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXVrbGlqeGx2eHBjb295dGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODY1MzIsImV4cCI6MjA4MzU2MjUzMn0.cvk8mjS0e-iGlYXTiEbjLJrecnDTWAOR2Pr2RbIUSqI";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

// Helper function to generate SEO-friendly slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface ProjectDetailData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  metrics: {
    users: string;
    rating: string;
    growth: string;
  };
  link?: string;
  featured?: boolean;
  // Extended fields for detail page
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  impact?: string;
  timeline?: string;
  teamSize?: string;
  role?: string;
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery?: string[];
  keyFeatures?: string[];
  slug?: string;
}

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const [project, setProject] = useState<ProjectDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const fetchProjectDetail = async () => {
      try {
        const response = await fetch(`${API_BASE}/projects`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success && data.projects) {
          // Try to find project by slug first, then by id, then by generated slug from title
          let foundProject = data.projects.find((p: any) => p.slug === projectId);
          
          if (!foundProject) {
            // Try matching by generated slug from title
            foundProject = data.projects.find((p: any) => generateSlug(p.title) === projectId);
          }
          
          if (!foundProject) {
            // Fallback to id match (for backward compatibility)
            foundProject = data.projects.find((p: any) => p.id === projectId);
          }
          
          if (foundProject) {
            setProject(foundProject);
          }
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetail();
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </motion.button>

          {/* Title Section */}
          <motion.div
            className="max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg px-6 py-2 text-base mb-4`}>
                {project.category}
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              {project.timeline && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={20} className="text-purple-600" />
                  <span className="text-sm font-medium">Timeline: {project.timeline}</span>
                </div>
              )}
              {project.teamSize && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Users size={20} className="text-purple-600" />
                  <span className="text-sm font-medium">Team: {project.teamSize}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Award size={20} className="text-purple-600" />
                  <span className="text-sm font-medium">Role: {project.role}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Badge variant="outline" className="border-gray-300 text-gray-700 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content: Two Column Layout - Gallery Left, Text Right */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 max-w-7xl mx-auto">
            {/* Left Column: Image Gallery (Sticky) */}
            <motion.div
              className="space-y-6 lg:sticky lg:top-24 self-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Gallery Images */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Project Gallery</h3>
                  <div className="space-y-4">
                    {project.gallery.map((imageUrl, idx) => (
                      <motion.div
                        key={idx}
                        className="rounded-xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src={imageUrl}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Link */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-xl shadow-xl hover:shadow-2xl transition-all text-lg font-semibold`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Live Project
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Overview Section */}
              {project.overview && (
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                      <Target className="text-white" size={20} />
                    </div>
                    Project Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {project.overview}
                  </p>
                </div>
              )}

              {/* Challenge Section */}
              {project.challenge && (
                <div className="space-y-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                      <Lightbulb className="text-white" size={20} />
                    </div>
                    The Challenge
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Solution Section */}
              {project.solution && (
                <div className="space-y-4 p-6 bg-green-50 rounded-2xl border border-green-100">
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    Our Solution
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
                  <div className="space-y-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md border border-gray-100"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <Check className="text-white" size={16} />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results Section */}
              {project.results && project.results.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Results & Impact</h2>
                  <div className="space-y-4">
                    {project.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-5 rounded-xl bg-purple-50 shadow-md border border-purple-100"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white font-bold`}>
                          {idx + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">{result}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-md px-5 py-2 text-base`}>
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 shadow-xl border border-gray-100">
                  <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-r ${project.gradient} opacity-10 rounded-br-full`}></div>
                  <div className="relative">
                    <div className="text-5xl text-purple-300 mb-3">"</div>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                      {project.testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                      <div>
                        <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                        <div className="text-gray-600">{project.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-full blur-2xl opacity-30`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              ></motion.div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-white shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Like What You See?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                  Let's collaborate and create something extraordinary for your business.
                </p>
                <motion.button
                  className={`px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-xl shadow-xl hover:shadow-2xl transition-all text-lg flex items-center gap-2 mx-auto`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  Start Your Project
                  <ExternalLink size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}