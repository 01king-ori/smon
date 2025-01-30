import PolicyLayout from '../components/PolicyLayout';

export default function SafeguardingPolicy() {
  return (
    <PolicyLayout title="Social Metrics Organisation - Safeguarding Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Introduction</h2>
          <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded">
            <p><strong>Safeguarding</strong> is the responsibility that an organization has to ensure that their employees and volunteers, partners, vendors, operations and programmes do no harm to children, young people or vulnerable adults.</p>
          </div>
          <p className="mt-4">Through their work, SMO employees, employees of partner organizations and volunteers may engage with young people and vulnerable adults either directly or indirectly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Key Definitions</h2>
          <h3 className="text-xl font-semibold text-secondary mb-2">Abuse</h3>
          <p>A violation of an individual's human and civil rights by any other person or persons. It can take various forms:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Discriminatory abuse</strong> - abuse motivated by a vulnerable person's age, race, nationality, sex, sexual orientation, disability, or other personal characteristic.</li>
            <li><strong>Financial or material abuse</strong> - including theft, fraud, exploitation, and pressure in connection with financial transactions.</li>
            <li><strong>Physical abuse</strong> - includes hitting, shaking, throwing, poisoning, burning or scalding.</li>
            <li><strong>Psychological abuse</strong> - includes emotional abuse, threats of harm or abandonment, deprivation of contact.</li>
            <li><strong>Sexual abuse</strong> - involves forcing or enticing participation in sexual activities.</li>
          </ul>
        </section>

        {/* Additional sections following the same pattern */}
      </div>
    </PolicyLayout>
  );
}