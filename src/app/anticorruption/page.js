"use client";
import React, { useState } from 'react';
import { Shield, Check, X, Search, ClipboardCopy, LayoutDashboard, Menu, Heart, TreePine, FileText } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'definitions', label: 'Definitions' },
  { id: 'guidelines', label: 'Guidelines' }
];

const navigationItems = [
  { href: '/', label: 'Home', icon: ClipboardCopy },
  { href: '/complaints', label: 'Complaints', icon: FileText },
  { href: '/code_of_conduct', label: 'Code of Conduct', icon: Shield },
  { href: '/safeguarding', label: 'Safeguarding', icon: Heart },
  { href: '/whisteblowing', label: 'Whistleblowing', icon: TreePine }
];

const definitions = [
  {
    term: 'Bribe',
    description:
      'A bribe is "anything of value" such as gift cards, home repairs, tickets to events, guest passes, no-bid contracts, summer jobs, or free services, given to obtain an improper advantage.'
  },
  {
    term: 'Facilitation Payment',
    description:
      'A payment to a government official designed to secure or speed up a routine government action to which the applicant is entitled.'
  },
  {
    term: 'Books and Records',
    description:
      'Documentation that must accurately and completely reflect transactions, assets, and financial positions, including forms for processing payments and authorizations.'
  }
];

const guidelines = {
  do: [
    'Report suspicious internal or third-party bribery activities',
    'Keep accurate and complete records of all transactions',
    'Follow proper disclosure and pre-approval guidelines for gifts',
    'Handle all gifts and offerings transparently',
    'Report facilitation payments if made under duress'
  ],
  dont: [
    'Offer or accept bribes in any form',
    'Make facilitation payments without proper approval',
    'Create undisclosed or unrecorded "off-the-books" funds',
    'Make charitable or political donations using SMO funds',
    'Hide or assist in hiding corruption activities'
  ]
};

const AntiCorruptionPolicy = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLink, setActiveLink] = useState('/anti-corruption');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDefinitions = definitions.filter(def =>
    def.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    def.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGuidelines = {
    do: guidelines.do.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())),
    dont: guidelines.dont.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:relative w-72 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8 flex flex-col space-y-8 shadow-2xl h-full z-40 transition-transform duration-300 ease-in-out`}> 
        <div className="absolute inset-0 bg-blue-900 opacity-40 backdrop-blur-lg rounded-xl"></div>
        
        {/* Logo Section */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-3 bg-blue-800 p-4 rounded-xl shadow-lg">
            <LayoutDashboard className="w-8 h-8" />
            <span className="tracking-wide">Dashboard</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-3 relative z-10">
          {navigationItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link 
                href={href}
                onClick={() => {
                  setActiveLink(href);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 text-lg font-medium ${
                  activeLink === href
                    ? 'bg-blue-700 shadow-lg transform scale-105'
                    : 'hover:bg-blue-700/50 hover:shadow-md'
                }`}
              >
                <Icon className={`w-6 h-6 transition-transform duration-200 ${
                  activeLink === href ? 'scale-110' : ''
                }`} />
                <span>{label}</span>
                {activeLink === href && (
                  <div className="absolute right-0 w-1.5 h-10 bg-white rounded-l-full" />
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
      <div className="flex-1 p-6 lg:p-12 mt-20 lg:mt-0">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center tracking-tight">
              SMO Anti-Corruption Policy
            </h1>
            <p className="text-xl text-blue-100 text-center">
              Maintaining the highest standards of integrity and ethical conduct
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-full max-w-md">
              <label htmlFor="search" className="sr-only">Search content</label>
              <input
                id="search"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 border-b-2 border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-lg font-semibold rounded-t-xl transition-colors ${
                  activeTab === tab.id ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-10 space-y-8">
            {activeTab === 'overview' && (
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Shield className="w-7 h-7 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">Policy Overview</h2>
                  </div>
                  <p className="text-gray-700 text-lg">
                    SMO is committed to doing business with integrity and the highest anti-corruption standards.
                    We prohibit all forms of bribery and corruption in our operations worldwide.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-blue-900 mb-3 text-lg">Key Principles</h3>
                    <ul className="space-y-3">
                      {['Zero tolerance for corruption and bribery', 'Compliance with all applicable anti-corruption laws', 'Transparency in all business transactions'].map((principle, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-800 text-lg">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'definitions' && (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredDefinitions.map((def, index) => (
                  <Card key={index} className="transform hover:scale-105 transition-transform duration-300 shadow-md">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{def.term}</h3>
                      <p className="text-gray-700 text-lg">{def.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'guidelines' && (
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(filteredGuidelines).map(([key, items]) => (
                  <Card key={key} className={`${key === 'do' ? 'bg-green-50' : 'bg-red-50'} transform hover:scale-105 transition-transform duration-300 shadow-md`}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-5">
                        {key === 'do' ? (
                          <Check className="w-7 h-7 text-green-600" />
                        ) : (
                          <X className="w-7 h-7 text-red-600" />
                        )}
                        <h3 className={`text-2xl font-semibold ${key === 'do' ? 'text-green-900' : 'text-red-900'}`}>
                          {key === 'do' ? "Do's" : "Don'ts"}
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            {key === 'do' ? (
                              <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                            ) : (
                              <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                            )}
                            <span className={key === 'do' ? 'text-green-800 text-lg' : 'text-red-800 text-lg'}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-14 p-6 bg-gray-900 text-white rounded-2xl text-center shadow-xl">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Social Metrics Organisation. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AntiCorruptionPolicy;