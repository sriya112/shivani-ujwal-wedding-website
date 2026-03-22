import { useEffect, useState } from 'react';

export default function Countdown() {
  const weddingDate = new Date('May 3, 2026 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div><span>{timeLeft.days}</span>Days</div>
      <div><span>{timeLeft.hours}</span>Hours</div>
      <div><span>{timeLeft.minutes}</span>Minutes</div>
      <div><span>{timeLeft.seconds}</span>Seconds</div>
    </div>
  );
}
