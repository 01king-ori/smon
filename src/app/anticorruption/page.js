"use client";
import React, { useState } from 'react';
import { Shield, Check, X } from 'lucide-react';
import { Card, CardContent } from "@../../../src/app/components/ui/card";

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'definitions', label: 'Definitions' },
  { id: 'guidelines', label: 'Guidelines' }
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

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SMO Anti-Corruption Policy</h1>
        <p className="text-lg text-gray-600">Maintaining the highest standards of integrity and ethical conduct</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === 'overview' && (
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Policy Overview</h2>
              </div>
              <p className="text-gray-700">
                SMO is committed to doing business with integrity and the highest anti-corruption standards.
                We prohibit all forms of bribery and corruption in our operations worldwide.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Key Principles</h3>
                <ul className="space-y-2">
                  {['Zero tolerance for corruption and bribery', 'Compliance with all applicable anti-corruption laws', 'Transparency in all business transactions'].map((principle, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'definitions' && (
          <div className="space-y-4">
            {definitions.map((def, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{def.term}</h3>
                  <p className="text-gray-700">{def.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'guidelines' && (
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(guidelines).map(([key, items]) => (
              <Card key={key} className={key === 'do' ? 'bg-green-50' : 'bg-red-50'}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {key === 'do' ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-red-600" />
                    )}
                    <h3 className={`text-lg font-semibold ${key === 'do' ? 'text-green-900' : 'text-red-900'}`}>
                      {key === 'do' ? "Do's" : "Don'ts"}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {key === 'do' ? (
                          <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        )}
                        <span className={key === 'do' ? 'text-green-800' : 'text-red-800'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AntiCorruptionPolicy;
