import React, { useState } from 'react';
import { ChevronRight, Users, FileText, Hospital, Grid, Star, ArrowRight, Activity, Heart, Stethoscope, MessageSquare } from 'lucide-react';

const CareHealthWebsite = () => {
  const [activeMainNav, setActiveMainNav] = useState('solutions');
  const [activeTab, setActiveTab] = useState('clinical');
  
  const solutions = {
    chemotherapy: [
      {
        icon: <Activity className="text-blue-600" size={24} />,
        title: "Integrated Chemotherapy Management",
        description: "Customizable chemotherapy order sets and treatment plans. Automated dose calculations based on patient parameters. Real-time toxicity monitoring and side effect tracking."
      },
      {
        icon: <FileText className="text-blue-600" size={24} />,
        title: "Specialized Documentation Suite",
        description: "Pre-built templates for chemotherapy documentation. Automated capture of vital signs and lab results. Integrated patient education materials and consent forms."
      },
      {
        icon: <Users className="text-blue-600" size={24} />,
        title: "Safety & Compliance",
        description: "Automated safety checks for dose limits. Drug interaction alerts integrated with EHR. BSA-based dose calculations with automatic adjustments."
      }
    ],
    clinical: [
      {
        icon: <Users className="text-blue-600" size={24} />,
        title: "Patient Lists",
        description: "Create and manage custom patient cohorts with our intelligent list management system."
      },
      {
        icon: <FileText className="text-blue-600" size={24} />,
        title: "Clinical Documentation",
        description: "AI-powered documentation tools that reduce clicks and save time."
      },
      {
        icon: <Hospital className="text-blue-600" size={24} />,
        title: "Care Coordination",
        description: "Streamline care coordination across departments with integrated communication tools."
      }
    ]
  };

  const flowsheets = [
    {
      title: "Dermatology",
      features: [
        "Customized skin condition tracking",
        "Photo documentation integration",
        "Treatment response monitoring",
        "Procedure tracking"
      ]
    },
    {
      title: "Endocrinology",
      features: [
        "Hormone level tracking",
        "Diabetes management",
        "Thyroid disorder monitoring",
        "Treatment response graphs"
      ]
    },
    {
      title: "Plastic Surgery",
      features: [
        "Pre/post procedure documentation",
        "Photo integration",
        "Measurement tracking",
        "Custom procedure templates"
      ]
    },
    {
      title: "Bariatrics",
      features: [
        "Weight loss tracking",
        "Nutrition monitoring",
        "Surgical pathway documentation",
        "Post-op progress tracking"
      ]
    }
  ];

  const invoices = [
    {
      title: "Plastic Surgery Billing",
      features: [
        "Customized cosmetic procedure billing",
        "Before/after photo integration",
        "Multiple procedure packaging",
        "Payment plan management",
        "Insurance/self-pay splitting"
      ]
    }
  ];

  const integrations = [
    {
      title: "Athena Health Integration",
      features: [
        "Bi-directional data flow with Athena Health EHR",
        "Automated clinical data synchronization",
        "Real-time order and result transmission",
        "Seamless patient demographics sync",
        "Integrated billing workflows"
      ]
    },
    {
      title: "Microsoft Teams Integration",
      features: [
        "Secure clinical communications within Teams",
        "Patient context sharing in team channels",
        "Automated care team notifications",
        "Clinical document sharing",
        "Cross-organization collaboration tools"
      ]
    },
    {
      title: "Cisco Webex Integration",
      features: [
        "Patient data display in call center dashboards",
        "Automated patient identification",
        "Call routing based on clinical context",
        "Integration with virtual waiting rooms",
        "Telehealth session management"
      ]
    }
  ];

  const allergyShots = [
    {
      title: "Allergy Shot Management",
      features: [
        "Immunotherapy dose tracking",
        "Automated scheduling",
        "Reaction monitoring",
        "Patient notification system",
        "Vial management"
      ]
    }
  ];

  const renderMainContent = () => {
    switch (activeMainNav) {
      case 'solutions':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions[activeTab].map((solution, index) => (
              <SolutionCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        );
      case 'flowsheets':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flowsheets.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                features={item.features}
                icon={<Activity className="text-blue-600" size={24} />}
              />
            ))}
          </div>
        );
      case 'invoices':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {invoices.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                features={item.features}
                icon={<FileText className="text-blue-600" size={24} />}
              />
            ))}
          </div>
        );
      case 'allergy':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allergyShots.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                features={item.features}
                icon={<Activity className="text-blue-600" size={24} />}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-blue-700 font-bold text-2xl">
                CARE HEALTH
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 relative">
        {/* Add semi-transparent background image */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/api/placeholder/1920/400" 
            alt="Healthcare background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Healthcare Through Integrated Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive clinical workflow platform designed for health systems,
              offering intelligent automation, specialized documentation, and seamless EHR integration.
            </p>
            
            {/* Feature Preview Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <img 
                src="/api/placeholder/400/300" 
                alt="EHR Integration" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/api/placeholder/400/300" 
                alt="Clinical Workflows" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/api/placeholder/400/300" 
                alt="Patient Care" 
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              {['solutions', 'flowsheets', 'invoices', 'allergy', 'integrations'].map((item) => (
                <button
                  key={item}
                  className={`text-lg px-6 py-3 rounded-lg transition-colors ${
                    activeMainNav === item 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                  onClick={() => {
                    setActiveMainNav(item);
                    setActiveTab('clinical');
                  }}
                >
                  {item === 'allergy' ? 'Allergy Shots' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${activeMainNav === 'solutions' ? 'block' : 'hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Management Solutions</h2>
              <p className="text-xl text-gray-600">Streamlined workflows for enhanced patient care</p>
            </div>
            {renderMainContent()}
          </div>

          <div className={`${activeMainNav === 'flowsheets' ? 'block' : 'hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Clinical Flowsheets</h2>
              <p className="text-xl text-gray-600">Customized documentation for every specialty</p>
            </div>
            {renderMainContent()}
          </div>

          <div className={`${activeMainNav === 'invoices' ? 'block' : 'hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Billing Solutions</h2>
              <p className="text-xl text-gray-600">Streamlined invoicing for complex procedures</p>
            </div>
            {renderMainContent()}
          </div>

          <div className={`${activeMainNav === 'allergy' ? 'block' : 'hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Immunotherapy Management</h2>
              <p className="text-xl text-gray-600">Complete allergy shot administration and tracking</p>
            </div>
            {renderMainContent()}
          </div>

          <div className={`${activeMainNav === 'integrations' ? 'block' : 'hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Integrations</h2>
              <p className="text-xl text-gray-600">Seamless connectivity across your healthcare ecosystem</p>
            </div>
            {renderMainContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
      Learn more <ChevronRight size={16} className="ml-1" />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, features }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <ChevronRight size={16} className="mr-2 text-blue-600" />
          {feature}
        </li>
      ))}
    </ul>
    <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
      Learn more <ChevronRight size={16} className="ml-1" />
    </div>
  </div>
);

export default CareHealthWebsite;