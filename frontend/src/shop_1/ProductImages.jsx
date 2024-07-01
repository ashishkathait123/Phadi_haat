import React, { useState } from 'react';
import styles from './ProductImages.module.css';
import image1 from 'path/to/image1.jpg';
import image2 from 'path/to/image2.jpg';
import image3 from 'path/to/image3.jpg';
import image4 from 'path/to/image4.jpg';

const ProductImages = () => {
  const [mainImage, setMainImage] = useState(image1);

  const changeImage = (src) => {
    setMainImage(src);
  };

  return (
    <div className={styles.productImages}>
      <div className={styles.thumbnails}>
        <img src={image1} alt="Product Image 1" onClick={() => changeImage(image1)} />
        <img src={image2} alt="Product Image 2" onClick={() => changeImage(image2)} />
        <img src={image3} alt="Product Image 3" onClick={() => changeImage(image3)} />
        <img src={image4} alt="Product Image 4" onClick={() => changeImage(image4)} />
      </div>
      <div className={styles.mainImage}>
        <img id="mainImage" src={mainImage} alt="Main Product Image" />
      </div>
    </div>
  );
};

export default ProductImages;
