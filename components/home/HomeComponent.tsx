import React from 'react';

import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import ItrustedVendors from '@/interfaces/ItrustedVendors';
import homeTrustedVendorsProps from '@/interfaces/types/homeTrustedVendorsProps';
import homeMachineDataProps from '@/interfaces/types/homeMachineDataProps';
import ImachineDataAnalysis from '@/interfaces/ImachineDataAnalysis';
import homeSomeQuickFactsProps from '@/interfaces/types/homeSomeQuickFactsProps';

import CarouselComponent from './carousel/CarouselComponent';
import MachinesWeConnect from './machinesWeConnect/MachinesWeConnect';
import MachineAnalytics from './machineDataAnalytics/MachineAnalytics';
import HowItWorks from './howItWorks/HowItWorks';
import SomeQuickFacts from './someQuickFacts/SomeQuickFacts';
import IsomeQuickFacts from '@/interfaces/IsomeQuickFacts';

type HomeComponentProps = {
  homeCarouselData: homeCarouselProps;
  trustedVendorsData: homeTrustedVendorsProps;
  machineAnalysisData: homeMachineDataProps;
  someQuickFactsData: homeSomeQuickFactsProps;
};

const HomeComponent = (props: HomeComponentProps) => {
  const { homeCarouselData, trustedVendorsData, machineAnalysisData, someQuickFactsData } = props;
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
      <HowItWorks />
      <SomeQuickFacts
        data={someQuickFactsData.data as IsomeQuickFacts[]}
        resOk={someQuickFactsData.resOk as boolean}
        status={someQuickFactsData.status as number}
        url={someQuickFactsData.url as string}
      />
    </div>
  );
};

export default HomeComponent;
