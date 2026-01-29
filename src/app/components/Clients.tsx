import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

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
        console.log('Fetching clients from:', `${API_BASE}/clients`);
        
        const response = await fetch(`${API_BASE}/clients`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Clients response:', data);
        console.log('Number of clients:', data.clients?.length);
        console.log('Client details:', JSON.stringify(data.clients, null, 2));
        
        if (data.success && data.clients && data.clients.length > 0) {
          setClients(data.clients);
        } else {
          console.log('No clients found');
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

  // Determine how many slides to show based on number of clients
  const slidesToShow = Math.min(clients.length, 5);
  
  const settings = {
    dots: false,
    infinite: clients.length > 5, // Only enable infinite if we have more than 5 logos
    speed: clients.length > 5 ? 3000 : 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: clients.length > 5,
    autoplaySpeed: clients.length > 5 ? 0 : 3000,
    cssEase: clients.length > 5 ? 'linear' : 'ease',
    pauseOnHover: true,
    arrows: clients.length > 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(clients.length, 4),
          infinite: clients.length > 5,
          arrows: clients.length > 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(clients.length, 3),
          infinite: clients.length > 5,
          arrows: clients.length > 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(clients.length, 2),
          infinite: clients.length > 5,
          arrows: false,
        }
      }
    ]
  };

  if (loading || clients.length === 0) {
    return null; // Don't show the section if there are no clients
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
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
              <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                Trusted By
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Companies We've{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Worked With
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proud to partner with leading organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {clients.length <= 5 ? (
            // Simple grid for 5 or fewer clients - no carousel needed
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-[200px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                    title={client.name}
                  />
                  <span className="text-xs text-gray-500 font-medium">{client.name}</span>
                </motion.div>
              ))}
            </div>
          ) : (
            // Carousel for more than 5 clients
            <Slider {...settings}>
              {clients.map((client, index) => {
                console.log(`Rendering client ${index}:`, client.name, 'Logo URL:', client.logo.substring(0, 50));
                return (
                  <div key={`${client.id}-${index}`} className="px-4">
                    <div className="flex flex-col items-center justify-center h-32 gap-2">
                      <ImageWithFallback
                        src={client.logo}
                        alt={client.name}
                        className="max-h-16 max-w-full object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                        title={client.name}
                      />
                      <span className="text-xs text-gray-500 font-medium">{client.name}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          )}
        </motion.div>
      </div>
    </section>
  );
}