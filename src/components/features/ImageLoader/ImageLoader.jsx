import styles from './ImageLoader.module.scss';
import Image from 'next/image';

const ImageLoader = ({ image }) => {
  return (
    <div>
      {image && (
        <div className={styles.imgBox}>
          <Image
            className={styles.nextImg}
            src={image.urls.small}
            alt={image.alt_description}
            fill={true}
            loading='eager'
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
