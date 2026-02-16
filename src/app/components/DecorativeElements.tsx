import { motion } from 'motion/react';
import { Sparkles, Heart, Star, Moon, Sun } from 'lucide-react';

export default function DecorativeElements() {
  const floatingIcons = [
    { Icon: Sparkles, top: '10%', left: '5%', delay: 0, color: '#d4669f' },
    { Icon: Heart, top: '20%', right: '8%', delay: 0.5, color: '#87c4d4' },
    { Icon: Star, top: '40%', left: '3%', delay: 1, color: '#d4669f' },
    { Icon: Moon, top: '60%', right: '5%', delay: 1.5, color: '#5a3d7d' },
    { Icon: Sun, top: '80%', left: '7%', delay: 2, color: '#87c4d4' },
    { Icon: Sparkles, top: '70%', right: '10%', delay: 2.5, color: '#d4669f' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon 
            className="w-6 h-6 md:w-8 md:h-8" 
            style={{ color: item.color }}
          />
        </motion.div>
      ))}

      {/* Floating circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#d4669f' : '#87c4d4'}20 0%, transparent 70%)`,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
