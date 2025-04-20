import { useState, useEffect } from 'react';

function StatCounter({ target, label, startAnimation }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse the target value (e.g., "3M+", "19K") into a number
  const parseTarget = (target) => {
    if (target.includes('M+')) {
      return parseFloat(target.replace('M+', '')) * 1_000_000;
    } else if (target.includes('K')) {
      return parseFloat(target.replace('K', '')) * 1_000;
    } else if (target.includes('+')) {
      return parseFloat(target.replace('+', ''));
    }
    return parseFloat(target);
  };

  // Format the number for display (e.g., 3000000 -> "3M+")
  const formatNumber = (num, target) => {
    if (target.includes('M+')) {
      return `${(num / 1_000_000).toFixed(0)}M+`;
    } else if (target.includes('K')) {
      return `${Math.floor(num / 1_000)}K`;
    } else if (target.includes('+')) {
      return `${Math.floor(num).toString().padStart(2, '0')}+`;
    }
    return num.toString();
  };

  const targetValue = parseTarget(target);
  const duration = 1000; // Animation duration in milliseconds (2 seconds)
  const increment = targetValue / (duration / 50); // Increment per 50ms

  useEffect(() => {
    if (startAnimation && !hasAnimated) {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetValue) {
          currentCount = targetValue;
          clearInterval(interval);
          setHasAnimated(true);
        }
        setCount(currentCount);
      }, 50); // Update every 50ms

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [startAnimation, hasAnimated, targetValue, increment]);

  return (
    <div>
      <div className="text-7xl md:text-7xl font-[500]">{formatNumber(count, target)}</div>
      <div className="text-sm md:text-base font-[400]">{label}</div>
    </div>
  );
}

export default StatCounter;