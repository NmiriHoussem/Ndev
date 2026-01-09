import { motion } from 'motion/react';
import { User, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function WireframeTransformation() {
  const [isHighFidelity, setIsHighFidelity] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Start with wireframe
      setIsHighFidelity(false);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Transform to high-fidelity
      setIsHighFidelity(true);
      await new Promise(resolve => setTimeout(resolve, 3500));
      
      // Loop back
      sequence();
    };
    
    const timer = setTimeout(sequence, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-md w-full px-2 sm:px-0">
        {/* Profile Card */}
        <motion.div
          className="rounded-xl sm:rounded-2xl overflow-hidden"
          animate={isHighFidelity ? {
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          } : {
            backgroundColor: '#ffffff',
            boxShadow: 'none',
            border: '2px solid #e5e7eb'
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <motion.div
            className="relative h-32 flex items-center justify-center"
            style={isHighFidelity ? {
              background: 'linear-gradient(135deg, #5865F2 0%, #8B5CF6 100%)'
            } : {
              background: '#f3f4f6'
            }}
            animate={isHighFidelity ? {
              opacity: 1
            } : {
              opacity: 1
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <motion.div
              className="relative rounded-full flex items-center justify-center"
              animate={isHighFidelity ? {
                width: '80px',
                height: '80px',
                backgroundColor: '#ffffff',
                border: '4px solid #ffffff'
              } : {
                width: '80px',
                height: '80px',
                backgroundColor: '#e5e7eb',
                border: '2px solid #d1d5db'
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={isHighFidelity ? {
                  color: '#5865F2',
                  scale: 1
                } : {
                  color: '#9ca3af',
                  scale: 0.9
                }}
                transition={{ duration: 0.6 }}
              >
                <User size={40} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="p-4 sm:p-8">
            {/* Name */}
            <motion.div
              className="mb-2 rounded"
              animate={isHighFidelity ? {
                height: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              } : {
                height: '32px',
                backgroundColor: '#e5e7eb'
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-xl sm:text-2xl text-center text-gray-800"
                animate={isHighFidelity ? {
                  opacity: 1
                } : {
                  opacity: 0
                }}
                transition={{ duration: 0.4 }}
              >
                Sarah Johnson
              </motion.h2>
            </motion.div>

            {/* Title */}
            <motion.div
              className="mb-6 rounded"
              animate={isHighFidelity ? {
                height: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0)'
              } : {
                height: '20px',
                backgroundColor: '#e5e7eb',
                marginLeft: '60px',
                marginRight: '60px'
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="text-center text-gray-500"
                animate={isHighFidelity ? {
                  opacity: 1
                } : {
                  opacity: 0
                }}
                transition={{ duration: 0.4 }}
              >
                Senior Product Designer
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div
                className="flex items-center gap-3"
                animate={isHighFidelity ? {
                  opacity: 1
                } : {
                  opacity: 1
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  className="rounded-lg flex items-center justify-center"
                  animate={isHighFidelity ? {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#EEF2FF'
                  } : {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#e5e7eb'
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={isHighFidelity ? {
                      color: '#5865F2'
                    } : {
                      color: '#9ca3af'
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail size={20} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex-1 rounded"
                  animate={isHighFidelity ? {
                    height: 'auto',
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                  } : {
                    height: '16px',
                    backgroundColor: '#e5e7eb'
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.p
                    className="text-sm text-gray-700"
                    animate={isHighFidelity ? {
                      opacity: 1
                    } : {
                      opacity: 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    sarah.johnson@company.com
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center gap-3"
                animate={isHighFidelity ? {
                  opacity: 1
                } : {
                  opacity: 1
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="rounded-lg flex items-center justify-center"
                  animate={isHighFidelity ? {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#F3E8FF'
                  } : {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#e5e7eb'
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={isHighFidelity ? {
                      color: '#8B5CF6'
                    } : {
                      color: '#9ca3af'
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Phone size={20} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex-1 rounded"
                  animate={isHighFidelity ? {
                    height: 'auto',
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                  } : {
                    height: '16px',
                    backgroundColor: '#e5e7eb'
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.p
                    className="text-sm text-gray-700"
                    animate={isHighFidelity ? {
                      opacity: 1
                    } : {
                      opacity: 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    +1 (555) 123-4567
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center gap-3"
                animate={isHighFidelity ? {
                  opacity: 1
                } : {
                  opacity: 1
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="rounded-lg flex items-center justify-center"
                  animate={isHighFidelity ? {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#DBEAFE'
                  } : {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#e5e7eb'
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={isHighFidelity ? {
                      color: '#3B82F6'
                    } : {
                      color: '#9ca3af'
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin size={20} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex-1 rounded"
                  animate={isHighFidelity ? {
                    height: 'auto',
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                  } : {
                    height: '16px',
                    backgroundColor: '#e5e7eb'
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.p
                    className="text-sm text-gray-700"
                    animate={isHighFidelity ? {
                      opacity: 1
                    } : {
                      opacity: 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    San Francisco, CA
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>

            {/* Action Button */}
            <motion.button
              className="w-full mt-8 py-3 rounded-lg text-white"
              style={isHighFidelity ? {
                background: 'linear-gradient(135deg, #5865F2 0%, #8B5CF6 100%)'
              } : {
                background: '#e5e7eb'
              }}
              animate={isHighFidelity ? {
                boxShadow: '0 4px 6px -1px rgba(88, 101, 242, 0.3)'
              } : {
                boxShadow: 'none'
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                animate={isHighFidelity ? {
                  opacity: 1
                } : {
                  opacity: 0
                }}
                transition={{ duration: 0.4 }}
              >
                View Profile
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Labels */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
      >
        <motion.p
          className="text-sm font-mono px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm relative"
          animate={isHighFidelity ? {
            color: '#8B5CF6'
          } : {
            color: '#9ca3af'
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="inline-block"
            animate={isHighFidelity ? {
              opacity: 0,
              position: 'absolute'
            } : {
              opacity: 1,
              position: 'relative'
            }}
            transition={{ duration: 0.3 }}
          >
            Wireframe
          </motion.span>
          <motion.span
            className="inline-block"
            animate={isHighFidelity ? {
              opacity: 1,
              position: 'relative'
            } : {
              opacity: 0,
              position: 'absolute'
            }}
            transition={{ duration: 0.3 }}
          >
            High-Fidelity Design
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          animate={isHighFidelity ? {
            width: '100%'
          } : {
            width: '0%'
          }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}