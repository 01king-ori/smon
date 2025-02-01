"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Shield, Users, FileText } from 'lucide-react';
import { Card, CardContent } from "@../../../src/app/components/ui/card";

const WhistleblowingPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

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
      icon: <FileText className="w-6 h-6" />,
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
      icon: <AlertCircle className="w-6 h-6" />,
      content: [
        'Whistle‐blowing is the disclosure of information about perceived wrongdoing in an organization, or the risk thereof, to individuals or entities believed to be able to effect action.',
        'It involves raising concerns about possible malpractice, fraud, crime, danger, safeguarding or any other serious risk that could threaten primary actors, colleagues, donors, the public or SMO\'s integrity and reputation.'
      ]
    },
    {
      id: 'protection',
      title: 'Protecting a Whistle-Blower',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'SMO treats all whistle-blowing reports as either confidential or anonymous',
        'The choice between confidential or anonymous whistle-blowing is entirely that of the whistle-blower',
        'No action will be taken against the whistle-blower if concerns are raised in good faith',
        'Reports made in bad faith or for personal gain may result in disciplinary action'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          SMO Whistleblowing Policy
        </h1>
        <p className="text-lg text-gray-600">
          Maintaining the highest standards of openness, decency, integrity and accountability
        </p>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-900">Policy Statement</h2>
          </div>
          <p className="text-blue-800">
            SMO aims to maintain the highest standards of openness, decency, integrity and accountability in its work. 
            Everyone associated with SMO must be vigilant for signs of wrongdoing and is encouraged to report such behavior.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {sections.map((section) => (
          <div 
            key={section.id}
            className={`border rounded-lg shadow-sm bg-white overflow-hidden ${expandedSections[section.id] ? 'bg-gray-100' : ''}`}
          >
            <button
              onClick={() => toggleSection(section.id)}
              aria-expanded={expandedSections[section.id] ? "true" : "false"}
              aria-controls={section.id}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>
              {expandedSections[section.id] ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {expandedSections[section.id] && (
              <div className="p-4 bg-gray-50 border-t">
                <ul className="space-y-3">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          How to Report a Concern
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-white rounded shadow-sm">
            <p className="font-medium text-gray-900">Project Manager</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <p className="font-medium text-gray-900">Country Director</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <p className="font-medium text-gray-900">HR Representative</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhistleblowingPolicy;
