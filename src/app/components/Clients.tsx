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
    <section className="py-16 relative" style={{ background: '#0A1226' }}>
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,.06)' }} />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: '.8125rem', color: '#8A97B8', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Trusted by
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {clients.length <= 5 ? (
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center justify-center"
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="object-contain transition-all duration-300"
                    style={{
                      maxHeight: '36px',
                      maxWidth: '160px',
                      filter: 'grayscale(1) brightness(1.8) opacity(0.55)',
                    }}
                    title={client.name}
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) brightness(2.4) opacity(0.85)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) brightness(1.8) opacity(0.55)')}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {clients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="px-6">
                  <div className="flex items-center justify-center h-16">
                    <ImageWithFallback
                      src={client.logo}
                      alt={client.name}
                      className="object-contain"
                      style={{
                        maxHeight: '36px',
                        maxWidth: '140px',
                        filter: 'grayscale(1) brightness(1.8) opacity(0.55)',
                        transition: 'filter .2s',
                      }}
                      title={client.name}
                      onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) brightness(2.4) opacity(0.85)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) brightness(1.8) opacity(0.55)')}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </motion.div>
      </div>
    </section>
  );
}