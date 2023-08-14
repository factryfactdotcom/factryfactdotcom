import itrustedCompanies from '@/interfaces/ItrustedCompanies';
import homeTrustedCompaniesProps from '@/interfaces/types/homeTrustedCompaniesProps';
import { baseImageUrl } from '@/utils/apiConfig';
import React from 'react';
import Slider from 'react-slick';

type Props = homeTrustedCompaniesProps;
const TrustedCompaniesSlider = (props: Props) => {
  const { data, resOk } = props;
  return (
    <div>
      {(data as itrustedCompanies[]) && (resOk as boolean) && (
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item: itrustedCompanies) => (
              <li key={item.id} className="w-32 my-auto">
                <img className="w-full" src={baseImageUrl + item.img} alt={item.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrustedCompaniesSlider;
