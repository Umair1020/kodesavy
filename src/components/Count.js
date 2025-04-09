import React, { useEffect, useState } from 'react';


const Counter = ({ end, duration, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="counter-item text-center">
      <h2 className="counter-number">{count.toLocaleString()}{suffix}</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};
export default Counter