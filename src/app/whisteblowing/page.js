"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Shield, Users, FileText, Heart, TreePine, ClipboardList, LayoutDashboard, Menu, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const WhistleblowingPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeLink, setActiveLink] = useState('/whistleblowing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home', icon: ClipboardList },
    { href: '/complaints', label: 'Complaints', icon: FileText },
    { href: '/code_of_conduct', label: 'Code of Conduct', icon: Shield },
    { href: '/safeguarding', label: 'Safeguarding', icon: Heart },
    { href: '/whistleblowing', label: 'Whistleblowing', icon: TreePine }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'purpose',
      title: 'Policy Purpose',
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-50 to-blue-100',
      content: [
        'Encourage SMO staff to feel confident to make a disclosure of concerns',
        'Provide avenues for you to raise those concerns',
        'Reassure you that you will be protected when you raise a concern',
        'Provide a framework in which individuals can raise concerns about malpractice'
      ]
    },
    {
      id: 'definition',
      title: 'Whistle-blowing Definition',
      icon: <AlertCircle className="w-8 h-8 text-purple-600" />,
      color: 'from-purple-50 to-purple-100',
      content: [
        'Whistle‌blowing is the disclosure of information about perceived wrongdoing in an organization, or the risk thereof, to individuals or entities believed to be able to effect action.',
        'It involves raising concerns about possible malpractice, fraud, crime, danger, safeguarding or any other serious risk that could threaten primary actors, colleagues, donors, the public or SMO\'s integrity and reputation.'
      ]
    },
    {
      id: 'protection',
      title: 'Protecting a Whistle-Blower',
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      color: 'from-amber-50 to-amber-100',
      content: [
        'SMO treats all whistle-blowing reports as either confidential or anonymous',
        'The choice between confidential or anonymous whistle-blowing is entirely that of the whistle-blower',
        'No action will be taken against the whistle-blower if concerns are raised in good faith',
        'Reports made in bad faith or for personal gain may result in disciplinary action'
      ]
    }
  ];

  const reportingChannels = [
    {
      title: "Project Manager",
      description: "First point of contact for any concerns",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Country Director",
      description: "Escalation point for serious concerns",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "HR Representative",
      description: "Confidential reporting channel",
      icon: <FileText className="w-8 h-8 text-amber-600" />,
      color: "from-amber-50 to-amber-100"
    }
  ];

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
      <main className="flex-1 p-4 lg:p-8 mt-16 lg:mt-0">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-8 rounded-2xl shadow-2xl mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              SMO Whistleblowing Policy
            </h1>
            <p className="text-lg text-blue-100 text-center">
              Upholding standards of openness, integrity, and accountability
            </p>
          </div>

          {/* Policy Statement */}
          <Card className="shadow-2xl rounded-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 transform hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-900">Policy Statement</h2>
              </div>
              <p className="text-blue-800 leading-relaxed text-lg">
                SMO is committed to maintaining the highest standards of openness, decency, integrity, and accountability in its operations. 
                Everyone associated with SMO is encouraged to remain vigilant and report any signs of wrongdoing.
              </p>
            </CardContent>
          </Card>

          {/* Expandable Sections */}
          <section className="space-y-6">
            {sections.map((section) => (
              <div 
                key={section.id}
                className={`rounded-2xl overflow-hidden transform transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  expandedSections[section.id] ? 'scale-[1.02]' : ''
                }`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full p-6 flex items-center justify-between text-left bg-gradient-to-br ${section.color}`}
                  aria-expanded={expandedSections[section.id]}
                >
                  <div className="flex items-center gap-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  {expandedSections[section.id] ? 
                    <ChevronUp className="w-6 h-6 text-blue-600" /> : 
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  }
                </button>
                
                {expandedSections[section.id] && (
                  <div className="p-8 bg-white border-t space-y-4">
                    <ul className="space-y-4">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                          <span className="text-blue-500 mt-1.5 text-2xl">•</span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Reporting Channels */}
          <section className="mt-12 p-8 bg-white rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Reporting Channels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportingChannels.map((channel, index) => (
                <Card key={index} className={`overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br ${channel.color}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-white rounded-xl shadow-md">
                        {channel.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {channel.title}
                      </h4>
                      <p className="text-gray-700">
                        {channel.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-center transform hover:scale-[1.02] transition-all duration-300">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Social Metrics Organisation. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default WhistleblowingPolicy;