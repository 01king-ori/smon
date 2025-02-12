"use client";
import React, { useState } from 'react';
import { ClipboardCopy, FileText, Shield, Heart, TreePine, Menu, X, LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const CodeOfConduct = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [activeLink, setActiveLink] = useState('/code_of_conduct');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home', icon: ClipboardCopy },
    { href: '/complaints', label: 'Complaints', icon: FileText },
    { href: '/code_of_conduct', label: 'Code of Conduct', icon: Shield },
    { href: '/safeguarding', label: 'Safeguarding', icon: Heart },
    { href: '/whisteblowing', label: 'Whistleblowing', icon: TreePine }
  ];

  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'scope', label: 'Scope of Application' },
    { id: 'rules', label: 'Rules of Conduct' },
    { id: 'breach', label: 'Breach & Reporting' }
  ];

  const sections = {
    introduction: {
      title: 'Introduction and Purpose',
      content: `SMO's Staff Code of Conduct is intended to assist all staff uphold the values of the 
        organization and make ethical decisions. It refers to misuse of power, exploitation, and provides guidance to 
        promote safety, respect, and protect staff.`
    },
    scope: {
      title: 'Scope of Application',
      content: `The Code applies to all staff, consultants, temporary workers, interns, volunteers, visitors, and individuals 
        involved in SMO-led projects at any level.`
    },
    rules: {
      title: 'Rules of Conduct',
      content: `SMO core values emphasize respect, fairness, gender justice, integrity, transparency, and accountability. 
        Staff must act professionally, avoid discrimination, and uphold the highest ethical standards.`
    },
    breach: {
      title: 'Breach of Conduct & Reporting',
      content: `A breach of conduct may result in disciplinary action. Staff are encouraged to report violations through 
        designated channels. Reports will be handled confidentially with protective measures in place.`
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
              SMO Staff Code of Conduct
            </h1>
            <p className="text-lg text-blue-100 text-center">
              Ensuring ethical integrity and professional behavior
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-3 justify-center mb-8" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 font-medium rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                  id={`${tab.id}-tab`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Card */}
            <Card className="shadow-md border border-gray-200">
              <CardContent 
                className="p-6"
                role="tabpanel"
                id={`${activeTab}-panel`}
                aria-labelledby={`${activeTab}-tab`}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {sections[activeTab].title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {sections[activeTab].content}
                </p>
              </CardContent>
            </Card>
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

export default CodeOfConduct;