import ItrustedVendors from '@/interfaces/ItrustedVendors';
import homeTrustedVendorsProps from '@/interfaces/types/homeTrustedVendorsProps';
import { baseImageUrl } from '@/utils/apiConfig';
import React from 'react';
import Slider from 'react-slick';

type Props = homeTrustedVendorsProps;

const TrustedVendorsSlider = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data, resOk } = props;
  return (
    <div>
      {(data as ItrustedVendors[]) && (resOk as boolean) && (
        <Slider {...settings}>
          {data.map((item: ItrustedVendors) => (
            <div
              key={item.id}
              className="m-auto"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                style={{ width: '60%', height: '50px' }}
                className="text-center mx-auto"
                src={baseImageUrl + item.img}
                alt={item.name}
              />
              <label className="sr-only">{item.name}</label>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default TrustedVendorsSlider;
