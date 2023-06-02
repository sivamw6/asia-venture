import { Carousel } from 'react-bootstrap';
import styles from './CustomCarousel.module.scss';

import Image from 'next/image';

const CustomCarousel = ({ images }) => {
  return (
    <div className={styles.carousel}>
      <Carousel autoPlay>
        {images && images.map((image) => (
          <Carousel.Item key={image.id}>
            <div className={styles.imgBox}>
              <Image
                className={styles.nextImg}
                src={image.urls.small}
                alt={image.alt_description}
                fill={true}
                quality={100}
                loading='eager'
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;