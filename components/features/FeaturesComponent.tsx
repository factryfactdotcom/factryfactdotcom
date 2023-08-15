import React from 'react';
import FeatureDesignLeft from './featureDesign/FeatureDesignLeft';
import FeatureDesignRight from './featureDesign/FeatureDesignRight';
import { Ifeatures } from '@/interfaces/Ifeatures';

const FeatureData: Ifeatures[] = [
  {
    id: 'features-001',
    name: 'Manage Schedules',
    img: 'https://factryfact.com/assets/img/factryfact/mockups/PartsTime-TV.png',
    desc: `Schedules Gantt chart provides a visual view of project tasks scheduled over time on various equipements and machines. It is used for project planning: it's a useful way of showing what work is scheduled to be done on specific days. It also shows components being produced, operators working on machines, etc. Schedules can also track machine and operator productivity. Create and manage schedules for operators and machines. Production managers can specify start time, end time, program number, cycle and clamping times, and target quantity for a schedule. Production log data can also be entered against the schedule to measure Quality and Performance parameters of OEE. Schedules can also track machine and operator productivity.`,
    bullet: true,
    subFeatures: [
      {
        id: 'manage-schedules-bullet-001',
        name: 'Operator Productivity',
        desc: 'Schedules can also track machine and operator productivity.',
      },
      {
        id: 'manage-schedules-bullet-002',
        name: 'Start time & End time',
        desc: 'Production managers can specify start time, end time, program number, cycle and clamping times, and target quantity for a schedule.',
      },
    ],
  },
  {
    id: 'features-002',
    name: 'Analyze Downtimes',
    img: 'https://factryfact.com/assets/img/factryfact/mockups/PartsTime-TV.png',
    desc: `Downtime can be a major concern for most manufacturers. It's a lost capacity that can never be regained. Often times, machine downtime is manually recorded which is highly inaccurate and can make it hard to analyze or improve the data collected. FactryFact's Downtime analysis can drive improvements based on accurately analyzing downtime and downtime loss.`,
    bullet: true,
    subFeatures: [
      {
        id: 'analyze-downtimes-bullet-001',
        name: 'Machine downtime',
        desc: "FactryFact's Downtime analysis can drive improvements based on accurately analyzing downtime and downtime loss.",
      },
    ],
  },
  {
    id: 'features-003',
    name: 'Detect Anomalies',
    img: 'https://factryfact.com/assets/img/factryfact/mockups/PartsTime-TV.png',
    desc: `Anomalies might point to unusual pattern in machine's behavior. Anomaly Detection can alert a business that something has changed and may require further action, like tool failure or fatigue. Earlier detection of anomalies helps to reduce unplanned downtimes and production losses. FactryFact offers a variety of charts and dashboards to detect outliers and anomalies.`,
    bullet: false,
    subFeatures: [],
  },
  {
    id: 'features-004',
    name: 'Analyze Machine States',
    img: 'https://factryfact.com/assets/img/factryfact/mockups/PartsTime-TV.png',
    desc: `Various machine states are captured and displayed as bar chart to show the overall status of a day or a shift. Production managers can analyze this data to calculate the efficiency of a machine or operator on a given day and take course corrections. The pictorial representation of machine operations helps the management to have a bird-eye view of the floor operations.`,
    bullet: false,
    subFeatures: [],
  },
  {
    id: 'features-005',
    name: 'Analyze Downtime Trends',
    img: 'https://factryfact.com/assets/img/factryfact/mockups/PartsTime-TV.png',
    desc: `Downtime data is valuable for many reasons. First, by understanding downtime trends, you can prioritize and implement corrective action to prevent additional equipment failures. Downtime data can also help the production manager prioritize preventive maintenance and equipment replacement. Statistical analysis, reporting and charting of downtime history will reveal equipment breakdown trends.`,
    bullet: true,
    subFeatures: [
      {
        id: 'analyze-downtimes-trends-bullet-001',
        name: 'Downtime Trends',
        desc: 'ou can prioritize and implement corrective action to prevent additional equipment failures.',
      },
    ],
  },
];

const FeaturesComponent = () => {
  return (
    <div>
      <section className="py-14">
        <div className="max-w-screen-xl py-4 mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
          <h4 style={{ fontFamily: 'Rajdhani' }} className="text-teal-600 text-3xl font-semibold sm:text-5xl">
            Our Features
          </h4>
        </div>

        {FeatureData.map((feature: Ifeatures, index: number) => (
          <>
            {index % 2 === 0 ? (
              <FeatureDesignLeft key={feature.id as string} feature={feature as Ifeatures} />
            ) : (
              <FeatureDesignRight key={feature.id as string} feature={feature as Ifeatures} />
            )}
          </>
        ))}
      </section>
    </div>
  );
};

export default FeaturesComponent;
