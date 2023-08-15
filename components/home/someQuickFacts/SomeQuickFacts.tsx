import React from 'react';
import homeSomeQuickFactsProps from '@/interfaces/types/homeSomeQuickFactsProps';
import IsomeQuickFacts from '@/interfaces/IsomeQuickFacts';
import { baseImageUrl } from '@/utils/apiConfig';

type Prpos = homeSomeQuickFactsProps;

const SomeQuickFacts = (props: Prpos) => {
  const { data, resOk } = props;

  return (
    <section className="py-14 bg-emerald-500">
      {(data as IsomeQuickFacts[]) && (resOk as boolean) && (
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-3xl font-semibold sm:text-5xl" style={{ fontFamily: 'Rajdhani' }}>
              Some quick facts
            </h3>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {data.map((item) => (
                <li key={item.id} className="space-y-3">
                  <div className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center">
                    <img className="text-white" src={baseImageUrl + item.icon} />
                  </div>
                  <h4 className="text-4xl text-white font-semibold">{item.value}</h4>
                  <p className="text-xl text-white">{item.desc}</p>
                  <p className="sr-only">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default SomeQuickFacts;
