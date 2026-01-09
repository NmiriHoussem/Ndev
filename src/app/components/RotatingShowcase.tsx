import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CommandTerminal } from './visualizations/CommandTerminal';
import { DataFlowVisualization } from './visualizations/DataFlowVisualization';
import { WireframeTransformation } from './visualizations/WireframeTransformation';

const visualizations = [
  { id: 1, name: 'Terminal', component: CommandTerminal },
  { id: 2, name: 'Data Flow', component: DataFlowVisualization },
  { id: 3, name: 'UX Design Process', component: WireframeTransformation },
];

export function RotatingShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const ROTATION_INTERVAL = 7000; // 7 seconds per visualization

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % visualizations.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const CurrentVisualization = visualizations[currentIndex].component;

  return (
    <div className="w-full h-[500px] relative flex items-center justify-center overflow-hidden">
      {/* Main Container */}
      <div className="relative h-full w-full flex items-center justify-center">
        
        {/* Visualization container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ 
                opacity: 0,
                x: direction > 0 ? 100 : -100,
                scale: 0.9
              }}
              animate={{ 
                opacity: 1,
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0,
                x: direction > 0 ? -100 : 100,
                scale: 0.9
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <CurrentVisualization />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}