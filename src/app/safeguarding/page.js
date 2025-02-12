"use client";
import { useState } from 'react';
import { Shield, Check, X, Heart, TreePine, ClipboardList, LayoutDashboard, Menu, FileText, Users, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const SafeguardingPolicy = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLink, setActiveLink] = useState('/safeguarding');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home', icon: ClipboardList },
    { href: '/complaints', label: 'Complaints', icon: FileText },
    { href: '/code_of_conduct', label: 'Code of Conduct', icon: Shield },
    { href: '/safeguarding', label: 'Safeguarding', icon: Heart },
    { href: '/whisteblowing', label: 'Whistleblowing', icon: TreePine }
  ];

  const definitions = [
    {
      term: 'Safeguarding',
      description: 'The responsibility that an organization has to ensure their employees, volunteers, partners, vendors, operations and programmes do no harm to children, young people or vulnerable adults.',
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-50 to-blue-100'
    },
    {
      term: 'Child Protection',
      description: 'The process of protecting individual children identified as either suffering or at risk of significant harm as a result of abuse or programme of work.',
      icon: <Users className="w-8 h-8 text-purple-600" />,
      color: 'from-purple-50 to-purple-100'
    },
    {
      term: 'Abuse',
      description: 'A violation of an individual\'s human and civil rights by any other person or persons. It can take various forms including physical, psychological, financial or sexual abuse.',
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      color: 'from-amber-50 to-amber-100'
    }
  ];

  const guidelines = {
    do: [
      'Read, understand and adhere to the SMO Safeguarding Policy and Code of Conduct',
      'Promote a zero tolerance approach to discrimination, sexual harassment and abuse',
      'Develop relationships based on equality, trust, respect and honesty',
      'Place the safety and welfare of children and vulnerable people above all other considerations',
      'Report any concerns about the welfare of a child or vulnerable person'
    ],
    dont: [
      'Sexually harass, assault or abuse another person',
      'Physically harass, assault or abuse another person',
      'Emotionally abuse another person',
      'Condone or participate in abusive, discriminatory, illegal, or unsafe behavior',
      'Develop inappropriate relationships with children or vulnerable people'
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:relative w-72 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white p-8 flex flex-col space-y-8 shadow-2xl h-full z-40 transition-transform duration-300 ease-in-out backdrop-blur-lg`}>
        {/* Logo Section */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 bg-white/10 p-4 rounded-2xl shadow-lg backdrop-blur-lg">
            <LayoutDashboard className="w-7 h-7" />
            <span className="tracking-wide">Dashboard</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2 relative z-10">
          {navigationItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link 
                href={href}
                onClick={() => {
                  setActiveLink(href);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                  activeLink === href
                    ? 'bg-white/20 shadow-lg transform scale-105 backdrop-blur-lg'
                    : 'hover:bg-white/10 hover:shadow-md'
                }`}
                aria-current={activeLink === href ? 'page' : undefined}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${
                  activeLink === href ? 'scale-110' : ''
                }`} />
                <span className="font-medium">{label}</span>
                {activeLink === href && (
                  <div className="absolute right-0 w-1 h-8 bg-white rounded-l-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="mt-auto relative z-10 pt-6 border-t border-white/20">
          <p className="text-sm text-blue-200 text-center">
            Social Metrics
            <br />
            Organisation
          </p>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8 mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-8 rounded-2xl shadow-2xl mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              SMO Safeguarding Policy
            </h1>
            <p className="text-lg text-blue-100 text-center">
              Protecting vulnerable people and ensuring their safety
            </p>
          </div>

          {/* Tabs */}
          <div role="tablist" className="flex flex-wrap gap-2 md:gap-4 p-1 bg-white/50 backdrop-blur-md rounded-xl shadow-lg">
            {['overview', 'definitions', 'guidelines'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`${tab}-panel`}
                className={`flex-1 px-4 md:px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <Card className="shadow-2xl rounded-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-10 h-10 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">Policy Overview</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    SMO has zero tolerance against abuse and exploitation of vulnerable people. 
                    We work to ensure that all individuals have equal rights to protection, 
                    regardless of age, race, sex, or any other personal characteristics.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-inner">
                    <h3 className="font-semibold text-blue-900 text-xl mb-6">Key Principles</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                        <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-blue-800">Equal right to protection from abuse and exploitation</span>
                      </li>
                      <li className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                        <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-blue-800">Best interests of vulnerable people are paramount</span>
                      </li>
                      <li className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                        <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-blue-800">Commitment to meeting duty of care obligations</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Definitions Tab */}
            {activeTab === 'definitions' && (
              <div className="space-y-6">
                {definitions.map((def, index) => (
                  <Card key={index} className={`shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-gradient-to-br ${def.color}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        {def.icon}
                        <h3 className="text-2xl font-semibold text-gray-900">{def.term}</h3>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">{def.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Guidelines Tab */}
            {activeTab === 'guidelines' && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Check className="w-10 h-10 text-green-600" />
                      <h3 className="text-2xl font-semibold text-green-900">Do&apos;s</h3>
                    </div>
                    <ul className="space-y-4">
                      {guidelines.do.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                          <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-green-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-50 to-red-100 shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <X className="w-10 h-10 text-red-600" />
                      <h3 className="text-2xl font-semibold text-red-900">Don&apos;ts</h3>
                    </div>
                    <ul className="space-y-4">
                      {guidelines.dont.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                          <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-red-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-center transform hover:scale-[1.02] transition-all duration-300">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Social Metrics Organisation. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SafeguardingPolicy;