import React from 'react';
import CarouselComponent from './carousel/CarouselComponent';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import MachinesWeConnect from './machinesWeConnect/MachinesWeConnect';
import itrustedCompanies from '@/interfaces/ItrustedCompanies';

type HomeComponentProps = {
  homeCarouselData: homeCarouselProps;
  trustedCompaniesData: any;
};

const HomeComponent = (props: HomeComponentProps) => {
  const { homeCarouselData, trustedCompaniesData } = props;
  return (
    <div>
      <CarouselComponent
        data={homeCarouselData.data as IhomeCarouselData[]}
        resOk={homeCarouselData.resOk as boolean}
        status={homeCarouselData.status as number}
        url={homeCarouselData.url as string}
      />
      <MachinesWeConnect
        data={trustedCompaniesData.data as itrustedCompanies[]}
        resOk={trustedCompaniesData.resOk as boolean}
        status={trustedCompaniesData.status as number}
        url={trustedCompaniesData.url as string}
      />
    </div>
  );
};

export default HomeComponent;
