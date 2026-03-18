import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from './utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function Section({ children, className, delay = 0, once = true }: SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.6, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
