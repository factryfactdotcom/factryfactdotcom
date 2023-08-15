import { MachinedataanalysisImage } from '@/utils/apiConfig';
import React from 'react';

const MachineAnalytics = () => {
  const MachineAnalyticsData = [
    {
      id: 'machine-001',
      name: 'Dashboards',
      description:
        'Our fully automated machine monitoring & OEE software provides visualizations of real-time manufacturing production data, instant notifications, as well as historical analytics, allowing factory workers to make faster, smarter, more confident decisions based on real-time data.',
    },
    {
      id: 'machine-002',
      name: 'Connect to any machine',
      description:
        'Connect, collect & visualize data from any piece of equipment on the shop floor. We support a variety of machines including Fanuc, Mitsubishi, Okuma, Mazak, DMG MORI, Makino, and many more.',
    },
    {
      id: 'machine-003',
      name: 'Monitor and analyze health',
      description: 'Easily identify bottlenecks and points of failure that are generating the most downtime.',
    },
    {
      id: 'machine-004',
      name: 'Take action at the right time',
      description: 'Configurable notifications allow the right person to take immediate action at the right time.',
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="mt-2 text-5xl font-bold tracking-tight text-gray-700 sm:text-5xl"
            style={{ fontFamily: 'Rajdhani' }}
          >
            Machine Data Analysis
          </p>
          <img className="mt-16 w-full" src={MachinedataanalysisImage} alt="MachinedataanalysisImage" />
        </div>
        <div className="mx-auto mt-8 max-w-2xl lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
            {MachineAnalyticsData.map((feature) => (
              <div key={feature.id} className="relative">
                <dt className="font-semibold leading-7 text-lg text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default MachineAnalytics;
