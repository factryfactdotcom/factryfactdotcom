import React, { Fragment } from 'react';
import HomeComponent from '@/components/home/HomeComponent';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import homeCarouselProps from '@/interfaces/types/homeCarouselProps';
import { fetchHomeCarouselUrl, fetchHomeMachinedataanalysis } from '@/utils/apiConfig';
import { fetchHomeTrustedVendors } from '@/utils/apiConfig';
import homeTrustedVendorsProps from '@/interfaces/types/homeTrustedVendorsProps';
import itrustedVendors from '@/interfaces/ItrustedVendors';
import homeMachineDataProps from '@/interfaces/types/homeMachineDataProps';
import ImachineDataAnalysis from '@/interfaces/ImachineDataAnalysis';

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
  const response: homeTrustedVendorsProps = { status: res.status, data: data, url: res.url, resOk: res.ok };
  return response as homeTrustedVendorsProps;
};
const fetchMachineAnalysis: () => Promise<homeMachineDataProps> = async () => {
  const res: Response = await fetch(fetchHomeMachinedataanalysis as string, { next: { revalidate: 3600 as number } });
  if (!res.ok as boolean) {
    const response: homeMachineDataProps = { status: res.status, data: [], url: res.url, resOk: res.ok };
    return response as homeMachineDataProps;
  }
  const data: ImachineDataAnalysis[] = (await res.json()) as ImachineDataAnalysis[];
  const response: homeMachineDataProps = { status: res.status, data: data, url: res.url, resOk: res.ok };
  return response as homeMachineDataProps;
};

const Home = async () => {
  const homeCarouselData = await fetchHomeCarousel();
  const trustedVendorsData = await fetchTrustedVendors();
  const machineAnalysisData = await fetchMachineAnalysis();

  return (
    <Fragment>
      <HomeComponent
        homeCarouselData={homeCarouselData}
        trustedVendorsData={trustedVendorsData}
        machineAnalysisData={machineAnalysisData}
      />
    </Fragment>
  );
};

export default Home;
