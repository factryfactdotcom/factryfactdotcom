import React from 'react';
import CarouselComponent from './carousel/CarouselComponent';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import MachinesWeConnect from './machinesWeConnect/MachinesWeConnect';
import ItrustedVendors from '@/interfaces/ItrustedVendors';
import homeTrustedVendorsProps from '@/interfaces/types/homeTrustedVendorsProps';
import MachineAnalytics from './machineDataAnalytics/MachineAnalytics';

type HomeComponentProps = {
  homeCarouselData: homeCarouselProps;
  trustedVendorsData: homeTrustedVendorsProps;
};

const HomeComponent = (props: HomeComponentProps) => {
  const { homeCarouselData, trustedVendorsData } = props;
  return (
    <div>
      <CarouselComponent
        data={homeCarouselData.data as IhomeCarouselData[]}
        resOk={homeCarouselData.resOk as boolean}
        status={homeCarouselData.status as number}
        url={homeCarouselData.url as string}
      />
      <MachinesWeConnect
        data={trustedVendorsData.data as ItrustedVendors[]}
        resOk={trustedVendorsData.resOk as boolean}
        status={trustedVendorsData.status as number}
        url={trustedVendorsData.url as string}
      />
      <MachineAnalytics />
    </div>
  );
};

export default HomeComponent;
