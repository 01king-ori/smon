import { AlertTriangle, Shield, Users, ExclamationTriangle, MessageSquare, UserCheck, Search, ExternalLink } from 'lucide-react';
import PolicyLayout from '../components/PolicyLayout';

export default function WhistleblowingPolicy() {
  return (
    <PolicyLayout title="SMO Whistleblowing Policy">
      <div className="space-y-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <p className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            SMO aims to maintain the highest standards of openness, decency, integrity and accountability in its work. This policy outlines how to report concerns and the protection offered to whistleblowers.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <ExclamationTriangle className="w-6 h-6" />
            What Should Be Reported?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Financial Concerns</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  Corruption and bribery
                </li>
                {/* Additional list items */}
              </ul>
            </div>
            {/* Additional grid items */}
          </div>
        </section>

        {/* Additional sections following the same pattern */}
      </div>
    </PolicyLayout>
  );
}