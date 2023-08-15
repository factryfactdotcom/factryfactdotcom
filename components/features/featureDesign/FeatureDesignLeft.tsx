import { Ifeatures } from '@/interfaces/Ifeatures';
import React from 'react';
import SubFeatures from './SubFeatures';

type Props = {
  feature: Ifeatures;
};
const FeatureDesignLeft = (props: Props) => {
  const { feature } = props;
  return (
    <div className="max-w-screen-xl py-12 mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
      <div>
        <div className="max-w-xl space-y-3">
          <p style={{ fontFamily: 'Rajdhani' }} className="text-teal-600 text-3xl font-semibold sm:text-4xl">
            {feature.name}
          </p>
          <p>{feature.desc}</p>
        </div>
        {feature.bullet && <SubFeatures subFeatures={feature.subFeatures} />}
      </div>
      <div className="mt-12 lg:mt-0 max-w-xl">
        <img src={feature.img} className="w-full shadow-lg rounded-lg border" alt={feature.name} />
      </div>
    </div>
  );
};

export default FeatureDesignLeft;
