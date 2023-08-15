'use client';
import IheaderNavigation from '@/interfaces/IheaderNavigation';
import { factryFactIcon, factryFactLogo } from '@/utils/apiConfig';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const navigation: Array<IheaderNavigation> = [
  { title: 'How it works?', path: '/#testing1' },
  { title: 'Features', path: '/' },
  { title: 'Free Demo', path: '/' },
  { title: 'About Us', path: '/aboutus' },
  { title: 'Our Team', path: '/team' },
];

const HeaderComponent = () => {
  const [state, setState] = useState<boolean>(false);
  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <div className="sticky top-0 z-20">
      <nav className={`bg-white w-full top-0 ${!top ? 'shadow-md' : ''}`}>
        <div className="items-center px-4 max-w-screen-xl py-3 mx-auto md:px-2 lg:flex">
          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <a href="/" className="flex">
              <img src={factryFactIcon} width={30} height={40} alt="Float UI logo" className="mr-3" />
              <img src={factryFactLogo} width={150} height={80} alt="Float UI logo" />
            </a>
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'
            }`}
          >
            <div>
              <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                <li className="mt-8 mb-8 lg:mt-0 text-lg lg:mb-0">
                  <Link href="/contact" className="text-gray-600 px-2 hover:text-teal-600">
                    Contact Us
                  </Link>
                </li>
                <li className="mt-8 text-lg lg:mt-0">
                  <a
                    href="/"
                    className="py-3 px-4 text-center text-white bg-teal-500 hover:bg-teal-700 rounded-md shadow block lg:inline"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-600 text-lg hover:text-teal-600 lg:hover:border-b-2 lg:hover:border-teal-600"
                    >
                      <Link className="" href={item.path}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
