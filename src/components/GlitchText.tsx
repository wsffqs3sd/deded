import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let timeoutId: NodeJS.Timeout;

    const glitch = () => {
      const glitched = text
        .split('')
        .map((char, index) => {
          if (Math.random() < 0.1) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');

      setGlitchText(glitched);

      timeoutId = setTimeout(() => {
        setGlitchText(text);
      }, 100);
    };

    const interval = setInterval(glitch, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {glitchText}
    </span>
  );
};

export default GlitchText;