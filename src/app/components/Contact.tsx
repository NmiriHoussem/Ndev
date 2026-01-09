import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@ndevdigital.com',
    link: 'mailto:hello@ndevdigital.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Making Apps and Games Worldwide',
    link: null,
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

                {/* Quick Info */}
                <motion.div
                  className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 text-white relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <Calendar className="mb-3" size={32} />
                    <h4 className="text-xl mb-2">Schedule a Call</h4>
                    <p className="text-sm opacity-90">Book a free consultation to discuss your project</p>
                  </div>
                </motion.div>
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
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="Your name"
                        className={`transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
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
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="your.email@example.com"
                        className={`transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
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
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your company name"
                        className={`transition-all duration-300 ${
                          focusedField === 'company' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
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
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="Tell us about your project..."
                        rows={5}
                        className={`transition-all duration-300 resize-none ${
                          focusedField === 'message' 
                            ? 'border-purple-400 shadow-lg shadow-purple-200' 
                            : 'border-gray-300'
                        }`}
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
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}