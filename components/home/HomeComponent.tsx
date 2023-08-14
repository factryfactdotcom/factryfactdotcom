import React from 'react';
import CarouselComponent from './carousel/CarouselComponent';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';

type HomeComponentProps = {
  homeCarouselData: homeCarouselProps;
};

const HomeComponent = (props: HomeComponentProps) => {
  const { homeCarouselData } = props;
  return (
    <div>
      <CarouselComponent
        data={homeCarouselData.data as IhomeCarouselData[]}
        resOk={homeCarouselData.resOk as boolean}
        status={homeCarouselData.status as number}
        url={homeCarouselData.url as string}
      />
    </div>
  );
};

export default HomeComponent;
