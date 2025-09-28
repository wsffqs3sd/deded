import React from 'react';
import { Shield, Lock, Eye, Zap } from 'lucide-react';
import GlitchText from '../GlitchText';
import Terminal from '../Terminal';

const Home: React.FC = () => {
  const terminalCommands = [
    'nmap -sS -O target.com',
    'sqlmap -u "http://target.com/page?id=1" --dbs',
    'hydra -l admin -P passwords.txt ssh://target.com',
    'metasploit > use exploit/multi/handler',
    'john --wordlist=rockyou.txt hashes.txt'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white font-mono leading-tight">
              <GlitchText text="CYBER" className="text-red-500" />
              <br />
              <span className="text-white">SECURITY</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Penetration Testing • Red Team Operations • Security Auditing
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, label: 'Penetration Testing', count: '500+' },
              { icon: Lock, label: 'Security Audits', count: '200+' },
              { icon: Eye, label: 'Vulnerabilities Found', count: '1000+' },
              { icon: Zap, label: 'Systems Secured', count: '300+' },
            ].map(({ icon: Icon, label, count }, index) => (
              <div
                key={label}
                className="bg-gray-900/50 border border-red-900/30 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white font-mono">{count}</div>
                <div className="text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105">
              View Services
            </button>
            <button className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <Terminal commands={terminalCommands} className="animate-fade-in" />
          
          <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-white font-mono">Current Status</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">System Status</span>
                <span className="text-green-400 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Security Level</span>
                <span className="text-red-400">Maximum</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Availability</span>
                <span className="text-green-400">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;