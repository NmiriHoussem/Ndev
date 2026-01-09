import { motion } from 'motion/react';
import { Database, Cpu, Sparkles, Package } from 'lucide-react';

export function DataFlowVisualization() {
  const stages = [
    { id: 1, icon: Database, label: 'Raw Data', x: 15, y: 45, color: 'from-gray-600 to-gray-700' },
    { id: 2, icon: Cpu, label: 'Processing', x: 38, y: 45, color: 'from-blue-600 to-blue-700' },
    { id: 3, icon: Sparkles, label: 'Design', x: 62, y: 45, color: 'from-purple-600 to-purple-700' },
    { id: 4, icon: Package, label: 'Product', x: 85, y: 45, color: 'from-green-600 to-green-700' },
  ];

  const dataPackets = [
    { id: 1, delay: 0 },
    { id: 2, delay: 1.5 },
    { id: 3, delay: 3 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Flow path */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#4b5563' }} />
            <stop offset="33%" style={{ stopColor: '#3b82f6' }} />
            <stop offset="66%" style={{ stopColor: '#9333ea' }} />
            <stop offset="100%" style={{ stopColor: '#10b981' }} />
          </linearGradient>
        </defs>

        {/* Main flow line */}
        <motion.path
          d={`M ${stages[0].x}% ${stages[0].y}% 
              C ${(stages[0].x + stages[1].x) / 2}% ${stages[0].y - 10}%,
                ${(stages[0].x + stages[1].x) / 2}% ${stages[1].y + 10}%,
                ${stages[1].x}% ${stages[1].y}%
              C ${(stages[1].x + stages[2].x) / 2}% ${stages[1].y - 10}%,
                ${(stages[1].x + stages[2].x) / 2}% ${stages[2].y + 10}%,
                ${stages[2].x}% ${stages[2].y}%
              C ${(stages[2].x + stages[3].x) / 2}% ${stages[2].y - 10}%,
                ${(stages[2].x + stages[3].x) / 2}% ${stages[3].y + 10}%,
                ${stages[3].x}% ${stages[3].y}%`}
          stroke="url(#flowGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Data packets traveling along path */}
      {dataPackets.map((packet) => (
        <motion.div
          key={packet.id}
          className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-lg"
          style={{
            left: `${stages[0].x}%`,
            top: `${stages[0].y}%`,
          }}
          animate={{
            left: [
              `${stages[0].x}%`,
              `${stages[1].x}%`,
              `${stages[2].x}%`,
              `${stages[3].x}%`,
            ],
            top: [
              `${stages[0].y}%`,
              `${stages[1].y}%`,
              `${stages[2].y}%`,
              `${stages[3].y}%`,
            ],
          }}
          transition={{
            duration: 4,
            delay: packet.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Stage nodes */}
      {stages.map((stage, idx) => {
        const Icon = stage.icon;
        
        return (
          <motion.div
            key={stage.id}
            className="absolute"
            style={{
              left: `${stage.x}%`,
              top: `${stage.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: idx * 0.3,
              type: "spring",
              stiffness: 200
            }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.15 }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400"
                style={{ left: '-12px', top: '-12px' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.5
                }}
              />

              {/* Icon container */}
              <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} shadow-xl flex flex-col items-center justify-center`}>
                <Icon className="text-white" size={24} />
              </div>

              {/* Glow */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${stage.color} opacity-50 blur-xl`}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.3
                }}
              />

              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs text-gray-700 bg-white px-3 py-1 rounded-full shadow">
                  {stage.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Particle effects around nodes */}
      {stages.map((stage, stageIdx) => (
        [...Array(4)].map((_, i) => (
          <motion.div
            key={`${stage.id}-particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-400/60"
            style={{
              left: `${stage.x}%`,
              top: `${stage.y}%`,
            }}
            animate={{
              x: [0, (Math.cos(i * Math.PI / 2) * 40), 0],
              y: [0, (Math.sin(i * Math.PI / 2) * 40), 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: stageIdx * 0.5 + i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))
      ))}
    </div>
  );
}
