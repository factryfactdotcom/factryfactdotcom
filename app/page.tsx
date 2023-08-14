import React, { Fragment } from 'react';
import HomeComponent from '@/components/home/HomeComponent';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import { fetchHomeCarouselUrl } from '@/utils/apiConfig';

const fetchHomeCarousel: () => Promise<homeCarouselProps> = async () => {
  const res: Response = await fetch(fetchHomeCarouselUrl, { next: { revalidate: 10 } });
  if (!res.ok as boolean) {
    const response: homeCarouselProps = { status: res.status, data: [], url: res.url, resOk: res.ok };
    return response as homeCarouselProps;
  }
  const data: Array<IhomeCarouselData> = (await res.json()) as Array<IhomeCarouselData>;
  const response: homeCarouselProps = { status: res.status, data: data, url: res.url, resOk: res.ok };
  return response as homeCarouselProps;
};

const Home = async () => {
  const homeCarouselData = await fetchHomeCarousel();

  return (
    <Fragment>
      <HomeComponent homeCarouselData={homeCarouselData} />
    </Fragment>
  );
};

export default Home;
