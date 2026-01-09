import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CommandTerminal() {
  const [currentLine, setCurrentLine] = useState(0);
  
  const codeLines = [
    { text: '$ npm create ndevdigital-app', color: 'text-green-400', delay: 0 },
    { text: '✓ Creating new project...', color: 'text-blue-400', delay: 1 },
    { text: '✓ Installing dependencies...', color: 'text-blue-400', delay: 2 },
    { text: '✓ Setting up UI components...', color: 'text-blue-400', delay: 3 },
    { text: '✓ Configuring design system...', color: 'text-purple-400', delay: 4 },
    { text: '✓ Adding interactive features...', color: 'text-purple-400', delay: 5 },
    { text: '', color: 'text-white', delay: 6 },
    { text: '🚀 Project ready!', color: 'text-green-400', delay: 6.5 },
    { text: '  Start: npm run dev', color: 'text-gray-400', delay: 7 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (codeLines.length + 3));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Terminal window */}
      <motion.div
        className="w-full max-w-2xl h-96 bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Terminal header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
            <Terminal size={14} />
            <span>terminal — ndevdigital</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm space-y-2">
          {codeLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: currentLine > idx ? 1 : 0,
                x: currentLine > idx ? 0 : -10
              }}
              transition={{ duration: 0.3 }}
              className={`${line.color} flex items-center gap-2`}
            >
              {line.text && (
                <>
                  <span>{line.text}</span>
                  {currentLine === idx && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-green-400"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </>
              )}
            </motion.div>
          ))}

          {/* Typing cursor on last line */}
          {currentLine >= codeLines.length && (
            <motion.div className="text-gray-400 flex items-center gap-2">
              <span>$ </span>
              <motion.span
                className="inline-block w-2 h-4 bg-gray-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          )}
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Code snippets floating around */}
      {['React', 'TypeScript', 'Tailwind', 'Node.js'].map((tech, idx) => (
        <motion.div
          key={tech}
          className="absolute text-xs font-mono text-gray-400 bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded"
          style={{
            top: `${20 + idx * 20}%`,
            left: idx % 2 === 0 ? '10%' : '80%',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [20, -20, -60],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: idx * 1,
          }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
}