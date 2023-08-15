import React from 'react';
import CarouselComponent from './carousel/CarouselComponent';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import MachinesWeConnect from './machinesWeConnect/MachinesWeConnect';
import ItrustedVendors from '@/interfaces/ItrustedVendors';
import homeTrustedVendorsProps from '@/interfaces/types/homeTrustedVendorsProps';
import MachineAnalytics from './machineDataAnalytics/MachineAnalytics';
import homeMachineDataProps from '@/interfaces/types/homeMachineDataProps';
import ImachineDataAnalysis from '@/interfaces/ImachineDataAnalysis';

type HomeComponentProps = {
  homeCarouselData: homeCarouselProps;
  trustedVendorsData: homeTrustedVendorsProps;
  machineAnalysisData: homeMachineDataProps;
};

const HomeComponent = (props: HomeComponentProps) => {
  const { homeCarouselData, trustedVendorsData, machineAnalysisData } = props;
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
      <MachineAnalytics
        data={machineAnalysisData.data as ImachineDataAnalysis[]}
        resOk={machineAnalysisData.resOk as boolean}
        status={machineAnalysisData.status as number}
        url={machineAnalysisData.url as string}
      />
    </div>
  );
};

export default HomeComponent;
