'use client';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import React from 'react';
import CarouselBody from './CarouselBody';
import Slider from 'react-slick';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <ArrowRightCircleIcon
      className={`${className}`}
      style={{ display: 'block', color: 'rgb(13, 148, 136)', right: 20, zIndex: 10, width: '30px', height: '30px' }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <ArrowLeftCircleIcon
      className={`${className}`}
      style={{ display: 'block', color: 'rgb(13, 148, 136)', left: 20, zIndex: 10, width: '30px', height: '30px' }}
      onClick={onClick}
    />
  );
}

type Props = homeCarouselProps;

const CarouselComponent = (props: Props) => {
  const { data, resOk } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      {(data as IhomeCarouselData[]) && (resOk as boolean) && (
        <div className="">
          <Slider {...settings}>
            {data.map((item) => (
              <CarouselBody key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      )}

      {(!resOk as boolean) && <div>Loading</div>}
    </div>
  );
};

export default CarouselComponent;
