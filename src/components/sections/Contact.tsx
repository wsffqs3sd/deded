import React, { useState } from 'react';
import { MessageCircle, Shield, Lock, Eye, Zap, Copy, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'telegram',
      name: 'Telegram',
      icon: MessageCircle,
      handle: '@cybersec_expert',
      description: 'End-to-end encrypted messaging with self-destructing messages',
      security: 'MTProto 2.0 Encryption',
      color: 'blue',
      features: ['Secret Chats', 'Self-Destruct Timer', 'No Phone Number Required']
    },
    {
      id: 'signal',
      name: 'Signal',
      icon: Shield,
      handle: '+1-555-CYBER-SEC',
      description: 'Military-grade encryption for maximum security',
      security: 'Signal Protocol (Double Ratchet)',
      color: 'blue',
      features: ['Perfect Forward Secrecy', 'Metadata Protection', 'Open Source']
    },
    {
      id: 'matrix',
      name: 'Matrix',
      icon: Lock,
      handle: '@cybersec:matrix.org',
      description: 'Decentralized, federated secure communication',
      security: 'Olm/Megolm E2EE',
      color: 'green',
      features: ['Decentralized Network', 'Cross-Platform', 'Bridging Support']
    },
    {
      id: 'xmpp',
      name: 'XMPP',
      icon: Eye,
      handle: 'cybersec@jabber.org',
      description: 'Open standard for secure instant messaging',
      security: 'OMEMO Encryption',
      color: 'purple',
      features: ['Federation Support', 'OTR Compatible', 'Lightweight Protocol']
    },
    {
      id: 'session',
      name: 'Session',
      icon: Zap,
      handle: '05a1b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789ab',
      description: 'Anonymous messaging without phone numbers or emails',
      security: 'Signal Protocol + Onion Routing',
      color: 'red',
      features: ['No Metadata Collection', 'Onion Routing', 'Anonymous Registration']
    }
  ];

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500/30 hover:border-blue-500/70 hover:shadow-blue-500/20',
      green: 'border-green-500/30 hover:border-green-500/70 hover:shadow-green-500/20',
      purple: 'border-purple-500/30 hover:border-purple-500/70 hover:shadow-purple-500/20',
      red: 'border-red-500/30 hover:border-red-500/70 hover:shadow-red-500/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      purple: 'text-purple-500',
      red: 'text-red-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-red-500">SECURE</span> CONTACT
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Reach out through encrypted channels only. Your privacy and security are paramount.
          </p>
          
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-yellow-400 font-semibold">Security Notice</span>
            </div>
            <p className="text-yellow-200 text-sm">
              All communications are monitored for security. Only encrypted messaging platforms are accepted.
              Verify my identity through multiple channels before sharing sensitive information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map(({ id, name, icon: Icon, handle, description, security, color, features }, index) => (
            <div
              key={id}
              className={`bg-gray-900/50 border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group ${getColorClasses(color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Icon className={`w-8 h-8 ${getIconColor(color)} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-white font-mono ml-3">{name}</h3>
                </div>
                <button
                  onClick={() => copyToClipboard(handle, id)}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  title="Copy to clipboard"
                >
                  {copiedId === id ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              
              <div className="mb-4">
                <div className="bg-gray-800/50 rounded-lg p-3 font-mono text-sm text-green-400 break-all">
                  {handle}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{description}</p>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Lock className="w-4 h-4 text-red-500 mr-2" />
                  <span className="text-xs text-gray-400 font-semibold">ENCRYPTION</span>
                </div>
                <div className="text-xs text-red-400 font-mono">{security}</div>
              </div>
              
              <ul className="space-y-1">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                    <div className="w-1 h-1 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white font-mono mb-4 flex items-center">
              <Shield className="w-6 h-6 text-red-500 mr-2" />
              Security Guidelines
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Always verify my identity through multiple channels before sharing sensitive data</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Use disappearing messages when discussing confidential projects</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Avoid sharing credentials or sensitive information in initial contact</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Consider using a VPN when accessing these platforms</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white font-mono mb-4 flex items-center">
              <Eye className="w-6 h-6 text-red-500 mr-2" />
              Response Times
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Emergency Security Issues</span>
                <span className="text-green-400 font-mono">< 1 hour</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">General Inquiries</span>
                <span className="text-yellow-400 font-mono">< 24 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Project Discussions</span>
                <span className="text-blue-400 font-mono">< 48 hours</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-sm">Currently Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-red-400 font-mono mb-2">⚠️ OPSEC WARNING</h4>
            <p className="text-red-200 text-sm">
              Do not contact through unsecured channels (email, SMS, social media). 
              All communications must use end-to-end encryption. Operational security is non-negotiable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;