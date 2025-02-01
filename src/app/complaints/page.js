"use client";
import React, { useState } from 'react';
import { AlertCircle, FileText, MessageSquare, Shield, Check, X } from 'lucide-react';
import { Card, CardContent } from "@../../../src/app/components/ui/card";

const ComplaintsPolicy = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const complaintTypes = [
    {
      type: 'Operational Complaints',
      description: 'Complaints regarding program/project activities, entitlements, quality of service, or management affecting communities.',
      examples: ['Issues of entitlements not met', 'Quality of service concerns', 'Program delivery issues']
    },
    {
      type: 'Breach of Conduct',
      description: 'Serious complaints related to breach of SMO Staff Code of Conduct.',
      examples: ['Physical and psychological abuse', 'Sexual exploitation', 'Fraud and corruption', 'Harassment', 'Child abuse']
    },
    {
      type: 'Anonymous Complaints',
      description: 'Complaints lodged without revealing complainant identity. While not preferred, these are accepted to ensure serious issues are reported.',
      examples: ['Identity protection needed', 'Fear of retaliation', 'Sensitive matters']
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

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SMO Complaints Mechanism Policy</h1>
        <p className="text-lg text-gray-600">Ensuring accountability and transparency in handling complaints</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b">
        {['overview', 'types', 'guidelines'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
              activeTab === tab 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === 'overview' && (
          <Card className="shadow-lg border border-gray-300">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Policy Overview</h2>
              </div>
              <p className="text-gray-700">
                A complaint is an expression of concern or dissatisfaction related to possible misconduct 
                by SMO staff, program activities, or when SMO policies are not respected.
              </p>
            </CardContent>
          </Card>
        )}

        {activeTab === 'types' && (
          <div className="space-y-4">
            {complaintTypes.map((type, index) => (
              <Card key={index} className="shadow-lg border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                    {type.type}
                  </h3>
                  <p className="text-gray-700 mb-4">{type.description}</p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'guidelines' && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Do&apos;s</h3>
                </div>
                <ul className="space-y-3">
                  {guidelines.do.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-900">Don&apos;ts</h3>
                </div>
                <ul className="space-y-3">
                  {guidelines.dont.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
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

export default ComplaintsPolicy;
