import React, { Fragment } from 'react';
import HomeComponent from '@/components/home/HomeComponent';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import { fetchHomeCarouselUrl } from '@/utils/apiConfig';
import { fetchHomeTrustedVendors } from '@/utils/apiConfig';
import homeTrustedVendorsProps from '@/interfaces/types/homeTrustedVendorsProps';
import itrustedVendors from '@/interfaces/ItrustedVendors';

const fetchHomeCarousel: () => Promise<homeCarouselProps> = async () => {
  const res: Response = await fetch(fetchHomeCarouselUrl as string, { next: { revalidate: 10 as number } });
  if (!res.ok as boolean) {
    const response: homeCarouselProps = { status: res.status, data: [], url: res.url, resOk: res.ok };
    return response as homeCarouselProps;
  }
  const data: Array<IhomeCarouselData> = (await res.json()) as Array<IhomeCarouselData>;
  const response: homeCarouselProps = { status: res.status, data: data, url: res.url, resOk: res.ok };
  return response as homeCarouselProps;
};
const fetchTrustedVendors: () => Promise<homeTrustedVendorsProps> = async () => {
  const res: Response = await fetch(fetchHomeTrustedVendors as string, { next: { revalidate: 600 as number } });
  if (!res.ok as boolean) {
    const response: homeTrustedVendorsProps = { status: res.status, data: [], url: res.url, resOk: res.ok };
    return response as homeTrustedVendorsProps;
  }
  const data: itrustedVendors[] = (await res.json()) as itrustedVendors[];
  const response = { status: res.status, data: data, url: res.url, resOk: res.ok };
  return response as homeTrustedVendorsProps;
};

const Home = async () => {
  const homeCarouselData = await fetchHomeCarousel();
  const trustedVendorsData = await fetchTrustedVendors();

  return (
    <Fragment>
      <HomeComponent homeCarouselData={homeCarouselData} trustedVendorsData={trustedVendorsData} />
    </Fragment>
  );
};

export default Home;
