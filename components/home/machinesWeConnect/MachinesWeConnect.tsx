import React from 'react';
import TrustedCompaniesSlider from './TrustedCompaniesSlider';
import homeTrustedCompaniesProps from '@/interfaces/types/homeTrustedCompaniesProps';
import itrustedCompanies from '@/interfaces/ItrustedCompanies';

type Props = homeTrustedCompaniesProps;

const MachinesWeConnect = (props: Props) => {
  const { data, resOk, status, url } = props;
  return (
    <div className="py-14 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-gray-700 text-3xl font-semibold sm:text-5xl" style={{ fontFamily: 'Rajdhani' }}>
            Machines We Connect
          </h3>
          <p className="text-gray-500 mt-3 text-lg sm:text-xl">
            We support all CNC, VMC, and HMC controllers including
          </p>
        </div>
        <TrustedCompaniesSlider
          data={data as itrustedCompanies[]}
          resOk={resOk as boolean}
          status={status as number}
          url={url as string}
        />
      </div>
    </div>
  );
};

export default MachinesWeConnect;
