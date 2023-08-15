import React from 'react';
import { IsubFeatures } from '@/interfaces/Ifeatures';

type Props = {
  subFeatures: IsubFeatures[];
};

const SubFeatures = (props: Props) => {
  const { subFeatures } = props;
  return (
    <div className="mt-2 max-w-lg lg:max-w-none">
      <ul className="space-y-2">
        {subFeatures.map((item: IsubFeatures) => (
          <li key={item.id} className="flex gap-x-1">
            <div>
              <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
              <p className="mt-3">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubFeatures;
