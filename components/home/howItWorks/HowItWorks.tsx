import React from 'react';
import { ChartPieIcon, MagnifyingGlassIcon, NewspaperIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { MachinedataanalysisImage } from '@/utils/apiConfig';

const HowItWorks = () => {
  const features = [
    {
      icon: <CloudArrowUpIcon />,
      title: 'Gather Live Machine Data',
      desc: 'Sensor connected to machine collects data, sends it via IIoT to the cloud. Requires no local IT infrastructure, no maintenance. Works in offline mode as well.',
    },
    {
      icon: <ChartPieIcon />,
      title: 'Visualize Machine Data',
      desc: 'Visualize critical machine data in real-time via interactive dashboards, charts and graphs from any web enabled device. Track live production, quality, downtimes, OEE.',
    },
    {
      icon: <MagnifyingGlassIcon />,
      title: 'Identify Problems',
      desc: 'Track production KPIs such as OEE, machine utilization, performance rate & partcounts. Identify operation bottlenecks and production improvement opportunities.',
    },
    {
      icon: <NewspaperIcon />,
      title: 'Optimize Production',
      desc: 'Automated daily, weekly, monthly OEE reports helps you to compare various parameters based on machine, department, operator, or shift.',
    },
  ];
  return (
    <section className="py-20 bg-gray-50" id="testing1">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 style={{ fontFamily: 'Rajdhani' }} className="text-teal-700 text-3xl font-semibold sm:text-5xl">
            How It Works?
          </h3>
          <p className="mt-3">Learn how FactryFact's Machine Monitoring increases overall productivity</p>
          <img className="max-w-screen-sm w-full mt-6" src={MachinedataanalysisImage} alt="ok" />
        </div>

        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 mx-auto text-teal-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-teal-600 font-semibold">{item.title}</h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
