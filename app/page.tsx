import React, { Fragment } from 'react';
import HomeComponent from '@/components/home/HomeComponent';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import { fetchHomeCarouselUrl } from '@/utils/apiConfig';
import { fetchHomeTrustedCompanies } from '@/utils/apiConfig';
import homeTrustedCompaniesProps from '@/interfaces/types/homeTrustedCompaniesProps';
import itrustedCompanies from '@/interfaces/ItrustedCompanies';

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
const fetchTrustedCOmapnies: () => Promise<homeTrustedCompaniesProps> = async () => {
  const res: Response = await fetch(fetchHomeTrustedCompanies as string, { next: { revalidate: 600 as number } });
  if (!res.ok as boolean) {
    const response: homeTrustedCompaniesProps = { status: res.status, data: [], url: res.url, resOk: res.ok };
    return response as homeTrustedCompaniesProps;
  }
  const data: itrustedCompanies[] = (await res.json()) as itrustedCompanies[];
  const response = { status: res.status, data: data, url: res.url, resOk: res.ok };
  return response as homeTrustedCompaniesProps;
};

const Home = async () => {
  const homeCarouselData = await fetchHomeCarousel();
  const trustedCompaniesData = await fetchTrustedCOmapnies();

  return (
    <Fragment>
      <HomeComponent homeCarouselData={homeCarouselData} trustedCompaniesData={trustedCompaniesData} />
    </Fragment>
  );
};

export default Home;
