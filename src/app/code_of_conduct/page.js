import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const tabs = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'scope', label: 'Scope of Application' },
  { id: 'rules', label: 'Rules of Conduct' },
  { id: 'breach', label: 'Breach & Reporting' }
];

const sections = {
  introduction: {
    title: 'Introduction and Purpose',
    content: `SMO’s Staff Code of Conduct is intended to assist all staff uphold the values of the
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

const Code_Of_Conduct = () => {
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 bg-gray-50 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">SMO Staff Code of Conduct</h1>
        <p className="text-lg text-gray-600">Ensuring ethical integrity and professional behavior</p>
      </div>
      
      <div className="flex gap-4 justify-center border-b pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 font-medium rounded-full transition-all duration-300 shadow-md text-lg ${
              activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <Card className="shadow-md border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{sections[activeTab].title}</h2>
          <p className="text-gray-700 leading-relaxed">{sections[activeTab].content}</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default Code_Of_Conduct;
