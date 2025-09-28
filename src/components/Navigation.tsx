import React from 'react';
import { Shield, Terminal, MessageSquare } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'services', label: 'Services', icon: Shield },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold text-white font-mono">CyberSec</span>
          </div>
          
          <div className="flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === id
                    ? 'text-red-400 bg-red-900/20 shadow-lg shadow-red-500/20'
                    : 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;