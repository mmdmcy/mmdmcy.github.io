import React, { useState } from 'react';
import { Github, X } from 'lucide-react';

interface Project {
  title: string;
  githubLink: string;
  description: string;
  features: string[];
  technologies: string[];
  images?: string[];
}

const projects: Project[] = [
  {
    title: 'Manufacturing Process Analyzer',
    githubLink: 'https://github.com/mmdmcy/manufacturing-process-analyzer',
    description: 'A Java-based application designed to streamline and optimize manufacturing processes through data analysis and reporting.',
    features: [
      'Data Management with DataController',
      'Process Management with ProcessController',
      'Comprehensive Data Analysis with AnalysisService',
      'Advanced Statistical Analysis',
      'Interactive Dashboard UI'
    ],
    technologies: ['Java', 'SQL', 'Object-Oriented Programming'],
    images: ['/manufacturingProcessAnalyzer.png']
  },
  {
    title: 'Superset Analytics Project',
    githubLink: 'https://github.com/mmdmcy/manufacturing-process-analyzer',
    description: 'Data analytics platform using Apache Superset, focusing on reusable data layer visualization and deployable dashboards.',
    features: [
      'Docker Configuration',
      'Data Layer Components',
      'SQL & API Connectors',
      'Custom Visualizations',
      'Automated Dashboard Deployment'
    ],
    technologies: ['Apache Superset', 'Docker', 'Python', 'SQL', 'RESTful APIs']
  },
  {
    title: 'Metrology Tools Project',
    githubLink: 'https://github.com/mmdmcy/metrology-tools',
    description: 'A lightweight web application enhancing team collaboration through Holiday Helper, PI Planner, and RD Test Mode tools.',
    features: [
      'Vacation Request Management',
      'Program Increment Planning',
      'Test Parameter Management',
      'Team Resource Management',
      'Interactive Dashboard'
    ],
    technologies: ['ASP.NET Core 8.0', 'JavaScript', 'HTML', 'CSS', 'RESTful APIs'],
    images: ['/MetrologyTools.png']
  },
  {
    title: 'Software Update System',
    githubLink: 'https://github.com/mmdmcy/Software-Update-System',
    description: 'A framework for performing non-disruptive software updates across interconnected processes in complex systems.',
    features: [
      'Selective Updates',
      'Dependency Management',
      'Update Validation',
      'Rollback Capability',
      'System Monitoring'
    ],
    technologies: ['Python 3.6+', 'Flask', 'PyYAML', 'Pytest', 'Psutil']
  },
  {
    title: 'Product Report Integration System',
    githubLink: 'https://github.com/mmdmcy/Product-Report-Integration',
    description: 'Centralizes the generation, management, and distribution of product reports using Python and PowerShell automation.',
    features: [
      'Report Generation',
      'Data Processing',
      'API Integration',
      'Automation',
      'Stakeholder Notifications'
    ],
    technologies: ['Python 3.8+', 'PowerShell', 'Jinja2', 'JSON', 'HTML/CSS', 'Matplotlib'],
    images: [
      '/ProductReportIntegration_SecurityStatusDashboard.png',
      '/ProductReportIntegration_security_status_pie.png'
    ]
  },
  {
    title: 'System Dynamics Simulator',
    githubLink: 'https://github.com/mmdmcy/System-Dynamics-Simulator',
    description: 'A real-time system dynamics visualization and monitoring dashboard for high-precision manufacturing environments.',
    features: [
      'Real-Time Monitoring',
      'Interactive Controls',
      'Alert System',
      'Performance Metrics',
      'System Parameter Management'
    ],
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Lucide React'],
    images: ['/systemDynamicsSimulator.png', '/SystemDynamicsSimulator2.png']
  }
];

export const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Portfolio</h1>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {project.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github className="w-6 h-6" />
                    <span>View on GitHub</span>
                  </a>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-7xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={handleCloseModal}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] w-auto mx-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};