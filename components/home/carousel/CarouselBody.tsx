import styles from './Carousel.module.scss';
import React from 'react';
import IhomeCarouselData from '@/interfaces/IhomeCarouselData';
import { baseImageUrl, factryFactIconLogo } from '@/utils/apiConfig';

type Props = {
  item: IhomeCarouselData;
};

const CarouselBody = (props: Props) => {
  const { item } = props;
  return (
    <div id="main-hero" className={styles['hero-body']}>
      <div className={`${styles['container']} ${styles['has-text-centered']}`}>
        <div className={`${styles['columns']} ${styles['is-vcentered']}`}>
          <div
            className={`${styles['column']} ${styles['is-5']} ${styles['signup-column']} ${styles['has-text-left']}`}
          >
            <div className={`${styles['navbar-item']} ${styles['p-1']}`}>
              <img
                className={`${styles['ff-switcher-text']} ${styles['img']}`}
                src={factryFactIconLogo as string}
                alt={'factryfact logo' as string}
              />
            </div>
            <h1
              className={`${styles['title']} ${styles['main-title']} ${styles['dark-text']} ${styles['text-bold']} ${styles['is-2']}`}
            >
              {item.title as string}
            </h1>
            <h2
              className={`${styles['subtitle']} ${styles['is-5']} ${styles['no-margin-bottom']} ${styles['body-color']}`}
            >
              {item.desc as string}
            </h2>
            <br />
          </div>
          <div className={`${styles['column']} ${styles['is-7']}`}>
            <figure className={styles['image']}>
              <img className={styles['img']} src={(baseImageUrl + item.img) as string} alt={item.title as string} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBody;
