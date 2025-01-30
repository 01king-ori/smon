import { CopyCircle, Heart, TreePine, Shield } from 'lucide-react'

export default function Home() {
  const coreValues = ['Integrity', 'Professionalism', 'Respect for diversity', 'Accountability', 'Team work', 'Non-violence', 'Justice']
  
  const capacities = [
    {
      title: 'Research and development',
      description: 'Social Metrics Organisation personnel have vast experience designing and employing systematic qualitative and quantitative research methodologies.'
    },
    {
      title: 'Food sovereignty',
      description: 'Vast practical experience in food independence interventions including sustainable agri-actions via innovative agri-technology.'
    },
    {
      title: 'Peaceful and inclusive society',
      description: 'Expertise in gender and child protection services in conflict and post conflict countries.'
    },
    {
      title: 'Sustainable environment action',
      description: 'Well versed in ecological conversation using environmentally safe models (Reduce, Reuse, Recycle).'
    },
    {
      title: 'Business process model',
      description: 'Well trained on CaLP platforms in cash transfer and voucher programs.'
    },
    {
      title: 'Protection and safeguarding',
      description: 'Embraces inclusivity and diversity with zero tolerance for sexual abuse and exploitation.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-4">Social Metrics Organisation</h1>
            <p className="text-xl">Time-based delivery of results and reports for decision making</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Organization Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Name:</strong> SOCIAL METRICS ORGANISATION (SMO)</p>
              <p><strong>Type:</strong> National Non-Governmental</p>
              <p><strong>Registration:</strong> RRC #2996 (2020)</p>
            </div>
            <div>
              <p><strong>Location:</strong> South Sudan</p>
              <p><strong>Address:</strong> Off Unity Road, Hai Malakal, Juba</p>
              <p><strong>Contact:</strong> +211922189467 | smo.org.ssd@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p>A time-based delivery of results and reports for decision making in humanitarian, development and environmental actions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p>Social Metrics Organization seeks to respond to and or disseminate humanitarian, development and environmental issues based on informed data, assessments and reports.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-blue-100 p-3 rounded-lg text-center">
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Areas of Operation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CopyCircle className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Research and Development</h3>
              </div>
              <p>Employing systematic qualitative and quantitative research methodologies to establish scientific facts and use research outputs to inform humanitarian, environmental and development objectives.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Heart className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Humanitarian Action</h3>
              </div>
              <p>Carry out interventions that alleviate man-made or nature triggered human suffering, support recovery and empower communities to realize development initiatives.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <TreePine className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Climate Change Reversal</h3>
              </div>
              <p>Commitment to climate change reversal and healthy environmental for a world fit for fauna and flora on land and in water.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Organizational Capacity</h2>
          <div className="space-y-4">
            {capacities.map((capacity, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">{capacity.title}</h3>
                </div>
                <p>{capacity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Social Metrics Organisation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}