import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@ndev.digital',
    link: 'mailto:contact@ndev.digital',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+216 54 882 779',
    link: 'tel:+21654882779',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Immeuble Tamayouz 1082 Centre Urbain Nord-Tunis',
    link: null,
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
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
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        console.log('Contact form submitted successfully');
        setShowSuccessModal(true);
      } else {
        setError(true);
        const errorMessage = data.error || 'Failed to send message. Please try again.';
        console.error('Contact form submission failed:', errorMessage);
        
        // Special handling for API key errors
        if (errorMessage.includes('Email service not configured') || errorMessage.includes('Failed to send email')) {
          alert('⚠️ Email service is not properly configured.\n\nPlease contact the administrator or reach out directly:\n📧 Email: contact@ndev.digital\n📞 Phone: +216 54 882 779');
        } else {
          alert(errorMessage);
        }
      }
    } catch (err) {
      setError(true);
      console.error('Error submitting contact form:', err);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.1),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_40%)]"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200">
              <MessageCircle className="text-purple-600" size={16} />
              <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your project to life? Get in touch with us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl"></div>
              
              <div className="relative p-8">
                <h3 className="text-3xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Start a Conversation
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll
                  respond as soon as possible.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const IconComponent = info.icon;
                    const content = (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/60 shadow-lg group-hover:shadow-xl transition-all"></div>
                          
                          <div className="relative p-6 flex items-start gap-4">
                            <motion.div 
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <IconComponent className="text-white" size={24} />
                            </motion.div>
                            <div>
                              <h4 className="mb-1 text-gray-900">{info.title}</h4>
                              <p className="text-gray-600">{info.value}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );

                    return (
                      <div key={info.title}>
                        {info.link ? (
                          <a href={info.link} className="block">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Removed "Schedule a Call" section */}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl"></div>
              
              <div className="relative p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-900">
                      Name *
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={`transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                          layoutId="input-focus"
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-900">
                      Email *
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className={`transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                          layoutId="input-focus"
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-gray-900">
                      Company
                    </label>
                    <div className="relative">
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className={`transition-all duration-300 ${
                          focusedField === 'company' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                      />
                      {focusedField === 'company' && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                          layoutId="input-focus"
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-900">
                      Message *
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        rows={5}
                        className={`transition-all duration-300 resize-none ${
                          focusedField === 'message' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                      />
                      {focusedField === 'message' && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                          layoutId="input-focus"
                        />
                      )}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 text-white py-6 text-lg border-0 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <Loader2 size={20} className="animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </motion.div>

                  {success && (
                    <div className="mt-4 text-sm text-green-500 flex items-center gap-2">
                      <CheckCircle size={16} />
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {error && (
                    <div className="mt-4 text-sm text-red-500 flex items-center gap-2">
                      <AlertCircle size={16} />
                      An error occurred. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient header */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"></div>
            
            {/* Content */}
            <div className="p-8 text-center">
              {/* Success icon with animation */}
              <motion.div
                className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-green-500/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <CheckCircle className="text-white" size={40} />
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Message Sent Successfully!
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for reaching out! We've received your message and will get back to you as soon as possible.
              </motion.p>

              {/* Close button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-purple-500/50 text-white py-3 border-0"
                >
                  Got it, thanks!
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}