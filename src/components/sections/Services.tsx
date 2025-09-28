import React from 'react';
import { Shield, Search, Bug, Lock, Eye, Zap, Server, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities in your systems and applications.',
      features: ['Web Application Testing', 'Network Penetration Testing', 'Mobile App Security', 'API Security Testing'],
      color: 'red'
    },
    {
      icon: Bug,
      title: 'Vulnerability Assessment',
      description: 'Systematic evaluation of security weaknesses in your infrastructure and applications.',
      features: ['Automated Scanning', 'Manual Testing', 'Risk Assessment', 'Remediation Guidance'],
      color: 'orange'
    },
    {
      icon: Eye,
      title: 'Red Team Operations',
      description: 'Advanced persistent threat simulation to test your organization\'s detection and response capabilities.',
      features: ['Social Engineering', 'Physical Security', 'Advanced Evasion', 'Custom Payloads'],
      color: 'purple'
    },
    {
      icon: Lock,
      title: 'Security Auditing',
      description: 'Comprehensive review of security policies, procedures, and implementations.',
      features: ['Compliance Auditing', 'Code Review', 'Configuration Review', 'Policy Assessment'],
      color: 'blue'
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Securing your servers, networks, and cloud infrastructure against threats.',
      features: ['Server Hardening', 'Network Security', 'Cloud Security', 'Monitoring Setup'],
      color: 'green'
    },
    {
      icon: Globe,
      title: 'OSINT & Reconnaissance',
      description: 'Open source intelligence gathering and reconnaissance for security assessments.',
      features: ['Digital Footprinting', 'Social Media Analysis', 'Domain Intelligence', 'Threat Intelligence'],
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'border-red-500/30 hover:border-red-500/70 hover:shadow-red-500/20',
      orange: 'border-orange-500/30 hover:border-orange-500/70 hover:shadow-orange-500/20',
      purple: 'border-purple-500/30 hover:border-purple-500/70 hover:shadow-purple-500/20',
      blue: 'border-blue-500/30 hover:border-blue-500/70 hover:shadow-blue-500/20',
      green: 'border-green-500/30 hover:border-green-500/70 hover:shadow-green-500/20',
      yellow: 'border-yellow-500/30 hover:border-yellow-500/70 hover:shadow-yellow-500/20'
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const getIconColor = (color: string) => {
    const colors = {
      red: 'text-red-500',
      orange: 'text-orange-500',
      purple: 'text-purple-500',
      blue: 'text-blue-500',
      green: 'text-green-500',
      yellow: 'text-yellow-500'
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-red-500">SECURITY</span> SERVICES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your digital assets and infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, features, color }, index) => (
            <div
              key={title}
              className={`bg-gray-900/50 border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group ${getColorClasses(color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <Icon className={`w-8 h-8 ${getIconColor(color)} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold text-white font-mono ml-3">{title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{description}</p>
              
              <ul className="space-y-2">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <Zap className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 border ${
                  color === 'red' 
                    ? 'border-red-600 text-red-400 hover:bg-red-600 hover:text-white' 
                    : `border-${color}-600 text-${color}-400 hover:bg-${color}-600 hover:text-white`
                }`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white font-mono mb-4">Need Custom Security Solutions?</h3>
            <p className="text-gray-300 mb-6">
              Every organization has unique security requirements. I provide tailored cybersecurity solutions 
              designed specifically for your infrastructure, compliance needs, and threat landscape.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;