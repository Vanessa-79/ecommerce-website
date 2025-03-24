import { useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RippleProps {
  color?: string;
  duration?: number;
}

export default function RippleEffect({ color = 'rgba(255, 255, 255, 0.35)', duration = 0.5 }: RippleProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useLayoutEffect(() => {
    const element = document.getElementById('ripple-container');
    if (!element) return;

    const handleClick = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setRipples(prev => [...prev, { x, y, id: Date.now() }]);
    };

    element.addEventListener('click', handleClick);
    return () => element.removeEventListener('click', handleClick);
  }, []);

  return (
    <div id="ripple-container" className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5, x: ripple.x, y: ripple.y }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            style={{
              position: 'absolute',
              backgroundColor: color,
              borderRadius: '50%',
              width: 100,
              height: 100,
              marginLeft: -50,
              marginTop: -50,
            }}
            onAnimationComplete={() => {
              setRipples(prev => prev.filter(r => r.id !== ripple.id));
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}