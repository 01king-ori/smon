"use client";
import { Heart, TreePine, Shield, ClipboardCopy, FileText, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [activeLink, setActiveLink] = useState('/');
  
  const coreValues = [
    'Integrity', 'Professionalism', 'Respect for diversity', 
    'Accountability', 'Teamwork', 'Non-violence', 'Justice'
  ];

  const capacities = [
    { title: 'Research and development', description: 'Expertise in systematic research methodologies.' },
    { title: 'Food sovereignty', description: 'Practical experience in sustainable agriculture.' },
    { title: 'Peaceful and inclusive society', description: 'Expertise in gender and child protection services in conflict and post-conflict countries.' },
    { title: 'Sustainable environment action', description: 'Well-versed in ecological conservation using environmentally safe models (Reduce, Reuse, Recycle).' },
    { title: 'Business process model', description: 'Well trained on CaLP platforms in cash transfer and voucher programs.' },
    { title: 'Protection and safeguarding', description: 'Embraces inclusivity and diversity with zero tolerance for sexual abuse and exploitation.' }
  ];

  const navigationItems = [
    { href: '/', label: 'Home', icon: ClipboardCopy },
    { href: '/complaints', label: 'Complaints', icon: FileText },
    { href: '/code_of_conduct', label: 'Code of Conduct', icon: Shield },
    { href: '/safeguarding', label: 'Safeguarding', icon: Heart },
    { href: '/whisteblowing', label: 'Whistleblowing', icon: TreePine }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Enhanced Sidebar Navigation */}
      <nav className="w-72 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8 flex flex-col space-y-8 shadow-xl relative">
        <div className="absolute inset-0 bg-blue-900 opacity-50 backdrop-blur-lg"></div>
        
        {/* Logo Section */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 bg-blue-800 p-4 rounded-lg shadow-lg">
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
                onClick={() => setActiveLink(href)}
                className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                  activeLink === href
                    ? 'bg-blue-700 shadow-lg transform scale-105'
                    : 'hover:bg-blue-700/50 hover:shadow-md'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-200 ${
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
        <div className="mt-auto relative z-10 pt-6 border-t border-blue-700">
          <p className="text-sm text-blue-200 text-center">
            Social Metrics
            <br />
            Organisation
          </p>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 px-8 rounded-xl shadow-xl mb-8">
          <h1 className="text-4xl font-bold mb-3">Social Metrics Organisation</h1>
          <p className="text-xl text-blue-100">Time-based delivery of results and reports for decision making</p>
        </header>

        <main className="space-y-8">
          {/* Core Values Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="text-blue-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Areas Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Areas of Operation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capacities.map((capacity, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                    <h3 className="text-lg font-bold text-gray-800">{capacity.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{capacity.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-8 rounded-xl shadow-xl text-center">
          <p>&copy; {new Date().getFullYear()} Social Metrics Organisation. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}