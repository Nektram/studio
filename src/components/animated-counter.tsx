"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  duration?: number;
  formatter?: (value: number) => string;
}

const defaultFormatter = (value: number) => Math.round(value).toLocaleString('en-US');

export const AnimatedCounter = ({ 
  value, 
  className, 
  duration = 1000, 
  formatter = defaultFormatter 
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetValueRef = useRef(value);

  useEffect(() => {
    targetValueRef.current = value;
    startRef.current = null;
    
    const animate = (timestamp: number) => {
      if (!startRef.current) {
        startRef.current = timestamp;
      }

      const progress = timestamp - startRef.current;
      const percentage = Math.min(progress / duration, 1);
      const easedPercentage = 1 - Math.pow(1 - percentage, 3); // Ease-out cubic

      const currentValue = easedPercentage * targetValueRef.current;
      setDisplayValue(currentValue);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetValueRef.current);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration]);

  return <span className={className}>{formatter(displayValue)}</span>;
};
