import React from 'react';
import ImachineDataAnalysis from '@/interfaces/ImachineDataAnalysis';
import homeMachineDataProps from '@/interfaces/types/homeMachineDataProps';
import { MachinedataanalysisImage } from '@/utils/apiConfig';

type Props = homeMachineDataProps;

const MachineAnalytics = (props: Props) => {
  const { data, resOk } = props;

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
        {(data as ImachineDataAnalysis[]) && (resOk as boolean) && (
          <div className="mx-auto mt-8 max-w-2xl lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
              {data.map((item) => (
                <div key={item.id} className="relative">
                  <dt className="font-semibold leading-7 text-lg text-gray-900">{item.name}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineAnalytics;
