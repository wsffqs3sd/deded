import React, { useState, useEffect } from 'react';

interface TerminalProps {
  commands: string[];
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ commands, className = '' }) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentCommand >= commands.length) return;

    const command = commands[currentCommand];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index <= command.length) {
        setCurrentText(command.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.length);
          setCurrentText('');
          setIsTyping(true);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentCommand, commands]);

  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="terminal-body">
        <div className="flex items-center">
          <span className="text-red-400">root@hackbox:~$</span>
          <span className="ml-2 text-green-400">{currentText}</span>
          {isTyping && <span className="animate-pulse text-green-400">|</span>}
        </div>
      </div>
    </div>
  );
};

export default Terminal;