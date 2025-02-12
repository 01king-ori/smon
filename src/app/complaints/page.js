"use client";
import React, { useState } from 'react';
import { AlertCircle, Shield, Check, X, BookOpen, FileText, ClipboardCopy, Heart, TreePine, Menu, LayoutDashboard, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';

const ComplaintsPolicy = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLink, setActiveLink] = useState('/complaints');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home', icon: ClipboardCopy },
    { href: '/complaints', label: 'Complaints', icon: FileText },
    { href: '/code_of_conduct', label: 'Code of Conduct', icon: Shield },
    { href: '/safeguarding', label: 'Safeguarding', icon: Heart },
    { href: '/whisteblowing', label: 'Whistleblowing', icon: TreePine }
  ];

  const complaintTypes = [
    {
      type: 'Operational Complaints',
      description: 'Complaints regarding program/project activities, entitlements, quality of service, or management affecting communities.',
      examples: ['Issues of entitlements not met', 'Quality of service concerns', 'Program delivery issues'],
      icon: FileText
    },
    {
      type: 'Breach of Conduct',
      description: 'Serious complaints related to breach of SMO Staff Code of Conduct.',
      examples: ['Physical and psychological abuse', 'Sexual exploitation', 'Fraud and corruption', 'Harassment', 'Child abuse'],
      icon: AlertCircle
    },
    {
      type: 'Anonymous Complaints',
      description: 'Complaints lodged without revealing complainant identity. While not preferred, these are accepted to ensure serious issues are reported.',
      examples: ['Identity protection needed', 'Fear of retaliation', 'Sensitive matters'],
      icon: Shield
    }
  ];

  const guidelines = {
    do: [
      'Report complaints as soon as possible (within 6 months)',
      'Provide detailed information about the incident',
      'Maintain confidentiality of all parties involved',
      'Document all aspects of the complaint',
      'Follow proper reporting channels'
    ],
    dont: [
      'Delay reporting beyond 6 months',
      'Share complaint details with unauthorized persons',
      'Make malicious complaints',
      'Breach confidentiality protocols',
      'Handle complaints without proper documentation'
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'types', label: 'Types', icon: Users },
    { id: 'guidelines', label: 'Guidelines', icon: FileText }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                The SMO Complaints Mechanism provides a structured approach for receiving, handling, and resolving complaints.
                This policy ensures transparency, accountability, and fair treatment in addressing concerns raised by stakeholders.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-3">Key Principles</h3>
                <ul className="space-y-3">
                  {['Accessibility', 'Confidentiality', 'Timeliness', 'Fairness', 'Transparency'].map((principle) => (
                    <li key={principle} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        );
      case 'types':
        return (
          <div className="space-y-6">
            {complaintTypes.map((type, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <type.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{type.type}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{type.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 'guidelines':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-900">Do's</h3>
                </div>
                <ul className="space-y-4">
                  {guidelines.do.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-900">Don'ts</h3>
                </div>
                <ul className="space-y-4">
                  {guidelines.dont.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-red-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <nav 
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative w-72 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8 flex flex-col space-y-8 shadow-xl h-full z-40 transition-transform duration-300 ease-in-out`}
        aria-label="Main navigation"
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50 backdrop-blur-lg rounded-xl"></div>
        
        {/* Logo Section */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 bg-blue-800 p-4 rounded-lg shadow-lg">
            <LayoutDashboard className="w-7 h-7" aria-hidden="true" />
            <span className="tracking-wide">Dashboard</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2 relative z-10" role="navigation">
          {navigationItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link 
                href={href}
                onClick={() => {
                  setActiveLink(href);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                  activeLink === href
                    ? 'bg-blue-700 shadow-lg transform scale-105'
                    : 'hover:bg-blue-700/50 hover:shadow-md'
                }`}
                aria-current={activeLink === href ? 'page' : undefined}
              >
                <Icon className={`w-5 h-5 transition-transform duration-200 ${
                  activeLink === href ? 'scale-110' : ''
                }`} aria-hidden="true" />
                <span className="font-medium">{label}</span>
                {activeLink === href && (
                  <div className="absolute right-0 w-1 h-8 bg-white rounded-l-full" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="mt-auto relative z-10 pt-6 border-t border-blue-700">
          <p className="text-sm text-blue-200 text-center">
            Social Metrics
            <br />
            Organisation
          </p>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-xl mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
              SMO Complaints Mechanism Policy
            </h1>
            <p className="text-lg text-blue-100 text-center">
              Ensuring accountability and transparency in handling complaints
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <nav className="flex flex-col sm:flex-row sm:justify-center gap-2 mb-8" role="tablist">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium 
                    transition-all duration-200 ease-in-out
                    ${activeTab === id 
                      ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                  role="tab"
                  aria-selected={activeTab === id}
                  aria-controls={`${id}-panel`}
                  id={`${id}-tab`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <ScrollArea 
              className="h-[calc(100vh-400px)] rounded-lg"
              role="tabpanel"
              id={`${activeTab}-panel`}
              aria-labelledby={`${activeTab}-tab`}
            >
              {renderTabContent()}
            </ScrollArea>
          </div>

          {/* Footer */}
          <footer className="mt-12 p-6 bg-gray-800 text-white rounded-xl text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Social Metrics Organisation. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default ComplaintsPolicy;