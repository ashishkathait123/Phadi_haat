import React from 'react';
import styles from './ProductMain.module.css';

const ProductMain = () => {
  return (
    <div className={styles.productMain}>
      <h1>Haldirams Namkeen - Aloo Bhujia (Dal), 200 g Pouch</h1>
      <div className={styles.productRating}>
        <span className={styles.stars}>★★★★☆</span>
        <span className={styles.ratingCount}>4.2</span>
        <a href="#">7445 Ratings & 64 Reviews</a>
      </div>
      <div className={styles.productPrice}>
        Price: ₹52 (₹26.0 / g)
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.addToCart}>Add to cart</button>
        <button className={styles.saveForLater}>Save for later</button>
      </div>
      <div className={styles.packSizes}>
        <h3>Pack sizes</h3>
        <div className={styles.packSizeOption}>
          <input type="radio" id="pack1" name="pack-size" checked />
          <label htmlFor="pack1">200 g - ₹52 (₹26.0 / g)</label>
        </div>
        <div className={styles.packSizeOption}>
          <input type="radio" id="pack2" name="pack-size" />
          <label htmlFor="pack2">3X42 g - ₹30 (₹23.8 / g)</label>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
