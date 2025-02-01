"use client";
import { useState } from 'react';
import { Shield, AlertCircle, Users, FileText, Check, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const SafeguardingPolicy = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const definitions = [
    {
      term: 'Safeguarding',
      description: 'The responsibility that an organization has to ensure their employees, volunteers, partners, vendors, operations and programmes do no harm to children, young people or vulnerable adults.'
    },
    {
      term: 'Child Protection',
      description: 'The process of protecting individual children identified as either suffering or at risk of significant harm as a result of abuse or programme of work.'
    },
    {
      term: 'Abuse',
      description: 'A violation of an individual\'s human and civil rights by any other person or persons. It can take various forms including physical, psychological, financial or sexual abuse.'
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SMO Safeguarding Policy</h1>
        <p className="text-lg text-gray-600">
          Protecting vulnerable people and ensuring their safety
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 border-b">
        {['overview', 'definitions', 'guidelines'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-6 py-3 font-semibold rounded-t-lg transition-colors duration-300 ease-in-out ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <Card className="shadow-lg rounded-lg">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Policy Overview</h2>
              </div>
              <p className="text-gray-700 text-lg">
                SMO has zero tolerance against abuse and exploitation of vulnerable people. 
                We work to ensure that all individuals have equal rights to protection, 
                regardless of age, race, sex, or any other personal characteristics.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900 text-xl mb-4">Key Principles</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Equal right to protection from abuse and exploitation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Best interests of vulnerable people are paramount</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Commitment to meeting duty of care obligations</span>
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
              <Card key={index} className="shadow-lg rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{def.term}</h3>
                  <p className="text-lg text-gray-700">{def.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Guidelines Tab */}
        {activeTab === 'guidelines' && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-green-50 shadow-lg rounded-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-900">Do&apos;s</h3>
                </div>
                <ul className="space-y-4 text-lg">
                  {guidelines.do.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-50 shadow-lg rounded-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <X className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-900">Don&apos;ts</h3>
                </div>
                <ul className="space-y-4 text-lg">
                  {guidelines.dont.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
    </div>
  );
};

export default SafeguardingPolicy;
